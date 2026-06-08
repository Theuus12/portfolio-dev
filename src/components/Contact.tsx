import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa'

import {
  MdEmail,
} from 'react-icons/md'

export default function Contact() {
  const contacts = [
    {
      title: 'Email',
      value: 'matheus.polanczyk@hotmail.com',
      href: 'mailto:matheus.polanczyk@hotmail.com',
      icon: MdEmail,
      color: 'red',
    },
    {
      title: 'GitHub',
      value: 'github.com/Theuus12',
      href: 'https://github.com/Theuus12',
      icon: FaGithub,
      color: 'gray',
    },
    {
      title: 'LinkedIn',
      value: 'matheus-polanczyk',
      href: 'https://www.linkedin.com/in/matheus-polanczyk/',
      icon: FaLinkedin,
      color: 'blue',
    },
    {
      title: 'WhatsApp',
      value: '+351 966 816 792',
      href: 'https://wa.me/351966816792',
      icon: FaWhatsapp,
      color: 'green',
    },
  ]

  const colors = {
    red: {
      border: 'hover:border-red-500',
      shadow: 'hover:shadow-[0_0_35px_rgba(239,68,68,0.35)]',
      iconBg: 'group-hover:bg-red-600',
      iconColor: 'text-red-400',
    },
    gray: {
      border: 'hover:border-gray-400',
      shadow: 'hover:shadow-[0_0_35px_rgba(156,163,175,0.35)]',
      iconBg: 'group-hover:bg-gray-700',
      iconColor: 'text-gray-300',
    },
    blue: {
      border: 'hover:border-blue-500',
      shadow: 'hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]',
      iconBg: 'group-hover:bg-blue-600',
      iconColor: 'text-blue-400',
    },
    green: {
      border: 'hover:border-green-500',
      shadow: 'hover:shadow-[0_0_35px_rgba(34,197,94,0.35)]',
      iconBg: 'group-hover:bg-green-600',
      iconColor: 'text-green-400',
    },
  }

  return (
    <section id="contact" className="mt-16 mb-16">
      <h2 className="text-3xl font-bold mb-8">
        Contato
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact) => {
          const Icon = contact.icon
          const style = colors[contact.color as keyof typeof colors]

          return (
            <a
              key={contact.title}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`
                group
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-6
                ${style.border}
                ${style.shadow}
                hover:-translate-y-1
                transition-all
                duration-300
              `}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`
                    w-14 h-14
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                    ${style.iconBg}
                    group-hover:scale-110
                    transition-all duration-300
                  `}
                >
                  <Icon
                    className={`${style.iconColor} group-hover:text-white text-3xl`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    {contact.title}
                  </h3>

                  <p className="text-gray-400 mt-1 break-all text-sm sm:text-base">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}