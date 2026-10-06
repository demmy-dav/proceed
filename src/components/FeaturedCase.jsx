import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { sectorLabel } from '../data/cases.js'
import { StackTags } from './CaseCard.jsx'

export default function FeaturedCase({ item }) {
  const titleId = `${item.id}-title`
  const host = item.url ? new URL(item.url).host : null

  return (
    <article
      aria-labelledby={titleId}
      className="on-dark grid gap-10 rounded-card bg-navy p-6 text-white bp480:p-8 bp820:col-span-2 bp820:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] bp820:gap-12 lg:p-10"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="mono-label text-white/70">
            {item.id}
            {item.kind && <span> · {item.kind}</span>}
          </p>
          <span className="flex flex-wrap items-center gap-2">
            <span className="mono-label rounded-full bg-white/10 px-2.5 py-1 text-white">
              {item.tag ?? sectorLabel(item.sector)}
            </span>
            {item.status === 'live' && (
              <span className="mono-label inline-flex items-center gap-1.5 rounded-full bg-live px-2.5 py-1 text-white">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white" />
                Live
              </span>
            )}
          </span>
        </div>

        <div>
          <h3
            id={titleId}
            className="font-bold leading-[1.15] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(26px, 3vw, 34px)' }}
          >
            {item.title}
          </h3>
          <p className="mt-3 text-white/75">{item.summary}</p>
        </div>

        <ul className="grid gap-2 text-[15px]">
          {item.features.map((f) => (
            <li key={f} className="grid grid-cols-[16px_minmax(0,1fr)] gap-2.5">
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" className="mt-[4px] text-white/60" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <StackTags stack={item.stack} dark />

        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 self-start rounded-full py-1 text-[15px] font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            Visit {host}
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>

      {item.metrics?.length > 0 && (
        <div className="self-start">
          <p id={`${item.id}-metrics`} className="mono-label text-white/70">
            Evaluation results
          </p>
          <dl aria-labelledby={`${item.id}-metrics`} className="mt-4 grid grid-cols-2 border-t border-white/15">
            {item.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`flex flex-col-reverse py-5 ${i % 2 === 1 ? 'border-l border-white/15 pl-5' : 'pr-5'} ${
                  i >= 2 ? 'border-t border-white/15' : ''
                }`}
              >
                <dt className="mt-1.5 text-[13px] leading-snug text-white/70">{m.label}</dt>
                <dd className="font-display font-bold leading-none tracking-[-0.02em] tabular-nums" style={{ fontSize: 'clamp(26px, 3vw, 32px)' }}>
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
          {item.metricsNote && (
            <p className="border-t border-white/15 pt-4 text-[13px] text-white/60">{item.metricsNote}</p>
          )}
        </div>
      )}
    </article>
  )
}
