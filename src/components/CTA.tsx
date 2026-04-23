import { TextHighlight } from './TextHighlight'
import { useState } from 'react'
import patternCTA from '../assets/brand/patterns/pattern-cta.png'

export function CTA() {
  const [hoveredCTA, setHoveredCTA] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green)] to-[var(--primary-green-dark)]" />
        <img 
          src={patternCTA} 
          alt="" 
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div 
          className="relative z-10 p-12 md:p-16 text-center space-y-6"
          onMouseEnter={() => setHoveredCTA(true)}
          onMouseLeave={() => setHoveredCTA(false)}
        >
          <h3 className="font-brand text-3xl md:text-4xl text-white">
            מוזמנים להצטרף לקהילה שלנו
          </h3>
          <div className="text-lg opacity-90 max-w-2xl mx-auto text-white">
            <TextHighlight 
              text="בתיכון החממה כל תלמיד מוצא את הדרך שלו. בואו לגלות מה מחכה לכם."
              isHovered={hoveredCTA}
              textClassName="text-white"
              textColor="#ffffff"
            />
          </div>
          <button className="px-8 py-3 bg-white text-[var(--primary-green)] font-semibold rounded-lg hover:shadow-lg transition duration-300 hover:-translate-y-0.5">
            צרו קשר
          </button>
        </div>
      </div>
    </section>
  )
}
