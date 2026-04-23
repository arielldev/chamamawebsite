import { useState, useRef, useEffect } from 'react'

const highlightRamp = [
  'rgba(216, 255, 91, 0.0) 0%',
  'rgba(216, 255, 91, 0.18) 18%',
  'rgba(216, 255, 91, 0.9) 42%',
  'rgba(148, 255, 208, 0.95) 68%',
  'rgba(94, 234, 212, 0.85) 100%',
].join(', ')

interface TextHighlightProps {
  text: string
  isHovered?: boolean
  textClassName?: string
  textColor?: string
}

export function TextHighlight({
  text,
  isHovered = false,
  textClassName = 'text-[var(--ink-secondary)]',
  textColor = 'var(--ink-secondary)',
}: TextHighlightProps) {
  const [highlightProgress, setHighlightProgress] = useState(0)
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef(0)

  useEffect(() => {
    let animationFrame: number
    let startTime: number | null = null
    const startProgress = progressRef.current
    const targetProgress = isHovered ? 1 : 0

    if (startProgress === targetProgress) {
      return
    }

    const duration = isHovered ? 1100 : 700

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const t = Math.min(elapsed / duration, 1)
      const nextProgress = startProgress + (targetProgress - startProgress) * t
      progressRef.current = nextProgress
      setHighlightProgress(nextProgress)

      if (t < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isHovered])

  return (
    <div ref={textRef} className="relative">
      {/* Base text */}
      <p
        className={`${textClassName} leading-relaxed transition-all duration-300`}
        style={{
          opacity: 1 - highlightProgress * 0.45,
          filter: `blur(${highlightProgress * 0.012}em) saturate(${1 - highlightProgress * 0.2})`,
        }}
      >
        {text}
      </p>

      {/* Highlight overlay */}
      {highlightProgress > 0 && (
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            clipPath: `inset(0 0 0 ${100 - highlightProgress * 100}%)`,
          }}
        >
          <div
            className="absolute inset-x-[-0.3em] top-[0.08em] bottom-[0.08em] rounded-[0.35em]"
            style={{
              background: `linear-gradient(90deg, ${highlightRamp})`,
              boxShadow: `0 0 26px rgba(216, 255, 91, 0.6), 0 0 42px rgba(94, 234, 212, 0.38), 0 0 22px ${textColor}`,
              transform: `scaleX(${0.76 + highlightProgress * 0.24}) scaleY(${0.9 + highlightProgress * 0.1})`,
              transformOrigin: 'left center',
              opacity: 0.28 + highlightProgress * 0.72,
            }}
          />
          <p
            className={`${textClassName} relative font-black leading-relaxed tracking-[0.01em]`}
            style={{
              background: 'linear-gradient(90deg, rgba(250, 255, 224, 1) 0%, rgba(255, 255, 255, 1) 22%, rgba(245, 255, 252, 1) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              WebkitTextStroke: `0.028em color-mix(in srgb, ${textColor} 58%, white 42%)`,
              textShadow: `0 0 12px rgba(216, 255, 91, 0.48), 0 0 24px rgba(94, 234, 212, 0.34), 0 0 10px ${textColor}`,
              filter: `brightness(${1.04 + highlightProgress * 0.24}) contrast(${1.08 + highlightProgress * 0.18}) saturate(${1 + highlightProgress * 0.16})`,
            }}
          >
            {text}
          </p>
        </div>
      )}
    </div>
  )
}
