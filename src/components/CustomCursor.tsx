import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouch(true)
      }
    }
    checkTouch()

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (isTouch) return
    let animationFrameId: number

    const updateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x
        const dy = position.y - prev.y
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        }
      })
      animationFrameId = requestAnimationFrame(updateTrailing)
    }

    animationFrameId = requestAnimationFrame(updateTrailing)
    return () => cancelAnimationFrame(animationFrameId)
  }, [position, isTouch])

  if (isTouch) return null

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-transform duration-100 ease-out mix-blend-difference ${
          isHovered ? 'bg-[#D90429] scale-150' : 'bg-white scale-100'
        }`}
        style={{
          width: '8px',
          height: '8px',
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />
      {/* Trailing Outer Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-all duration-300 ease-out ${
          isHovered ? 'border-[#D90429] bg-[#D90429]/10 scale-150' : 'border-white/30 scale-100'
        }`}
        style={{
          width: '36px',
          height: '36px',
          transform: `translate3d(${trailingPos.x - 18}px, ${trailingPos.y - 18}px, 0)`,
        }}
      />
    </>
  )
}
