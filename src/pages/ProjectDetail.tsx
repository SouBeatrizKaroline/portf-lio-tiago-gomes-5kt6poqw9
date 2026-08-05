import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Box, ExternalLink, Layers, Sparkles, Image as ImageIcon } from 'lucide-react'
import { getProjectById } from '@/services/projects'
import { Project } from '@/types/project'
import { ImageLightbox } from '@/components/ImageLightbox'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (id) {
      setLoading(true)
      getProjectById(id).then((data) => {
        setProject(data)
        setLoading(false)
      })
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-2 border-[#D90429] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-mono text-xs uppercase tracking-widest text-[#9CA3AF]">
            Carregando Detalhes do Projeto...
          </p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl text-white uppercase">Projeto Não Encontrado</h2>
          <button
            onClick={() => navigate('/', { state: { scrollTo: 'projetos' } })}
            className="px-6 py-2 bg-[#D90429] text-white font-mono text-xs uppercase tracking-widest rounded"
          >
            Voltar para Projetos
          </button>
        </div>
      </div>
    )
  }

  const galleryImages = project.gallery || [project.preview_url || '']

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* Back Button & Category Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/', { state: { scrollTo: 'projetos' } })}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9CA3AF] hover:text-[#D90429] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para Projetos
        </button>

        <div className="space-y-4">
          <div className="inline-block bg-[#D90429] text-white font-mono text-xs uppercase tracking-widest px-3 py-1 rounded">
            {project.category}
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
            {project.title}
          </h1>
          <p className="text-base text-[#9CA3AF] max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Main Cover Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#2B2B30] bg-[#111113] cursor-pointer group shadow-2xl"
          onClick={() => {
            setLightboxIndex(0)
            setLightboxOpen(true)
          }}
        >
          <img
            src={project.preview_url}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="bg-black/80 backdrop-blur-md px-4 py-2 rounded font-mono text-xs uppercase tracking-widest text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
              Expandir Imagem
            </span>
          </div>
        </div>
      </div>

      {/* Project Specs & Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Full Description & Process */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-white uppercase tracking-wide border-b border-[#2B2B30] pb-2">
              Sobre o Processo Criativo
            </h3>
            <div className="text-sm text-[#9CA3AF] leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {project.full_description}
            </div>
          </div>

          {/* Gallery Grid */}
          {galleryImages.length > 0 && (
            <div className="space-y-4 pt-6">
              <h3 className="font-display text-2xl text-white uppercase tracking-wide flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#D90429]" /> Galeria de Renders & Passes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {galleryImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#2B2B30] bg-[#111113] cursor-pointer group"
                    onClick={() => {
                      setLightboxIndex(idx)
                      setLightboxOpen(true)
                    }}
                  >
                    <img
                      src={imgUrl}
                      alt={`Galeria ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Tools & Metadata Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#111113] p-6 rounded-lg border border-[#2B2B30] space-y-6">
            <div className="space-y-3">
              <h4 className="font-display text-lg text-white uppercase tracking-wider">
                Ferramentas Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded bg-[#1A1A1D] text-xs font-mono text-[#D90429] border border-[#D90429]/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 border-t border-[#2B2B30] pt-4 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-[#9CA3AF]">Categoria:</span>
                <span className="text-white">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9CA3AF]">Estúdio:</span>
                <span className="text-[#D90429]">Scarlet Studio</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9CA3AF]">Artista:</span>
                <span className="text-white">Tiago Gomes (KOV)</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/', { state: { scrollTo: 'contato' } })}
              className="w-full py-3 bg-[#D90429] hover:bg-[#A4031F] text-white font-display text-sm uppercase tracking-widest rounded transition-colors"
            >
              Solicitar Projeto Similar
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  )
}
