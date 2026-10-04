import { skills } from '../../data/skills'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function SkillsSection() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading id="skills-heading" index="05" title="Skills" />
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((group) => (
          <div key={group.title} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
            <dt className="text-sm font-medium text-ink">{group.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
