import { TextHighlight } from './TextHighlight'
import pattern1 from '../assets/brand/patterns/pattern-1.png'

export function Vision() {
  return (
    <section id="vision" className="relative mx-auto max-w-7xl overflow-hidden px-6 md:px-10 py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute right-6 top-20 h-72 w-72 rounded-full opacity-30 blur-3xl md:right-18"
          style={{
            background: 'radial-gradient(circle, rgba(134,239,172,0.55) 0%, rgba(134,239,172,0.16) 45%, rgba(22,101,52,0) 78%)',
          }}
        />

        <div
          className="absolute left-30 bottom-24 hidden h-px w-56 md:block"
          style={{ background: 'linear-gradient(90deg, rgba(134,239,172,0) 0%, rgba(134,239,172,0.36) 50%, rgba(134,239,172,0) 100%)' }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="relative order-2 md:order-1">
          <img 
            src={pattern1} 
            alt="Pattern" 
            className="w-full rounded-xl object-cover shadow-lg ring-1 ring-(--accent-sage)/25"
          />
        </div>

        {/* Content Right */}
        <div className="order-1 md:order-2 max-w-xl space-y-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--accent-sage)">הכיוון שלנו</p>
          <h2 className="font-brand text-5xl leading-[1.08] text-(--ink-primary) md:text-6xl">
            חזון בית הספר
          </h2>
          <div className="h-px w-28 bg-linear-to-l from-(--accent-sage)/80 to-transparent" />
          <div className="space-y-5">
            <TextHighlight 
              text="החממה היא מרחב בטוח בו כל לומד מתפתח כאדם שלם, בו כל לומדת מגשימה ומבטאת את הכוחות שבה."
              textClassName="text-(--ink-secondary) text-lg md:text-xl leading-8"
            />
            <TextHighlight 
              text="וביחד אנו מתנסים ביזמות שמעצבת עתיד משותף, הבנוי על רווחתם של אנשים, קהילות וכדור הארץ."
              textClassName="text-(--ink-secondary) text-lg md:text-xl leading-8"
            />
          </div>
          <button className="px-6 py-2 text-(--accent-sage) font-semibold transition hover:underline">
            עוד על התיכון →
          </button>
        </div>
      </div>
    </section>
  )
}
