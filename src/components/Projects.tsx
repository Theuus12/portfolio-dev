import origensImg from '../assets/origens.png'
import olhaImg from '../assets/olhaoproduto.png'
import verticeImg from '../assets/vertice-preview.png'

export default function Projects() {
  const projects = [
    {
      title: 'Origens Tale',
      tech: 'React \u2022 Node.js \u2022 SQL',
      description: 'Website e ferramentas digitais desenvolvidos para o servidor MMORPG Origens Tale, hoje encerrado.',
      image: origensImg,
      link: 'https://origenstale.com.br/',
    },
    {
      title: 'Olha o Produto',
      tech: 'React \u2022 TypeScript \u2022 API',
      description: 'Projeto-base de demonstra\u00e7\u00e3o de cat\u00e1logo e avalia\u00e7\u00e3o de produtos, com busca e filtros.',
      image: olhaImg,
      link: 'https://olhaoproduto.vercel.app/',
    },
    {
      title: 'V\u00e9rtice Autom\u00f3veis',
      tech: 'HTML \u2022 CSS \u2022 JavaScript',
      description: 'Projeto-base de demonstra\u00e7\u00e3o de cat\u00e1logo de viaturas, com pesquisa, filtros e favoritos.',
      image: verticeImg,
      link: 'https://theuus12.github.io/site-stand-viaturas/',
    },
    {
      title: 'Raposinha Live',
      tech: 'Links • Conteúdo • Presença digital',
      description: 'Uma página central para criadores de conteúdo e empresas reunirem seus principais links, canais e formas de contato em um só lugar.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      link: 'https://www.raposinhalive.com',
    },
    {
      title: 'Task Manager',
      tech: 'React \u2022 Node.js \u2022 Socket.io',
      description: 'Gerenciador de tarefas colaborativo.',
      image: null,
      link: '#',
    },
  ]

  return (
    <section id="projects" className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">Projetos em Destaque</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir projeto ${project.title}`}
            className="block w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-inherit no-underline transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover sm:h-48 lg:h-56"
              />
            ) : (
              <div className="h-40 bg-gradient-to-br from-purple-600 to-blue-600 sm:h-48 lg:h-56" />
            )}

            <div className="p-4 sm:p-5">
              <h3 className="text-lg font-bold sm:text-xl">{project.title}</h3>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">{project.tech}</p>
              <p className="mt-3 text-sm text-gray-500">{project.description}</p>
              <span className="mt-4 inline-block text-purple-400">
                {project.link.startsWith('https://github.com/') ? 'Ver reposit\u00f3rio' : 'Ver Projeto'}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
