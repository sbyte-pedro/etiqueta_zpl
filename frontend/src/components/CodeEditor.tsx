import React from 'react';
import Editor from '@monaco-editor/react';
import { useDesignerStore } from '../store/useDesignerStore';

export function CodeEditor() {
  const { zplCode, zplError, onCodeChange } = useDesignerStore();

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-900 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono">ZPL Code</span>
        <span className="text-xs text-gray-500">Changes sync automatically</span>
      </div>

      {zplError && (
        <div className="flex items-center gap-2 px-3 py-2 bg-red-900/80 border-b border-red-700 text-xs text-red-200">
          <span>⚠</span>
          <span>{zplError}</span>
        </div>
      )}

      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="plaintext"
          theme="vs-dark"
          value={zplCode}
          onChange={v => onCodeChange(v ?? '')}
          options={{
            fontSize: 13,
            minimap: { enabled: false },
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
          }}
        />
      </div>
    </div>
  );
}
