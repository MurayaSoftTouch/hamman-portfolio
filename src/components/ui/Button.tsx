import type { ReactNode } from 'react'
import { ExternalLink } from './ExternalLink'

type Variant = 'primary' | 'secondary' | 'quiet'

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: Variant
  external?: boolean
}

const base =
  'inline-flex items-center gap-2 rounded-md py-2.5 text-sm font-medium transition-colors motion-reduce:transition-none'

const variants: Record<Variant, string> = {
  primary: 'bg-ink px-4 text-paper hover:bg-accent-strong',
  secondary: 'border border-line-strong px-4 text-ink hover:border-ink',
  quiet:
    'px-1 text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent',
}

/** Every call-to-action on this site navigates, so buttons are rendered as links. */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
}: ButtonLinkProps) {
  const className = `${base} ${variants[variant]}`
  return external ? (
    <ExternalLink href={href} className={className}>
      {children}
    </ExternalLink>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
