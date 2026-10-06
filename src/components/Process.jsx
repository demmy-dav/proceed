import SectionHead from './SectionHead.jsx'

const steps = [
  {
    title: 'Diagnose',
    body: 'We sit with your team and map where time goes: every form, approval, reminder and report done by hand.',
  },
  {
    title: 'Configure',
    body: 'We set up the Proceed core with your policies, fee structures, roles and approval chains.',
  },
  {
    title: 'Launch',
    body: 'Your staff are trained, your existing records are brought in, and the system goes live.',
  },
  {
    title: 'Evolve',
    body: 'We keep improving it as you grow. New automations are added as new bottlenecks appear.',
  },
]

const model = [
  {
    title: 'One-time setup',
    body: 'A fixed, time-boxed engagement to diagnose, configure and launch your system.',
  },
  {
    title: 'Monthly platform subscription',
    body: 'Hosting, support, security updates and ongoing improvements, so the system keeps pace with your business.',
  },
]

export default function Process() {
  return (
    <section id="how" aria-labelledby="how-title" className="py-[clamp(64px,8vw,104px)]">
      <div className="container-x">
        <SectionHead
          as="h1"
          id="how-title"
          eyebrow="How we work"
          title="Configured for you, not rebuilt from scratch"
          intro="Proceed has a reusable core for records, approval workflows and automated reminders. Your organisation's rules sit on top of it, so you get a tailored system in weeks instead of months."
        />

        <ol className="mt-10 grid border-t-2 border-navy bp480:grid-cols-2 bp820:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="py-6 pr-6">
              <p className="mono-label text-motion">Step {i + 1}</p>
              <h3 className="mt-2.5 text-[20px] font-bold tracking-[-0.01em] text-navy">{s.title}</h3>
              <p className="mt-2 text-[15px] text-muted">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <h3 className="mono-label text-muted">Engagement model</h3>
          <div className="mt-4 grid gap-5 bp700:grid-cols-2">
            {model.map((m) => (
              <div key={m.title} className="rounded-card border border-line p-6 bp480:p-7">
                <p className="font-display text-[19px] font-bold text-navy">{m.title}</p>
                <p className="mt-1.5 text-[15px] text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
