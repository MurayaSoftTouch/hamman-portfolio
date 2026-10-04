import type { NavItem } from '../../types/portfolio'
import type { ExternalProfile } from '../../types/portfolio'
import { ExternalLink } from '../ui/ExternalLink'

interface MobileNavProps {
  id: string
  open: boolean
  items: readonly NavItem[]
  activeId: string | null
  profiles: readonly ExternalProfile[]
  onNavigate: () => void
}

/**
 * Disclosure-style menu panel. It is not modal, so it doesn't trap focus;
 * the header owns the toggle button, Escape handling and focus return.
 */
export function MobileNav({ id, open, items, activeId, profiles, onNavigate }: MobileNavProps) {
  return (
    <div id={id} hidden={!open} className="border-t border-line bg-paper md:hidden">
      <nav aria-label="Mobile" className="container-page py-4">
        <ul className="flex flex-col">
          {items.map((item) => {
            const active = item.id === activeId
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={onNavigate}
                  aria-current={active ? 'location' : undefined}
                  className={`block py-3 text-base ${active ? 'font-medium text-accent' : 'text-ink'}`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="mt-2 flex gap-6 border-t border-line pt-4">
          {profiles.map((p) => (
            <li key={p.href}>
              <ExternalLink href={p.href} className="text-sm text-muted hover:text-ink">
                {p.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
