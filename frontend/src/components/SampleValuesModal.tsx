import React, { useState } from 'react';

interface Props {
  variables: string[];
  confirmLabel: string;
  onConfirm(values: Record<string, string>): void;
  onClose(): void;
}

export function SampleValuesModal({ variables, confirmLabel, onConfirm, onClose }: Props) {
  // Start empty; substituteVariables falls back to the variable name for any
  // field the user leaves blank, so nothing needs to be pre-filled here.
  const [values, setValues] = useState<Record<string, string>>(
    () => Object.fromEntries(variables.map(v => [v, '']))
  );

  const setValue = (name: string, value: string) =>
    setValues(prev => ({ ...prev, [name]: value }));

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-80 flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">Sample values</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
        </div>

        <div className="p-4 flex flex-col gap-2 max-h-80 overflow-y-auto">
          <p className="text-xs text-gray-400 mb-1">
            Enter example values for each variable to render a sample.
          </p>
          {variables.map(name => (
            <div key={name}>
              <label className="block text-xs text-gray-500 mb-0.5">{`{{${name}}}`}</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded px-2 py-1 text-sm"
                value={values[name] ?? ''}
                placeholder={name}
                onChange={e => setValue(name, e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-2 px-4 pb-4">
          <button
            onClick={() => onConfirm(values)}
            className="flex-1 text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            {confirmLabel}
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
