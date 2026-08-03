import { useState, useRef, useCallback } from 'react'
import { MoveHorizontal } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  title?: string
  aspectRatio?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes (Sketch / Wireframe)',
  afterLabel = 'Depois (Render / Final)',
  title,
  aspectRatio = 'aspect-[16/10]',
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100
    if (percentage < 0) percentage = 0
    if (percentage > 100) percentage = 100
    setSliderPos(percentage)
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging) {
        handleMove(e.touches[0].clientX)
      }
    },
    [isDragging, handleMove],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX)
      }
    },
    [isDragging, handleMove],
  )

  return (
    <div className="space-y-2">
      {title && (
        <h4 className="font-display text-lg text-white tracking-wide uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D90429]" />
          {title}
        </h4>
      )}

      <div
        ref={containerRef}
        className={`relative w-full ${aspectRatio} rounded-lg overflow-hidden select-none border border-[#2B2B30] bg-[#111113] group shadow-xl`}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE Image (Clipped overlay) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            }}
          />
        </div>

        {/* BEFORE Label Badge */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-[#F5F5F5] border border-white/10 z-10 pointer-events-none">
          {beforeLabel}
        </div>

        {/* AFTER Label Badge */}
        <div className="absolute top-4 right-4 bg-[#D90429]/90 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white border border-red-400/20 z-10 pointer-events-none">
          {afterLabel}
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#D90429] shadow-[0_0_10px_#D90429] z-20 cursor-ew-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#D90429] text-white flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
