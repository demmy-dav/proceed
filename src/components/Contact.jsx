import { CalendarDays, Check, Mail, MessageCircle } from 'lucide-react'
import { email, whatsappDisplay, whatsappUrl } from '../data/contact.js'

const offers = [
  'Live demo of the Lead-Way school platform',
  'A map of your admin bottlenecks',
  'A setup and subscription estimate',
]

export default function Contact() {
  return (
    <section id="talk" aria-labelledby="talk-title" className="pb-[clamp(64px,8vw,104px)]">
      <div className="container-x">
        <div className="on-dark grid gap-10 rounded-card bg-navy p-6 text-white bp480:p-10 bp760:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] bp760:items-center lg:p-14">
          <div>
            <h2
              id="talk-title"
              className="max-w-[18ch] font-extrabold leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(28px, 3.8vw, 44px)' }}
            >
              Show us the process that slows you down.
            </h2>
            <p className="mt-4 max-w-[46ch] text-white/75">
              Book a 30-minute walkthrough. We&rsquo;ll look at how your records, approvals and reminders run
              today and show you what they look like on Proceed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/book/" className="btn btn-light">
                <CalendarDays size={20} strokeWidth={1.5} aria-hidden="true" />
                Pick a time
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <MessageCircle size={20} strokeWidth={1.5} aria-hidden="true" />
                WhatsApp
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a href={`mailto:${email}`} className="btn btn-ghost">
                <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
                Email
              </a>
            </div>

            <p className="mt-5 break-words font-mono text-[12px] text-white/60">
              {whatsappDisplay} · {email}
            </p>
          </div>

          <div className="rounded-card border border-white/15 p-6">
            <p className="mono-label text-white/70">Talk to the founder</p>
            <p className="mt-2 font-display text-[20px] font-bold">Oluwademilade Akiode</p>
            <p className="text-[14px] text-white/70">Founder &amp; Technical Lead, Proceed · Ibadan, Nigeria</p>
            <ul className="mt-5 grid gap-2 text-[15px]">
              {offers.map((o) => (
                <li key={o} className="grid grid-cols-[16px_minmax(0,1fr)] gap-2.5">
                  <Check size={16} strokeWidth={1.5} aria-hidden="true" className="mt-[4px] text-white/60" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
