import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { sectorLabel } from '../data/cases.js'

export function StackTags({ stack, dark = false }) {
  if (!stack?.length) return null
  return (
    <ul aria-label="Stack" className="flex flex-wrap gap-1.5">
      {stack.map((t) => (
        <li
          key={t}
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[12px] ${
            dark ? 'border-white/20 text-white/75' : 'border-line text-muted'
          }`}
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

// The title link already covers the whole card, so this row is visual only.
// Without a url it shows a placeholder in `npm run dev` and nothing in production.
function ProjectLink({ url }) {
  if (!url) {
    if (!import.meta.env.DEV) return null
    return (
      <p className="rounded-card border border-dashed border-line px-3 py-2 font-mono text-[12px] text-muted">
        Link slot: set <code>url</code> for this project in src/data/cases.js
      </p>
    )
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center gap-1.5 self-start text-[15px] font-semibold text-navy underline decoration-line underline-offset-4 group-hover:decoration-motion"
    >
      Visit {new URL(url).host}
      <ArrowUpRight size={16} strokeWidth={1.5} />
    </span>
  )
}

export default function CaseCard({ item, wide = false }) {
  const titleId = `${item.id}-title`

  return (
    <article
      aria-labelledby={titleId}
      className={`group relative flex flex-col gap-5 rounded-card border border-line bg-white p-6 transition-colors duration-150 hover:border-motion bp480:p-7 ${
        wide ? 'bp820:col-span-2' : ''
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="mono-label text-muted">
          {item.id}
          {item.kind && <span> · {item.kind}</span>}
        </p>
        <span className="flex items-center gap-2">
          <span className="mono-label rounded-full bg-mist px-2.5 py-1 text-navy">
            {item.tag ?? sectorLabel(item.sector)}
          </span>
          {item.url && (
            <ArrowUpRight
              size={20}
              strokeWidth={1.5}
              aria-hidden="true"
              className="text-muted transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-motion"
            />
          )}
        </span>
      </div>

      {item.image && (
        <img
          src={item.image.src}
          width={item.image.width}
          height={item.image.height}
          alt={item.image.alt}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] h-auto w-full rounded-card border border-line object-cover"
        />
      )}

      <div>
        <h3 id={titleId} className="text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-navy bp480:text-[24px]">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:rounded-card"
            >
              {item.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p className={`mt-3 text-muted ${wide ? 'max-w-[70ch]' : ''}`}>{item.summary}</p>
      </div>

      <ul className="grid gap-2 text-[15px] text-onyx">
        {item.features.map((f) => (
          <li key={f} className="grid grid-cols-[16px_minmax(0,1fr)] gap-2.5">
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" className="mt-[4px] text-motion" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto grid gap-4 pt-1">
        <StackTags stack={item.stack} />
        <ProjectLink url={item.url} />
      </div>
    </article>
  )
}
