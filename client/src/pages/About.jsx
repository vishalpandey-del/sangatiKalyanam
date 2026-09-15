import { useNavigate } from 'react-router-dom'
import { FeatureCard, SectionHeader } from '../components/ui.jsx'

const PILLARS = [
  {
    icon: '🎯',
    accent: 'teal',
    title: 'Our mission',
    body: 'Make ancient Indian healing sciences and astrology accessible to everyone — verified experts, transparent pricing, modern tools.',
  },
  {
    icon: '🛡️',
    accent: 'rose',
    title: 'Verified experts only',
    body: 'Every healer goes through manual admin verification. Documents checked. Only approved experts go live.',
  },
  {
    icon: '🌐',
    accent: 'violet',
    title: 'Multilingual platform',
    body: 'Full Hindi and English support. Filter experts by language. More languages coming soon.',
  },
  {
    icon: '🔒',
    accent: 'amber',
    title: 'Privacy first',
    body: 'No call or video recordings. Chat history is yours alone. Birth details encrypted and never shared.',
  },
  {
    icon: '💰',
    accent: 'teal',
    title: 'Fair for experts',
    body: 'No upfront fee to join. Experts earn the majority per session. Weekly automated payouts to bank.',
  },
  {
    icon: '⚡',
    accent: 'rose',
    title: 'Always improving',
    body: 'Admin can add domains, adjust commission, publish new content anytime. Platform grows with the community.',
  },
]

export default function About() {
  const navigate = useNavigate()

  return (
    <div>
      <SectionHeader
        tag="About"
        title="Why Sangati Kalyanam"
        subtitle="Born from the belief that healing is a right, not a privilege. Ancient wisdom, modern platform."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {PILLARS.map((p) => (
          <FeatureCard key={p.title} icon={p.icon} accent={p.accent} title={p.title}>
            {p.body}
          </FeatureCard>
        ))}
      </div>

      <section className="w-full rounded-[20px] bg-gradient-to-br from-teal to-teal-m px-6 py-10 text-center text-white sm:px-12">
        <h2 className="mb-2.5 text-[28px] font-extrabold tracking-tight">
          Ready to begin your healing journey?
        </h2>
        <p className="mb-7 text-[15px] opacity-85">
          Join thousands who&apos;ve found clarity, calm, and direction.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/experts')}
            className="btn bg-white px-7 py-3.5 text-sm text-teal hover:opacity-90"
          >
            Explore Experts
          </button>
          <button
            type="button"
            onClick={() => navigate('/register')}
            className="btn border-[1.5px] border-white/35 bg-white/15 px-7 py-3.5 text-sm text-white hover:bg-white/25"
          >
            Join as Expert
          </button>
        </div>
      </section>
    </div>
  )
}
