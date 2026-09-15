import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function Topbar({ title, onMenu }) {
  const { cartCount, toast } = useApp()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 flex h-15 w-full items-center justify-between gap-3 border-b border-line bg-white px-4 py-3 sm:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenu}
          aria-label="Open navigation"
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-[9px] border border-line bg-white text-base lg:hidden"
        >
          ☰
        </button>
        <div className="min-w-0">
          <h2 className="truncate text-[17px] font-extrabold tracking-tight text-slate">{title}</h2>
          <p className="truncate text-[11px] text-slate-l">
            Sangati Kalyanam · Wellness Platform
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => navigate('/experts')}
          className="hidden w-[260px] cursor-text items-center gap-2 rounded-[10px] border border-line bg-surface px-3.5 py-2 text-[13px] text-slate-l xl:flex"
        >
          🔍 <span>Search experts, courses...</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/products')}
          aria-label={`Cart, ${cartCount} items`}
          className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-[9px] border border-line bg-white text-base"
        >
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-teal px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => toast('No new notifications')}
          aria-label="Notifications"
          className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-[9px] border border-line bg-white text-base"
        >
          🔔
          <span className="absolute top-1.5 right-1.5 h-[7px] w-[7px] rounded-full border-2 border-white bg-rose" />
        </button>

        <div className="flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-[9px] bg-gradient-to-br from-teal to-teal-m text-base">
          😊
        </div>
      </div>
    </header>
  )
}
