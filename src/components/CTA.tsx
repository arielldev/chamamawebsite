import { TextHighlight } from './TextHighlight'
import patternCTA from '../assets/brand/patterns/pattern-cta.png'

export function CTA() {
  return (
    <section className="w-full bg-white">
      <div
        className="h-16 -mt-1 -mb-1 bg-page-sync"
        style={{ clipPath: 'polygon(-1% -1%, 101% -1%, 101% 58%, -1% 101%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-linear-to-br from-(--primary-green) to-(--primary-green-dark)" />
          <img 
            src={patternCTA} 
            alt="" 
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 p-12 md:p-16 text-center space-y-6">
            <h3 className="font-brand text-3xl md:text-4xl text-white">
              מוזמנים להצטרף לקהילה שלנו
            </h3>
            <div className="text-lg opacity-90 max-w-2xl mx-auto text-white">
              <TextHighlight 
                text="בתיכון החממה כל תלמיד מוצא את הדרך שלו. בואו לגלות מה מחכה לכם."
                textClassName="text-white"
              />
            </div>
            <button className="px-8 py-3 bg-white text-(--primary-green) font-semibold rounded-lg hover:shadow-lg transition duration-300 hover:-translate-y-0.5">
              צרו קשר
            </button>
          </div>
        </div>
      </div>

      <div
        className="h-16 -mt-1 -mb-1 bg-page-sync"
        style={{ clipPath: 'polygon(-1% 42%, 101% -1%, 101% 101%, -1% 101%)' }}
        aria-hidden="true"
      />
    </section>
  )
}
