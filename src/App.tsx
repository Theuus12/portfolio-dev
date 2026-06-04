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

      <main className="ml-64 p-8">
        <section
          id="home"
          className="rounded-3xl bg-gradient-to-r from-[#0f172a] to-[#312e81] p-12 flex items-center justify-between min-h-[420px]"
        >
          <div>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full">
              👋 Olá, eu sou
            </span>

            <h2 className="text-6xl font-bold mt-6">
              Matheus <span className="text-purple-500">Polanczyk</span>
            </h2>

            <p className="text-2xl text-gray-300 mt-4">
              Desenvolvedor Full Stack & Product Builder
            </p>

            <p className="text-lg text-gray-400 mt-3">
              React • TypeScript • Node.js • PostgreSQL • MySQL • UX/UI
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
              📄 CV disponível em Português, English e Español
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="#projects"
                className="bg-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-700"
              >
                Ver Projetos
              </a>

              <a
                href="#contact"
                className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10"
              >
                Contato
              </a>
            </div>

            <div className="mt-8">
              <p className="text-gray-400 text-sm mb-3">
                📄 Download do Currículo
              </p>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="/cv-pt.pdf"
                  download
                  className="bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  🇵🇹 Português
                </a>

                <a
                  href="/cv-en.pdf"
                  download
                  className="bg-white/10 border border-white/20 px-5 py-3 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  🇬🇧 English
                </a>

                <a
                  href="/cv-es.pdf"
                  download
                  className="bg-white/10 border border-white/20 px-5 py-3 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  🇪🇸 Español
                </a>
              </div>
            </div>
          </div>

          <img src={hero} alt="Developer" className="w-[420px]" />
        </section>

        <About />

        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl mb-3">🚀</h3>
            <p className="font-bold text-lg text-white">Origens Tale</p>
            <p className="text-gray-400">Projeto Ativo</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl mb-3">💻</h3>
            <p className="font-bold text-lg text-white">Full Stack</p>
            <p className="text-gray-400">React & Node.js</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl mb-3">🗄️</h3>
            <p className="font-bold text-lg text-white">SQL</p>
            <p className="text-gray-400">PostgreSQL & MySQL</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.25)] hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl mb-3">📄</h3>
            <p className="font-bold text-lg text-white">3 CVs</p>
            <p className="text-gray-400">PT • EN • ES</p>
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