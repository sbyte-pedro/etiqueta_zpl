import React from 'react';
import { useDesignerStore } from '../store/useDesignerStore';

const MM_TO_DOTS = (mm: number) => Math.round(mm * 8.03);
const DOTS_TO_MM = (dots: number) => Math.round(dots / 8.03);

export function Toolbar() {
  const { labelWidth, labelHeight, setLabelSize } = useDesignerStore();

  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-4">
      <span className="text-sm font-semibold text-gray-700">Zebra Label Designer</span>
      <div className="flex-1" />
      <label className="text-xs text-gray-500">Width (mm)</label>
      <input
        type="number"
        className="w-20 border border-gray-200 rounded px-2 py-1 text-sm"
        value={DOTS_TO_MM(labelWidth)}
        min={10}
        max={500}
        onChange={e => setLabelSize(MM_TO_DOTS(Number(e.target.value)), labelHeight)}
      />
      <label className="text-xs text-gray-500">Height (mm)</label>
      <input
        type="number"
        className="w-20 border border-gray-200 rounded px-2 py-1 text-sm"
        value={DOTS_TO_MM(labelHeight)}
        min={10}
        max={1000}
        onChange={e => setLabelSize(labelWidth, MM_TO_DOTS(Number(e.target.value)))}
      />
    </div>
  );
}
