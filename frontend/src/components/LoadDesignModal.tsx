import React, { useState } from 'react';
import { useDesignsStore } from '../store/useDesignsStore';

export function LoadDesignModal() {
  const { designs, versions, closeLoadModal, loadVersion, deleteDesign, fetchVersions, error } = useDesignsStore();
  const [selectedDesignId, setSelectedDesignId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const selectDesign = async (id: number) => {
    setSelectedDesignId(id);
    await fetchVersions(id);
  };

  const handleLoad = async (versionNumber: number) => {
    if (!selectedDesignId) return;
    setLoading(true);
    try {
      await loadVersion(selectedDesignId, versionNumber);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this design and all its versions?')) return;
    await deleteDesign(id);
    if (selectedDesignId === id) setSelectedDesignId(null);
  };

  const selectedDesign = designs.find(d => d.id === selectedDesignId);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={closeLoadModal}>
      <div className="bg-white rounded-lg shadow-xl w-[640px] h-[420px] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">Load Design</h2>
          <button onClick={closeLoadModal} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left — designs list */}
          <div className="w-1/2 border-r border-gray-200 overflow-y-auto p-2">
            <p className="text-xs text-gray-400 uppercase tracking-wide px-2 pb-1">My Designs</p>
            {designs.length === 0 && <p className="text-xs text-gray-400 italic px-2 py-2">No saved designs yet.</p>}
            {designs.map(d => (
              <div
                key={d.id}
                onClick={() => selectDesign(d.id)}
                className={`flex items-center justify-between px-3 py-2 rounded cursor-pointer group ${selectedDesignId === d.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-gray-800 truncate">{d.name}</p>
                  <p className="text-xs text-gray-400">{d.versionCount} version{d.versionCount !== 1 ? 's' : ''}</p>
                </div>
                <button
                  onClick={e => { e.stopPropagation(); handleDelete(d.id); }}
                  className="text-xs text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Right — versions list */}
          <div className="w-1/2 overflow-y-auto p-2">
            {!selectedDesign && <p className="text-xs text-gray-400 italic px-2 py-2">Select a design to see its versions.</p>}
            {selectedDesign && (
              <>
                <p className="text-xs text-gray-400 uppercase tracking-wide px-2 pb-1">Versions — {selectedDesign.name}</p>
                {versions.map(v => (
                  <div
                    key={v.id}
                    className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleLoad(v.versionNumber)}
                  >
                    <div>
                      <p className="text-sm text-gray-800">Version {v.versionNumber}</p>
                      <p className="text-xs text-gray-400">{new Date(v.createdAt).toLocaleString()}</p>
                    </div>
                    <button
                      disabled={loading}
                      className="text-xs text-blue-600 hover:text-blue-800 shrink-0 ml-2 disabled:opacity-50"
                    >
                      Load
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {error && <p className="text-xs text-red-500 px-4 py-2 border-t border-gray-200">{error}</p>}
      </div>
    </div>
  );
}
