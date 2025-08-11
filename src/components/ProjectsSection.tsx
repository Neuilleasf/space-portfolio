import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React and TypeScript, featuring cart management, user authentication, and payment integration.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "React", "Prisma", "WebSocket"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard with location-based forecasts, charts, and beautiful visualizations of weather data.",
    technologies: ["React", "D3.js", "Weather API", "Chart.js"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing design skills and development expertise with smooth animations and modern aesthetics.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of recent work demonstrating technical skills and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={16} />
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <GithubLogo size={16} />
                    <span>Code</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more work or discussing a project?
          </p>
          <Button 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent/10 border-accent/20 text-accent-foreground hover:bg-accent/20"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}