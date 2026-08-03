import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageLightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  if (!isOpen || images.length === 0) return null

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNavigate((currentIndex - 1 + images.length) % images.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNavigate((currentIndex + 1) % images.length)
  }

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-[#D90429] p-3 rounded-full transition-colors z-50"
        aria-label="Fechar galeria"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Left */}
      {images.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-6 text-white/80 hover:text-white bg-white/10 hover:bg-[#D90429] p-3 rounded-full transition-colors z-50"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image Preview */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Visualização ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded border border-[#2B2B30] shadow-2xl"
        />
        <div className="mt-4 font-mono text-sm text-[#9CA3AF]">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Navigation Right */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-6 text-white/80 hover:text-white bg-white/10 hover:bg-[#D90429] p-3 rounded-full transition-colors z-50"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
