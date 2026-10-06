import SectionHead from './SectionHead.jsx'

const sectors = [
  'Schools',
  'Churches & ministries',
  'Small businesses & enterprises',
  'Communities & NGOs',
  'Farms & agribusiness',
  'Executives & founders',
]

export default function Sectors() {
  return (
    <section id="sectors" aria-labelledby="sectors-title" className="py-[clamp(64px,8vw,104px)]">
      <div className="container-x">
        <SectionHead
          id="sectors-title"
          eyebrow="Who we serve"
          title="Built first for institutions that run on paperwork"
        />

        <ul className="mt-10 flex flex-wrap gap-2.5">
          {sectors.map((s, i) => (
            <li
              key={s}
              className={`rounded-full border px-5 py-2.5 font-display font-semibold ${
                i === 0 ? 'border-navy bg-navy text-white' : 'border-line text-onyx'
              }`}
              style={{ fontSize: 'clamp(17px, 2.2vw, 24px)' }}
            >
              {s}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-[14px] text-muted">
          Schools are our lead sector, and the Lead-Way platform is the reference build.
        </p>
      </div>
    </section>
  )
}
