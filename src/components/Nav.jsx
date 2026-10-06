// Root-relative links so they work from every page.
const links = [
  { href: '/work/', label: 'Work', page: 'work' },
  { href: '/how-we-work/', label: 'How we work', page: 'how' },
  { href: '/#sectors', label: 'Sectors' },
]

export default function Nav({ page }) {
  return (
    <header className="on-dark sticky top-0 z-50 border-b border-white/10 bg-navy">
      <nav aria-label="Primary" className="container-x flex h-16 items-center gap-6">
        <a href="/" className="-mx-1 flex shrink-0 items-center rounded-full px-1 py-2">
          <img
            src="/brand/proceed-logo-white.svg"
            alt="Proceed"
            width="126"
            height="28"
            className="h-7 w-auto"
          />
        </a>

        <ul className="ml-auto hidden items-center gap-7 bp640:flex">
          {links.map((link) => {
            const current = link.page && link.page === page
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={current ? 'page' : undefined}
                  className={`rounded-full text-[15px] font-medium transition-colors hover:text-white ${
                    current ? 'text-white underline decoration-white/40 underline-offset-[6px]' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="/book/"
          className="btn btn-light ml-auto min-h-[40px] px-4 text-sm bp640:ml-0"
        >
          Book a walkthrough
        </a>
      </nav>
    </header>
  )
}
