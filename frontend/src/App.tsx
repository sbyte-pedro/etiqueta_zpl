import React, { useState } from 'react';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { Canvas } from './components/Canvas';
import { PropertiesPanel } from './components/PropertiesPanel';
import { TabSwitcher } from './components/TabSwitcher';
import { CodeEditor } from './components/CodeEditor';
import { SaveDesignModal } from './components/SaveDesignModal';
import { LoadDesignModal } from './components/LoadDesignModal';
import { useDesignerStore } from './store/useDesignerStore';
import { useAuthStore } from './store/useAuthStore';
import { useDesignsStore } from './store/useDesignsStore';
import { LoginPage } from './pages/LoginPage';
import { MyDesignsPage } from './pages/MyDesignsPage';

type View = 'designer' | 'my-designs';

export default function App() {
  const { activeTab } = useDesignerStore();
  const { token } = useAuthStore();
  const { showSaveModal, showLoadModal } = useDesignsStore();
  const [currentView, setCurrentView] = useState<View>('designer');

  if (!token) return <LoginPage />;

  if (currentView === 'my-designs') {
    return <MyDesignsPage onBack={() => setCurrentView('designer')} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Toolbar onNavigateToMyDesigns={() => setCurrentView('my-designs')} />
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
      {showSaveModal && <SaveDesignModal />}
      {showLoadModal && <LoadDesignModal />}
    </div>
  );
}
