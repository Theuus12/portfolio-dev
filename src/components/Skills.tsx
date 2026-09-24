const skills = [
  { name: "React", mark: "⚛", color: "text-cyan-300", tint: "bg-cyan-400/10" },
  { name: "TypeScript", mark: "TS", color: "text-blue-300", tint: "bg-blue-400/10" },
  { name: "Node.js", mark: "JS", color: "text-lime-300", tint: "bg-lime-400/10" },
  { name: "PostgreSQL", mark: "PG", color: "text-sky-300", tint: "bg-sky-400/10" },
  { name: "MySQL", mark: "my", color: "text-blue-200", tint: "bg-blue-300/10" },
  { name: "Docker", mark: "▰", color: "text-cyan-300", tint: "bg-cyan-400/10" },
  { name: "Git", mark: "⑂", color: "text-orange-300", tint: "bg-orange-400/10" },
  { name: "Tailwind CSS", mark: "≈", color: "text-teal-300", tint: "bg-teal-400/10" },
]

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300/80">
            Tecnologias
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stack &amp; ferramentas
          </h2>
        </div>
        <span className="text-sm text-gray-500">O que uso para criar</span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex min-h-[76px] items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-3 py-3 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.07] sm:gap-4 sm:px-4"
          >
            <span
              aria-hidden="true"
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.06] text-sm font-bold tracking-tight ${skill.tint} ${skill.color}`}
            >
              {skill.mark}
            </span>
            <span className="text-sm font-medium text-gray-200 sm:text-base">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
