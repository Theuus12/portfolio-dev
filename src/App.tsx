import hero from './assets/hero.png'
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Sidebar />

      <main className="lg:ml-64 p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8 overflow-hidden">
        <section
            id="home"
            className="rounded-3xl bg-gradient-to-r from-[#0f172a] to-[#312e81] p-5 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[420px]"
          >
            <div className="w-full max-w-3xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 break-words">
                Matheus <span className="text-purple-500">Polanczyk</span>
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-4">
                Desenvolvedor Full Stack & Product Builder
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mt-3">
                React • TypeScript • Node.js • PostgreSQL • MySQL • UX/UI
              </p>

              <div className="mt-4 inline-flex max-w-full items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300">
                📄 CV disponível em Português, English e Español
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
                <a
                  href="#projects"
                  className="text-center bg-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-700"
                >
                  Ver Projetos
                </a>

                <a
                  href="#contact"
                  className="text-center border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10"
                >
                  Contato
                </a>
              </div>

              <div className="mt-8">
                <p className="text-gray-400 text-sm mb-3">
                  📄 Download do Currículo
                </p>

                <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                  <a
                    href="/cv-pt.pdf"
                    download
                    className="text-center bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
                  >
                    🇵🇹 Português
                  </a>

                  <a
                    href="/cv-en.pdf"
                    download
                    className="text-center bg-white/10 border border-white/20 px-5 py-3 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    🇬🇧 English
                  </a>

                  <a
                    href="/cv-es.pdf"
                    download
                    className="text-center bg-white/10 border border-white/20 px-5 py-3 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    🇪🇸 Español
                  </a>
                </div>
              </div>
            </div>

            <img
              src={hero}
              alt="Developer"
              className="w-56 sm:w-72 lg:w-[420px] max-w-full"
            />
          </section>

        <About />

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6 mt-8">

            <div className="bg-white/5 rounded-xl p-3 sm:p-6 border border-white/10 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div aria-hidden="true" className="mb-2 inline-grid h-10 w-10 place-items-center rounded-xl border border-purple-300/20 bg-purple-400/10 font-mono text-sm font-bold text-purple-200 sm:mb-3">OT</div>
              <p className="font-bold text-sm sm:text-lg text-white">
                Origens Tale
              </p>
              <p className="text-gray-400 text-xs sm:text-base">
                Servidor encerrado
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-3 sm:p-6 border border-white/10 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div aria-hidden="true" className="mb-2 inline-grid h-10 w-10 place-items-center rounded-xl border border-blue-300/20 bg-blue-400/10 font-mono text-xs font-bold text-blue-200 sm:mb-3">&lt;/&gt;</div>
              <p className="font-bold text-sm sm:text-lg text-white">
                Full Stack
              </p>
              <p className="text-gray-400 text-xs sm:text-base">
                React & Node.js
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-3 sm:p-6 border border-white/10 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div aria-hidden="true" className="mb-2 inline-grid h-10 w-10 place-items-center rounded-xl border border-emerald-300/20 bg-emerald-400/10 font-mono text-xs font-bold text-emerald-200 sm:mb-3">SQL</div>
              <p className="font-bold text-sm sm:text-lg text-white">
                SQL
              </p>
              <p className="text-gray-400 text-xs sm:text-base">
                PostgreSQL & MySQL
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-3 sm:p-6 border border-white/10 hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.25)] hover:-translate-y-1 transition-all duration-300">
              <div aria-hidden="true" className="mb-2 inline-grid h-10 w-10 place-items-center rounded-xl border border-amber-300/20 bg-amber-400/10 font-mono text-xs font-bold text-amber-200 sm:mb-3">A/文</div>
              <p className="font-bold text-sm sm:text-lg text-white">
                3 CVs
              </p>
              <p className="text-gray-400 text-xs sm:text-base">
                PT • EN • ES
              </p>
            </div>

          </div>

        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
