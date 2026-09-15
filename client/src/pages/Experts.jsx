import { useMemo, useState } from 'react'
import { DOMAINS, experts } from '../data/experts.js'
import { ExpertCard } from '../components/cards.jsx'
import { SectionHeader } from '../components/ui.jsx'

export default function Experts() {
  const [domain, setDomain] = useState('All')
  const [query, setQuery] = useState('')
  const [onlineOnly, setOnlineOnly] = useState(false)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return experts.filter((e) => {
      if (domain !== 'All' && !e.domains.includes(domain)) return false
      if (onlineOnly && !e.online) return false
      if (!q) return true
      return (
        e.name.toLowerCase().includes(q) ||
        e.headline.toLowerCase().includes(q) ||
        e.languages.some((l) => l.toLowerCase().includes(q))
      )
    })
  }, [domain, query, onlineOnly])

  return (
    <div>
      <SectionHeader
        tag="Our Experts"
        title="Find your healer"
        subtitle="Browse verified experts across all healing domains. Filter by domain, language or availability."
      />

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍 Search by name, domain or language"
          aria-label="Search experts"
          className="field max-w-xs bg-white"
        />
        <label className="flex cursor-pointer items-center gap-2 text-[13px] font-semibold text-slate-m">
          <input
            type="checkbox"
            checked={onlineOnly}
            onChange={(e) => setOnlineOnly(e.target.checked)}
            className="h-4 w-4 accent-teal"
          />
          Online now
        </label>
      </div>

      <div className="mb-6 flex w-full flex-wrap gap-2">
        {DOMAINS.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDomain(d)}
            className={`cursor-pointer rounded-full border-[1.5px] px-4 py-1.5 text-[13px] font-semibold transition-colors ${
              domain === d
                ? 'border-teal bg-teal text-white'
                : 'border-line bg-transparent text-slate-m hover:border-teal hover:bg-teal hover:text-white'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <p className="mb-4 text-[13px] text-slate-m">
        {results.length} {results.length === 1 ? 'expert' : 'experts'} available
      </p>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((e) => (
            <ExpertCard key={e.id} expert={e} />
          ))}
        </div>
      ) : (
        <div className="card py-14 text-center">
          <div className="mb-3 text-4xl">🔍</div>
          <h3 className="mb-1 text-[15px] font-bold text-slate">No experts match your filters</h3>
          <p className="text-[13px] text-slate-m">Try a different domain or clear your search.</p>
        </div>
      )}
    </div>
  )
}
