import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SEO } from "@/components/SEO";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    nationality: "",
    position: "",
    currentClub: "",
    whatsapp: "",
    email: "",
    transfermarkt: "",
    videoLink: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <>
        <SEO
          title="Application Received - Open Trial"
          description="Your Open Trial application has been received. We'll review your profile and contact you soon."
        />
        
        <Navigation />

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
          
          <div className="container relative z-10 text-center py-20">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-neon-green/10 border-2 border-neon-green flex items-center justify-center glow-green-strong">
                <CheckCircle className="w-12 h-12 text-neon-green" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-glow">
                APPLICATION RECEIVED
              </h1>
              
              <Card className="bg-card/50 backdrop-blur border-neon-green/30 glow-green mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    Thank you for applying to Open Trial. We&apos;ll review your application and contact you soon.
                  </p>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Profile Under Review</p>
                        <p className="text-sm text-muted-foreground">We&apos;re evaluating your application</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button 
                  onClick={() => setSubmitted(false)}
                  size="lg" 
                  className="bg-neon-green text-background hover:bg-neon-green/90 glow-green text-base px-8"
                >
                  Submit Another Application
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Questions? Contact us at <a href="mailto:support@opentrial.com" className="text-neon-green hover:underline">support@opentrial.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title="Apply - Open Trial"
        description="Take the first step toward your next football opportunity. Submit your application to Open Trial."
      />
      
      <Navigation />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
        
        <div className="container relative z-10 text-center py-20">
          <Badge className="mb-6 bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20 text-sm px-4 py-1">
            Start Your Journey
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-glow">
            APPLY TO OPEN TRIAL
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step toward your next football opportunity.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="tactical-card bg-card/50 backdrop-blur border-neon-green/30">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-neon-green"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-foreground">Age *</Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="Age"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nationality" className="text-foreground">Nationality *</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="Your nationality"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-foreground">Position *</Label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 py-2 bg-background border border-border rounded-md text-foreground focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green"
                      >
                        <option value="">Select position</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                        <option value="Defender">Defender</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Forward">Forward</option>
                        <option value="Winger">Winger</option>
                        <option value="Striker">Striker</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentClub" className="text-foreground">Current Club *</Label>
                      <Input
                        id="currentClub"
                        name="currentClub"
                        value={formData.currentClub}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="Club name or Free Agent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-foreground">WhatsApp *</Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="+1234567890"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="transfermarkt" className="text-foreground">Transfermarkt Profile (Optional)</Label>
                    <Input
                      id="transfermarkt"
                      name="transfermarkt"
                      type="url"
                      value={formData.transfermarkt}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-neon-green"
                      placeholder="https://www.transfermarkt.com/..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="videoLink" className="text-foreground">Video Link *</Label>
                    <Input
                      id="videoLink"
                      name="videoLink"
                      type="url"
                      value={formData.videoLink}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-neon-green"
                      placeholder="YouTube, Vimeo, or other video link"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder="Tell us about yourself, your career, achievements, and goals..."
                    />
                  </div>

                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-neon-green text-background hover:bg-neon-green/90 glow-green-strong text-base px-12"
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}