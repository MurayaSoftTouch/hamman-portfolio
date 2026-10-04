import { Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { ButtonLink } from '../ui/Button'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function ContactSection() {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <SectionHeading id="contact-heading" index="07" title="Contact">
        If you are working on systems where correctness, reliability or model quality really matter,
        I’d be glad to talk.
      </SectionHeading>
      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" size={16} />
          {profile.email}
        </ButtonLink>
        <ButtonLink href={profile.linkedin.href} variant="secondary" external>
          LinkedIn
        </ButtonLink>
        <ButtonLink href={profile.github.href} variant="secondary" external>
          GitHub
        </ButtonLink>
      </div>
    </Section>
  )
}
