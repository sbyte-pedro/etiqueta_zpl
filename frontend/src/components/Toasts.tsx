import { useToastStore } from '../store/useToastStore';

const STYLES: Record<string, string> = {
  success: 'bg-green-600 border-green-500',
  error: 'bg-red-600 border-red-500',
  info: 'bg-slate-700 border-slate-600',
};

const ICONS: Record<string, string> = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
};

/** Global toast stack, fixed bottom-right. Click a toast to dismiss it early. */
export function Toasts() {
  const toasts = useToastStore((s) => s.toasts);
  const removeToast = useToastStore((s) => s.removeToast);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {toasts.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => removeToast(t.id)}
          className={`flex items-start gap-2 rounded-lg border px-4 py-3 text-left text-sm text-white shadow-lg transition hover:opacity-90 ${STYLES[t.type]}`}
        >
          <span className="mt-0.5 font-bold">{ICONS[t.type]}</span>
          <span className="flex-1">{t.message}</span>
          <span className="ml-2 text-white/70">×</span>
        </button>
      ))}
    </div>
  );
}
