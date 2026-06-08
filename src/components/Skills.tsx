export default function Skills() {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 92 },
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 88 },
    { name: "Docker", level: 80 },
    { name: "Git", level: 93 },
    { name: "Tailwind CSS", level: 95 },
  ]

  return (
    <section id="skills" className="mt-12">
      <h2 className="text-3xl font-bold mb-6">
        Minhas Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/5 border border-white/10 rounded-2xl p-5"
          >
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}