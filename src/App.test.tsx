import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { navigation } from './data/navigation'

describe('App', () => {
  it('renders a single h1 and landmarks', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1, name: 'Haman Muraya' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders a section for every navigation target', () => {
    const { container } = render(<App />)
    for (const item of navigation) {
      expect(container.querySelector(`section#${item.id}`)).not.toBeNull()
    }
  })

  it('offers a skip link to the main content', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')
  })

  it('provides a mailto contact link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /hamanmuraya009@gmail\.com/ })).toHaveAttribute(
      'href',
      'mailto:hamanmuraya009@gmail.com',
    )
  })

  it('does not render fake demo links', () => {
    render(<App />)
    expect(screen.queryByRole('link', { name: /demo/i })).not.toBeInTheDocument()
  })
})
