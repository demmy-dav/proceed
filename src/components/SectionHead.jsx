export default function SectionHead({ id, eyebrow, title, intro, as: Heading = 'h2' }) {
  return (
    <div className="grid gap-5 bp820:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] bp820:items-end bp820:gap-12">
      <div>
        <p className="mono-label text-motion">{eyebrow}</p>
        <Heading
          id={id}
          className="mt-3 max-w-[20ch] font-bold leading-[1.1] tracking-[-0.025em] text-navy"
          style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
        >
          {title}
        </Heading>
      </div>
      {intro && <p className="max-w-[46ch] text-muted">{intro}</p>}
    </div>
  )
}
