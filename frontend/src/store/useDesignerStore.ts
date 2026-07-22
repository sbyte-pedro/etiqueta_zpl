import { create } from 'zustand';
import { DesignElement, ElementType } from '../types';
import { generateZpl, parseZpl } from '../utils/zplClient';

let idCounter = 0;
const nextId = () => `el-${Date.now()}-${++idCounter}`;

const DEFAULT_SIZES: Record<ElementType, { width: number; height: number }> = {
  text: { width: 200, height: 40 },
  barcode128: { width: 300, height: 100 },
  qrcode: { width: 100, height: 100 },
  rect: { width: 200, height: 100 },
  line: { width: 200, height: 8 },
  'image-placeholder': { width: 150, height: 150 },
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
  activeTab: 'design' | 'code';
  zplCode: string;
  previewUrl: string | null;
  setLabelSize(width: number, height: number): void;
  addElement(type: ElementType, x?: number, y?: number): void;
  updateElement(id: string, patch: Partial<DesignElement>): void;
  deleteElement(id: string): void;
  selectElement(id: string | null): void;
  setActiveTab(tab: 'design' | 'code'): void;
  setZplCode(code: string): void;
  syncToCode(): Promise<void>;
  applyCodeToDesign(): Promise<void>;
  setPreviewUrl(url: string | null): void;
}

let syncTimeout: ReturnType<typeof setTimeout> | null = null;

export const useDesignerStore = create<DesignerStore>((set, get) => ({
  labelWidth: 800,
  labelHeight: 1200,
  elements: [],
  selectedId: null,
  activeTab: 'design',
  zplCode: '^XA\n^PW800\n^LL1200\n^XZ',
  previewUrl: null,

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
    }));
    get().syncToCode();
  },

  selectElement(id) {
    set({ selectedId: id });
  },

  setActiveTab(tab) {
    set({ activeTab: tab });
  },

  setZplCode(code) {
    set({ zplCode: code });
  },

  async syncToCode() {
    const { labelWidth, labelHeight, elements } = get();
    try {
      const zpl = await generateZpl({ labelWidth, labelHeight, elements });
      set({ zplCode: zpl });
    } catch (e) {
      console.error('ZPL sync failed', e);
    }
  },

  async applyCodeToDesign() {
    const { zplCode } = get();
    try {
      const result = await parseZpl(zplCode);
      set({
        elements: result.elements,
        labelWidth: result.labelWidth || get().labelWidth,
        labelHeight: result.labelHeight || get().labelHeight,
        activeTab: 'design',
        selectedId: null,
      });
    } catch (e) {
      console.error('Parse ZPL failed', e);
    }
  },

  setPreviewUrl(url) {
    set({ previewUrl: url });
  },
}));
