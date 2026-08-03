import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Início', href: 'hero' },
  { label: 'Sobre', href: 'sobre' },
  { label: 'Projetos', href: 'projetos' },
  { label: 'Jornada', href: 'jornada' },
  { label: 'Especialidades', href: 'especialidades' },
  { label: 'Ferramentas', href: 'ferramentas' },
  { label: 'Experiência', href: 'experiencia' },
  { label: 'Conteúdo', href: 'conteudo' },
  { label: 'Scarlet Studio', href: 'scarlet-studio' },
  { label: 'Contato', href: 'contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      if (location.pathname !== '/') return

      // Intersection checking for active section
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.href)).filter(Boolean)
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i]
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#D90429]/30 py-3 shadow-2xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left"
        >
          {/* Hand drawn S Monogram Icon */}
          <div className="relative w-10 h-10 rounded-md bg-[#111113] border border-[#2B2B30] flex items-center justify-center group-hover:border-[#D90429] transition-colors overflow-hidden">
            <span className="font-display text-xl text-[#D90429] group-hover:scale-110 transition-transform">
              S
            </span>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D90429]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <span className="font-display text-lg tracking-wider text-white uppercase block leading-none">
              Tiago Gomes <span className="text-[#D90429] text-xs font-mono ml-1">(KOV)</span>
            </span>
            <span className="font-handwriting text-xs text-[#9CA3AF] block leading-tight">
              Scarlet Studio
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#111113]/80 p-1.5 rounded-full border border-[#2B2B30] backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === '/' && activeSection === item.href
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#D90429] text-white shadow-[0_0_12px_rgba(217,4,41,0.5)] font-semibold'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Contact Quick Button Desktop */}
        <div className="hidden xl:block">
          <button
            onClick={() => scrollToSection('contato')}
            className="px-4 py-2 text-xs font-display uppercase tracking-widest text-white bg-gradient-to-r from-[#D90429] to-[#A4031F] rounded-md hover:brightness-110 transition-all shadow-[0_0_15px_rgba(217,4,41,0.3)] active:scale-95"
          >
            Falar Comigo
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-[#9CA3AF] hover:text-white bg-[#111113] border border-[#2B2B30] rounded-md"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0A0B] border-b border-[#D90429]/40 px-6 py-6 space-y-3 animate-slide-down">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-left px-3 py-2 rounded text-xs uppercase tracking-wider font-mono ${
                  activeSection === item.href
                    ? 'bg-[#D90429]/20 text-[#D90429] border border-[#D90429]/40 font-bold'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-[#1A1A1D]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('contato')}
            className="w-full mt-4 py-3 text-xs font-display uppercase tracking-widest text-white bg-[#D90429] rounded text-center block font-bold"
          >
            Entrar em Contato
          </button>
        </div>
      )}
    </header>
  )
}
