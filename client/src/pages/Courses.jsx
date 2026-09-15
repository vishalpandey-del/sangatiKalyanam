import { courses } from '../data/catalog.js'
import { CourseCard } from '../components/cards.jsx'
import { SectionHeader } from '../components/ui.jsx'

const PERKS = [
  { icon: '🔒', title: 'Lifetime access', body: 'Buy once. No expiry on your courses.' },
  { icon: '📱', title: 'Watch anywhere', body: 'Stream any browser. Pick up where you left off.' },
  {
    icon: '🏅',
    title: 'Certificate on completion',
    body: 'Download certificate after finishing all modules.',
  },
  { icon: '📥', title: 'Wallet purchase', body: 'Buy directly from your wallet balance.' },
]

export default function Courses() {
  return (
    <div>
      <SectionHeader
        tag="Courses"
        title="Learn at your own pace"
        subtitle="Self-paced recorded courses. Buy once, access forever. Admin-managed content."
      />

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PERKS.map((p) => (
          <div key={p.title} className="card card-hover flex items-start gap-3.5 p-5">
            <div className="shrink-0 text-[22px]">{p.icon}</div>
            <div>
              <h3 className="mb-0.5 text-sm font-bold text-slate">{p.title}</h3>
              <p className="text-xs text-slate-m">{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  )
}
