import { profile } from '../../data/profile'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading id="about-heading" index="01" title="About" />
      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink/90 sm:text-lg">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
