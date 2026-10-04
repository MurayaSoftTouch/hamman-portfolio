import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders primary navigation with anchor links to every section', () => {
    render(<Header activeId={null} />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const links = within(nav).getAllByRole('link')
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '#about',
      '#expertise',
      '#work',
      '#experience',
      '#skills',
      '#contact',
    ])
  })

  it('marks the active section with aria-current', () => {
    render(<Header activeId="work" />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Work' })).toHaveAttribute(
      'aria-current',
      'location',
    )
    expect(within(nav).getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
  })

  it('toggles the mobile menu and exposes its state', async () => {
    const user = userEvent.setup()
    render(<Header activeId={null} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAccessibleName('Close menu')
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    expect(toggle.getAttribute('aria-controls')).toBe(menu.parentElement?.id)
  })

  it('closes the mobile menu after choosing a section', async () => {
    const user = userEvent.setup()
    render(<Header activeId={null} />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(menu).getByRole('link', { name: 'Experience' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu on Escape and returns focus to the toggle', async () => {
    const user = userEvent.setup()
    render(<Header activeId={null} />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Escape}')

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })
})
