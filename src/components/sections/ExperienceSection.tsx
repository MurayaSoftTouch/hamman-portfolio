import { aiContractWork, earlierExperience, experience } from '../../data/experience'
import type { ExperienceEntry } from '../../types/portfolio'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

function formatPeriod(entry: ExperienceEntry): string {
  return `${entry.start} – ${entry.end ?? 'Present'}`
}

export function ExperienceSection() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading id="experience-heading" index="04" title="Experience">
        Selected roles. The full history is on LinkedIn.
      </SectionHeading>

      <ol className="border-l border-line">
        {experience.map((entry) => (
          <li
            key={`${entry.company}-${entry.start}`}
            className="relative pb-10 pl-6 last:pb-0 sm:pl-8"
          >
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[5px] size-[9px] rounded-full border-2 border-paper ${
                entry.end === null ? 'bg-accent' : 'bg-line-strong'
              }`}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-base font-semibold text-ink">
                {entry.role}
                <span className="font-normal text-muted"> · {entry.company}</span>
              </h3>
              <p className="shrink-0 font-mono text-xs text-muted">{formatPeriod(entry)}</p>
            </div>
            {entry.location ? <p className="mt-1 text-xs text-muted">{entry.location}</p> : null}
            <ul className="mt-3 max-w-3xl space-y-1.5 text-sm leading-relaxed text-ink/90">
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs tracking-wide text-muted uppercase">Earlier</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {earlierExperience.map((entry) => (
              <li key={`${entry.company}-${entry.start}`} className="py-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <p className="text-sm font-medium text-ink">
                    {entry.role}
                    <span className="font-normal text-muted"> · {entry.company}</span>
                  </p>
                  <p className="shrink-0 font-mono text-xs text-muted">{formatPeriod(entry)}</p>
                </div>
                {entry.points.map((point) => (
                  <p key={point} className="mt-1 text-sm text-muted">
                    {point}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-wide text-muted uppercase">
            {aiContractWork.title}
          </h3>
          <div className="mt-4 border-y border-line py-4">
            <p className="font-mono text-xs text-muted">{aiContractWork.period}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/90">{aiContractWork.description}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {aiContractWork.organisations}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
