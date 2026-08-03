import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Play,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Palette,
  Box,
  Gamepad2,
  Compass,
  Cpu,
  Youtube,
  Tv,
  Instagram,
  Send,
  Mail,
  Phone,
  MessageSquare,
  Code,
  Image as ImageIcon,
  Wrench,
  Shield,
  Award,
} from 'lucide-react'
import { getProjects } from '@/services/projects'
import { Project } from '@/types/project'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'

// Carousel slides with English Quotes
const HERO_SLIDES = [
  {
    image:
      'https://img.usecurling.com/p/1600/900?q=game%20art%203d%20character%20sculpture&color=black',
    tag: '3D Character Art',
    title: 'Guardião Ancestral',
    quote: '"Every world begins with a sketch."',
  },
  {
    image:
      'https://img.usecurling.com/p/1600/900?q=cyberpunk%20unreal%20engine%20environment&color=black',
    tag: 'Environment & Level Design',
    title: 'Distrito Cyberpunk & Ruínas UE5',
    quote: '"Concept → Sculpt → Game Ready."',
  },
  {
    image:
      'https://img.usecurling.com/p/1600/900?q=concept%20art%20fantasy%20landscape&color=black',
    tag: '2D & Concept Art',
    title: 'Estudos Anatômicos & Worldbuilding',
    quote: '"Creating worlds through art."',
  },
]

// Pipeline Steps
const PIPELINE_STEPS = [
  { name: 'Concept Art', desc: 'Pesquisa visual, silhueta e rascunhos no Clip Studio/Photoshop' },
  { name: 'Blockout', desc: 'Estruturação de proporção e escala 3D primária' },
  { name: 'Modelagem 3D', desc: 'Criação de formas limpas e malha base no Blender' },
  {
    name: 'Escultura Digital',
    desc: 'Detalhamento de alto nível orgânico e hard surface no ZBrush',
  },
  { name: 'Retopologia', desc: 'Otimização de malha para tempo real e animação de jogo' },
  { name: 'Mapeamento UV', desc: 'Unwrap eficiente e organização de texel density' },
  { name: 'Texturas PBR', desc: 'Pintura de materiais, albedo, roughness e metallic no Substance' },
  { name: 'Materiais & Shaders', desc: 'Configuração de shaders complexos e trim sheets' },
  {
    name: 'Lighting & Render',
    desc: 'Iluminação cinemática em estúdio ou iluminação em tempo real',
  },
  { name: 'Game Ready', desc: 'Integração e validação final em Unreal Engine 5 e Unity' },
]

// Tools List
const TOOLS_LIST = [
  { name: 'Blender', cat: '3D & Layout', icon: Box },
  { name: 'ZBrush', cat: 'Sculpting', icon: Layers },
  { name: 'Substance Painter', cat: 'PBR Texturing', icon: Palette },
  { name: 'Substance Designer', cat: 'Procedural Materials', icon: Wrench },
  { name: '3DCoat', cat: 'Retopo & UV', icon: Code },
  { name: 'Clip Studio Paint', cat: '2D Illustration', icon: ImageIcon },
  { name: 'Photoshop', cat: 'Photobashing & Post', icon: Palette },
  { name: 'Illustrator', cat: 'Vector & Logos', icon: Palette },
  { name: 'Unity', cat: 'Game Engine', icon: Gamepad2 },
  { name: 'Unreal Engine 5', cat: 'Realtime & Lumen', icon: Cpu },
  { name: 'Figma', cat: 'UI/UX Design', icon: Layers },
]

export default function Index() {
  const location = useLocation()
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Scroll to section handler when returning from detail page
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  // Fetch projects from service
  useEffect(() => {
    getProjects().then((data) => setProjects(data))
  }, [])

  // Auto Hero Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="space-y-0">
      {/* 2.1 HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Parallax Slide */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              } transition-transform duration-[10000ms]`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover filter brightness-[0.4] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/90 via-transparent to-[#0A0A0B]/90" />
            </div>
          ))}
        </div>

        {/* Ambient Particles & Ink Noise Overlay */}
        <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(#D90429_1px,transparent_1px)] [background-size:32px_24px] opacity-10" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-6 my-auto py-12">
          {/* Logo Monogram */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111113]/80 border border-[#D90429]/40 backdrop-blur-md animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#D90429] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]">
              Scarlet Studio • Portfolio 2D & 3D
            </span>
          </div>

          {/* Name & Display Title */}
          <div className="space-y-2">
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-white uppercase tracking-tight leading-none drop-shadow-2xl">
              Tiago <span className="text-[#D90429]">Gomes</span>
            </h1>
            <p className="font-sans text-sm sm:text-xl text-[#9CA3AF] tracking-widest font-medium uppercase">
              Artista 2D • Artista 3D • Graphic Designer • Game Artist
            </p>
          </div>

          {/* Current Slide Quote (English as requested) */}
          <div className="py-2">
            <p className="font-handwriting text-2xl sm:text-4xl text-[#D90429] drop-shadow-lg tracking-wide">
              {HERO_SLIDES[currentSlide].quote}
            </p>
            <p className="font-sans text-xs text-[#9CA3AF] mt-1">
              "Transformando ideias em mundos jogáveis."
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projetos"
              className="px-8 py-4 bg-[#D90429] hover:bg-[#A4031F] text-white font-display text-lg tracking-widest uppercase rounded shadow-[0_0_25px_rgba(217,4,41,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Explorar Projetos <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 bg-[#111113]/90 hover:bg-[#1A1A1D] border border-[#2B2B30] hover:border-[#D90429]/60 text-white font-display text-lg tracking-widest uppercase rounded backdrop-blur-md transition-all"
            >
              Conhecer Trajetória
            </a>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
              }
              className="p-2 rounded-full bg-white/5 hover:bg-[#D90429] text-white transition-colors"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentSlide ? 'w-8 bg-[#D90429]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="p-2 rounded-full bg-white/5 hover:bg-[#D90429] text-white transition-colors"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#sobre"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#9CA3AF] hover:text-[#D90429] transition-colors"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Rolar para baixo</span>
          <div className="w-4 h-7 rounded-full border border-white/20 flex justify-center p-1">
            <div className="w-1 h-2 bg-[#D90429] rounded-full animate-bounce" />
          </div>
        </a>
      </section>

      {/* 2.2 SOBRE MIM */}
      <section id="sobre" className="py-24 bg-[#0A0A0B] relative border-t border-[#111113]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Esquerda: Video Player Placeholder com moldura de traço */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-[#2B2B30] bg-[#111113] group shadow-2xl">
                <img
                  src="https://img.usecurling.com/p/800/1000?q=3d%20modeling%20timelapse%20artist%20screen&color=black"
                  alt="Tiago Gomes Processo Criativo"
                  className="w-full aspect-[4/5] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 filter contrast-125"
                />

                {/* Overlay Dark Grad */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-80" />

                {/* Hand-drawn Frame Accent */}
                <div className="absolute inset-3 border border-[#D90429]/40 pointer-events-none rounded" />

                {/* Play Button Trigger */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 hover:bg-black/20 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D90429] text-white flex items-center justify-center shadow-[0_0_30px_#D90429] animate-pulse group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/70 px-3 py-1 rounded backdrop-blur">
                    Assistir Timelapse do Processo
                  </span>
                </button>
              </div>
            </div>

            {/* Direita: Biografia */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#D90429] font-mono text-xs uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> Biografia Profissional
              </div>

              <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
                Paixão por criar <span className="text-[#D90429]">Mundos e Jogos</span>
              </h2>

              <p className="text-[#9CA3AF] text-base leading-relaxed font-sans">
                Minha jornada na arte digital começou aos{' '}
                <strong className="text-white">12 anos de idade</strong>, quando tive meu primeiro
                contato fascinado com a modelagem 3D. Desde então, transformar conceitos imaginários
                em estruturas tridimensionais vivas tornou-se não apenas minha profissão, mas minha
                vocação constante.
              </p>

              <p className="text-[#9CA3AF] text-base leading-relaxed font-sans">
                Hoje, com ampla experiência na indústria de games e design gráfico, atuo em todo o
                pipeline de produção visual:{' '}
                <strong className="text-white">
                  Concept Art, Modelagem 3D, Escultura Digital, Texturização PBR, Level Design e
                  Integração em Unreal Engine 5 & Unity
                </strong>
                .
              </p>

              <p className="text-[#9CA3AF] text-base leading-relaxed font-sans">
                Sou cofundador do <strong className="text-[#D90429]">Scarlet Studio</strong> e
                criador de conteúdo nas plataformas YouTube e Twitch, onde compartilho estudos de
                processos, lives de modelagem e desenvolvimento de jogos independentes com uma
                comunidade engajada de artistas.
              </p>

              {/* Highlights Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1A1A1D]">
                <div>
                  <span className="font-display text-3xl sm:text-4xl text-[#D90429] block">
                    12+
                  </span>
                  <span className="font-mono text-xs text-[#9CA3AF] uppercase">
                    Anos de Estudo & Prática
                  </span>
                </div>
                <div>
                  <span className="font-display text-3xl sm:text-4xl text-white block">50+</span>
                  <span className="font-mono text-xs text-[#9CA3AF] uppercase">
                    Projetos & Assets 3D
                  </span>
                </div>
                <div>
                  <span className="font-display text-3xl sm:text-4xl text-[#D90429] block">
                    100%
                  </span>
                  <span className="font-mono text-xs text-[#9CA3AF] uppercase">
                    Foco em Game Art
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3 ANTES E DEPOIS */}
      <section className="py-24 bg-[#111113] relative border-t border-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D90429]">
              Evolução Visual & Processo Criativo
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Comparadores <span className="text-[#D90429]">Antes e Depois</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm max-w-2xl mx-auto">
              Arraste a barra para comparar a transição do rascunho 2D ou wireframe para o modelo
              esculpido e renderizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfterSlider
              title="Sketch 2D vs. Modelo 3D Esculpido"
              beforeImage="https://img.usecurling.com/p/800/600?q=wireframe%203d%20character%20sculpt&color=gray"
              afterImage="https://img.usecurling.com/p/800/600?q=3d%20character%20textured%20render&color=red"
              beforeLabel="Wireframe / Mesh Base"
              afterLabel="Render PBR Final"
            />
            <BeforeAfterSlider
              title="Blockout Level vs. Cenário Iluminado UE5"
              beforeImage="https://img.usecurling.com/p/800/600?q=level%20design%20blockout%20gray&color=gray"
              afterImage="https://img.usecurling.com/p/800/600?q=unreal%20engine%20fantasy%20ruins&color=black"
              beforeLabel="Blockout de Nível"
              afterLabel="Unreal Engine 5 Lumen"
            />
          </div>
        </div>
      </section>

      {/* 2.4 MINHA JORNADA (TIMELINE) */}
      <section id="jornada" className="py-24 bg-[#0A0A0B] relative border-t border-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D90429]">
              Evolução & Marcos
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Minha <span className="text-[#D90429]">Jornada</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-[#2B2B30] ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
            {[
              {
                year: '12 Anos de Idade',
                title: 'O Primeiro Contato com 3D',
                desc: 'Descobrimento do universo da modelagem e computação gráfica. Primeiros testes com software 3D básico e paixão imediata por criar formas tridimensionais.',
              },
              {
                year: 'Primeiros Estudos',
                title: 'Anatomia, Desenho & Escultura',
                desc: 'Estudos intensivos de anatomia humana e animal, desenho de observação no sketchbook e fundamentos de iluminação e cor.',
              },
              {
                year: 'Trabalhos Freelance',
                title: 'Entrada no Mercado Comercial',
                desc: 'Atuação como artista freelancer desenvolvendo modelagens para clientes independentes, ilustração 2D e assets para pequenos projetos.',
              },
              {
                year: 'Projetos Profissionais',
                title: 'Editora Futura & Experiência Editorial',
                desc: 'Atuação na Editora Futura com design gráfico, diagramação, tratamento de imagens e ilustração digital de alto padrão.',
              },
              {
                year: 'Fundação do Estúdio',
                title: 'Scarlet Studio',
                desc: 'Criação do Scarlet Studio com foco em direção de arte, desenvolvimento de jogos autorais e criação de pipelines visuais completos.',
              },
              {
                year: 'Hoje',
                title: 'Evolução Contínua & Conteúdo',
                desc: 'Criação de projetos cinematográficos em Unreal Engine 5, streams de produção de artes digitais e compartilhamento de conhecimento.',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node Bullet */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#111113] border-2 border-[#D90429] group-hover:bg-[#D90429] transition-colors shadow-[0_0_10px_#D90429]" />

                <div className="bg-[#111113] p-6 rounded-lg border border-[#2B2B30] hover:border-[#D90429]/50 transition-colors shadow-lg">
                  <span className="font-mono text-xs text-[#D90429] uppercase tracking-widest font-bold">
                    {item.year}
                  </span>
                  <h3 className="font-display text-2xl text-white uppercase tracking-wide mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 PIPELINE CRIATIVO */}
      <section className="py-24 bg-[#111113] relative border-t border-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D90429]">
              Metodologia de Produção
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Pipeline <span className="text-[#D90429]">Criativo</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm max-w-xl mx-auto font-sans">
              Fluxo padronizado para garantir máxima qualidade técnica, otimização e fidelidade
              artística em jogos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PIPELINE_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#1A1A1D] p-5 rounded-lg border border-[#2B2B30] hover:border-[#D90429] transition-all group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#D90429] font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#D90429]" />
                  </div>
                  <h4 className="font-display text-xl text-white uppercase tracking-wide">
                    {step.name}
                  </h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.6 ESPECIALIDADES */}
      <section
        id="especialidades"
        className="py-24 bg-[#0A0A0B] relative border-t border-[#1A1A1D]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D90429]">
              Áreas de Atuação
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Minhas <span className="text-[#D90429]">Especialidades</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Modelagem & Escultura 3D',
                desc: 'Criação de personagens, criaturas e props estilizados ou fotorrealistas em ZBrush e Blender.',
                icon: Box,
              },
              {
                title: 'Concept Art & 2D',
                desc: 'Pesquisa conceitual, sketches, pintura digital e artes de divulgação em Clip Studio e Photoshop.',
                icon: Palette,
              },
              {
                title: 'Game Assets Otimizados',
                desc: 'Retopologia técnica limpa, Mapeamento UV e baked maps PBR para engines de jogo.',
                icon: Gamepad2,
              },
              {
                title: 'Level Design UE5',
                desc: 'Construção de ambientes imersivos com vegetação, física de iluminação Lumen e Nanite.',
                icon: Compass,
              },
              {
                title: 'Graphic Design & Branding',
                desc: 'Criação de marcas, logos vetorizadas, UI para jogos e identidades visuais marcantes.',
                icon: Layers,
              },
              {
                title: 'Environment Art',
                desc: 'Composição de cenários e cenografias virtuais com forte apelo narrativo e atmosférico.',
                icon: ImageIcon,
              },
              {
                title: 'Texturização PBR',
                desc: 'Texturas procedurales no Substance Designer e pintura detalhada no Substance Painter.',
                icon: Wrench,
              },
              {
                title: 'Produção de Conteúdo',
                desc: 'Lives de produção de art e tutoriais para a comunidade de desenvolvimento de jogos.',
                icon: Youtube,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111113] p-6 rounded-lg border border-[#2B2B30] hover:border-[#D90429] hover:bg-[#1A1A1D] transition-all group space-y-4 shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D90429]/10 border border-[#D90429]/30 text-[#D90429] flex items-center justify-center group-hover:bg-[#D90429] group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.7 PROJETOS (GALERIA PREMIUM) */}
      <section id="projetos" className="py-24 bg-[#111113] relative border-t border-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D90429]">
                Galeria de Trabalhos
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
                Projetos <span className="text-[#D90429]">Em Destaque</span>
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {['Todos', '2D', '3D', 'Games', 'Concept', 'Graphic Design'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#D90429] text-white font-bold'
                      : 'bg-[#1A1A1D] text-[#9CA3AF] hover:text-white border border-[#2B2B30]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1A1A1D] rounded-lg border border-[#2B2B30] overflow-hidden group hover:border-[#D90429] transition-all flex flex-col justify-between shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0B]">
                  <img
                    src={project.preview_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono uppercase text-[#D90429] border border-[#D90429]/30">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl text-white uppercase tracking-wide group-hover:text-[#D90429] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tools?.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-[#111113] text-[10px] font-mono text-[#9CA3AF] border border-[#2B2B30]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Ver Projeto Button */}
                  <div className="pt-4 border-t border-[#2B2B30]">
                    <Link
                      to={`/projeto/${project.slug || project.id}`}
                      className="w-full py-2.5 bg-[#111113] hover:bg-[#D90429] text-white font-mono text-xs uppercase tracking-widest rounded border border-[#2B2B30] hover:border-transparent transition-colors flex items-center justify-center gap-2 group/btn"
                    >
                      Ver Projeto Completo{' '}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.8 FERRAMENTAS (TECH WALL) */}
      <section id="ferramentas" className="py-24 bg-[#0A0A0B] relative border-t border-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D90429]">
              Softwares & Engines
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Parede de <span className="text-[#D90429]">Tecnologias</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TOOLS_LIST.map((tool, idx) => (
              <div
                key={idx}
                className="bg-[#111113] p-5 rounded-lg border border-[#2B2B30] hover:border-[#D90429] hover:bg-[#1A1A1D] transition-all text-center space-y-2 group shadow-md"
              >
                <tool.icon className="w-8 h-8 text-[#9CA3AF] group-hover:text-[#D90429] mx-auto transition-colors" />
                <h4 className="font-display text-lg text-white uppercase tracking-wide">
                  {tool.name}
                </h4>
                <p className="font-mono text-[10px] text-[#9CA3AF]">{tool.cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.9 EXPERIÊNCIA */}
      <section id="experiencia" className="py-24 bg-[#111113] relative border-t border-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D90429]">
              Histórico Profissional
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Experiência <span className="text-[#D90429]">Profissional</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A1A1D] p-8 rounded-lg border border-[#2B2B30] space-y-4 hover:border-[#D90429] transition-colors">
              <div className="flex items-center justify-between border-b border-[#2B2B30] pb-4">
                <div>
                  <h3 className="font-display text-2xl text-white uppercase">Editora Futura</h3>
                  <p className="font-mono text-xs text-[#D90429]">Designer Gráfico & Ilustrador</p>
                </div>
                <span className="font-mono text-xs text-[#9CA3AF]">Anos Anteriores</span>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Atuação no desenvolvimento de identidades visuais para materiais impressos e
                digitais, diagramação, tratamento de imagens de alta complexidade e ilustração
                digital.
              </p>
            </div>

            <div className="bg-[#1A1A1D] p-8 rounded-lg border border-[#2B2B30] space-y-4 hover:border-[#D90429] transition-colors">
              <div className="flex items-center justify-between border-b border-[#2B2B30] pb-4">
                <div>
                  <h3 className="font-display text-2xl text-white uppercase">Scarlet Studio</h3>
                  <p className="font-mono text-xs text-[#D90429]">Co-fundador & Lead Game Artist</p>
                </div>
                <span className="font-mono text-xs text-[#9CA3AF]">Presente</span>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Liderança de direção de arte para projetos de jogos autorais e sob demanda.
                Desenvolvimento de pipelines 3D completos, otimização em Unreal Engine 5 e criação
                da marca Scarlet Studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.10 CONTEÚDO & REDES */}
      <section id="conteudo" className="py-24 bg-[#0A0A0B] relative border-t border-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D90429]">
              Canais & Comunidade
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Criação de <span className="text-[#D90429]">Conteúdo</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm max-w-xl mx-auto">
              Acompanhe minhas transmissões ao vivo, tutoriais e publicações de trabalhos recentes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'YouTube', url: 'https://youtube.com', icon: Youtube },
              { name: 'Twitch', url: 'https://twitch.tv', icon: Tv },
              { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
              { name: 'ArtStation', url: 'https://artstation.com', icon: Palette },
              { name: 'Sketchfab', url: 'https://sketchfab.com', icon: Box },
              { name: 'Behance', url: 'https://behance.net', icon: ExternalLink },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111113] p-5 rounded-lg border border-[#2B2B30] hover:border-[#D90429] hover:bg-[#D90429]/10 transition-all text-center space-y-2 group"
              >
                <social.icon className="w-6 h-6 text-white group-hover:text-[#D90429] mx-auto transition-colors" />
                <span className="font-display text-sm text-white uppercase block">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2.11 SCARLET STUDIO */}
      <section
        id="scarlet-studio"
        className="py-24 bg-[#111113] relative border-t border-[#1A1A1D] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A1A1D] to-[#0A0A0B] border border-[#D90429]/40 rounded-2xl p-8 sm:p-16 relative">
            <div className="max-w-3xl space-y-6">
              <div className="w-16 h-16 rounded-xl bg-[#D90429] text-white flex items-center justify-center font-display text-3xl shadow-[0_0_30px_#D90429]">
                S
              </div>
              <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
                Scarlet <span className="text-[#D90429]">Studio</span>
              </h2>
              <p className="text-base text-[#9CA3AF] leading-relaxed">
                O Scarlet Studio é a manifestação da nossa paixão por universos digitais. Focado no
                desenvolvimento de jogos autorais e artes de alto impacto visual, o estúdio combina
                a crueza do grafite e da tinta com a tecnologia de ponta das engines modernas.
              </p>
              <div className="font-handwriting text-2xl text-[#D90429]">
                "Creating Worlds Through Art."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.12 CONTATO */}
      <section id="contato" className="py-24 bg-[#0A0A0B] relative border-t border-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D90429]">
              Vamos Trabalhar Juntos
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Entrar em <span className="text-[#D90429]">Contato</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm max-w-xl mx-auto">
              Disponível para freelancers, projetos de jogos, commissions de concept art e
              oportunidades na indústria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111113] p-6 rounded-lg border border-[#2B2B30] hover:border-[#D90429] transition-all text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#D90429]/10 text-[#D90429] flex items-center justify-center mx-auto group-hover:bg-[#D90429] group-hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl text-white uppercase">WhatsApp</h4>
              <p className="font-mono text-xs text-[#9CA3AF]">Mensagem Direta</p>
            </a>

            <a
              href="mailto:contato@scarletstudio.art"
              className="bg-[#111113] p-6 rounded-lg border border-[#2B2B30] hover:border-[#D90429] transition-all text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#D90429]/10 text-[#D90429] flex items-center justify-center mx-auto group-hover:bg-[#D90429] group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl text-white uppercase">E-mail</h4>
              <p className="font-mono text-xs text-[#9CA3AF]">contato@scarletstudio.art</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111113] p-6 rounded-lg border border-[#2B2B30] hover:border-[#D90429] transition-all text-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#D90429]/10 text-[#D90429] flex items-center justify-center mx-auto group-hover:bg-[#D90429] group-hover:text-white transition-colors">
                <ExternalLink className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl text-white uppercase">LinkedIn</h4>
              <p className="font-mono text-xs text-[#9CA3AF]">Perfil Profissional</p>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal Placeholder */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="bg-[#111113] border border-[#2B2B30] rounded-xl max-w-4xl w-full p-4 space-y-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#2B2B30] pb-3">
              <h3 className="font-display text-xl text-white uppercase">
                Processo Criativo (Timelapse)
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-[#9CA3AF] hover:text-white font-mono text-xs bg-white/10 px-3 py-1 rounded"
              >
                Fechar [ESC]
              </button>
            </div>
            <div className="aspect-video bg-black rounded overflow-hidden relative flex items-center justify-center border border-[#2B2B30]">
              <div className="text-center space-y-2 p-6">
                <Play className="w-12 h-12 text-[#D90429] mx-auto animate-pulse" />
                <p className="font-display text-lg text-white uppercase">
                  Vídeo de Demonstração em Breve
                </p>
                <p className="font-sans text-xs text-[#9CA3AF]">
                  Em breve Tiago Gomes disponibilizará o timelapse completo da criação de seus
                  cenários e modelos 3D.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
