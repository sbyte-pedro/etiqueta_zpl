import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';
import { ElementType } from '../types';

const PALETTE: { type: ElementType; label: string; icon: string }[] = [
  { type: 'text', label: 'Text', icon: 'T' },
  { type: 'barcode128', label: 'Barcode 128', icon: '▐▌' },
  { type: 'qrcode', label: 'QR Code', icon: '⊞' },
  { type: 'rect', label: 'Rectangle', icon: '▭' },
  { type: 'image-placeholder', label: 'Image', icon: '🖼' },
];

export function Sidebar() {
  const { addElement } = useDesignerStore();

  return (
    <div className="w-48 bg-white border-r border-gray-200 p-3 flex flex-col gap-2">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Components</p>
      {PALETTE.map(({ type, label, icon }) => (
        <button
          key={type}
          onClick={() => addElement(type, 50, 50)}
          className="flex items-center gap-2 px-3 py-2 rounded border border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-sm transition-colors text-left cursor-pointer"
          title={`Add ${label}`}
        >
          <span className="text-base w-5 text-center">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
