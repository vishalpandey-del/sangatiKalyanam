import { NavLink } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { rupees } from './ui.jsx'

export const NAV_ITEMS = [
  { to: '/', icon: '🏠', label: 'Home', title: 'Home', end: true },
  { to: '/experts', icon: '🧘', label: 'Experts', title: 'Experts' },
  { to: '/consultation', icon: '💬', label: 'Consult', title: 'Consult' },
  { to: '/webinars', icon: '🎙️', label: 'Webinars', title: 'Webinars' },
  { to: '/courses', icon: '📹', label: 'Courses', title: 'Courses' },
  { to: '/products', icon: '🛍️', label: 'Products', title: 'Products' },
  { to: '/wallet', icon: '💰', label: 'Wallet', title: 'Wallet' },
  { to: '/register', icon: '✨', label: 'Join as Expert', title: 'Join as Expert', badge: 'New' },
  { to: '/about', icon: 'ℹ️', label: 'About', title: 'About' },
  { to: '/help', icon: '❓', label: 'Help', title: 'Help Center' },
]

const LANGS = ['EN', 'हिं', 'தமி']

export default function Sidebar({ open, onClose }) {
  const { balance, lang, setLang, toast } = useApp()

  return (
    <>
      {/* Mobile scrim */}
      {open && (
        <div
          className="fixed inset-0 z-90 bg-slate/40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-100 flex w-[220px] flex-col border-r border-line bg-white transition-transform duration-200 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-line p-[18px]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-teal to-teal-m text-lg shadow-[0_4px_12px_rgba(45,155,131,0.25)]">
              🪷
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate">Sangati</div>
              <div className="text-xs font-semibold text-teal">Kalyanam</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-2.5 px-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `mb-0.5 flex items-center gap-2.5 rounded-[10px] border-l-[3px] px-3 py-2.5 text-[13px] transition-colors ${
                  isActive
                    ? 'border-l-teal bg-teal-l font-bold text-teal'
                    : 'border-l-transparent font-medium text-slate-m hover:bg-surface hover:text-slate'
                }`
              }
            >
              <span className="w-5 text-center text-base">{item.icon}</span>
              {item.label}
              {item.badge && (
                <span className="ml-auto rounded-[10px] bg-teal px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-line p-3.5">
          <NavLink
            to="/wallet"
            onClick={onClose}
            className="block cursor-pointer rounded-xl bg-teal-l px-3.5 py-3"
          >
            <div className="mb-1 text-[11px] font-bold text-teal">My Wallet</div>
            <div className="text-lg font-extrabold text-slate">{rupees(balance)}</div>
            <div className="mt-0.5 text-[11px] text-slate-m">Tap to add money</div>
          </NavLink>

          <div className="mt-2.5 flex gap-1.5">
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  setLang(l)
                  toast(`Language set to ${l}`)
                }}
                className={`flex-1 cursor-pointer rounded-md border py-1.5 text-[11px] font-bold transition-colors ${
                  lang === l
                    ? 'border-teal bg-teal text-white'
                    : 'border-line bg-transparent text-slate-m hover:border-teal hover:text-teal'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
