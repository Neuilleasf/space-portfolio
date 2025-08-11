import { ChevronDown } from "@phosphor-icons/react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-background via-primary/30 to-background">
      <div className="text-center space-y-6 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          Hello, I'm Raton!
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground tracking-wider uppercase">
            FRONT-END DEVELOPER
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to create unique websites for you
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-sm">Learn more about me</span>
          <ChevronDown 
            size={24} 
            className="animate-bounce group-hover:animate-none" 
          />
        </button>
      </div>
    </section>
  )
}