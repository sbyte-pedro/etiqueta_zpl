import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';
import { useAuthStore } from '../store/useAuthStore';
import { useDesignsStore } from '../store/useDesignsStore';

const MM_TO_DOTS = (mm: number) => Math.round(mm * 8.03);
const DOTS_TO_MM = (dots: number) => Math.round(dots / 8.03);

interface Props {
  onNavigateToMyDesigns: () => void;
}

export function Toolbar({ onNavigateToMyDesigns }: Props) {
  const { labelWidth, labelHeight, setLabelSize, fetchPreview, previewLoading } = useDesignerStore();
  const { logout } = useAuthStore();
  const { openSaveModal, activeDesignName } = useDesignsStore();

  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-4">
      <span className="text-sm font-semibold text-gray-700">Zebra Label Designer</span>
      {activeDesignName && (
        <span className="text-xs text-gray-400 truncate max-w-[160px]" title={activeDesignName}>
          — {activeDesignName}
        </span>
      )}
      <div className="flex-1" />
      <label className="text-xs text-gray-500">Width (mm)</label>
      <input
        type="number"
        className="w-20 border border-gray-200 rounded px-2 py-1 text-sm"
        value={DOTS_TO_MM(labelWidth)}
        min={10}
        max={500}
        onChange={e => setLabelSize(MM_TO_DOTS(Number(e.target.value)), labelHeight)}
      />
      <label className="text-xs text-gray-500">Height (mm)</label>
      <input
        type="number"
        className="w-20 border border-gray-200 rounded px-2 py-1 text-sm"
        value={DOTS_TO_MM(labelHeight)}
        min={10}
        max={1000}
        onChange={e => setLabelSize(labelWidth, MM_TO_DOTS(Number(e.target.value)))}
      />
      <div className="flex gap-1 ml-2">
        <button
          onClick={openSaveModal}
          className="text-xs px-3 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          title="Save design"
        >
          Save
        </button>
        <button
          onClick={() => fetchPreview()}
          disabled={previewLoading}
          className="text-xs px-3 py-1 rounded border border-blue-300 text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-50"
          title="Render label preview via Labelary"
        >
          {previewLoading ? 'Loading…' : 'Preview'}
        </button>
        <button
          onClick={onNavigateToMyDesigns}
          className="text-xs px-3 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          title="Browse all my designs"
        >
          My Designs
        </button>
      </div>
      <button
        onClick={logout}
        className="ml-1 text-xs px-3 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
      >
        Logout
      </button>
    </div>
  );
}
