import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { EnvelopeSimple, LinkedinLogo, GithubLogo, TwitterLogo } from "@phosphor-icons/react"
import { toast } from "sonner"
import { useKV } from '@github/spark/hooks'

interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  timestamp: string
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messages, setMessages] = useKV<ContactMessage[]>("contact-messages", [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString()
    }
    
    setMessages(currentMessages => [...currentMessages, newMessage])
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const socialLinks = [
    {
      icon: EnvelopeSimple,
      label: "Email",
      href: "mailto:hello@raton.dev",
      value: "hello@raton.dev"
    },
    {
      icon: LinkedinLogo,
      label: "LinkedIn",
      href: "https://linkedin.com/in/raton",
      value: "linkedin.com/in/raton"
    },
    {
      icon: GithubLogo,
      label: "GitHub",
      href: "https://github.com/raton",
      value: "github.com/raton"
    },
    {
      icon: TwitterLogo,
      label: "Twitter",
      href: "https://twitter.com/raton",
      value: "@raton"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 border-border/50">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-card-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-2 bg-background/50"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-card-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-2 bg-background/50"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-card-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="mt-2 bg-background/50 min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-card/50 border-border/50">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">
                Get in Touch
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you have a project idea, need consultation, or just want to say hello, 
                I'm always open to discussing new opportunities and interesting challenges.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-background/20 hover:bg-background/40 transition-colors group"
                    >
                      <IconComponent 
                        size={20} 
                        className="text-accent-foreground group-hover:scale-110 transition-transform" 
                      />
                      <div>
                        <div className="text-sm font-medium text-card-foreground">
                          {link.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {link.value}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}