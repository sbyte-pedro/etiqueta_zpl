import React, { useState } from 'react';
import { useDesignerStore } from '../store/useDesignerStore';
import { useAuthStore } from '../store/useAuthStore';
import { useDesignsStore } from '../store/useDesignsStore';
import { ExportModal } from './ExportModal';
import { SampleValuesModal } from './SampleValuesModal';
import { extractVariables, substituteVariables } from '../utils/variables';

const MM_TO_DOTS = (mm: number) => Math.round(mm * 8.03);
const DOTS_TO_MM = (dots: number) => Math.round(dots / 8.03);

interface Props {
  onNavigateToMyDesigns: () => void;
}

export function Toolbar({ onNavigateToMyDesigns }: Props) {
  const { labelWidth, labelHeight, setLabelSize, fetchPreview, previewLoading, selectedIds, alignElements, zplCode } = useDesignerStore();
  const { logout } = useAuthStore();
  const { openSaveModal, activeDesignName } = useDesignsStore();
  const [showExport, setShowExport] = useState(false);
  const [exportZplOverride, setExportZplOverride] = useState<string | undefined>(undefined);
  const [samplesFor, setSamplesFor] = useState<null | 'preview' | 'export'>(null);

  const handlePreview = () => {
    if (extractVariables(zplCode).length > 0) {
      setSamplesFor('preview');
    } else {
      fetchPreview();
    }
  };

  const handleExport = () => {
    if (extractVariables(zplCode).length > 0) {
      setSamplesFor('export');
    } else {
      setExportZplOverride(undefined);
      setShowExport(true);
    }
  };

  const handleSamplesConfirm = (values: Record<string, string>) => {
    const finalZpl = substituteVariables(zplCode, values);
    const action = samplesFor;
    setSamplesFor(null);
    if (action === 'preview') {
      fetchPreview(finalZpl);
    } else if (action === 'export') {
      setExportZplOverride(finalZpl);
      setShowExport(true);
    }
  };

  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-4">
      <span className="text-sm font-semibold text-gray-700">Zebra Label Designer</span>
      {activeDesignName && (
        <span className="text-xs text-gray-400 truncate max-w-[160px]" title={activeDesignName}>
          — {activeDesignName}
        </span>
      )}
      <div className="flex-1 flex items-center justify-center gap-1">
        {selectedIds.length >= 2 && (
          <>
            <div className="flex items-center gap-0.5 border border-gray-200 rounded px-1">
              <button onClick={() => alignElements('left')}     className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Align left edges">⊢</button>
              <button onClick={() => alignElements('center-h')} className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Center horizontally">⣿</button>
              <button onClick={() => alignElements('right')}    className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Align right edges">⊣</button>
            </div>
            <div className="flex items-center gap-0.5 border border-gray-200 rounded px-1">
              <button onClick={() => alignElements('top')}      className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Align top edges">⊤</button>
              <button onClick={() => alignElements('center-v')} className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Center vertically">⊞</button>
              <button onClick={() => alignElements('bottom')}   className="p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded text-xs" title="Align bottom edges">⊥</button>
            </div>
          </>
        )}
      </div>
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
          onClick={handlePreview}
          disabled={previewLoading}
          className="text-xs px-3 py-1 rounded border border-blue-300 text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-50"
          title="Render label preview via Labelary"
        >
          {previewLoading ? 'Loading…' : 'Preview'}
        </button>
        <button
          onClick={handleExport}
          className="text-xs px-3 py-1 rounded border border-green-300 text-green-700 hover:bg-green-50 transition-colors"
          title="Export label to file"
        >
          Export
        </button>
      </div>
      <button
        onClick={logout}
        className="ml-1 text-xs px-3 py-1 rounded border border-red-300 text-red-600 hover:bg-red-50 transition-colors"
      >
        Logout
      </button>
      {showExport && <ExportModal zplOverride={exportZplOverride} onClose={() => setShowExport(false)} />}
      {samplesFor && (
        <SampleValuesModal
          variables={extractVariables(zplCode)}
          confirmLabel={samplesFor === 'preview' ? 'Preview' : 'Continue'}
          onConfirm={handleSamplesConfirm}
          onClose={() => setSamplesFor(null)}
        />
      )}
    </div>
  );
}
