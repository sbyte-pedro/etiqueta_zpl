import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useDesignerStore } from '../store/useDesignerStore';
import { previewZpl } from '../utils/zplClient';

export function CodeEditor() {
  const { zplCode, setZplCode, applyCodeToDesign, labelWidth, labelHeight, setPreviewUrl, previewUrl } = useDesignerStore();
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = async () => {
    const url = await previewZpl(zplCode, labelWidth, labelHeight);
    setPreviewUrl(url);
    setShowPreview(true);
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-900 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono">ZPL Code</span>
        <div className="flex gap-2">
          <button
            onClick={handlePreview}
            className="text-xs px-3 py-1 rounded bg-gray-700 text-gray-200 hover:bg-gray-600"
          >
            Preview
          </button>
          <button
            onClick={applyCodeToDesign}
            className="text-xs px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Apply to Design
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="plaintext"
          theme="vs-dark"
          value={zplCode}
          onChange={v => setZplCode(v ?? '')}
          options={{ fontSize: 13, minimap: { enabled: false }, lineNumbers: 'on', scrollBeyondLastLine: false }}
        />
      </div>
      {showPreview && previewUrl && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setShowPreview(false)}
        >
          <div className="bg-white rounded p-4 shadow-xl max-w-lg" onClick={e => e.stopPropagation()}>
            <p className="text-sm font-medium mb-2">Label Preview (Labelary)</p>
            <img src={previewUrl} alt="Label preview" className="max-w-full" />
            <button
              onClick={() => setShowPreview(false)}
              className="mt-3 w-full text-sm text-gray-600 border border-gray-200 rounded py-1 hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
