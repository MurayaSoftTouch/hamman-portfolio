import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ExpertiseSection } from './components/sections/ExpertiseSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { HeroSection } from './components/sections/HeroSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { navigation } from './data/navigation'
import { useScrollSpy } from './hooks/useScrollSpy'

const sectionIds = navigation.map((item) => item.id)

export default function App() {
  const activeId = useScrollSpy(sectionIds)

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <Header activeId={activeId} />
      <main id="main" tabIndex={-1} className="outline-none">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
