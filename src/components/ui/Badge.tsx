import type { ReactNode } from 'react'

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded border border-line bg-surface px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  )
}
