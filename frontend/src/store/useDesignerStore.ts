import { create } from 'zustand';
import { DesignElement, ElementType } from '../types';
import { generateZpl, parseZpl, previewZpl } from '../utils/zplClient';

let idCounter = 0;
const nextId = () => `el-${Date.now()}-${++idCounter}`;

const DEFAULT_SIZES: Record<ElementType, { width: number; height: number }> = {
  text: { width: 200, height: 40 },
  barcode128: { width: 300, height: 100 },
  qrcode: { width: 100, height: 100 },
  rect: { width: 200, height: 100 },
  line: { width: 200, height: 8 },
  comment: { width: 0, height: 0 },
};

const DEFAULT_VALUES: Partial<Record<ElementType, Partial<DesignElement>>> = {
  text: { value: 'New Text', fontSize: 34, fontName: '0' },
  barcode128: { value: '123456789' },
  qrcode: { value: 'https://example.com' },
};

interface DesignerStore {
  labelWidth: number;
  labelHeight: number;
  elements: DesignElement[];
  selectedId: string | null;
  selectedIds: string[];
  activeTab: 'design' | 'code';
  zplCode: string;
  zplError: string;       // non-empty = parse error to show in editor
  previewUrl: string | null;
  previewLoading: boolean;
  previewError: string;
  zoom: number;
  setLabelSize(width: number, height: number): void;
  addElement(type: ElementType, x?: number, y?: number): void;
  updateElement(id: string, patch: Partial<DesignElement>): void;
  deleteElement(id: string): void;
  clearAll(): void;
  selectElement(id: string | null): void;
  toggleSelectElement(id: string): void;
  clearSelection(): void;
  alignElements(alignment: 'left' | 'center-h' | 'right' | 'top' | 'center-v' | 'bottom'): void;
  setActiveTab(tab: 'design' | 'code'): void;
  setZoom(zoom: number): void;
  onCodeChange(code: string): void;
  syncToCode(): Promise<void>;
  setPreviewUrl(url: string | null): void;
  fetchPreview(): Promise<void>;
  closePreview(): void;
}

let syncTimeout: ReturnType<typeof setTimeout> | null = null;
let parseTimeout: ReturnType<typeof setTimeout> | null = null;

// Tracks the last ZPL that was generated FROM the canvas.
// When the editor fires onChange with this exact value we skip parsing
// (the canvas already produced it — no need to re-parse).
let lastCanvasZpl = '';

export const useDesignerStore = create<DesignerStore>((set, get) => ({
  labelWidth: 800,
  labelHeight: 1200,
  elements: [],
  selectedId: null,
  selectedIds: [],
  activeTab: 'design',
  zplCode: '^XA\n^PW800\n^LL1200\n^XZ',
  zplError: '',
  previewUrl: null,
  previewLoading: false,
  previewError: '',
  zoom: 2,

  setLabelSize(width, height) {
    set({ labelWidth: width, labelHeight: height });
    get().syncToCode();
  },

  addElement(type, x = 50, y = 50) {
    const el: DesignElement = {
      id: nextId(),
      type,
      x,
      y,
      ...DEFAULT_SIZES[type],
      ...DEFAULT_VALUES[type],
    };
    set(s => ({ elements: [...s.elements, el], selectedId: el.id }));
    get().syncToCode();
  },

  updateElement(id, patch) {
    set(s => ({ elements: s.elements.map(e => e.id === id ? { ...e, ...patch } : e) }));
    if (syncTimeout) clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => get().syncToCode(), 200);
  },

  deleteElement(id) {
    set(s => ({
      elements: s.elements.filter(e => e.id !== id),
      selectedId: s.selectedId === id ? null : s.selectedId,
      selectedIds: s.selectedIds.filter(sid => sid !== id),
    }));
    get().syncToCode();
  },

  clearAll() {
    set({ elements: [], selectedId: null, selectedIds: [] });
    get().syncToCode();
  },

  selectElement(id) {
    set({ selectedId: id, selectedIds: id ? [id] : [] });
  },

  toggleSelectElement(id) {
    set(s => {
      const already = s.selectedIds.includes(id);
      const selectedIds = already
        ? s.selectedIds.filter(sid => sid !== id)
        : [...s.selectedIds, id];
      const selectedId = already
        ? (selectedIds.length > 0 ? selectedIds[selectedIds.length - 1] : null)
        : id;
      return { selectedIds, selectedId };
    });
  },

  clearSelection() {
    set({ selectedId: null, selectedIds: [] });
  },

  alignElements(alignment) {
    const { elements, selectedIds } = get();
    const selected = elements.filter(e => selectedIds.includes(e.id));
    if (selected.length < 2) return;

    const minX = Math.min(...selected.map(e => e.x));
    const maxX = Math.max(...selected.map(e => e.x + e.width));
    const minY = Math.min(...selected.map(e => e.y));
    const maxY = Math.max(...selected.map(e => e.y + e.height));
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    const patches = new Map<string, Partial<DesignElement>>(
      selected.map(el => {
        switch (alignment) {
          case 'left':     return [el.id, { x: minX }];
          case 'center-h': return [el.id, { x: Math.round(centerX - el.width / 2) }];
          case 'right':    return [el.id, { x: maxX - el.width }];
          case 'top':      return [el.id, { y: minY }];
          case 'center-v': return [el.id, { y: Math.round(centerY - el.height / 2) }];
          case 'bottom':   return [el.id, { y: maxY - el.height }];
          default:         return [el.id, {}];
        }
      })
    );

    set(s => ({ elements: s.elements.map(e => patches.has(e.id) ? { ...e, ...patches.get(e.id)! } : e) }));
    if (syncTimeout) clearTimeout(syncTimeout);
    get().syncToCode();
  },

  setActiveTab(tab) {
    set({ activeTab: tab });
  },

  setZoom(zoom) {
    set({ zoom: Math.min(6, Math.max(0.5, zoom)) });
  },

  onCodeChange(code: string) {
    set({ zplCode: code });

    // If this exact string was just generated by the canvas, skip re-parsing
    if (code === lastCanvasZpl) return;

    if (parseTimeout) clearTimeout(parseTimeout);
    parseTimeout = setTimeout(async () => {
      try {
        const result = await parseZpl(code);
        // Only update canvas if the parsed result has something meaningful
        if (result.labelWidth > 0 || result.labelHeight > 0 || result.elements.length > 0) {
          lastCanvasZpl = code; // prevent the upcoming syncToCode from re-triggering a parse
          set({
            elements: result.elements,
            labelWidth: result.labelWidth || get().labelWidth,
            labelHeight: result.labelHeight || get().labelHeight,
            selectedId: null,
            selectedIds: [],
            zplError: '',
          });
        } else {
          set({ zplError: '' });
        }
      } catch (e) {
        set({ zplError: e instanceof Error ? e.message : 'Invalid ZPL' });
      }
    }, 600);
  },

  async syncToCode() {
    const { labelWidth, labelHeight, elements } = get();
    try {
      const zpl = await generateZpl({ labelWidth, labelHeight, elements });
      lastCanvasZpl = zpl;
      set({ zplCode: zpl, zplError: '' });
    } catch (e) {
      console.error('ZPL sync failed', e);
    }
  },

  setPreviewUrl(url) {
    set({ previewUrl: url });
  },

  async fetchPreview() {
    const { zplCode, labelWidth, labelHeight, previewUrl } = get();
    set({ previewLoading: true, previewError: '' });
    try {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      const url = await previewZpl(zplCode, labelWidth, labelHeight);
      set({ previewUrl: url, previewLoading: false });
    } catch (e) {
      set({
        previewLoading: false,
        previewError: e instanceof Error ? e.message : 'Preview failed',
      });
    }
  },

  closePreview() {
    const { previewUrl } = get();
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    set({ previewUrl: null, previewError: '' });
  },
}));
