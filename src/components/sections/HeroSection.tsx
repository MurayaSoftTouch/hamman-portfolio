import { ArrowDown } from 'lucide-react'
import { profile } from '../../data/profile'
import { ButtonLink } from '../ui/Button'

const focusAreas = ['Backend & distributed systems', 'Cloud & platform', 'AI systems']

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="container-page">
        <p className="font-mono text-sm text-accent">{profile.role}</p>
        <h1
          id="hero-heading"
          className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          {profile.name}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-snug font-medium text-pretty text-ink sm:text-2xl">
          {profile.headline}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
          {profile.intro}
        </p>

        <ul
          aria-label="Focus areas"
          className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted"
        >
          {focusAreas.map((area) => (
            <li key={area} className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="#work">
            View selected work
            <ArrowDown aria-hidden="true" size={16} />
          </ButtonLink>
          <ButtonLink href={profile.github.href} variant="secondary" external>
            GitHub
          </ButtonLink>
          <ButtonLink href={profile.linkedin.href} variant="quiet" external>
            LinkedIn
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
