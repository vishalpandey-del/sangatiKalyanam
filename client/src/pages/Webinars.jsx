import { webinars } from '../data/catalog.js'
import { WebinarCard } from '../components/cards.jsx'
import { FeatureCard, SectionHeader } from '../components/ui.jsx'

export default function Webinars() {
  return (
    <div>
      <SectionHeader
        tag="Webinars"
        title="Live sessions & workshops"
        subtitle="Join expert-led group sessions. Attend live or watch the replay. Certificate included."
      />

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <FeatureCard icon="🎥" accent="teal" title="Microsoft Teams">
          All sessions run on Teams. No extra app — join directly from here.
        </FeatureCard>
        <FeatureCard icon="🔁" accent="rose" title="30-day Replay">
          Watch the recording for up to 30 days after the live session ends.
        </FeatureCard>
        <FeatureCard icon="🏅" accent="violet" title="Certificate">
          Digital participation certificate issued after every completed session.
        </FeatureCard>
      </div>

      <h2 className="mb-4 text-base font-bold text-slate">Upcoming Sessions</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {webinars.map((w) => (
          <WebinarCard key={w.id} webinar={w} />
        ))}
      </div>
    </div>
  )
}
