import primaryLogo from '../assets/brand/logos/logogood.png'

export function Header() {
  return (
    <header className="relative z-20 mx-auto flex w-full items-center justify-between px-6 py-6 md:px-10 max-w-7xl">
      <img src={primaryLogo} alt="לוגו חממה תיכון" className="h-12 w-auto md:h-16" />
      <nav className="hidden md:flex gap-8 text-sm font-medium text-[var(--ink-secondary)]">
        <a href="#vision" className="hover:text-[var(--primary-green)] transition">החזון</a>
        <a href="#domains" className="hover:text-[var(--primary-green)] transition">התחומים</a>
        <a href="#ikigai" className="hover:text-[var(--primary-green)] transition">אייקיגאי</a>
      </nav>
    </header>
  )
}
