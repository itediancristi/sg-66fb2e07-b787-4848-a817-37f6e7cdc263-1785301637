"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Apply() {
  const [state, handleSubmit] = useForm("xaewkowr");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);

  if (state.succeeded) {
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
                  onClick={() => window.location.reload()}
                  size="lg" 
                  className="bg-neon-green text-background hover:bg-neon-green/90 glow-green text-base px-8"
                >
                  Submit Another Application
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Questions? Contact us at <a href="mailto:info@opentrialfootball.com" className="text-neon-green hover:underline">info@opentrialfootball.com</a>
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
                    <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      required
                      disabled={state.submitting}
                      className="bg-background border-border focus:border-neon-green"
                      placeholder="Your full name"
                    />
                    <ValidationError field="fullName" errors={state.errors} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={state.submitting}
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="your.email@example.com"
                      />
                      <ValidationError field="email" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        disabled={state.submitting}
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="+1234567890"
                      />
                      <ValidationError field="phone" errors={state.errors} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="text-foreground">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                        disabled={state.submitting}
                        className="bg-background border-border focus:border-neon-green"
                      />
                      <ValidationError field="dateOfBirth" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nationality" className="text-foreground">Nationality *</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        required
                        disabled={state.submitting}
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="Your nationality"
                      />
                      <ValidationError field="nationality" errors={state.errors} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-foreground">Position *</Label>
                      <select
                        id="position"
                        name="position"
                        required
                        disabled={state.submitting}
                        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select position</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                        <option value="Defender">Defender</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Forward">Forward</option>
                        <option value="Winger">Winger</option>
                        <option value="Striker">Striker</option>
                      </select>
                      <ValidationError field="position" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentClub" className="text-foreground">Current Club</Label>
                      <Input
                        id="currentClub"
                        name="currentClub"
                        disabled={state.submitting}
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="Club name or Free Agent"
                      />
                      <ValidationError field="currentClub" errors={state.errors} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="height" className="text-foreground">Height (cm) *</Label>
                      <Input
                        id="height"
                        name="height"
                        type="number"
                        required
                        disabled={state.submitting}
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="180"
                      />
                      <ValidationError field="height" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight" className="text-foreground">Weight (kg) *</Label>
                      <Input
                        id="weight"
                        name="weight"
                        type="number"
                        required
                        disabled={state.submitting}
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="75"
                      />
                      <ValidationError field="weight" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredFoot" className="text-foreground">Preferred Foot *</Label>
                      <select
                        id="preferredFoot"
                        name="preferredFoot"
                        required
                        disabled={state.submitting}
                        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select foot</option>
                        <option value="right">Right</option>
                        <option value="left">Left</option>
                        <option value="both">Both</option>
                      </select>
                      <ValidationError field="preferredFoot" errors={state.errors} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="careerHighlights" className="text-foreground">Career Highlights</Label>
                    <Textarea
                      id="careerHighlights"
                      name="careerHighlights"
                      disabled={state.submitting}
                      rows={3}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder="Describe your career highlights..."
                    />
                    <ValidationError field="careerHighlights" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="achievements" className="text-foreground">Achievements</Label>
                    <Textarea
                      id="achievements"
                      name="achievements"
                      disabled={state.submitting}
                      rows={3}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder="List your achievements..."
                    />
                    <ValidationError field="achievements" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="playingStyle" className="text-foreground">Playing Style</Label>
                    <Textarea
                      id="playingStyle"
                      name="playingStyle"
                      disabled={state.submitting}
                      rows={3}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder="Describe your playing style..."
                    />
                    <ValidationError field="playingStyle" errors={state.errors} />
                  </div>

                  <div className="space-y-4 border-t border-border pt-6">
                    <h3 className="text-lg font-semibold">Media Upload</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="photo">Player Photo</Label>
                      <Input
                        id="photo"
                        name="photo"
                        type="file"
                        accept="image/*"
                        disabled={state.submitting}
                        onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                        className="bg-background border-border"
                      />
                      <ValidationError field="photo" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="video">Highlight Video</Label>
                      <Input
                        id="video"
                        name="video"
                        type="file"
                        accept="video/*"
                        disabled={state.submitting}
                        onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                        className="bg-background border-border"
                      />
                      <ValidationError field="video" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="documents">Documents (CV, Certificates, etc.)</Label>
                      <Input
                        id="documents"
                        name="documents"
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx"
                        disabled={state.submitting}
                        onChange={(e) => setDocumentFiles(Array.from(e.target.files || []))}
                        className="bg-background border-border"
                      />
                      <ValidationError field="documents" errors={state.errors} />
                    </div>
                  </div>

                  {state.errors && (
                    <div className="p-4 bg-destructive/10 border border-destructive/30 rounded text-destructive text-sm">
                      <ValidationError errors={state.errors} />
                    </div>
                  )}

                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={state.submitting}
                      className="bg-neon-green text-background hover:bg-neon-green/90 glow-green-strong text-base px-12"
                    >
                      {state.submitting ? "Submitting..." : "Submit Application"}
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