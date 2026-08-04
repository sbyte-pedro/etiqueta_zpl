import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';

export function PreviewPanel() {
  const { previewUrl, previewLoading, previewError, closePreview, labelWidth, zoom } = useDesignerStore();

  if (!previewUrl && !previewError && !previewLoading) return null;

  const colWidth = labelWidth * zoom;

  return (
    <div
      className="h-full bg-white border-l border-gray-200 flex flex-col overflow-hidden"
      style={{ width: colWidth, minWidth: colWidth, maxWidth: colWidth }}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 shrink-0">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Label Preview</span>
        <button
          onClick={closePreview}
          className="text-xs px-3 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Close Preview
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
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
            className="border border-gray-200 rounded shadow-sm"
            style={{ imageRendering: 'pixelated', width: colWidth, display: 'block' }}
          />
        )}
      </div>
    </div>
  );
}
