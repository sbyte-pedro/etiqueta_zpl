import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';

const MM_TO_DOTS = (mm: number) => Math.round(mm * 8.03);
const DOTS_TO_MM = (dots: number) => parseFloat((dots / 8.03).toFixed(1));

export function PropertiesPanel() {
  const { elements, selectedId, updateElement, deleteElement } = useDesignerStore();
  const el = elements.find(e => e.id === selectedId);

  if (!el) {
    return (
      <div className="w-56 bg-white border-l border-gray-200 p-3">
        <p className="text-xs text-gray-400 italic">Select an element to edit its properties.</p>
      </div>
    );
  }

  const field = (label: string, value: string | number, key: string, type = 'text') => (
    <div key={key} className="mb-2">
      <label className="block text-xs text-gray-500 mb-0.5">{label}</label>
      <input
        type={type}
        className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
        value={value}
        onChange={e => {
          const v = type === 'number' ? Number(e.target.value) : e.target.value;
          if (['x', 'y', 'width', 'height'].includes(key)) {
            updateElement(el.id, { [key]: MM_TO_DOTS(Number(v)) });
          } else {
            updateElement(el.id, { [key]: v });
          }
        }}
      />
    </div>
  );

  return (
    <div className="w-56 bg-white border-l border-gray-200 p-3 overflow-y-auto">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{el.type}</p>
      {field('X (mm)', DOTS_TO_MM(el.x), 'x', 'number')}
      {field('Y (mm)', DOTS_TO_MM(el.y), 'y', 'number')}
      {field('Width (mm)', DOTS_TO_MM(el.width), 'width', 'number')}
      {field('Height (mm)', DOTS_TO_MM(el.height), 'height', 'number')}
      {el.type === 'text' && (
        <>
          {field('Value', el.value ?? '', 'value')}
          {field('Font Size', el.fontSize ?? 30, 'fontSize', 'number')}
        </>
      )}
      {(el.type === 'barcode128' || el.type === 'qrcode') && field('Value', el.value ?? '', 'value')}
      <button
        onClick={() => deleteElement(el.id)}
        className="mt-3 w-full text-xs text-red-500 border border-red-200 rounded py-1 hover:bg-red-50"
      >
        Delete element
      </button>
    </div>
  );
}
