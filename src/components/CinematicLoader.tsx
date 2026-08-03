import { useEffect, useState } from 'react'

export function CinematicLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[10000] bg-[#0A0A0B] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 animate-fade-out">
      {/* Background Subtle Ink Respingo */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D90429]/30 via-transparent to-transparent" />

      {/* Monograma Animated SVG */}
      <div className="relative mb-6">
        <svg width="90" height="90" viewBox="0 0 100 100" className="animate-pulse">
          {/* Hand drawn 'S' Monogram */}
          <path
            d="M 65 25 C 45 15, 20 30, 30 48 C 38 60, 75 55, 70 75 C 65 90, 30 85, 20 75"
            fill="none"
            stroke="#D90429"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_12px_rgba(217,4,41,0.8)]"
          />
          <path
            d="M 62 27 C 47 18, 25 32, 33 46 C 40 57, 72 53, 68 73"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-70"
          />
        </svg>
      </div>

      {/* Brand Title */}
      <div className="text-center space-y-1">
        <h1 className="font-display text-2xl tracking-[0.25em] text-white uppercase">
          Scarlet <span className="text-[#D90429]">Studio</span>
        </h1>
        <p className="font-handwriting text-[#9CA3AF] text-sm tracking-wider">
          Creating Worlds Through Art...
        </p>
      </div>

      {/* Loading Progress Bar */}
      <div className="w-48 h-[2px] bg-[#1A1A1D] mt-8 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#D90429] to-[#FF2E4D] w-full animate-pulse" />
      </div>
    </div>
  )
}
