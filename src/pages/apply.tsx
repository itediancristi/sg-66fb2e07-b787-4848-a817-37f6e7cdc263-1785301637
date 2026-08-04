"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { adminService } from "@/services/adminService";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  position: string;
  height: string;
  weight: string;
  preferredFoot: string;
  currentClub: string;
  careerHighlights: string;
  achievements: string;
  playingStyle: string;
}

export default function Apply() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    position: "",
    height: "",
    weight: "",
    preferredFoot: "",
    currentClub: "",
    careerHighlights: "",
    achievements: "",
    playingStyle: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const uploadFile = async (file: File, bucket: string, path: string): Promise<string> => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const applicationId = crypto.randomUUID();

      // Upload files if provided
      let videoUrl = null;
      let photoUrl = null;
      const documentUrls: string[] = [];

      if (videoFile) {
        videoUrl = await uploadFile(
          videoFile,
          "player-videos",
          `${applicationId}/${videoFile.name}`
        );
      }

      if (photoFile) {
        photoUrl = await uploadFile(
          photoFile,
          "player-photos",
          `${applicationId}/${photoFile.name}`
        );
      }

      if (documentFiles.length > 0) {
        for (const doc of documentFiles) {
          const url = await uploadFile(
            doc,
            "player-documents",
            `${applicationId}/${doc.name}`
          );
          documentUrls.push(url);
        }
      }

      // Insert application into database
      const { error } = await supabase
        .from("applications")
        .insert({
          id: applicationId,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          date_of_birth: formData.dateOfBirth,
          nationality: formData.nationality,
          position: formData.position,
          height: parseInt(formData.height),
          weight: parseInt(formData.weight),
          preferred_foot: formData.preferredFoot,
          current_club: formData.currentClub || null,
          career_highlights: formData.careerHighlights || null,
          achievements: formData.achievements || null,
          playing_style: formData.playingStyle || null,
          video_url: videoUrl,
          photo_url: photoUrl,
          documents: documentUrls.length > 0 ? documentUrls : null,
          status: "pending",
        });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your application has been submitted successfully. We'll review it and get back to you soon.",
      });

      setSubmitted(true);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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

                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      <p className="text-sm text-destructive">
                        {errorMessage || "Failed to submit application. Please try again."}
                      </p>
                    </div>
                  )}

                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "loading"}
                      className="bg-neon-green text-background hover:bg-neon-green/90 glow-green-strong text-base px-12"
                    >
                      {status === "loading" ? "Submitting..." : "Submit Application"}
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