import SectionReveal from './SectionReveal'

const paragraphs = [
  'Sou desenvolvedor Full Stack em forma\u00e7\u00e3o cont\u00ednua, com base em An\u00e1lise e Desenvolvimento de Sistemas. Tenho experi\u00eancia pr\u00e1tica com HTML, CSS, JavaScript, React, Node.js, bancos de dados SQL e interfaces responsivas.',
  'Durante oito meses, trabalhei no servidor de MMORPG Origens Tale, hoje encerrado. Nesse per\u00edodo, atuei no website, em sistemas internos, no banco de dados e na manuten\u00e7\u00e3o t\u00e9cnica da plataforma.',
  'Tamb\u00e9m desenvolvi os projetos-base de demonstra\u00e7\u00e3o Olha o Produto, com React e TypeScript, e V\u00e9rtice Autom\u00f3veis, com HTML, CSS e JavaScript. Eles apresentam prot\u00f3tipos de interfaces e funcionalidades para produtos e ve\u00edculos.',
  'Minha experi\u00eancia anterior como T\u00e9cnico de Inform\u00e1tica fortaleceu minhas habilidades em suporte, manuten\u00e7\u00e3o de computadores e resolu\u00e7\u00e3o de problemas.',
]

export default function About() {
  return (
    <SectionReveal>
      <section id="about" className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">Sobre Mim</h2>
        <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-gray-300 leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </SectionReveal>
  )
}
