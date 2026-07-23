import { create } from 'zustand';
import { useDesignerStore } from './useDesignerStore';
import {
  apiCreateDesign, apiListDesigns, apiDeleteDesign,
  apiCreateVersion, apiListVersions, apiGetVersion, apiUpdateVersion,
  DesignSummary, VersionSummary,
} from '../utils/designsClient';
import { DesignElement } from '../types';

interface DesignsStore {
  designs: DesignSummary[];
  activeDesignId: number | null;
  activeDesignName: string;
  activeVersionNumber: number | null;
  versions: VersionSummary[];
  showSaveModal: boolean;
  error: string;

  fetchDesigns(): Promise<void>;
  saveNewDesign(name: string): Promise<void>;
  saveVersion(): Promise<void>;
  overwriteVersion(): Promise<void>;
  loadVersion(designId: number, versionNumber: number): Promise<void>;
  deleteDesign(id: number): Promise<void>;
  fetchVersions(designId: number): Promise<void>;

  openSaveModal(): void;
  closeSaveModal(): void;
  setError(msg: string): void;
}

export const useDesignsStore = create<DesignsStore>((set, get) => ({
  designs: [],
  activeDesignId: null,
  activeDesignName: '',
  activeVersionNumber: null,
  versions: [],
  showSaveModal: false,
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
    set({ activeDesignId: result.designId, activeDesignName: name, activeVersionNumber: 1, showSaveModal: false });
    await get().fetchDesigns();
  },

  async saveVersion() {
    const { activeDesignId } = get();
    if (!activeDesignId) return;
    const { elements, zplCode: zpl, labelWidth, labelHeight } = useDesignerStore.getState();
    const version = await apiCreateVersion(activeDesignId, { zpl, elements: elements as object[], labelWidth, labelHeight });
    set({ activeVersionNumber: version.versionNumber });
    await get().fetchDesigns();
    await get().fetchVersions(activeDesignId);
  },

  async overwriteVersion() {
    const { activeDesignId, activeVersionNumber } = get();
    if (!activeDesignId || activeVersionNumber === null) return;
    const { elements, zplCode: zpl, labelWidth, labelHeight } = useDesignerStore.getState();
    await apiUpdateVersion(activeDesignId, activeVersionNumber, {
      zpl, elements: elements as object[], labelWidth, labelHeight,
    });
    await get().fetchDesigns();
    set({ showSaveModal: false });
  },

  async loadVersion(designId: number, versionNumber: number) {
    const version = await apiGetVersion(designId, versionNumber);
    useDesignerStore.setState({
      elements: version.elements as DesignElement[],
      zplCode: version.zpl,
      labelWidth: version.labelWidth,
      labelHeight: version.labelHeight,
      selectedId: null,
    });
    const designName = get().designs.find(d => d.id === designId)?.name ?? '';
    set({ activeDesignId: designId, activeDesignName: designName, activeVersionNumber: versionNumber });
  },

  async deleteDesign(id: number) {
    await apiDeleteDesign(id);
    if (get().activeDesignId === id) set({ activeDesignId: null, activeDesignName: '', activeVersionNumber: null, versions: [] });
    await get().fetchDesigns();
  },

  async fetchVersions(designId: number) {
    const versions = await apiListVersions(designId);
    set({ versions });
  },

  openSaveModal() { set({ showSaveModal: true, error: '' }); },
  closeSaveModal() { set({ showSaveModal: false, error: '' }); },
  setError(msg: string) { set({ error: msg }); },
}));
