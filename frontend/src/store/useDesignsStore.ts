import { create } from 'zustand';
import { useDesignerStore } from './useDesignerStore';
import {
  apiCreateDesign, apiListDesigns, apiDeleteDesign,
  apiCreateVersion, apiListVersions, apiGetVersion,
  DesignSummary, VersionSummary,
} from '../utils/designsClient';
import { DesignElement } from '../types';

interface DesignsStore {
  designs: DesignSummary[];
  activeDesignId: number | null;
  activeDesignName: string;
  versions: VersionSummary[];
  showSaveModal: boolean;
  showLoadModal: boolean;
  error: string;

  fetchDesigns(): Promise<void>;
  saveNewDesign(name: string): Promise<void>;
  saveVersion(): Promise<void>;
  loadVersion(designId: number, versionNumber: number): Promise<void>;
  deleteDesign(id: number): Promise<void>;
  fetchVersions(designId: number): Promise<void>;

  openSaveModal(): void;
  closeSaveModal(): void;
  openLoadModal(): void;
  closeLoadModal(): void;
  setError(msg: string): void;
}

export const useDesignsStore = create<DesignsStore>((set, get) => ({
  designs: [],
  activeDesignId: null,
  activeDesignName: '',
  versions: [],
  showSaveModal: false,
  showLoadModal: false,
  error: '',

  async fetchDesigns() {
    try {
      const designs = await apiListDesigns();
      set({ designs });
    } catch (e) {
      set({ error: e instanceof Error ? e.message : 'Failed to load designs' });
    }
  },

  async saveNewDesign(name: string) {
    const { elements, zplCode: zpl, labelWidth, labelHeight } = useDesignerStore.getState();
    const result = await apiCreateDesign(name, { zpl, elements: elements as object[], labelWidth, labelHeight });
    set({ activeDesignId: result.designId, activeDesignName: name, showSaveModal: false });
    await get().fetchDesigns();
  },

  async saveVersion() {
    const { activeDesignId } = get();
    if (!activeDesignId) return;
    const { elements, zplCode: zpl, labelWidth, labelHeight } = useDesignerStore.getState();
    await apiCreateVersion(activeDesignId, { zpl, elements: elements as object[], labelWidth, labelHeight });
    await get().fetchDesigns();
    await get().fetchVersions(activeDesignId);
  },

  async loadVersion(designId: number, versionNumber: number) {
    const version = await apiGetVersion(designId, versionNumber);
    const designerStore = useDesignerStore.getState();
    designerStore.setLabelSize(version.labelWidth, version.labelHeight);
    // Replace elements directly
    const store = useDesignerStore.getState() as { elements: DesignElement[] } & typeof designerStore;
    // Use internal setter via direct zustand access
    useDesignerStore.setState({
      elements: version.elements as DesignElement[],
      zplCode: version.zpl,
      labelWidth: version.labelWidth,
      labelHeight: version.labelHeight,
      selectedId: null,
    });
    const designName = get().designs.find(d => d.id === designId)?.name ?? '';
    set({ activeDesignId: designId, activeDesignName: designName, showLoadModal: false });
  },

  async deleteDesign(id: number) {
    await apiDeleteDesign(id);
    if (get().activeDesignId === id) set({ activeDesignId: null, activeDesignName: '', versions: [] });
    await get().fetchDesigns();
  },

  async fetchVersions(designId: number) {
    const versions = await apiListVersions(designId);
    set({ versions });
  },

  openSaveModal() { set({ showSaveModal: true, error: '' }); },
  closeSaveModal() { set({ showSaveModal: false, error: '' }); },
  openLoadModal() {
    set({ showLoadModal: true, error: '' });
    get().fetchDesigns();
  },
  closeLoadModal() { set({ showLoadModal: false, versions: [] }); },
  setError(msg: string) { set({ error: msg }); },
}));
