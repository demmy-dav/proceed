export default function Footer() {
  return (
    <footer className="pb-14">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-line pt-6 text-[14px] text-muted">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <img
            src="/brand/proceed-logo-navy.svg"
            alt="Proceed"
            width="99"
            height="22"
            loading="lazy"
            decoding="async"
            className="h-[22px] w-auto"
          />
          <p>&copy; 2026 Proceed, a brand of Eleven Works</p>
        </div>
        <p className="mono-label">Speed · Simplicity · Evolution · Trust</p>
      </div>
    </footer>
  )
}
