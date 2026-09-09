import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';
import { ZPL_FONTS } from '../utils/zplFonts';
import { mmToDots, dotsToMm } from '../utils/units';

export function PropertiesPanel() {
  const { elements, selectedId, updateElement, deleteElement, duplicateSelected, bringForward, sendBackward, bringToFront, sendToBack } = useDesignerStore();
  const el = elements.find(e => e.id === selectedId);

  if (!el) {
    return (
      <div className="w-56 bg-white border-l border-gray-200 p-3">
        <p className="text-xs text-gray-400 italic">Select an element to edit its properties.</p>
      </div>
    );
  }

  const field = (label: string, value: string | number, key: string, type = 'text', min?: number) => (
    <div key={key} className="mb-2">
      <label className="block text-xs text-gray-500 mb-0.5">{label}</label>
      <input
        type={type}
        min={min}
        className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
        value={value}
        onChange={e => {
          const v = type === 'number' ? Number(e.target.value) : e.target.value;
          if (key === 'thickness') {
            updateElement(el.id, { thickness: Math.max(1, mmToDots(Number(v))) });
          } else if (['x', 'y'].includes(key)) {
            updateElement(el.id, { [key]: Math.max(0, mmToDots(Number(v))) });
          } else if (['width', 'height'].includes(key)) {
            updateElement(el.id, { [key]: Math.max(1, mmToDots(Number(v))) });
          } else {
            updateElement(el.id, { [key]: v });
          }
        }}
      />
    </div>
  );

  const dynamicControls = (
    <>
      <label className="flex items-center gap-2 mb-2 text-xs text-gray-600">
        <input
          type="checkbox"
          checked={el.dynamic ?? false}
          onChange={e => updateElement(el.id, { dynamic: e.target.checked })}
        />
        Dynamic (variable)
      </label>
      {el.dynamic && (
        <div className="mb-2">
          <label className="block text-xs text-gray-500 mb-0.5">Variable name</label>
          <input
            type="text"
            className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
            value={el.variableName ?? ''}
            placeholder="e.g. company"
            onChange={e =>
              updateElement(el.id, { variableName: e.target.value.replace(/[^A-Za-z0-9_]/g, '') })
            }
          />
          <p className="text-[10px] text-gray-400 mt-0.5">
            Emits {`{{${el.variableName || 'name'}}}`} in ZPL
          </p>
        </div>
      )}
    </>
  );

  return (
    <div className="w-56 bg-white border-l border-gray-200 p-3 overflow-y-auto">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{el.type}</p>
      {field('X (mm)', dotsToMm(el.x), 'x', 'number', 0)}
      {field('Y (mm)', dotsToMm(el.y), 'y', 'number', 0)}
      {field('Width (mm)', dotsToMm(el.width), 'width', 'number', 0.1)}
      {field('Height (mm)', dotsToMm(el.height), 'height', 'number', 0.1)}
      {(el.type === 'line' || (el.type === 'rect' && !el.filled)) && (
        field('Thickness (mm)', dotsToMm(el.thickness ?? (el.type === 'line' ? 3 : 8)), 'thickness', 'number', 0.1)
      )}
      {el.type === 'text' && (
        <>
          {!el.dynamic && field('Value', el.value ?? '', 'value')}
          {field('Font Size', el.fontSize ?? 30, 'fontSize', 'number')}
          <div className="mb-2">
            <label className="block text-xs text-gray-500 mb-0.5">Font</label>
            <select
              className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
              value={el.fontName ?? '0'}
              onChange={e => updateElement(el.id, { fontName: e.target.value })}
            >
              {ZPL_FONTS.map(f => (
                <option key={f.name} value={f.name}>{f.label}</option>
              ))}
            </select>
          </div>
          {dynamicControls}
        </>
      )}
      {(el.type === 'barcode128' || el.type === 'qrcode') && (
        <>
          {!el.dynamic && field('Value', el.value ?? '', 'value')}
          {dynamicControls}
        </>
      )}
      {el.type === 'line' && (
        <button
          onClick={() => updateElement(el.id, { width: el.height, height: el.width })}
          className="mb-2 w-full text-xs text-blue-600 border border-blue-200 rounded py-1 hover:bg-blue-50 transition-colors"
        >
          {el.width >= el.height ? '↔ Horizontal' : '↕ Vertical'}
        </button>
      )}
      <button
        onClick={() => deleteElement(el.id)}
        className="mt-3 w-full text-xs text-red-500 border border-red-200 rounded py-1 hover:bg-red-50"
      >
        Delete element
      </button>
      <div className="mt-3 border-t border-gray-100 pt-3">
        <p className="text-xs text-gray-400 mb-1.5">Order</p>
        <div className="grid grid-cols-2 gap-1">
          <button onClick={bringToFront} className="text-xs border border-gray-200 rounded py-1 hover:bg-gray-50" title="Bring to front">↑↑ Front</button>
          <button onClick={sendToBack} className="text-xs border border-gray-200 rounded py-1 hover:bg-gray-50" title="Send to back">↓↓ Back</button>
          <button onClick={bringForward} className="text-xs border border-gray-200 rounded py-1 hover:bg-gray-50" title="Bring forward">↑ Forward</button>
          <button onClick={sendBackward} className="text-xs border border-gray-200 rounded py-1 hover:bg-gray-50" title="Send backward">↓ Backward</button>
        </div>
      </div>
      <button
        onClick={duplicateSelected}
        className="mt-2 w-full text-xs text-blue-600 border border-blue-200 rounded py-1 hover:bg-blue-50"
      >
        Duplicate (Ctrl+D)
      </button>
    </div>
  );
}
