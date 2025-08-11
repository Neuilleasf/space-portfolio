import { Card } from "@/components/ui/card"
import { Code, PaintBrush, Wrench, Globe } from "@phosphor-icons/react"

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Technologies",
    skills: [
      "React & Next.js",
      "TypeScript & JavaScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Redux & Zustand"
    ]
  },
  {
    icon: PaintBrush,
    title: "Design & UI/UX",
    skills: [
      "Responsive Design",
      "UI Component Libraries",
      "Design Systems",
      "Figma & Adobe XD",
      "Accessibility (WCAG)"
    ]
  },
  {
    icon: Wrench,
    title: "Development Tools",
    skills: [
      "Git & GitHub",
      "Vite & Webpack",
      "npm & Yarn",
      "ESLint & Prettier",
      "Testing (Jest, Vitest)"
    ]
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: [
      "REST APIs",
      "GraphQL",
      "Progressive Web Apps",
      "Performance Optimization",
      "SEO Best Practices"
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card 
                key={category.title}
                className="p-6 bg-card/50 border-border/50 hover:bg-card/70 transition-colors"
              >
                <div className="text-center mb-4">
                  <IconComponent 
                    size={48} 
                    className="text-accent-foreground mx-auto mb-3" 
                  />
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill}
                      className="text-sm text-muted-foreground text-center"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Always learning and staying current with the latest technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React 19", "TypeScript 5", "CSS4", "Web Components", "AI Integration"].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}