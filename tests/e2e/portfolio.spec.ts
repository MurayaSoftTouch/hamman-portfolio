import { expect, test } from '@playwright/test'

const sections = ['about', 'expertise', 'work', 'experience', 'skills', 'contact'] as const

test.describe('portfolio page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('loads with the correct title and hero', async ({ page }) => {
    await expect(page).toHaveTitle('Haman Muraya — Senior Software Engineer')
    await expect(page.getByRole('heading', { level: 1, name: 'Haman Muraya' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'View selected work' })).toBeVisible()
  })

  test('renders every section anchor', async ({ page }) => {
    for (const id of sections) {
      await expect(page.locator(`section#${id}`)).toHaveCount(1)
    }
  })

  test('shows the three selected projects', async ({ page }) => {
    const work = page.locator('section#work')
    for (const name of ['LedgerCore', 'IncidentIQ', 'PulseStream']) {
      await expect(work.getByRole('heading', { level: 3, name })).toBeVisible()
    }
    await expect(work.getByText('In active development')).toBeVisible()
  })

  test('external links open safely in a new tab', async ({ page }) => {
    const external = page.locator('a[target="_blank"]')
    expect(await external.count()).toBeGreaterThan(0)
    for (const link of await external.all()) {
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      await expect(link).toHaveAttribute('href', /^https:\/\//)
    }
  })

  test('does not horizontally overflow', async ({ page }) => {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )
    expect(overflow).toBeLessThanOrEqual(0)
  })

  test('the skip link is the first focusable element', async ({ page }) => {
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  })
})

test.describe('desktop navigation', () => {
  test.skip(({ isMobile }) => isMobile, 'desktop only')

  test('scrolls to a section and marks it active', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Primary' })
    await nav.getByRole('link', { name: 'Experience' }).click()

    await expect(page).toHaveURL(/#experience$/)
    await expect(page.locator('section#experience')).toBeInViewport()
    await expect(nav.getByRole('link', { name: 'Experience' })).toHaveAttribute(
      'aria-current',
      'location',
    )
  })
})

test.describe('mobile navigation', () => {
  test.skip(({ isMobile }) => !isMobile, 'mobile only')

  test('opens the menu, navigates and closes', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeHidden()

    const toggle = page.getByRole('button', { name: 'Open menu' })
    await toggle.click()
    await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    const menu = page.getByRole('navigation', { name: 'Mobile' })
    await menu.getByRole('link', { name: 'Work' }).click()

    await expect(menu).toBeHidden()
    await expect(page).toHaveURL(/#work$/)
    await expect(page.locator('section#work')).toBeInViewport()
  })

  test('closes the menu with Escape', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Open menu' }).click()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('navigation', { name: 'Mobile' })).toBeHidden()
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused()
  })
})
