import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar, { NAV_ITEMS } from '../components/Sidebar.jsx'
import Topbar from '../components/Topbar.jsx'
import Toaster from '../components/Toaster.jsx'

export default function AppLayout() {
  const [navOpen, setNavOpen] = useState(false)
  const { pathname } = useLocation()

  // Scroll back to the top whenever the route changes.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const current = NAV_ITEMS.find((i) => (i.end ? pathname === i.to : pathname.startsWith(i.to)))

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar open={navOpen} onClose={() => setNavOpen(false)} />

      <div className="flex min-h-screen flex-col lg:ml-[220px]">
        <Topbar title={current?.title ?? 'Sangati Kalyanam'} onMenu={() => setNavOpen(true)} />

        <main className="w-full min-w-0 flex-1 animate-fade-up px-4 py-7 sm:px-8">
          <Outlet />
        </main>

        <footer className="border-t border-line px-4 py-6 text-center text-xs text-slate-l sm:px-8">
          © {new Date().getFullYear()} Sangati Kalyanam · Healing &amp; Astrology Platform
        </footer>
      </div>

      <Toaster />
    </div>
  )
}
