import { TextHighlight } from './TextHighlight'
import iconCuriosity from '../assets/brand/icons/icon-curiosity.svg'
import iconIdentity from '../assets/brand/icons/icon-identity.svg'
import iconResponsibility from '../assets/brand/icons/icon-responsibility.svg'

export function Domains() {
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
    <section id="domains" className="w-full bg-white">
      <div
        className="h-16 -mt-1 -mb-1 bg-page-sync"
        style={{ clipPath: 'polygon(-1% -1%, 101% -1%, 101% 58%, -1% 101%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-brand text-4xl md:text-5xl text-[#14532d] mb-6 text-center">
            שלושת תחומי החממה
          </h2>
          <p className="text-lg text-[#166534] mb-12 text-center">
            תיכון החממה פועל בשלושה תחומים, המבוססים על שלושה עקרונות
          </p>

          <div className="space-y-6">
            {domains.map((item, idx) => (
              <div
                key={`domain-${idx}`}
                className="bg-[#f4fff6] border border-[#b7e8c2] rounded-xl p-6 md:p-8 transition-all duration-300 flex gap-6 cursor-default"
              >
                <div className="shrink-0">
                  <img src={item.icon} alt="" aria-hidden="true" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <h3 className="font-brand text-xl text-[#14532d] mb-1">{item.principle}</h3>
                  <p className="text-xs font-semibold text-[#166534] mb-3">{item.domain}</p>
                  <TextHighlight text={item.description} textClassName="text-[#14532d]" />
                </div>
              </div>
            ))}

            <div className="pt-6 text-center">
              <button className="px-6 py-2 text-[#166534] font-semibold hover:underline transition">
                עוד על התחומים →
              </button>
            </div>
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
