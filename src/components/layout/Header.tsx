import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { ExternalLink } from '../ui/ExternalLink'
import { MobileNav } from './MobileNav'

interface HeaderProps {
  activeId: string | null
}

const profiles = [profile.github, profile.linkedin]

export function Header({ activeId }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  // The mobile menu is meaningless on desktop widths; close it if the viewport grows.
  const open = menuOpen && !isDesktop

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm supports-[backdrop-filter]:bg-paper/85">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => {
              const active = item.id === activeId
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? 'location' : undefined}
                    className={`text-sm transition-colors motion-reduce:transition-none ${
                      active ? 'text-accent' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {profiles.map((p) => (
            <ExternalLink
              key={p.href}
              href={p.href}
              className="text-sm text-muted transition-colors hover:text-ink motion-reduce:transition-none"
            >
              {p.label}
            </ExternalLink>
          ))}
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => {
            setMenuOpen((value) => !value)
          }}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <MobileNav
        id={menuId}
        open={open}
        items={navigation}
        activeId={activeId}
        profiles={profiles}
        onNavigate={() => {
          setMenuOpen(false)
        }}
      />
    </header>
  )
}
