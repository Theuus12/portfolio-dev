import origensImg from '../assets/origens.png'
import olhaImg from '../assets/olhaoproduto.png'
import verticeImg from '../assets/vertice-preview.png'
import raposinhaLinksImg from '../assets/raposinha-links-card.svg'

export default function Projects() {
  const projects = [
    {
      title: 'Origens Tale',
      tech: 'C# • SQL • IA/Codex • Texturas 3D',
      description: 'Projeto MMORPG já encerrado, que me proporcionou experiência prática com IA e Codex, C#, SQL e criação e integração de texturas 3D.',
      image: origensImg,
      link: null,
    },
    {
      title: 'Avaliador de Produtos',
      tech: 'React \u2022 TypeScript \u2022 API',
      description: 'Projeto-base de demonstra\u00e7\u00e3o de cat\u00e1logo e avalia\u00e7\u00e3o de produtos, com busca e filtros.',
      image: olhaImg,
      link: 'https://olhaoproduto.vercel.app/',
    },
    {
      title: 'Stand Online',
      tech: 'HTML \u2022 CSS \u2022 JavaScript',
      description: 'Projeto-base de demonstra\u00e7\u00e3o de cat\u00e1logo de viaturas, com pesquisa, filtros e favoritos. Inclui uma \u00e1rea administrativa para adicionar e remover viaturas e fazer a manuten\u00e7\u00e3o do site.',
      image: verticeImg,
      link: 'https://theuus12.github.io/site-stand-viaturas/',
    },
    {
      title: 'Link Hub',
      tech: 'Links • Conteúdo • Presença digital',
      description: 'Uma página central para criadores de conteúdo e empresas reunirem seus principais links, canais e formas de contato em um só lugar.',
      image: raposinhaLinksImg,
      link: 'https://www.raposinhalive.com',
    },
  ]

  return (
    <section id="projects" className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">Projetos em Destaque</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
        {projects.map((project) => {
          const cardContent = (
            <>
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
              {project.link && (
                <span className="mt-4 inline-block text-purple-400">
                  {project.link.startsWith('https://github.com/') ? 'Ver reposit\u00f3rio' : 'Ver Projeto'}
                </span>
              )}
            </div>
            </>
          )
          const cardClassName = `block w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-inherit no-underline ${project.link ? 'transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]' : ''}`

          return project.link ? (
            <a key={project.title} href={project.link} target="_blank" rel="noreferrer" aria-label={`Abrir projeto ${project.title}`} className={cardClassName}>
              {cardContent}
            </a>
          ) : (
            <article key={project.title} className={cardClassName}>
              {cardContent}
            </article>
          )
        })}
      </div>
    </section>
  )
}
