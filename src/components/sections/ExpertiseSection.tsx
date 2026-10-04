import { expertise } from '../../data/expertise'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function ExpertiseSection() {
  return (
    <Section id="expertise" labelledBy="expertise-heading">
      <SectionHeading id="expertise-heading" index="02" title="Expertise" />
      <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {expertise.map((area) => (
          <li key={area.title} className="bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">{area.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{area.summary}</p>
            <ul className="mt-5 space-y-2 text-sm text-ink">
              {area.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
