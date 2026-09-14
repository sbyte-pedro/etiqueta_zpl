import React, { useState } from 'react';
import { useDesignsStore } from '../store/useDesignsStore';

type Mode = 'overwrite' | 'version' | 'new';

export function SaveDesignModal() {
  const {
    activeDesignId, activeDesignName, activeVersionNumber,
    closeSaveModal, saveNewDesign, saveVersion, overwriteVersion, error, setError,
  } = useDesignsStore();

  const defaultMode: Mode = activeDesignId
    ? (activeVersionNumber !== null ? 'overwrite' : 'version')
    : 'new';

  const [mode, setMode] = useState<Mode>(defaultMode);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'overwrite') {
        await overwriteVersion();
      } else if (mode === 'version') {
        await saveVersion();
        closeSaveModal();
      } else {
        await saveNewDesign(name.trim());
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    ...(activeVersionNumber !== null ? [{ id: 'overwrite' as Mode, label: `Overwrite v${activeVersionNumber}` }] : []),
    { id: 'version' as Mode, label: 'New version' },
    { id: 'new' as Mode, label: 'New design' },
  ];

  return (
    <div className="modal-overlay" onClick={closeSaveModal}>
      <div className="modal-card" style={{ width: 360 }} onClick={e => e.stopPropagation()}>
        <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--chrome-text)', marginBottom: 16 }}>Save design</h2>

        {activeDesignId && (
          <div style={{
            display: 'flex',
            background: 'var(--chrome-elevated)',
            borderRadius: 6,
            padding: 2,
            gap: 2,
            marginBottom: 16,
          }}>
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setMode(t.id)}
                style={{
                  flex: 1,
                  padding: '4px 8px',
                  borderRadius: 4,
                  border: 'none',
                  fontSize: 11,
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  background: mode === t.id ? 'var(--chrome-surface)' : 'transparent',
                  color: mode === t.id ? 'var(--chrome-text)' : 'var(--chrome-text-muted)',
                  boxShadow: mode === t.id ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
                  transition: 'background 0.1s, color 0.1s',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {mode === 'overwrite' && (
            <p style={{ fontSize: 12, color: 'var(--chrome-text-muted)', lineHeight: 1.5 }}>
              This will replace <strong style={{ color: 'var(--chrome-text)' }}>v{activeVersionNumber}</strong> of "{activeDesignName}" with the current canvas.
            </p>
          )}

          {mode === 'new' && (
            <div>
              <label style={{ display: 'block', fontSize: 10, color: 'var(--chrome-text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                Design name
              </label>
              <input
                autoFocus
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="chrome-input"
                placeholder="e.g. Shipping Label 4×6"
              />
            </div>
          )}

          {error && (
            <p style={{
              fontSize: 11,
              color: 'var(--status-error)',
              background: 'var(--status-error-subtle)',
              border: '1px solid rgba(247,92,92,0.3)',
              borderRadius: 5,
              padding: '6px 10px',
            }}>
              {error}
            </p>
          )}

          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button type="button" onClick={closeSaveModal} className="chrome-btn chrome-btn-ghost">
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="chrome-btn chrome-btn-primary"
              style={{ opacity: loading ? 0.6 : 1 }}
            >
              {loading ? 'Saving…' : mode === 'overwrite' ? 'Overwrite' : mode === 'version' ? 'Save version' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
