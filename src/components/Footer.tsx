import primaryLogo from '../assets/brand/logos/logogood.png'
import ministryOfLaborLogo from '../assets/brand/logos/partners/ministry-of-labor.png'
import amalNetworkLogo from '../assets/brand/logos/partners/amal-network.png'
import hodHasharonLogo from '../assets/brand/logos/partners/hod-hasharon.png'
import { FaYoutube, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-[var(--accent-sage)]/25 bg-[linear-gradient(180deg,rgba(245,248,247,0.58),rgba(238,243,241,0.82))]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-12 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <img src={primaryLogo} alt="תיכון החממה" className="h-11 w-auto object-contain" />
            <p className="text-sm md:text-base text-[var(--ink-secondary)] leading-relaxed">
              תיכון החממה – עמל הוד השרון | חרש 9, הוד השרון | 09-7884549 | ס.מ 775064 | info@chamama.org
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.youtube.com/channel/UCDA8su_95wVvtmIL0r89nTQ"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-[var(--ink-secondary)] ring-1 ring-[var(--accent-sage)]/30 hover:text-[var(--primary-green-dark)] hover:ring-[var(--primary-green)]/50 transition"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://www.facebook.com/chamama2021"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-[var(--ink-secondary)] ring-1 ring-[var(--accent-sage)]/30 hover:text-[var(--primary-green-dark)] hover:ring-[var(--primary-green)]/50 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/greenhouse_high_school/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-[var(--ink-secondary)] ring-1 ring-[var(--accent-sage)]/30 hover:text-[var(--primary-green-dark)] hover:ring-[var(--primary-green)]/50 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/message/3FOXCDGYKDMPE1"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-[var(--ink-secondary)] ring-1 ring-[var(--accent-sage)]/30 hover:text-[var(--primary-green-dark)] hover:ring-[var(--primary-green)]/50 transition"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-l from-transparent via-[var(--accent-sage)]/30 to-transparent" />

        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
          <img src={ministryOfLaborLogo} alt="משרד העבודה" className="h-8 md:h-9 w-auto object-contain" />
          <img src={amalNetworkLogo} alt="רשת עמל" className="h-9 md:h-10 w-auto object-contain" />
          <img src={hodHasharonLogo} alt="עיריית הוד השרון" className="h-8 md:h-9 w-auto object-contain" />
        </div>

        <p className="text-xs text-[var(--ink-tertiary)]">
          © 2026 תיכון החממה - עמל הוד השרון. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
