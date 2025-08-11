import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate front-end developer with a love for creating beautiful, functional web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated front-end developer who believes in the power of great design and clean code. 
                With a keen eye for detail and a passion for user experience, I create websites that not only 
                look amazing but also provide seamless functionality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                What I Do
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building responsive, accessible, and performant web applications using modern 
                technologies. From concept to deployment, I work closely with clients to bring their vision to life 
                through thoughtful design and robust development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                My Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every project starts with understanding your goals and your users' needs. I believe in collaborative 
                development, clean code practices, and continuous learning to deliver solutions that exceed expectations.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-card/50 border-border/50">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Experience
                </h4>
                <p className="text-muted-foreground">
                  3+ years in front-end development with a focus on React, TypeScript, and modern web technologies.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Education
                </h4>
                <p className="text-muted-foreground">
                  Computer Science background with continuous learning in web development and design principles.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Interests
                </h4>
                <p className="text-muted-foreground">
                  UI/UX design, performance optimization, accessibility, and staying up-to-date with the latest web standards.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}