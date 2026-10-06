import { ArrowRight, BarChart3, BellRing, CheckCircle2, FileText } from 'lucide-react'

const flow = [
  { label: 'Record', Icon: FileText },
  { label: 'Approve', Icon: CheckCircle2 },
  { label: 'Remind', Icon: BellRing },
  { label: 'Report', Icon: BarChart3 },
]

const stats = [
  { value: '6', label: 'Systems built and running' },
  { value: '4', label: 'Sectors served' },
  { value: '1', label: 'Goal: make business proceedings easy' },
]

function WorkflowStrip() {
  return (
    <div className="max-w-[560px]">
      <p id="flow-title" className="mono-label text-white/60">What Proceed automates</p>
      <div className="relative mt-4">
        {/* Connector runs between the first and last icon centres. */}
        <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-white/20">
          <div className="flow-track absolute inset-0">
            <span className="absolute left-0 top-0 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </div>
        </div>

        <ol aria-labelledby="flow-title" className="relative grid grid-cols-4">
        {flow.map(({ label, Icon }, i) => (
          <li key={label} className="relative flex flex-col items-center text-center">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.22] bg-navy text-white">
              <span
                aria-hidden="true"
                className="flow-ring absolute -inset-px rounded-full border border-white/85 bg-white/[0.12]"
                style={{ animationDelay: `${i * 2.5}s` }}
              />
              <Icon size={20} strokeWidth={1.5} aria-hidden="true" className="relative" />
            </span>
            <span className="mono-label mt-3 text-white/50">0{i + 1}</span>
            <span className="mono-label text-white">{label}</span>
          </li>
        ))}
        </ol>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="on-dark relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="blueprint pointer-events-none absolute inset-0" />

      {/* Official mark, large and faint on the right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[18%] top-6 w-[min(760px,110vw)] opacity-[0.08] bp820:-right-[4%] bp820:top-1/2 bp820:w-[600px] bp820:-translate-y-1/2 lg:opacity-[0.12]"
      >
        <img src="/brand/proceed-mark-white.svg" alt="" width="347" height="164" fetchPriority="low" className="hero-mark h-auto w-full" />
      </div>

      <div className="container-x relative pb-12 pt-16 bp760:pb-16 bp760:pt-24">
        <p className="mono-label text-white/70">Technology &amp; Automation · Eleven Works</p>

        <h1
          id="hero-title"
          className="mt-5 max-w-[14ch] font-extrabold leading-[1.02] tracking-[-0.035em]"
          style={{ fontSize: 'clamp(38px, 7.2vw, 76px)' }}
        >
          With Proceed, your business is <span className="text-highlight">fast.</span>
        </h1>

        <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-white/80 bp760:text-[19px]">
          We replace slow, manual administration with intelligent, automated systems: records, approvals,
          reminders and communication that run themselves, so your team can move at the speed of its
          ambition.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/work/" className="btn btn-light">
            See what we&rsquo;ve built
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a href="/book/" className="btn btn-ghost">
            Book a walkthrough
          </a>
        </div>

        <div className="mt-14">
          <WorkflowStrip />
        </div>

        <ul className="mt-14 grid border-t border-white/15 bp560:grid-cols-3">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={`flex items-baseline gap-4 py-5 bp560:block bp560:py-6 ${
                i > 0 ? 'border-t border-white/15 bp560:border-l bp560:border-t-0 bp560:pl-6' : ''
              }`}
            >
              <span className="font-display text-[32px] font-bold leading-none tabular-nums">{s.value}</span>
              <span className="text-[15px] text-white/70 bp560:mt-2 bp560:block">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
