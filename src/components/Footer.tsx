import { Link } from 'react-router-dom'
import { Heart, Sparkles } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0A0A0B] text-[#9CA3AF] pt-16 pb-12 border-t border-[#1A1A1D] overflow-hidden">
      {/* Hand Drawn Scarlet Line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D90429] to-transparent shadow-[0_0_10px_#D90429]" />

      {/* Subtle Background Ink Spray Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#2B2B30_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#1A1A1D] border border-[#D90429]/40 flex items-center justify-center font-display text-xl text-[#D90429]">
                S
              </div>
              <div>
                <span className="font-display text-xl text-white tracking-wider uppercase block">
                  Tiago Gomes <span className="text-[#D90429]">(KOV)</span>
                </span>
                <span className="font-handwriting text-sm text-[#D90429]">Scarlet Studio</span>
              </div>
            </div>
            <p className="text-sm text-[#9CA3AF] max-w-md leading-relaxed font-sans">
              Artista 2D e 3D para a indústria de games. Especializado em Concept Art, Modelagem,
              Escultura Digital, Texturização PBR e Level Design em Unreal Engine.
            </p>
            <p className="font-handwriting text-xl text-white tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D90429]" />
              "Creating Worlds Through Art."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm text-white uppercase tracking-widest border-b border-[#2B2B30] pb-2 inline-block">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#hero" className="hover:text-[#D90429] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#D90429] transition-colors">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-[#D90429] transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#jornada" className="hover:text-[#D90429] transition-colors">
                  Minha Jornada
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#D90429] transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#ferramentas" className="hover:text-[#D90429] transition-colors">
                  Ferramentas
                </a>
              </li>
            </ul>
          </div>

          {/* Platforms & Portfolios */}
          <div className="space-y-3">
            <h4 className="font-display text-sm text-white uppercase tracking-widest border-b border-[#2B2B30] pb-2 inline-block">
              Portfólios & Redes
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://www.artstation.com/kov_gol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  ArtStation
                </a>
              </li>
              <li>
                <a
                  href="https://sketchfab.com/KOv.artStudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  Sketchfab
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/kovgol/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC4EvKbc156w2GLQacKA13ZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitch.tv/kov_artstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  Twitch Live
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kov.art.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  Instagram @kov.art.studio
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tiago-kov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://fab.com/s/de421d8baac3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  FAB (Epic Games)
                </a>
              </li>
              <li>
                <a
                  href="https://cara.app/1969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  Cara
                </a>
              </li>
              <li>
                <a
                  href="https://br.pinterest.com/KovGol/esposi%C3%A7%C3%B5es-kov/?invite_code=30f34192932c4c44a670b1078f810516&sender=953355952277511851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Tiago_kov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/KOv.art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D90429] transition-colors"
                >
                  Linktree
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1A1A1D] flex flex-col md:flex-row items-center justify-between text-xs text-[#9CA3AF] gap-4">
          <p>© {currentYear} Tiago Gomes (KOV) • Scarlet Studio. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 font-mono">
            Feito para Game Art & Concept Art{' '}
            <Heart className="w-3.5 h-3.5 text-[#D90429] fill-[#D90429]" />
          </p>
        </div>
      </div>
    </footer>
  )
}
