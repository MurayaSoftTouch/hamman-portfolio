import { profile } from '../../data/profile'
import { ExternalLink } from '../ui/ExternalLink'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <ul className="flex gap-5">
          {[profile.github, profile.linkedin].map((p) => (
            <li key={p.href}>
              <ExternalLink href={p.href} className="hover:text-ink">
                {p.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
