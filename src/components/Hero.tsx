import { TextHighlight } from './TextHighlight'

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 md:px-10 pt-14 pb-20 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-x-0 top-10 h-64 opacity-40" style={{ background: 'linear-gradient(90deg, rgba(17,110,53,0) 0%, rgba(134,239,172,0.12) 20%, rgba(134,239,172,0.08) 55%, rgba(17,110,53,0) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-28 opacity-30" style={{ background: 'repeating-linear-gradient(90deg, rgba(134,239,172,0.12) 0, rgba(134,239,172,0.12) 16px, rgba(22,101,52,0) 16px, rgba(22,101,52,0) 32px)' }} />
      </div>

      <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-sm font-semibold tracking-widest text-(--accent-sage) uppercase">ברוכים הבאים</p>
            <h1 className="font-brand text-5xl leading-tight text-(--ink-primary) md:text-6xl">
              לתיכון החממה
              <br />
              <span>עמל הוד השרון</span>
            </h1>
            <p className="text-lg font-medium text-(--ink-secondary) md:text-xl">בית ספר ללומדים עצמאיים</p>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <TextHighlight
              text="תיכון החממה הוא תיכון בו אתם מחליטים איך ומה ללמוד. כל תלמידה לומדת להכיר את עצמה, כל תלמיד לומד מה שמעניין אותו, וביחד מוסיפים טוב בעולם."
            />

            <div className="flex items-center gap-3 text-sm font-semibold text-(--accent-sage)">
              <span>חוקרים</span>
              <span className="text-(--accent-sage)/70">•</span>
              <span>לומדים</span>
              <span className="text-(--accent-sage)/70">•</span>
              <span>יוצרים</span>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <button className="rounded-lg bg-(--primary-green) px-8 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-(--primary-green-dark) hover:shadow-lg">
                הצטרפו אלינו
              </button>
              <button className="rounded-lg border-2 border-(--accent-sage) px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white/10">
                מידע נוסף
              </button>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -inset-2 rounded-3xl border border-(--accent-sage)/25" />
          <div className="relative z-10 h-96 overflow-hidden rounded-3xl bg-black/80 ring-1 ring-(--accent-sage)/35 shadow-2xl">
            <iframe
              className="h-full w-full rounded-3xl"
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
