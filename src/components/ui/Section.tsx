import type { ReactNode } from 'react'
import type { SectionId } from '../../types/portfolio'

interface SectionProps {
  id: SectionId
  labelledBy: string
  children: ReactNode
  className?: string
}

export function Section({ id, labelledBy, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`border-t border-line py-20 sm:py-24 ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}
