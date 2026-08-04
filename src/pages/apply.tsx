"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
          documents_url: documentUrls.length > 0 ? documentUrls : (null as string[] | null),
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
                    <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-neon-green"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="+1234567890"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="text-foreground">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nationality" className="text-foreground">Nationality *</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="Your nationality"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-foreground">Position *</Label>
                      <Select value={formData.position} onValueChange={(value) => handleSelectChange("position", value)}>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Goalkeeper">Goalkeeper</SelectItem>
                          <SelectItem value="Defender">Defender</SelectItem>
                          <SelectItem value="Midfielder">Midfielder</SelectItem>
                          <SelectItem value="Forward">Forward</SelectItem>
                          <SelectItem value="Winger">Winger</SelectItem>
                          <SelectItem value="Striker">Striker</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentClub" className="text-foreground">Current Club</Label>
                      <Input
                        id="currentClub"
                        name="currentClub"
                        value={formData.currentClub}
                        onChange={handleInputChange}
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="Club name or Free Agent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="height" className="text-foreground">Height (cm) *</Label>
                      <Input
                        id="height"
                        name="height"
                        type="number"
                        value={formData.height}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="180"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight" className="text-foreground">Weight (kg) *</Label>
                      <Input
                        id="weight"
                        name="weight"
                        type="number"
                        value={formData.weight}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-neon-green"
                        placeholder="75"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredFoot" className="text-foreground">Preferred Foot *</Label>
                      <Select value={formData.preferredFoot} onValueChange={(value) => handleSelectChange("preferredFoot", value)}>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select foot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="right">Right</SelectItem>
                          <SelectItem value="left">Left</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="careerHighlights" className="text-foreground">Career Highlights</Label>
                    <Textarea
                      id="careerHighlights"
                      name="careerHighlights"
                      value={formData.careerHighlights}
                      onChange={handleInputChange}
                      rows={3}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder="Describe your career highlights..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="achievements" className="text-foreground">Achievements</Label>
                    <Textarea
                      id="achievements"
                      name="achievements"
                      value={formData.achievements}
                      onChange={handleInputChange}
                      rows={3}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder="List your achievements..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="playingStyle" className="text-foreground">Playing Style</Label>
                    <Textarea
                      id="playingStyle"
                      name="playingStyle"
                      value={formData.playingStyle}
                      onChange={handleInputChange}
                      rows={3}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder="Describe your playing style..."
                    />
                  </div>

                  <div className="space-y-4 border-t border-border pt-6">
                    <h3 className="text-lg font-semibold">Media Upload</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="photo">Player Photo</Label>
                      <Input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="video">Highlight Video</Label>
                      <Input
                        id="video"
                        type="file"
                        accept="video/*"
                        onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="documents">Documents (CV, Certificates, etc.)</Label>
                      <Input
                        id="documents"
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setDocumentFiles(Array.from(e.target.files || []))}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="bg-neon-green text-background hover:bg-neon-green/90 glow-green-strong text-base px-12"
                    >
                      {loading ? "Submitting..." : "Submit Application"}
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