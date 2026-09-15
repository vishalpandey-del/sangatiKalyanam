import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { WalletPanel } from '../components/cards.jsx'
import { FlowStep, SectionHeader } from '../components/ui.jsx'

const MODES = [
  {
    icon: '💬',
    accent: 'teal',
    title: 'Chat',
    body: 'Text-based. Full history saved and searchable in your profile.',
    cta: 'Start Chat',
    btn: 'btn-primary',
    rate: 12,
  },
  {
    icon: '📞',
    accent: 'violet',
    title: 'Voice Call',
    body: 'Crystal-clear audio. Platform-native. Not recorded.',
    cta: 'Start Call',
    btn: 'bg-violet text-white hover:opacity-90',
    rate: 15,
  },
  {
    icon: '📹',
    accent: 'rose',
    title: 'Video Call',
    body: 'Face-to-face via Microsoft Teams. Not recorded.',
    cta: 'Start Video',
    btn: 'bg-rose text-white hover:opacity-90',
    rate: 20,
  },
]

const ACCENT_BG = { teal: 'bg-teal-l', violet: 'bg-violet-l', rose: 'bg-rose-l' }

export default function Consultation() {
  const navigate = useNavigate()
  const { spend, toast } = useApp()

  return (
    <div>
      <SectionHeader
        tag="Consultation"
        title="1-on-1 sessions"
        subtitle="Per-minute billing from your wallet. One active session at a time. Auto-assign or choose your expert."
      />

      <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <WalletPanel onAdd={() => navigate('/wallet')} onHistory={() => navigate('/wallet')} />

        <div className="card">
          <h2 className="mb-4.5 text-[15px] font-bold text-slate">How billing works</h2>
          <FlowStep
            icon="📱"
            title="Choose expert & format"
            sub="Browse by domain or auto-assign best available."
          />
          <FlowStep
            icon="⏱️"
            title="Session starts — timer begins"
            sub="Wallet deducted every minute. Live timer on screen."
          />
          <FlowStep
            icon="⚠️"
            title="Low balance warning"
            sub="Notified when balance drops below 5 minutes."
          />
          <FlowStep icon="⭐" title="Rate & review" sub="Chat history saved. Review your expert." last />
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {MODES.map((m) => (
          <div key={m.title} className="card card-hover">
            <div
              className={`mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl text-xl ${ACCENT_BG[m.accent]}`}
            >
              {m.icon}
            </div>
            <h3 className="mb-1.5 text-[15px] font-bold text-slate">{m.title}</h3>
            <p className="mb-2 text-[13px] leading-relaxed text-slate-m">{m.body}</p>
            <p className="mb-3.5 text-xs font-semibold text-teal">From ₹{m.rate}/min</p>
            <button
              type="button"
              onClick={() => spend(m.rate, `${m.title} session`)}
              className={`btn btn-sm ${m.btn}`}
            >
              {m.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="card border-teal/15 bg-teal-l">
        <div className="flex flex-wrap items-center gap-5">
          <div className="text-4xl">⚡</div>
          <div className="min-w-50 flex-1">
            <h3 className="mb-1 text-[15px] font-bold text-slate">Smart Expert Matching</h3>
            <p className="text-[13px] text-slate-m">
              If your preferred expert is busy — see next available slot, switch domain, or
              auto-assign instantly. No forced queues.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              toast('Finding the best available expert for you…')
              navigate('/experts')
            }}
            className="btn btn-primary"
          >
            Find Expert Now
          </button>
        </div>
      </div>
    </div>
  )
}
