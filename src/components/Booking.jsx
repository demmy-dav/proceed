import { useEffect, useRef } from 'react'
import { Globe, Mail, MessageCircle } from 'lucide-react'
import { calLink, email, whatsappUrl } from '../data/contact.js'

const CAL_SCRIPT = 'https://app.cal.com/embed/embed.js'
const NAMESPACE = 'walkthrough'

// Cal.com's official loader: queues calls until embed.js arrives.
function loadCal() {
  if (window.Cal) return window.Cal
  const C = window
  const push = (a, ar) => a.q.push(ar)
  C.Cal = function () {
    const cal = C.Cal
    const ar = arguments
    if (!cal.loaded) {
      cal.ns = {}
      cal.q = cal.q || []
      document.head.appendChild(document.createElement('script')).src = CAL_SCRIPT
      cal.loaded = true
    }
    if (ar[0] === 'init') {
      const api = function () {
        push(api, arguments)
      }
      const namespace = ar[1]
      api.q = api.q || []
      if (typeof namespace === 'string') {
        cal.ns[namespace] = cal.ns[namespace] || api
        push(cal.ns[namespace], ar)
        push(cal, ['initNamespace', namespace])
      } else push(cal, ar)
      return
    }
    push(cal, ar)
  }
  return C.Cal
}

function CalendarEmbed() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const Cal = loadCal()
    if (!Cal.ns?.[NAMESPACE]) Cal('init', NAMESPACE, { origin: 'https://app.cal.com' })
    Cal.ns[NAMESPACE]('inline', {
      elementOrSelector: el,
      calLink,
      config: { layout: 'month_view', theme: 'light' },
    })
    Cal.ns[NAMESPACE]('ui', {
      theme: 'light',
      layout: 'month_view',
      hideEventTypeDetails: false,
      cssVarsPerTheme: { light: { 'cal-brand': '#0B2559' } },
    })
    // StrictMode mounts twice in dev; clear so only one calendar remains.
    return () => {
      el.innerHTML = ''
    }
  }, [])

  return <div ref={ref} className="min-h-[640px] w-full overflow-auto" />
}

function NotSetUp() {
  return (
    <div className="rounded-card border border-dashed border-line p-6 text-center bp480:p-10">
      <p className="font-display text-[20px] font-bold text-navy">Online booking is coming soon.</p>
      <p className="mx-auto mt-2 max-w-[44ch] text-muted">
        In the meantime, message us and we&rsquo;ll find a time that works for you.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-navy text-white hover:bg-deep"
        >
          <MessageCircle size={20} strokeWidth={1.5} aria-hidden="true" />
          WhatsApp
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a href={`mailto:${email}`} className="btn border border-line text-navy hover:border-navy">
          <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
          Email
        </a>
      </div>
      {import.meta.env.DEV && (
        <p className="mt-6 font-mono text-[12px] text-muted">
          Dev only: set <code>calLink</code> in src/data/contact.js to show the calendar.
        </p>
      )}
    </div>
  )
}

export default function Booking() {
  return (
    <section id="book" aria-labelledby="book-title" className="py-[clamp(64px,8vw,104px)]">
      <div className="container-x">
        <div className="grid gap-5 bp820:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] bp820:items-end bp820:gap-12">
          <div>
            <p className="mono-label text-motion">Book a walkthrough</p>
            <h1
              id="book-title"
              className="mt-3 max-w-[18ch] font-bold leading-[1.1] tracking-[-0.025em] text-navy"
              style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
            >
              Pick a time that works for you.
            </h1>
          </div>
          <div className="text-muted">
            <p className="max-w-[44ch]">
              30 minutes on a video call. Show us how your records, approvals and reminders run today.
            </p>
            <p className="mt-3 flex items-center gap-2 text-[14px]">
              <Globe size={16} strokeWidth={1.5} aria-hidden="true" className="text-motion" />
              Times show in your own timezone.
            </p>
          </div>
        </div>

        <div className="mt-10">
          {calLink ? (
            <div className="overflow-hidden rounded-card border border-line bg-white">
              <CalendarEmbed />
            </div>
          ) : (
            <NotSetUp />
          )}
        </div>

        {calLink && (
          <p className="mt-5 text-[14px] text-muted">
            Can&rsquo;t find a time?{' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy underline decoration-line underline-offset-4 hover:decoration-motion"
            >
              Message us on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{' '}
            or{' '}
            <a
              href={`mailto:${email}`}
              className="font-semibold text-navy underline decoration-line underline-offset-4 hover:decoration-motion"
            >
              email us
            </a>
            .
          </p>
        )}
      </div>
    </section>
  )
}
