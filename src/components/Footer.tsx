import { GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-foreground mb-2">
              Raton
            </div>
            <p className="text-muted-foreground text-sm">
              Front-End Developer crafting unique web experiences
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/raton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubLogo size={24} />
            </a>
            <a
              href="https://linkedin.com/in/raton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={24} />
            </a>
            <a
              href="https://twitter.com/raton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <TwitterLogo size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Raton. All rights reserved. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  )
}