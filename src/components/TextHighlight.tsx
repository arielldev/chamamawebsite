interface TextHighlightProps {
  text: string
  isHovered?: boolean
  textClassName?: string
  textColor?: string
}

export function TextHighlight({
  text,
  textClassName = 'text-(--ink-secondary)',
}: TextHighlightProps) {
  return <p className={`${textClassName} leading-relaxed`}>{text}</p>
}
