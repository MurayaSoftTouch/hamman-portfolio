import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { Project } from '../../types/portfolio'
import { ProjectCard } from './ProjectCard'

const baseProject: Project = {
  slug: 'example',
  name: 'Example',
  category: 'Testing',
  status: 'stable',
  problem: 'A problem statement.',
  stack: ['Go', 'PostgreSQL', 'Docker'],
  highlights: ['First highlight.', 'Second highlight.'],
  repoUrl: 'https://github.com/MurayaSoftTouch/Example',
}

describe('ProjectCard', () => {
  it('renders the project as a labelled article with its content', () => {
    render(<ProjectCard project={baseProject} />)

    const article = screen.getByRole('article', { name: 'Example' })
    expect(article).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Example' })).toBeInTheDocument()
    expect(screen.getByText('A problem statement.')).toBeInTheDocument()
    expect(screen.getByText('First highlight.')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
  })

  it('links to the repository in a new tab with a descriptive name', () => {
    render(<ProjectCard project={baseProject} />)

    const link = screen.getByRole('link', { name: /Example source code on GitHub/ })
    expect(link).toHaveAttribute('href', baseProject.repoUrl)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not render a live-site link when none exists', () => {
    render(<ProjectCard project={baseProject} />)
    expect(screen.queryByRole('link', { name: /live site/i })).not.toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })

  it('renders a live-site link only when a URL is provided', () => {
    render(<ProjectCard project={{ ...baseProject, liveUrl: 'https://example.com' }} />)
    expect(screen.getByRole('link', { name: /Example live site/ })).toHaveAttribute(
      'href',
      'https://example.com',
    )
  })

  it('shows status and flagship labels only when applicable', () => {
    const { rerender } = render(<ProjectCard project={baseProject} />)
    expect(screen.queryByText('In active development')).not.toBeInTheDocument()
    expect(screen.queryByText('Flagship')).not.toBeInTheDocument()

    rerender(
      <ProjectCard project={{ ...baseProject, status: 'active-development', featured: true }} />,
    )
    expect(screen.getByText('In active development')).toBeInTheDocument()
    expect(screen.getByText('Flagship')).toBeInTheDocument()
  })

  it('renders the optional scope note only when present', () => {
    const { rerender } = render(<ProjectCard project={baseProject} />)
    expect(screen.queryByText('Planned work is not implemented.')).not.toBeInTheDocument()

    rerender(<ProjectCard project={{ ...baseProject, note: 'Planned work is not implemented.' }} />)
    expect(screen.getByText('Planned work is not implemented.')).toBeInTheDocument()
  })
})
