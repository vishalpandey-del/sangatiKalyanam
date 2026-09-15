import { Link, useNavigate } from 'react-router-dom'
import { experts } from '../data/experts.js'
import { reviews } from '../data/catalog.js'
import { ExpertCard } from '../components/cards.jsx'
import { FeatureCard, ReviewCard, StatCard } from '../components/ui.jsx'

const HERO_STATS = [
  { value: '200+', label: 'Verified Experts' },
  { value: '12K+', label: 'Sessions Done' },
  { value: '50+', label: 'Live Courses' },
  { value: '4.8★', label: 'Avg Rating' },
]

const SERVICES = [
  {
    icon: '💬',
    accent: 'teal',
    title: '1-on-1 Consultation',
    body: 'Per-minute billing. Chat, voice, or video with verified experts.',
    badge: 'Chat · Call · Video',
    to: '/consultation',
  },
  {
    icon: '🎙️',
    accent: 'rose',
    title: 'Live Webinars',
    body: 'Join group healing sessions and expert talks. Replay included.',
    badge: 'Live · Recorded · Certificate',
    to: '/webinars',
  },
  {
    icon: '📹',
    accent: 'violet',
    title: 'Video Courses',
    body: 'Self-paced recorded courses. Buy once, learn forever.',
    badge: 'Self-paced · Lifetime',
    to: '/courses',
  },
  {
    icon: '🛍️',
    accent: 'amber',
    title: 'Wellness Products',
    body: 'Crystals, singing bowls, spiritual tools — delivered pan-India.',
    badge: 'Physical · Delivery',
    to: '/products',
  },
  {
    icon: '💰',
    accent: 'teal',
    title: 'Wallet System',
    body: 'Recharge once. Spend across sessions, courses, and webinars.',
    badge: 'Razorpay · Secure',
    to: '/wallet',
  },
  {
    icon: '🌐',
    accent: 'rose',
    title: 'Multilingual',
    body: 'Full Hindi and English support. More languages coming soon.',
    badge: 'Hindi · English',
  },
]

export default function Home() {
  const navigate = useNavigate()
  const featured = experts.filter((e) => e.featured)

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-teal-l to-white px-6 py-12 sm:px-12 sm:py-14">
        {/* Decorative orbs — clipped by the section's overflow-hidden. */}
        <div className="pointer-events-none absolute -top-15 -right-15 h-50 w-50 rounded-full bg-teal/5 sm:h-75 sm:w-75" />
        <div className="pointer-events-none absolute -bottom-10 right-10 h-30 w-30 rounded-full bg-rose/4 sm:right-20 sm:h-45 sm:w-45" />

        <div className="relative">
          <span className="badge bg-teal-l text-teal">India&apos;s Healing &amp; Astrology Platform</span>
          <h1 className="my-4 max-w-xl text-[clamp(28px,3.5vw,48px)] leading-tight font-extrabold tracking-tight text-slate">
            Connect with verified healers &amp; astrologers
          </h1>
          <p className="mb-7 max-w-md text-base leading-relaxed text-slate-m">
            Chat, call, or video consult with expert healers. Join live webinars, explore courses,
            and find wellness products — all in one platform.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate('/experts')}
              className="btn btn-primary btn-lg"
            >
              Explore Experts
            </button>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="btn btn-outline btn-lg"
            >
              Join as Expert
            </button>
          </div>

          <dl className="mt-8 flex flex-wrap gap-8 border-t border-line pt-7">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-[22px] font-extrabold tracking-tight text-teal">{s.value}</dt>
                <dd className="mt-0.5 text-xs text-slate-m">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon="🧘" accent="teal" value="200+" label="Verified Experts" sub="Healers & Astrologers" />
        <StatCard icon="💬" accent="rose" value="12K+" label="Sessions Completed" sub="This month" />
        <StatCard icon="🎓" accent="violet" value="50+" label="Live Courses" sub="Self-paced" />
        <StatCard icon="⭐" accent="amber" value="4.8" label="Average Rating" sub="Across all services" />
      </section>

      {/* Featured experts */}
      <section>
        <div className="mb-4.5 flex items-center justify-between gap-3">
          <h2 className="text-lg font-extrabold text-slate">Featured Experts</h2>
          <Link to="/experts" className="btn btn-ghost btn-sm">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((e) => (
            <ExpertCard key={e.id} expert={e} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <h2 className="mb-4.5 text-lg font-extrabold text-slate">What we offer</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s) => (
            <FeatureCard
              key={s.title}
              icon={s.icon}
              accent={s.accent}
              title={s.title}
              badge={s.badge}
              onClick={s.to ? () => navigate(s.to) : undefined}
            >
              {s.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section>
        <h2 className="mb-4.5 text-lg font-extrabold text-slate">What people say</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.id} {...r} />
          ))}
        </div>
      </section>
    </div>
  )
}
