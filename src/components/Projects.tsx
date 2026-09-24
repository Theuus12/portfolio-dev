import origensImg from '../assets/origens.png'
import olhaImg from '../assets/olhaoproduto.png'
import verticeImg from '../assets/vertice-preview.png'

export default function Projects() {
  const projects = [
    {
      title: 'Origens Tale',
      tech: 'React • Node.js • SQL',
      description: 'Website oficial do servidor MMORPG Origens Tale.',
      image: origensImg,
      link: 'https://origenstale.com.br/',
    },
    {
      title: 'Olha o Produto',
      tech: 'React • TypeScript • API',
      description: 'Plataforma para visualização e análise de produtos.',
      image: olhaImg,
      link: 'https://olhaoproduto.vercel.app/',
    },
    {
      title: 'Vértice Automóveis',
      tech: 'HTML • CSS • JavaScript',
      description: 'Vitrine multimarca com catálogo, filtros e favoritos para encontrar a próxima viatura.',
      image: verticeImg,
      link: 'https://github.com/Theuus12/site-stand-viaturas',
    },
    {
      title: 'Task Manager',
      tech: 'React • Node.js • Socket.io',
      description: 'Gerenciador de tarefas colaborativo.',
      image: null,
      link: '#',
    },
  ]

  return (
    <section id="projects" className="mt-12">
      <h2 className="text-3xl font-bold mb-6">
        Projetos em Destaque
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              bg-white/5
              border border-white/10
              rounded-2xl
              overflow-hidden
              w-full
              max-w-md
              mx-auto
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-40 sm:h-48 lg:h-56 w-full object-cover"
              />
            ) : (
              <div className="h-40 sm:h-48 lg:h-56 bg-gradient-to-br from-purple-600 to-blue-600" />
            )}

            <div className="p-4 sm:p-5">
              <h3 className="font-bold text-lg sm:text-xl">
                {project.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-2">
                {project.tech}
              </p>

              <p className="text-gray-500 text-sm mt-3">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-purple-400 hover:text-purple-300"
              >
                {project.link.startsWith('https://github.com/') ? 'Ver repositório' : 'Ver Projeto'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
