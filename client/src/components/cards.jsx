import { useApp } from '../context/AppContext.jsx'
import { ACCENTS, rupees } from './ui.jsx'

export function ExpertCard({ expert }) {
  const { spend } = useApp()

  // A consultation is billed per minute; we charge one minute to start.
  const start = (mode) => spend(expert.rate, `${mode} · ${expert.name}`)

  return (
    <article className="card card-hover relative p-[22px] text-center">
      <span
        className={`absolute top-4 right-4 h-2.5 w-2.5 rounded-full ${
          expert.online ? 'bg-teal ring-3 ring-teal-l' : 'bg-slate-l'
        }`}
        title={expert.online ? 'Online now' : 'Offline'}
      />

      <div className="mx-auto mb-3 flex h-17 w-17 items-center justify-center rounded-full border-3 border-teal-l bg-gradient-to-br from-teal to-teal-m text-[28px]">
        {expert.avatar}
      </div>

      <h3 className="mb-0.5 text-[15px] font-bold text-slate">{expert.name}</h3>
      <p className="mb-2 text-xs font-semibold text-teal">
        {expert.headline} · {expert.experience} yrs
      </p>

      <div className="mb-2 flex flex-wrap justify-center gap-1">
        {expert.languages.map((l) => (
          <span key={l} className="tag">
            {l}
          </span>
        ))}
      </div>

      <p className="mb-2 text-xs text-slate-m">
        ⭐ {expert.rating} ({expert.reviews} reviews)
      </p>

      <p className="mt-2.5 mb-3.5 text-sm font-bold text-slate">
        {rupees(expert.rate)}
        <span className="text-xs font-normal text-slate-m">/min</span>
      </p>

      <div className="flex gap-1.5">
        <button
          type="button"
          onClick={() => start('Chat')}
          className="flex-1 cursor-pointer rounded-[9px] bg-teal-l px-1 py-1.5 text-[11px] font-bold text-teal transition-opacity hover:opacity-80"
        >
          💬 Chat
        </button>
        <button
          type="button"
          onClick={() => start('Call')}
          className="flex-1 cursor-pointer rounded-[9px] bg-violet-l px-1 py-1.5 text-[11px] font-bold text-violet transition-opacity hover:opacity-80"
        >
          📞 Call
        </button>
        <button
          type="button"
          onClick={() => start('Video')}
          className="flex-1 cursor-pointer rounded-[9px] bg-rose-l px-1 py-1.5 text-[11px] font-bold text-rose transition-opacity hover:opacity-80"
        >
          📹 Video
        </button>
      </div>
    </article>
  )
}

/** Full class strings so Tailwind can statically detect them. */
const BANNERS = {
  teal: 'from-teal-l',
  rose: 'from-rose-l',
  amber: 'from-amber-l',
  violet: 'from-violet-l',
}

export function WebinarCard({ webinar }) {
  const { spend } = useApp()
  const a = ACCENTS[webinar.accent]

  return (
    <article className="w-full overflow-hidden rounded-2xl border border-line bg-white transition-all duration-200 hover:border-violet/25 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
      <div
        className={`flex h-22 items-center justify-center bg-gradient-to-br to-white text-[44px] ${BANNERS[webinar.accent]}`}
      >
        {webinar.icon}
      </div>
      <div className="px-4.5 py-4">
        <div className={`mb-1.5 text-[10px] font-bold tracking-wide uppercase ${a.text}`}>
          {webinar.category}
        </div>
        <h3 className="mb-2 text-sm leading-snug font-bold text-slate">{webinar.title}</h3>
        <div className="mb-3.5 flex flex-wrap gap-2.5 text-[11px] text-slate-m">
          <span>📅 {webinar.date}</span>
          <span>⏱ {webinar.duration}</span>
          <span>👥 {webinar.seats}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-base font-extrabold text-slate">{rupees(webinar.price)}</div>
          <button
            type="button"
            onClick={() => spend(webinar.price, `Webinar · ${webinar.title}`)}
            className={`btn btn-sm text-white ${a.solid} hover:opacity-90`}
          >
            Join
          </button>
        </div>
      </div>
    </article>
  )
}

export function CourseCard({ course }) {
  const { spend } = useApp()

  return (
    <article className="card card-hover flex items-start gap-4 p-5">
      <div className="flex h-17 w-17 shrink-0 items-center justify-center rounded-2xl bg-teal-l text-[28px]">
        {course.thumb}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 text-[10px] font-bold tracking-wide text-teal uppercase">
          {course.category}
        </div>
        <h3 className="mb-1 text-sm leading-snug font-bold text-slate">{course.title}</h3>
        <p className="mb-2.5 text-[11px] text-slate-m">{course.meta}</p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-[15px] font-extrabold text-slate">{rupees(course.price)}</div>
          <button
            type="button"
            onClick={() => spend(course.price, `Course · ${course.title}`)}
            className="btn btn-outline btn-sm"
          >
            Enroll
          </button>
        </div>
      </div>
    </article>
  )
}

export function ProductCard({ product }) {
  const { addToCart } = useApp()

  return (
    <article className="w-full overflow-hidden rounded-2xl border border-line bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className="flex h-30 items-center justify-center bg-gradient-to-br from-teal-l to-amber-l text-[52px]">
        {product.img}
      </div>
      <div className="px-4 py-3.5">
        <h3 className="mb-1 text-sm font-bold text-slate">{product.name}</h3>
        <p className="mb-3 text-xs leading-relaxed text-slate-m">{product.desc}</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-base font-extrabold text-teal">{rupees(product.price)}</div>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="btn btn-outline btn-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export function WalletPanel({ onAdd, onHistory }) {
  const { balance } = useApp()

  return (
    <div className="relative w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-teal to-teal-m px-8 py-7 text-white">
      <div className="absolute -top-7 -right-7 h-35 w-35 rounded-full bg-white/6" />
      <div className="absolute -bottom-10 right-10 h-25 w-25 rounded-full bg-white/4" />

      <div className="relative">
        <div className="mb-1.5 text-xs opacity-75">My Wallet Balance</div>
        <div className="mb-5 text-[40px] leading-none font-extrabold tracking-tight">
          {rupees(balance)}
        </div>

        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={onAdd}
            className="flex-1 cursor-pointer rounded-[10px] border-[1.5px] border-white/40 bg-white/20 p-2.5 text-[13px] font-bold text-white transition-colors hover:bg-white/30"
          >
            + Add Money
          </button>
          <button
            type="button"
            onClick={onHistory}
            className="flex-1 cursor-pointer rounded-[10px] border-[1.5px] border-white/20 bg-transparent p-2.5 text-[13px] font-bold text-white/80 transition-colors hover:bg-white/10"
          >
            History
          </button>
        </div>

        <div className="mt-4.5 flex gap-5 border-t border-white/15 pt-4">
          <div>
            <div className="text-base font-extrabold">₹3,400</div>
            <div className="mt-0.5 text-[11px] opacity-65">Total spent</div>
          </div>
          <div>
            <div className="text-base font-extrabold">14</div>
            <div className="mt-0.5 text-[11px] opacity-65">Sessions</div>
          </div>
          <div>
            <div className="text-base font-extrabold">3</div>
            <div className="mt-0.5 text-[11px] opacity-65">Courses</div>
          </div>
        </div>
      </div>
    </div>
  )
}
