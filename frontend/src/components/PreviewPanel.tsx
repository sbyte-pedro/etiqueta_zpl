import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';

export function PreviewPanel() {
  const { previewUrl, previewLoading, previewError, closePreview } = useDesignerStore();

  if (!previewUrl && !previewError && !previewLoading) return null;

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Label Preview</span>
        <button
          onClick={closePreview}
          className="text-xs px-3 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Close Preview
        </button>
      </div>

      {previewLoading && (
        <div className="text-xs text-gray-400 py-2">Loading…</div>
      )}

      {previewError && (
        <div className="text-xs text-red-500 bg-red-50 border border-red-200 rounded px-3 py-2">
          {previewError}
        </div>
      )}

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Label preview"
          className="max-w-full border border-gray-200 rounded shadow-sm"
          style={{ imageRendering: 'pixelated' }}
        />
      )}
    </div>
  );
}
