import { faqs } from '../data/catalog.js'
import { useApp } from '../context/AppContext.jsx'
import { FaqList, SectionHeader } from '../components/ui.jsx'

const CHANNELS = [
  {
    icon: '💬',
    title: 'Live chat',
    body: 'Mon–Sat, 9 AM–9 PM. Avg response: 5 min.',
    cta: 'Start Chat',
    message: 'Opening live chat…',
  },
  {
    icon: '✉️',
    title: 'Email support',
    body: 'Detailed queries answered within 24 hours.',
    cta: 'Send Email',
    message: 'Write to support@sangatikalyanam.in',
  },
  {
    icon: '📞',
    title: 'Call us',
    body: 'Mon–Sat, 10 AM–6 PM. For billing & account issues.',
    cta: 'View Number',
    message: 'Support line: 1800-000-000',
  },
]

export default function Help() {
  const { toast } = useApp()

  return (
    <div>
      <SectionHeader
        tag="Help Center"
        title="We're here to help"
        subtitle="Browse FAQs or reach out. Average response: under 5 minutes during business hours."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {CHANNELS.map((c) => (
          <div key={c.title} className="card card-hover text-center">
            <div className="mb-3 text-4xl">{c.icon}</div>
            <h3 className="mb-1.5 text-[15px] font-bold text-slate">{c.title}</h3>
            <p className="mb-4.5 text-[13px] leading-relaxed text-slate-m">{c.body}</p>
            <button type="button" onClick={() => toast(c.message)} className="btn btn-outline btn-sm">
              {c.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="mb-5 text-[17px] font-bold text-slate">Frequently asked questions</h2>
        <FaqList items={faqs} />
      </div>
    </div>
  )
}
