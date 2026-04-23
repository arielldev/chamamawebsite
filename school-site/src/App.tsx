import { Header, Hero, Vision, Domains, Ikigai, CTA, Footer } from './components'

function App() {
  return (
    <div dir="rtl" className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--ink-primary)] overflow-hidden">
      {/* Decorative background circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-[var(--primary-green)]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--accent-sage)]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[var(--primary-green)]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-[var(--accent-warm)]/7 rounded-full blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <Vision />
        <Domains />
        <Ikigai />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
