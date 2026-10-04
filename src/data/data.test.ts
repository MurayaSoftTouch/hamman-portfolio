import { describe, expect, it } from 'vitest'
import { navigation } from './navigation'
import { projects } from './projects'
import { profile } from './profile'
import { experience, earlierExperience } from './experience'

describe('navigation data', () => {
  it('has unique ids', () => {
    const ids = navigation.map((item) => item.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('lists the sections in page order', () => {
    expect(navigation.map((item) => item.label)).toEqual([
      'About',
      'Expertise',
      'Work',
      'Experience',
      'Skills',
      'Contact',
    ])
  })
})

describe('project data', () => {
  it('features exactly LedgerCore, IncidentIQ and PulseStream, with LedgerCore as flagship', () => {
    expect(projects.map((p) => p.name)).toEqual(['LedgerCore', 'IncidentIQ', 'PulseStream'])
    expect(projects.filter((p) => p.featured).map((p) => p.name)).toEqual(['LedgerCore'])
  })

  it('marks PulseStream as in active development', () => {
    expect(projects.find((p) => p.slug === 'pulsestream')?.status).toBe('active-development')
  })

  it('keeps cards concise: 3–5 technologies and 2–3 highlights', () => {
    for (const project of projects) {
      expect(project.stack.length).toBeGreaterThanOrEqual(3)
      expect(project.stack.length).toBeLessThanOrEqual(5)
      expect(project.highlights.length).toBeGreaterThanOrEqual(2)
      expect(project.highlights.length).toBeLessThanOrEqual(3)
    }
  })

  it('links every project to its repository under the owner account', () => {
    for (const project of projects) {
      expect(project.repoUrl).toMatch(/^https:\/\/github\.com\/MurayaSoftTouch\/[\w-]+$/)
    }
  })
})

describe('profile data', () => {
  it('uses the correct spelling of the name', () => {
    expect(profile.name).toBe('Haman Muraya')
    expect(JSON.stringify(profile)).not.toMatch(/Hamman/)
  })

  it('has exactly one current role', () => {
    const current = [...experience, ...earlierExperience].filter((e) => e.end === null)
    expect(current).toHaveLength(1)
  })
})
