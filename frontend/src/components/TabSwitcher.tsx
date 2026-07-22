import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';

export function TabSwitcher() {
  const { activeTab, setActiveTab } = useDesignerStore();

  return (
    <div className="flex justify-center items-center gap-1 py-2 bg-white border-b border-gray-200">
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
    </div>
  );
}
