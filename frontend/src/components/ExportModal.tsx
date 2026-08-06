import React, { useState } from 'react';
import { useDesignerStore } from '../store/useDesignerStore';
import { exportZpl, ExportFormat } from '../utils/zplClient';

interface Props { onClose(): void; zplOverride?: string; }

const FORMATS: { value: ExportFormat; label: string; description: string }[] = [
  { value: 'png', label: 'PNG',  description: 'Image — preview, sharing' },
  { value: 'pdf', label: 'PDF',  description: 'Print-ready document' },
  { value: 'epl', label: 'EPL',  description: 'Eltron printer language' },
  { value: 'zpl', label: 'ZPL',  description: 'Transformed ZPL output' },
];

export function ExportModal({ onClose, zplOverride }: Props) {
  const { zplCode, labelWidth, labelHeight } = useDesignerStore();
  const [format, setFormat] = useState<ExportFormat>('png');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setLoading(true);
    setError('');
    try {
      const blob = await exportZpl(zplOverride ?? zplCode, labelWidth, labelHeight, format);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `label.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Export failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-80 flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">Export Label</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
        </div>

        <div className="p-4 flex flex-col gap-2">
          {FORMATS.map(f => (
            <label key={f.value} className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer border ${format === f.value ? 'border-blue-300 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
              <input
                type="radio"
                name="format"
                value={f.value}
                checked={format === f.value}
                onChange={() => setFormat(f.value)}
                className="accent-blue-600"
              />
              <div>
                <span className="text-sm font-medium text-gray-800">{f.label}</span>
                <span className="text-xs text-gray-400 ml-2">{f.description}</span>
              </div>
            </label>
          ))}
        </div>

        {error && (
          <p className="text-xs text-red-500 px-4 pb-2">{error}</p>
        )}

        <div className="flex gap-2 px-4 pb-4">
          <button
            onClick={handleDownload}
            disabled={loading}
            className="flex-1 text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Exporting…' : 'Download'}
          </button>
          <button
            onClick={onClose}
            className="text-sm px-4 py-2 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
