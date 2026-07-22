import React from 'react';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { Canvas } from './components/Canvas';
import { PropertiesPanel } from './components/PropertiesPanel';
import { TabSwitcher } from './components/TabSwitcher';
import { CodeEditor } from './components/CodeEditor';
import { useDesignerStore } from './store/useDesignerStore';

export default function App() {
  const { activeTab } = useDesignerStore();

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Toolbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TabSwitcher />
          <div className="flex-1 overflow-hidden">
            {activeTab === 'design' ? <Canvas /> : <CodeEditor />}
          </div>
        </div>
        <PropertiesPanel />
      </div>
    </div>
  );
}
