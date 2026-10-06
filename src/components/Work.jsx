import { useState } from 'react'
import { cases, sectors } from '../data/cases.js'
import SectionHead from './SectionHead.jsx'
import FeaturedCase from './FeaturedCase.jsx'
import CaseCard from './CaseCard.jsx'

export default function Work() {
  const [filter, setFilter] = useState('all')

  const visible = cases.filter((c) => filter === 'all' || c.sector === filter)
  const featured = visible.filter((c) => c.featured)
  const standard = visible.filter((c) => !c.featured)

  return (
    <section id="work" aria-labelledby="work-title" className="py-[clamp(64px,8vw,104px)]">
      <div className="container-x">
        <SectionHead
          as="h1"
          id="work-title"
          eyebrow="Selected work"
          title="Solutions we have built and shipped"
          intro="Each one started with an organisation drowning in paperwork, spreadsheets or WhatsApp threads, and ended with a system that does the admin for them."
        />

        <div role="group" aria-label="Filter by sector" className="mt-10 flex flex-wrap gap-2">
          {sectors.map((s) => {
            const active = filter === s.key
            return (
              <button
                key={s.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(s.key)}
                className={`min-h-[40px] rounded-full border px-4 text-[14px] font-medium transition-colors ${
                  active
                    ? 'border-navy bg-navy text-white'
                    : 'border-line bg-white text-muted hover:border-navy hover:text-navy'
                }`}
              >
                {s.label}
              </button>
            )
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </p>

        <div className="mt-7 grid gap-5 bp820:grid-cols-2">
          {featured.map((c) => (
            <FeaturedCase key={c.id} item={c} />
          ))}
          {standard.map((c, i) => (
            <CaseCard
              key={c.id}
              item={c}
              // The last card of an odd set spans both columns so none sits alone.
              wide={standard.length % 2 === 1 && i === standard.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
