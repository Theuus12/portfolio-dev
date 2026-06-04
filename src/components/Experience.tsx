export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Projetos Próprios",
      period: "2023 - Atual",
      description:
        "Desenvolvimento de aplicações React, Node.js, TypeScript e bancos SQL.",
    },
    {
      title: "Fundador - Origens Tale",
      company: "Origens Tale",
      period: "2024 - Atual",
      description:
        "Gerenciamento de servidor MMORPG, website, launcher, banco de dados e sistemas internos.",
    },
    {
      title: "Criador - Olha o Produto",
      company: "Olha o Produto",
      period: "2025 - Atual",
      description:
        "Plataforma para análise e visualização de produtos desenvolvida com React e APIs modernas.",
    },
  ]

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">
        Experiência Profissional
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold">
                {exp.title}
              </h3>

              <span className="text-purple-400">
                {exp.period}
              </span>
            </div>

            <p className="text-gray-400 mb-3">
              {exp.company}
            </p>

            <p className="text-gray-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}