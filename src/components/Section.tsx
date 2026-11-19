interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  'aria-labelledby'?: string
}

export function Section({ children, className, id, 'aria-labelledby': ariaLabelledby }: SectionProps) {
  return (
    <section id={id} aria-labelledby={ariaLabelledby} className={`section ${className ?? ''}`}>
      <div className="container">{children}</div>
    </section>
  )
}