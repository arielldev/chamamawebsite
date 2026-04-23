import { TextHighlight } from './TextHighlight'
import { useState } from 'react'
import pattern1 from '../assets/brand/patterns/pattern-1.png'

export function Vision() {
  const [hoveredVision, setHoveredVision] = useState(false)

  return (
    <section id="vision" className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="relative order-2 md:order-1">
          <img 
            src={pattern1} 
            alt="Pattern" 
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Content Right */}
        <div 
          className="order-1 md:order-2 space-y-6"
          onMouseEnter={() => setHoveredVision(true)}
          onMouseLeave={() => setHoveredVision(false)}
        >
          <h2 className="font-brand text-4xl md:text-5xl text-[var(--ink-primary)]">
            חזון בית הספר
          </h2>
          <div className="space-y-4">
            <TextHighlight 
              text="החממה היא מרחב בטוח בו כל לומד מתפתח כאדם שלם, בו כל לומדת מגשימה ומבטאת את הכוחות שבה."
              isHovered={hoveredVision}
            />
            <TextHighlight 
              text="וביחד אנו מתנסים ביזמות שמעצבת עתיד משותף, הבנוי על רווחתם של אנשים, קהילות וכדור הארץ."
              isHovered={hoveredVision}
            />
          </div>
          <button className="px-6 py-2 text-[var(--primary-green)] font-semibold hover:underline transition">
            עוד על התיכון →
          </button>
        </div>
      </div>
    </section>
  )
}
