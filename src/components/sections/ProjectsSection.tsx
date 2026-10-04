import { projects } from '../../data/projects'
import { ProjectCard } from '../projects/ProjectCard'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function ProjectsSection() {
  return (
    <Section id="work" labelledBy="work-heading">
      <SectionHeading id="work-heading" index="03" title="Selected work">
        Three systems that show how I approach correctness, failure and evaluation. Each repository
        includes its documentation and tests.
      </SectionHeading>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
