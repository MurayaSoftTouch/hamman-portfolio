import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types/portfolio'
import { Badge } from '../ui/Badge'
import { ExternalLink } from '../ui/ExternalLink'

interface ProjectCardProps {
  project: Project
}

const linkClass =
  'inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent motion-reduce:transition-none'

export function ProjectCard({ project }: ProjectCardProps) {
  const headingId = `project-${project.slug}`
  const featured = project.featured === true

  return (
    <article
      aria-labelledby={headingId}
      className={`flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong motion-reduce:transition-none sm:p-8 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="font-mono text-xs tracking-wide text-accent uppercase">{project.category}</p>
        {featured ? <Badge>Flagship</Badge> : null}
        {project.status === 'active-development' ? <Badge>In active development</Badge> : null}
      </div>

      <h3 id={headingId} className="mt-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-3 max-w-3xl leading-relaxed text-pretty text-muted">{project.problem}</p>

      <div className={featured ? 'mt-6 grid gap-8 lg:grid-cols-[1fr_16rem]' : 'mt-6'}>
        <div>
          <h4 className="sr-only">Engineering highlights</h4>
          <ul className="space-y-3 text-sm leading-relaxed text-ink">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          {project.note ? (
            <p className="mt-5 border-l-2 border-line-strong pl-3 text-sm leading-relaxed text-muted">
              {project.note}
            </p>
          ) : null}
        </div>

        <div className={featured ? '' : 'mt-6'}>
          <h4 className="font-mono text-xs text-muted">Stack</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-8">
        <ExternalLink
          href={project.repoUrl}
          className={linkClass}
          aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
        >
          Source on GitHub
          <ArrowUpRight aria-hidden="true" size={15} />
        </ExternalLink>
        {project.liveUrl ? (
          <ExternalLink
            href={project.liveUrl}
            className={linkClass}
            aria-label={`${project.name} live site (opens in a new tab)`}
          >
            Live site
            <ArrowUpRight aria-hidden="true" size={15} />
          </ExternalLink>
        ) : null}
      </div>
    </article>
  )
}
