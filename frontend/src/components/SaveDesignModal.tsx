import React, { useState } from 'react';
import { useDesignsStore } from '../store/useDesignsStore';

export function SaveDesignModal() {
  const { activeDesignId, activeDesignName, closeSaveModal, saveNewDesign, saveVersion, error, setError } = useDesignsStore();
  const [name, setName] = useState('');
  const [mode, setMode] = useState<'new' | 'version'>(activeDesignId ? 'version' : 'new');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'new') {
        await saveNewDesign(name.trim());
      } else {
        await saveVersion();
        closeSaveModal();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={closeSaveModal}>
      <div className="bg-white rounded-lg shadow-xl w-96 p-6" onClick={e => e.stopPropagation()}>
        <h2 className="text-base font-semibold text-gray-800 mb-4">Save Design</h2>

        {activeDesignId && (
          <div className="flex rounded border border-gray-200 overflow-hidden text-sm mb-4">
            <button
              onClick={() => setMode('version')}
              className={`flex-1 py-1.5 transition-colors ${mode === 'version' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              Save version of "{activeDesignName}"
            </button>
            <button
              onClick={() => setMode('new')}
              className={`flex-1 py-1.5 transition-colors ${mode === 'new' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              Save as new design
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {mode === 'new' && (
            <div>
              <label className="block text-xs text-gray-500 mb-1">Design name</label>
              <input
                autoFocus
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                placeholder="e.g. Shipping Label 4x6"
              />
            </div>
          )}

          {error && <p className="text-xs text-red-500 bg-red-50 border border-red-200 rounded px-3 py-2">{error}</p>}

          <div className="flex gap-2 justify-end mt-1">
            <button type="button" onClick={closeSaveModal} className="text-sm px-4 py-1.5 rounded border border-gray-200 text-gray-600 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="text-sm px-4 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">
              {loading ? 'Saving…' : mode === 'new' ? 'Create & Save' : 'Save Version'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
