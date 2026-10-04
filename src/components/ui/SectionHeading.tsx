import type { ReactNode } from 'react'

interface SectionHeadingProps {
  id: string
  index: string
  title: string
  children?: ReactNode
}

export function SectionHeading({ id, index, title, children }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs tracking-wider text-accent" aria-hidden="true">
        {index}
      </p>
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {children ? <p className="mt-3 text-base leading-relaxed text-muted">{children}</p> : null}
    </div>
  )
}
