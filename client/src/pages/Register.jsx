import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { SectionHeader } from '../components/ui.jsx'

const STEPS = ['Basic Info', 'Domains', 'Credentials', 'Set Rates', 'Submitted']

const DOMAIN_OPTIONS = [
  '⭐ Astrology',
  '🌿 Reiki',
  '🃏 Tarot',
  '🔢 Numerology',
  '🎵 Sound Healing',
  '🧿 Vastu',
  '🧘 Meditation',
  '✨ Pranic Healing',
]

const RATE_ROWS = [
  { key: 'chat', label: '💬 Chat', placeholder: '12' },
  { key: 'voice', label: '📞 Voice Call', placeholder: '15' },
  { key: 'video', label: '📹 Video Call', placeholder: '20' },
]

const EMPTY = {
  name: '',
  email: '',
  mobile: '',
  domains: [],
  bio: '',
  files: [],
  rates: { chat: '', voice: '', video: '' },
}

export default function Register() {
  const { toast } = useApp()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})

  const set = (patch) => setForm((f) => ({ ...f, ...patch }))

  const toggleDomain = (d) =>
    set({
      domains: form.domains.includes(d)
        ? form.domains.filter((x) => x !== d)
        : [...form.domains, d],
    })

  const validateStep1 = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Full name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address'
    if (!/^[+\d][\d\s-]{8,}$/.test(form.mobile)) next.mobile = 'Enter a valid mobile number'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const goNext = () => {
    if (step === 1 && !validateStep1()) return
    if (step === 2 && form.domains.length === 0) {
      toast('Select at least one domain', 'error')
      return
    }
    if (step === 4) {
      toast('Application submitted! Admin reviews in 3–5 days.')
    }
    setStep(step + 1)
  }

  const reset = () => {
    setForm(EMPTY)
    setErrors({})
    setStep(1)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <SectionHeader
        tag="Expert Registration"
        title="Join Sangati Kalyanam"
        subtitle="Free to join. Earn commission on every session. Verified experts only."
      />

      {/* Step indicator */}
      <ol className="mb-7 flex w-full items-start rounded-2xl border border-line bg-white px-5 py-4.5">
        {STEPS.map((label, i) => {
          const n = i + 1
          const done = n < step
          const active = n === step
          return (
            <li key={label} className="flex flex-1 items-start last:flex-none">
              <div className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-[13px] font-bold transition-all ${
                    done || active
                      ? 'border-teal bg-teal text-white'
                      : 'border-line text-slate-l'
                  } ${active ? 'ring-4 ring-teal/15' : ''}`}
                >
                  {done ? '✓' : n}
                </div>
                <span
                  className={`max-w-15 text-center text-[10px] leading-tight font-semibold ${
                    done || active ? 'text-teal' : 'text-slate-l'
                  }`}
                >
                  {label}
                </span>
              </div>
              {n < STEPS.length && (
                <div
                  className={`mt-4 h-0.5 flex-1 transition-colors ${done ? 'bg-teal' : 'bg-line'}`}
                />
              )}
            </li>
          )
        })}
      </ol>

      <div className="card">
        {step === 1 && (
          <div>
            <h2 className="mb-1 text-[17px] font-bold text-slate">Basic Information</h2>
            <p className="mb-5.5 text-[13px] text-slate-m">
              Start with your details. We&apos;ll send an OTP to verify your mobile.
            </p>

            <Field
              label="Full Name"
              value={form.name}
              onChange={(v) => set({ name: v })}
              placeholder="Priya Sharma"
              error={errors.name}
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => set({ email: v })}
              placeholder="priya@example.com"
              error={errors.email}
            />
            <Field
              label="Mobile Number"
              type="tel"
              value={form.mobile}
              onChange={(v) => set({ mobile: v })}
              placeholder="+91 98765 43210"
              error={errors.mobile}
            />

            <button type="button" onClick={goNext} className="btn btn-primary">
              Continue →
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="mb-1 text-[17px] font-bold text-slate">Your Healing Domains</h2>
            <p className="mb-5 text-[13px] text-slate-m">
              Select all domains that apply. You can register across multiple.
            </p>

            <div className="mb-5.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {DOMAIN_OPTIONS.map((d) => {
                const sel = form.domains.includes(d)
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleDomain(d)}
                    aria-pressed={sel}
                    className={`flex w-full cursor-pointer items-center gap-2.5 rounded-[10px] border-[1.5px] px-4 py-3 transition-colors ${
                      sel ? 'border-teal bg-teal-l' : 'border-line bg-transparent hover:border-teal/40'
                    }`}
                  >
                    <span
                      className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border-2 text-xs text-white transition-colors ${
                        sel ? 'border-teal bg-teal' : 'border-line'
                      }`}
                    >
                      {sel && '✓'}
                    </span>
                    <span
                      className={`text-[13px] font-semibold ${sel ? 'text-teal' : 'text-slate-m'}`}
                    >
                      {d}
                    </span>
                  </button>
                )
              })}
            </div>

            <Nav onBack={() => setStep(1)} onNext={goNext} />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="mb-1 text-[17px] font-bold text-slate">Credentials &amp; Bio</h2>
            <p className="mb-5 text-[13px] text-slate-m">
              Upload your certificates and write a bio for your public profile.
            </p>

            <label className="mb-4 block cursor-pointer rounded-xl border-2 border-dashed border-line px-6 py-8 text-center text-slate-m transition-colors hover:border-teal hover:bg-teal-l hover:text-teal">
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => {
                  const names = Array.from(e.target.files).map((f) => f.name)
                  set({ files: names })
                  if (names.length) toast(`${names.length} file(s) selected`)
                }}
              />
              <div className="mb-2 text-4xl">📄</div>
              <div className="text-sm font-semibold">
                Drop certificates here or click to browse
              </div>
              <div className="mt-1 text-xs">PDF, JPG, PNG — max 10MB each</div>
            </label>

            {form.files.length > 0 && (
              <ul className="mb-4 space-y-1">
                {form.files.map((f) => (
                  <li key={f} className="text-xs font-semibold text-teal">
                    ✓ {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="mb-4">
              <label className="field-label" htmlFor="bio">
                Your Bio
              </label>
              <textarea
                id="bio"
                rows="4"
                value={form.bio}
                onChange={(e) => set({ bio: e.target.value })}
                placeholder="Describe your experience, training, and approach to healing..."
                className="field resize-y"
              />
            </div>

            <Nav onBack={() => setStep(2)} onNext={goNext} />
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="mb-1 text-[17px] font-bold text-slate">Set Your Rates</h2>
            <p className="mb-5 text-[13px] text-slate-m">
              Your per-minute consultation fee. Update anytime after approval.
            </p>

            {RATE_ROWS.map((r) => (
              <div
                key={r.key}
                className="mb-3 flex items-center gap-4 rounded-[10px] bg-surface px-4 py-3"
              >
                <div className="flex-1 text-sm font-semibold text-slate">{r.label}</div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-teal">₹</span>
                  <input
                    type="number"
                    min="1"
                    value={form.rates[r.key]}
                    onChange={(e) => set({ rates: { ...form.rates, [r.key]: e.target.value } })}
                    placeholder={r.placeholder}
                    aria-label={`${r.label} rate per minute`}
                    className="w-20 rounded-lg border-[1.5px] border-line px-2.5 py-2 text-center text-sm outline-none focus:border-teal"
                  />
                  <span className="text-xs text-slate-m">/min</span>
                </div>
              </div>
            ))}

            <div className="mt-5 flex gap-2.5">
              <button type="button" onClick={() => setStep(3)} className="btn btn-ghost">
                ← Back
              </button>
              <button type="button" onClick={goNext} className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="px-5 py-8 text-center">
            <div className="mb-3.5 text-[56px]">🎉</div>
            <h2 className="mb-2 text-[22px] font-extrabold text-slate">Application Submitted!</h2>
            <p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-slate-m">
              Our admin team will review within 3–5 business days. You&apos;ll get an SMS and email
              with the result.
            </p>

            <div className="mx-auto mb-6 grid max-w-sm grid-cols-2 gap-2.5 text-left">
              <Summary label="Domains" value={`${form.domains.length} selected`} />
              <Summary
                label="Documents"
                value={form.files.length ? `${form.files.length} uploaded ✓` : 'None'}
              />
              <Summary label="Review time" value="3–5 days" />
              <Summary label="Payout" value="Weekly (Mon)" />
            </div>

            <button type="button" onClick={reset} className="btn btn-primary">
              Register Another Expert
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function Field({ label, value, onChange, placeholder, type = 'text', error }) {
  const id = label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="mb-4">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`field ${error ? 'border-rose' : ''}`}
      />
      {error && <p className="mt-1 text-[11px] font-semibold text-rose">{error}</p>}
    </div>
  )
}

function Nav({ onBack, onNext }) {
  return (
    <div className="flex gap-2.5">
      <button type="button" onClick={onBack} className="btn btn-ghost">
        ← Back
      </button>
      <button type="button" onClick={onNext} className="btn btn-primary">
        Continue →
      </button>
    </div>
  )
}

function Summary({ label, value }) {
  return (
    <div className="rounded-[10px] bg-teal-l px-3.5 py-2.5">
      <div className="text-[11px] text-teal">{label}</div>
      <div className="text-[13px] font-bold text-slate">{value}</div>
    </div>
  )
}
