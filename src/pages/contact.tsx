import { useState } from "react"
import { SEO } from "@/components/SEO"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <SEO 
        title="Contact Us - Open Trial"
        description="Get in touch with Open Trial. We're here to answer your questions about player trials, club partnerships, and opportunities."
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green/20 rounded-full mb-6">
                <Mail className="w-4 h-4 text-neon-green" />
                <span className="text-sm font-medium text-neon-green">Get In Touch</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact <span className="text-neon-green">Open Trial</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about trials, partnerships, or opportunities? We're here to help connect talent with the right clubs.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you need help with..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-neon-green/10 border border-neon-green/20 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0" />
                    <p className="text-sm text-foreground">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <p className="text-sm text-destructive">
                      {errorMessage || "Failed to send message. Please try again."}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-neon-green hover:bg-neon-green/90 text-pitch-black font-semibold"
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Email Us Directly</h3>
                <a 
                  href="mailto:info@opentrialfootball.com"
                  className="text-neon-green hover:underline"
                >
                  info@opentrialfootball.com
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}