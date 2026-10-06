import { ArrowRight } from 'lucide-react'

// Each is struck out: none of them is the whole story.
const notQuite = ['Manual work', 'Paperwork', 'Slow approvals', 'Missed follow‑ups']

export default function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="pt-[clamp(64px,8vw,104px)]">
      <div className="container-x">
        <div className="grid gap-5 bp820:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] bp820:items-end bp820:gap-12">
          <div>
            <p className="mono-label text-motion">The problem</p>
            <h2
              id="problem-title"
              className="mt-3 max-w-[18ch] font-bold leading-[1.1] tracking-[-0.025em] text-navy"
              style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
            >
              You know where you&rsquo;re going. Something keeps slowing you down.
            </h2>
          </div>
          <p className="max-w-[40ch] text-muted">
            It feels like a treadmill: all effort, no distance. There&rsquo;s a gap you can&rsquo;t see, but you
            feel it every day.
          </p>
        </div>

        <div className="mt-12 rounded-card bg-mist p-6 bp480:p-10">
          <p className="mono-label text-muted">There&rsquo;s no one word for it</p>
          <p
            className="mt-5 font-display font-bold leading-[1.15] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(26px, 4.4vw, 52px)' }}
          >
            {notQuite.map((w, i) => (
              <span key={w}>
                <s className="whitespace-nowrap text-muted/60 decoration-motion decoration-[3px]">{w}</s>
                {i < notQuite.length - 1 && (
                  <span aria-hidden="true" className="font-normal text-line">
                    {' / '}
                  </span>
                )}{' '}
              </span>
            ))}
            <span className="mt-2 block text-navy">The problem.</span>
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <p
            className="font-display font-bold leading-[1.15] tracking-[-0.025em] text-navy"
            style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}
          >
            Proceed bridges the gap.
            <span className="block">
              With Proceed, your business is <span className="text-motion">faster.</span>
            </span>
          </p>
          <a
            href="/how-we-work/"
            className="group inline-flex items-center gap-1.5 rounded-full py-1 text-[15px] font-semibold text-navy underline decoration-line underline-offset-4 hover:decoration-motion"
          >
            See how we work
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
