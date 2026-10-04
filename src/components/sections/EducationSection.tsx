import { education } from '../../data/education'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function EducationSection() {
  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading id="education-heading" index="06" title="Education" />
      <ul className="divide-y divide-line border-y border-line">
        {education.map((entry) => (
          <li
            key={entry.degree}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <p className="text-sm text-ink">
              <span className="font-medium">{entry.degree}</span>
              <span className="text-muted"> · {entry.institution}</span>
            </p>
            <p className="shrink-0 font-mono text-xs text-muted">{entry.period}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
