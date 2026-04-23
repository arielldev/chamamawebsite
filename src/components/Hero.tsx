import { TextHighlight } from './TextHighlight'
import { useState } from 'react'

export function Hero() {
  const [hoveredHero, setHoveredHero] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-sm font-semibold tracking-widest text-[var(--primary-green)] uppercase">
              ברוכים הבאים
            </p>
            <h1 className="font-brand text-5xl md:text-6xl leading-tight text-[var(--ink-primary)]">
              לתיכון החממה
              <br />
              <span className="text-[var(--primary-green)]">עמל הוד"ש</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-[var(--ink-secondary)]">
              בית ספר ללומדים עצמאיים
            </p>
          </div>

          <div 
            className="space-y-6 animate-fade-in-up" 
            style={{ animationDelay: '0.1s' }}
            onMouseEnter={() => setHoveredHero(true)}
            onMouseLeave={() => setHoveredHero(false)}
          >
            <TextHighlight 
              text="תיכון החממה הוא תיכון בו אתם מחליטים איך ומה ללמוד. כל תלמידה לומדת להכיר את עצמה, כל תלמיד לומד מה שמעניין אותו, וביחד מוסיפים טוב בעולם."
              isHovered={hoveredHero}
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-[var(--primary-green)] text-white font-semibold rounded-lg hover:bg-[var(--primary-green-dark)] transition duration-300 hover:shadow-lg hover:-translate-y-0.5">
                הצטרפו אלינו
              </button>
              <button className="px-8 py-3 border-2 border-[var(--primary-green)] text-[var(--primary-green)] font-semibold rounded-lg hover:bg-[var(--primary-green)]/5 transition duration-300">
                מידע נוסף
              </button>
            </div>
          </div>
        </div>

        {/* Right Video Embed */}
        <div className="relative hidden md:block">
          <div className="rounded-2xl shadow-xl overflow-hidden bg-black">
            <iframe
              className="w-full h-96 rounded-2xl"
              src="https://www.youtube.com/embed/h8cOcDQHAwc"
              title="תיכון החממה - סרטון הצגה"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
