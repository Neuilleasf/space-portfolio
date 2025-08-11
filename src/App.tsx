import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/sonner"

function App() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Effets de lumière diffuse en arrière-plan */}
      <div className="absolute inset-0 light-effect"></div>
      <div className="absolute inset-0 light-effect-secondary"></div>
      
      {/* Contenu principal */}
      <div className="relative z-10">
        <Navigation onContactClick={scrollToContact} />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
      <Toaster />
    </div>
  )
}

export default App