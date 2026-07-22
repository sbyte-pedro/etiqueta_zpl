import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';

export function TabSwitcher() {
  const { activeTab, setActiveTab, zoom, setZoom } = useDesignerStore();
  const pct = Math.round(zoom * 50); // zoom=2 → 100%, zoom=1 → 50%, etc.

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-200">
      {/* Tab toggle */}
      <div className="flex rounded-full border border-gray-200 overflow-hidden text-sm">
        <button
          onClick={() => setActiveTab('design')}
          className={`px-4 py-1.5 flex items-center gap-1.5 transition-colors ${
            activeTab === 'design' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <span>⊞</span> Design
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-1.5 flex items-center gap-1.5 transition-colors ${
            activeTab === 'code' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <span>&lt;/&gt;</span> Code
        </button>
      </div>

      {/* Zoom controls — only visible in design mode */}
      {activeTab === 'design' && (
        <div className="flex items-center gap-1">
          <button
            onClick={() => setZoom(zoom - 0.25)}
            disabled={zoom <= 0.5}
            className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 text-base leading-none"
            title="Zoom out"
          >
            −
          </button>
          <button
            onClick={() => setZoom(2)}
            className="w-16 text-xs text-center text-gray-500 hover:text-blue-600 tabular-nums"
            title="Reset zoom"
          >
            {pct}%
          </button>
          <button
            onClick={() => setZoom(zoom + 0.25)}
            disabled={zoom >= 6}
            className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 text-base leading-none"
            title="Zoom in"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
