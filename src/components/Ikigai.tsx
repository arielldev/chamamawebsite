import { TextHighlight } from './TextHighlight'
import { useState } from 'react'
import ikigaiImage from '../assets/brand/elements/איקיגאי.png'

export function Ikigai() {
  const [hoveredIkigai, setHoveredIkigai] = useState(false)

  return (
    <section id="ikigai" className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content Left */}
        <div 
          className="space-y-6"
          onMouseEnter={() => setHoveredIkigai(true)}
          onMouseLeave={() => setHoveredIkigai(false)}
        >
          <h2 className="font-brand text-4xl md:text-5xl text-[var(--ink-primary)]">
            生き甲斐 IKIGAI
          </h2>
          <div className="space-y-4">
            <TextHighlight 
              text={'האיקיגאי הוא תפיסה או דרך חיים בתרבות יפן. המשמעות המילולית של המושג היא "הסיבה להיות ולחיות".'}
              isHovered={hoveredIkigai}
            />
            <TextHighlight 
              text={'זו המשמעות והדרך שאנו פוסעים בה, ושני אלו, המשמעות והדרך הם סובייקטיביים, משתנים בין אדם לאדם ונתונים לשינוי מקום וזמן.'}
              isHovered={hoveredIkigai}
            />
            <TextHighlight 
              text={'לכן לכל אחת ואחד מאיתנו איקיגאי משלו. פעולה ע"פ האיקיגאי מעניקה לאדם תחושה של משמעות ושל סיפוק עצמי.'}
              isHovered={hoveredIkigai}
            />
          </div>
          <button className="px-6 py-2 text-[var(--primary-green)] font-semibold hover:underline transition">
            עוד על איקיגאי →
          </button>
        </div>

        {/* Image Right */}
        <div className="relative">
          <img 
            src={ikigaiImage} 
            alt="IKIGAI - דיאגרמה קונספטואלית" 
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
