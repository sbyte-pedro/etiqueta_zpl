import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';
import { ElementType } from '../types';

const PALETTE: { type: ElementType; label: string; icon: string; img?: string }[] = [
  { type: 'text', label: 'Text', icon: 'T' },
  { type: 'barcode128', label: 'Barcode 128', icon: '', img: '/code_128.png' },
  { type: 'qrcode', label: 'QR Code', icon: '', img: '/qr_code.png' },
  { type: 'rect', label: 'Box', icon: '▭' },
  { type: 'line', label: 'Line', icon: '—' },
  { type: 'image-placeholder', label: 'Image', icon: '🖼' },
];

interface Props {
  onNavigateToMyDesigns(): void;
}

export function Sidebar({ onNavigateToMyDesigns }: Props) {
  const { addElement, activeTab } = useDesignerStore();

  return (
    <div className="w-48 bg-white border-r border-gray-200 p-3 flex flex-col gap-2">
      {activeTab === 'design' && (
        <>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Components</p>
          {PALETTE.map(({ type, label, icon, img }) => (
            <button
              key={type}
              onClick={() => addElement(type, 50, 50)}
              className="flex items-center gap-2 px-3 py-2 rounded border border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-sm transition-colors text-left cursor-pointer"
              title={`Add ${label}`}
            >
              <span className="w-5 h-5 flex items-center justify-center shrink-0">
                {img
                  ? <img src={img} alt={label} className="w-5 h-5 object-contain" />
                  : <span className="text-base">{icon}</span>
                }
              </span>
              <span>{label}</span>
            </button>
          ))}
        </>
      )}
      <div className="flex-1" />
      <button
        onClick={onNavigateToMyDesigns}
        className="flex items-center gap-2 px-3 py-2 rounded border border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-sm transition-colors text-left cursor-pointer mt-2"
      >
        <span className="text-base">📁</span>
        <span>My Designs</span>
      </button>
    </div>
  );
}
