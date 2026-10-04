export type SectionId =
  'top' | 'about' | 'expertise' | 'work' | 'experience' | 'skills' | 'education' | 'contact'

export interface NavItem {
  id: SectionId
  label: string
}

export interface ExternalProfile {
  label: string
  href: string
}

export interface Profile {
  name: string
  role: string
  headline: string
  intro: string
  about: readonly string[]
  email: string
  siteUrl: string
  github: ExternalProfile
  linkedin: ExternalProfile
}

export interface ExpertiseArea {
  title: string
  summary: string
  points: readonly string[]
}

export type ProjectStatus = 'stable' | 'active-development'

export interface Project {
  slug: string
  name: string
  category: string
  status: ProjectStatus
  featured?: boolean
  problem: string
  stack: readonly string[]
  highlights: readonly string[]
  /** A short, honest note on scope or limitations. */
  note?: string
  repoUrl: string
  /** Only set when a real deployment exists. */
  liveUrl?: string
}

export interface ExperienceEntry {
  company: string
  role: string
  /** Display dates, e.g. "Jul 2026". */
  start: string
  /** `null` means the role is current. */
  end: string | null
  location?: string
  points: readonly string[]
}

export interface ExperienceSummary {
  title: string
  period: string
  organisations: string
  description: string
}

export interface SkillGroup {
  title: string
  items: readonly string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  period: string
}
