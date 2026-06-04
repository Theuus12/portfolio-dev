import SectionReveal from './SectionReveal'

export default function About() {
  return (
    <SectionReveal>
      <section id="about" className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Sobre Mim
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-gray-300 leading-8">
            Sou um Desenvolvedor Full Stack em formação contínua, com base em
            Análise e Desenvolvimento de Sistemas, Front-end moderno e lógica de
            programação. Tenho experiência prática com HTML, CSS, JavaScript,
            React, Node.js, bancos de dados SQL e criação de interfaces
            responsivas.

            <br />
            <br />

            Atualmente desenvolvo e mantenho o Origens Tale, projeto próprio onde
            atuo em diferentes frentes, incluindo website, sistemas internos,
            banco de dados, manutenção técnica e evolução da plataforma.

            <br />
            <br />

            Além disso, desenvolvi protótipos e projetos experimentais como o
            Olha o Produto, aplicando conceitos de React, TypeScript, consumo de
            APIs e experiência de usuário. Esses projetos refletem meu processo de
            aprendizado, minha capacidade de transformar ideias em aplicações
            funcionais e minha busca constante por evolução profissional.

            <br />
            <br />

            Também possuo experiência anterior como Técnico de Informática, com
            atuação em suporte, manutenção de computadores, configuração de
            sistemas e atendimento a usuários, o que fortaleceu minha base técnica,
            resolução de problemas e adaptação a diferentes ambientes.
          </p>
        </div>
      </section>
    </SectionReveal>
  )
}