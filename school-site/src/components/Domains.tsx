import { TextHighlight } from './TextHighlight'
import { useState } from 'react'
import iconCuriosity from '../assets/brand/icons/icon-curiosity.svg'
import iconIdentity from '../assets/brand/icons/icon-identity.svg'
import iconResponsibility from '../assets/brand/icons/icon-responsibility.svg'

export function Domains() {
  const [hoveredDomain, setHoveredDomain] = useState<number | null>(null)

  const domains = [
    {
      principle: 'עקרון 1 – כל אדם הוא שונה',
      domain: 'תחום הליבה',
      description: 'בליבת החממה נמצא המימד האישי. כל אחד מאתנו הוא שונה. לכל אחת ישנם תחומי עניין, מומחיות וקצב ייחודיים. בתיכון אנו עוסקים בהתפתחות אישית.',
      icon: iconIdentity,
    },
    {
      principle: 'עקרון 2 – אפשר ללמוד הכל',
      domain: 'תחום הלמידה',
      description: 'כל תלמיד יכול ללמוד כל דבר בהתאם לצורכיו ותעניינו. אנו מאמינים בכוח של עצמאות בלמידה ובביצוע בחירות מודעות.',
      icon: iconCuriosity,
    },
    {
      principle: 'עקרון 3 – יזמות',
      domain: 'תחום הקהילה',
      description: 'היזמות היא ליבנו. אנו מעודדים את התלמידים ליזום פרויקטים, להוביל קבוצות ולתרום לקהילה.',
      icon: iconResponsibility,
    },
  ]

  return (
    <section id="domains" className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-brand text-4xl md:text-5xl text-[var(--ink-primary)] mb-6 text-center">
          שלושת תחומי החממה
        </h2>
        <p className="text-lg text-[var(--ink-secondary)] mb-12 text-center">
          תיכון החממה פועל בשלושה תחומים, המבוססים על שלושה עקרונות
        </p>

        <div className="space-y-6">
          {domains.map((item, idx) => (
            <div
              key={`domain-${idx}`}
              className="bg-white/50 backdrop-blur-sm border border-white/50 rounded-xl p-6 md:p-8 transition-all duration-300 flex gap-6 cursor-default"
              onMouseEnter={() => setHoveredDomain(idx)}
              onMouseLeave={() => setHoveredDomain(null)}
            >
              <div className="shrink-0">
                <img src={item.icon} alt="" aria-hidden="true" className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h3 className="font-brand text-xl text-[var(--primary-green)] mb-1">{item.principle}</h3>
                <p className="text-xs font-semibold text-[var(--accent-sage)] mb-3">{item.domain}</p>
                <TextHighlight text={item.description} isHovered={hoveredDomain === idx} />
              </div>
            </div>
          ))}

          <div className="pt-6 text-center">
            <button className="px-6 py-2 text-[var(--primary-green)] font-semibold hover:underline transition">
              עוד על התחומים →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
