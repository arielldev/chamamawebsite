import { TextHighlight } from './TextHighlight'
import ikigaiImage from '../assets/brand/elements/איקיגאי.png'

export function Ikigai() {
  return (
    <section id="ikigai" className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content Left */}
        <div className="max-w-xl space-y-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--accent-sage)">דרך ומשמעות</p>
          <h2 className="font-brand text-5xl leading-[1.08] text-(--ink-primary) md:text-6xl">
            生き甲斐 IKIGAI
          </h2>
          <div className="h-px w-28 bg-linear-to-l from-(--accent-sage)/80 to-transparent" />
          <div className="space-y-5">
            <TextHighlight 
              text={'האיקיגאי הוא תפיסה או דרך חיים בתרבות יפן. המשמעות המילולית של המושג היא "הסיבה להיות ולחיות".'}
              textClassName="text-(--ink-secondary) text-lg md:text-xl leading-8"
            />
            <TextHighlight 
              text={'זו המשמעות והדרך שאנו פוסעים בה, ושני אלו, המשמעות והדרך הם סובייקטיביים, משתנים בין אדם לאדם ונתונים לשינוי מקום וזמן.'}
              textClassName="text-(--ink-secondary) text-lg md:text-xl leading-8"
            />
            <TextHighlight 
              text={'לכן לכל אחת ואחד מאיתנו איקיגאי משלו. פעולה ע"פ האיקיגאי מעניקה לאדם תחושה של משמעות ושל סיפוק עצמי.'}
              textClassName="text-(--ink-secondary) text-lg md:text-xl leading-8"
            />
          </div>
          <button className="px-6 py-2 text-(--accent-sage) font-semibold transition hover:underline">
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
