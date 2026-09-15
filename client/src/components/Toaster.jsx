import { useApp } from '../context/AppContext.jsx'

export default function Toaster() {
  const { toasts, dismissToast } = useApp()

  if (toasts.length === 0) return null

  return (
    <div
      className="fixed right-4 bottom-4 z-9999 flex w-[calc(100%-2rem)] max-w-80 flex-col gap-2 sm:right-6 sm:bottom-6"
      role="status"
      aria-live="polite"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="flex animate-toast-in items-center gap-3 rounded-xl bg-slate px-4.5 py-3.5 text-[13px] font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        >
          <span className="text-lg">{t.tone === 'error' ? '⚠️' : '✅'}</span>
          <span className="flex-1">{t.message}</span>
          <button
            type="button"
            onClick={() => dismissToast(t.id)}
            aria-label="Dismiss"
            className="cursor-pointer text-lg leading-none text-slate-l hover:text-white"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )
}
