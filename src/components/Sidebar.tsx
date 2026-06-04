import { useEffect, useState } from 'react'
import { Home, User, Folder, Code, Mail } from 'lucide-react'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home')

  const menu = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'Sobre', href: '#about', id: 'about', icon: User },
    { name: 'Projetos', href: '#projects', id: 'projects', icon: Folder },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Code },
    { name: 'Contato', href: '#contact', id: 'contact', icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300

      for (const item of menu) {
        const element = document.getElementById(item.id)

        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id)
          }
        }
      }

      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50

      if (bottomReached) {
        setActiveSection('contact')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#050816]/90 backdrop-blur-xl border-r border-white/10 p-6">
      <h1 className="text-2xl font-bold mb-10">
        Dev<span className="text-purple-500">Portfolio</span>
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.35)]'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <Icon size={20} />
              {item.name}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}