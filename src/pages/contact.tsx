import { useForm, ValidationError } from "@formspree/react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mkjwejdv");

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
              {state.succeeded ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-neon-green mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        disabled={state.submitting}
                        className="bg-background"
                      />
                      <ValidationError field="name" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        disabled={state.submitting}
                        className="bg-background"
                      />
                      <ValidationError field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                      disabled={state.submitting}
                      className="bg-background"
                    />
                    <ValidationError field="subject" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what you need help with..."
                      required
                      disabled={state.submitting}
                      rows={6}
                      className="bg-background resize-none"
                    />
                    <ValidationError field="message" errors={state.errors} />
                  </div>

                  {state.errors && (
                    <div className="p-4 bg-destructive/10 border border-destructive/30 rounded text-destructive text-sm">
                      <ValidationError errors={state.errors} />
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-neon-green hover:bg-neon-green/90 text-pitch-black font-semibold"
                  >
                    {state.submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
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
  );
}