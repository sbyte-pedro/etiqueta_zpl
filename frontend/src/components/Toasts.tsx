import { useToastStore } from '../store/useToastStore';

const TOAST_STYLES: Record<string, { border: string; iconColor: string }> = {
  success: { border: 'var(--status-success)', iconColor: 'var(--status-success)' },
  error:   { border: 'var(--status-error)',   iconColor: 'var(--status-error)' },
  info:    { border: 'var(--chrome-border)',   iconColor: 'var(--accent)' },
};

const ICONS: Record<string, string> = { success: '✓', error: '✕', info: 'ℹ' };

export function Toasts() {
  const toasts = useToastStore(s => s.toasts);
  const removeToast = useToastStore(s => s.removeToast);

  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 16,
      right: 16,
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 320,
    }}>
      {toasts.map(t => {
        const s = TOAST_STYLES[t.type] ?? TOAST_STYLES.info;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => removeToast(t.id)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              padding: '10px 14px',
              borderRadius: 8,
              border: `1px solid ${s.border}`,
              background: 'var(--chrome-surface)',
              color: 'var(--chrome-text)',
              fontSize: 12,
              fontFamily: 'inherit',
              textAlign: 'left',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              transition: 'opacity 0.1s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <span style={{ fontWeight: 700, color: s.iconColor, marginTop: 1, flexShrink: 0 }}>
              {ICONS[t.type]}
            </span>
            <span style={{ flex: 1, lineHeight: 1.5 }}>{t.message}</span>
            <span style={{ color: 'var(--chrome-text-faint)', marginLeft: 4, flexShrink: 0 }}>×</span>
          </button>
        );
      })}
    </div>
  );
}
