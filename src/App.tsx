import { Header, Hero, Vision, Domains, Ikigai, CTA, Footer } from './components'

function App() {
  return (
    <div dir="rtl" className="relative min-h-screen bg-(--bg-primary) text-(--ink-primary) overflow-hidden">
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
