export default function Experience() {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Projetos pr\u00f3prios',
      period: '2023 - Atual',
      description: 'Desenvolvimento de aplica\u00e7\u00f5es com React, Node.js, TypeScript e bancos de dados SQL.',
    },
    {
      title: 'Fundador e desenvolvedor - Origens Tale',
      company: 'Origens Tale (servidor encerrado)',
      period: '8 meses',
      description: 'Atua\u00e7\u00e3o no website, em sistemas internos, no banco de dados e na manuten\u00e7\u00e3o t\u00e9cnica do servidor MMORPG.',
    },
    {
      title: 'Projeto demonstrativo - Olha o Produto',
      company: 'Projeto pr\u00f3prio',
      period: 'Projeto-base',
      description: 'Prot\u00f3tipo de cat\u00e1logo e avalia\u00e7\u00e3o de produtos com React, TypeScript e consumo de APIs.',
    },
    {
      title: 'T\u00e9cnico de Inform\u00e1tica',
      company: 'Suporte t\u00e9cnico',
      period: 'Experi\u00eancia anterior',
      description: 'Suporte a usu\u00e1rios, manuten\u00e7\u00e3o de computadores e configura\u00e7\u00e3o de sistemas.',
    },
  ]

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold">Experi\u00eancia</h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <span className="text-purple-400">{exp.period}</span>
            </div>
            <p className="mb-3 text-gray-400">{exp.company}</p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
