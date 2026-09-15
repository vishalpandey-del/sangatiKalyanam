import { useState } from 'react'

/** Accent name -> tailwind classes, so cards can be themed by data. */
export const ACCENTS = {
  teal: { bg: 'bg-teal-l', text: 'text-teal', solid: 'bg-teal', badge: 'bg-teal-l text-teal' },
  rose: { bg: 'bg-rose-l', text: 'text-rose', solid: 'bg-rose', badge: 'bg-rose-l text-rose' },
  amber: { bg: 'bg-amber-l', text: 'text-amber', solid: 'bg-amber', badge: 'bg-amber-l text-amber' },
  violet: { bg: 'bg-violet-l', text: 'text-violet', solid: 'bg-violet', badge: 'bg-violet-l text-violet' },
}

export const rupees = (n) => `₹${Number(n).toLocaleString('en-IN')}`

export function SectionHeader({ tag, title, subtitle }) {
  return (
    <header className="mb-8">
      <div className="mb-2.5 flex items-center gap-2 text-xs font-bold tracking-wide text-teal">
        <span className="inline-block h-0.5 w-5 rounded-sm bg-teal" />
        {tag}
      </div>
      <h1 className="mb-2.5 text-3xl leading-tight font-extrabold tracking-tight text-slate sm:text-[32px]">
        {title}
      </h1>
      {subtitle && <p className="max-w-xl text-[15px] leading-relaxed text-slate-m">{subtitle}</p>}
    </header>
  )
}

export function StatCard({ icon, accent = 'teal', value, label, sub }) {
  const a = ACCENTS[accent]
  return (
    <div className="card card-hover p-5">
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-xl ${a.bg}`}>
        {icon}
      </div>
      <div className="text-[28px] leading-none font-extrabold tracking-tight text-slate">{value}</div>
      <div className="mt-1 text-[13px] text-slate-m">{label}</div>
      {sub && <div className={`mt-1.5 text-xs font-semibold ${a.text}`}>{sub}</div>}
    </div>
  )
}

export function FeatureCard({ icon, accent = 'teal', title, children, badge, badgeAccent, onClick }) {
  const a = ACCENTS[accent]
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`card card-hover p-5 text-left ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className={`mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl text-xl ${a.bg}`}>
        {icon}
      </div>
      <h3 className="mb-1.5 text-[15px] font-bold text-slate">{title}</h3>
      <p className="text-[13px] leading-relaxed text-slate-m">{children}</p>
      {badge && (
        <span className={`badge mt-2.5 ${ACCENTS[badgeAccent || accent].badge}`}>{badge}</span>
      )}
    </Tag>
  )
}

export function ReviewCard({ stars, text, avatar, name, meta }) {
  return (
    <article className="card card-hover">
      <div
        className="mb-2.5 text-sm tracking-[2px] text-amber"
        aria-label={`${stars} out of 5 stars`}
      >
        {'★'.repeat(stars)}
        <span className="text-line">{'★'.repeat(5 - stars)}</span>
      </div>
      <p className="mb-3.5 text-[13px] leading-relaxed text-slate-m italic">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-l text-base">
          {avatar}
        </div>
        <div>
          <div className="text-[13px] font-bold text-slate">{name}</div>
          <div className="text-[11px] text-slate-l">{meta}</div>
        </div>
      </div>
    </article>
  )
}

export function FlowStep({ icon, title, sub, last }) {
  return (
    <div className="flex items-start">
      <div className="flex w-10 shrink-0 flex-col items-center self-stretch">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-m text-base text-white shadow-[0_4px_12px_rgba(45,155,131,0.25)]">
          {icon}
        </div>
        {!last && (
          <div className="mt-1 w-0.5 flex-1 bg-gradient-to-b from-teal/25 to-transparent" />
        )}
      </div>
      <div className={`pt-1.5 pl-3.5 ${last ? '' : 'pb-5'}`}>
        <div className="mb-0.5 text-sm font-bold text-slate">{title}</div>
        <div className="text-xs leading-relaxed text-slate-m">{sub}</div>
      </div>
    </div>
  )
}

export function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-3 py-4 text-left text-sm font-semibold text-slate"
      >
        {q}
        <span className="shrink-0 text-xl leading-none font-light text-teal">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && <p className="pb-4 text-[13px] leading-relaxed text-slate-m">{a}</p>}
    </div>
  )
}

export function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <div>
      {items.map((item, i) => (
        <FaqItem
          key={item.q}
          q={item.q}
          a={item.a}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  )
}

export function HighlightBox({ icon, title, children }) {
  return (
    <div className="mb-6 flex w-full items-center gap-4 rounded-2xl border border-teal/15 bg-teal-l px-6 py-5">
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="text-sm font-bold text-slate">{title}</div>
        <div className="text-xs text-slate-m">{children}</div>
      </div>
    </div>
  )
}
