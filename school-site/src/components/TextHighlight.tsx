import { useState, useRef, useEffect } from 'react'

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
      <p className={`${textClassName} leading-relaxed`}>
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
          <p
            className={`${textClassName} leading-relaxed`}
            style={{
              background: 'linear-gradient(to left, rgba(90, 139, 125, 0.9) 0%, rgba(90, 139, 125, 0.8) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: textColor,
              color: textColor,
            }}
          >
            {text}
          </p>
        </div>
      )}
    </div>
  )
}
