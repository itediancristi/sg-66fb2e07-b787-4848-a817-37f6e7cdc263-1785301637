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
import { useLanguage } from "@/contexts/LanguageContext";

export default function Apply() {
  const [state, handleSubmit] = useForm("xaewkowr");
  const { t, language } = useLanguage();

  if (state.succeeded) {
    return (
      <>
        <SEO
          title={language === "ro" ? "Aplicație Primită - Open Trial" : "Application Received - Open Trial"}
          description={language === "ro" ? "Aplicația ta Open Trial a fost primită. Vom revizui profilul tău și te vom contacta în curând." : "Your Open Trial application has been received. We'll review your profile and contact you soon."}
          language={language}
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
                {language === "ro" ? "APLICAȚIE PRIMITĂ" : "APPLICATION RECEIVED"}
              </h1>
              
              <Card className="bg-card/50 backdrop-blur border-neon-green/30 glow-green mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    {t("apply.success")}
                  </p>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Profil în Revizuire" : "Profile Under Review"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro" ? "Evaluăm aplicația ta" : "We're evaluating your application"}
                        </p>
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
                  {language === "ro" ? "Trimite O Altă Aplicație" : "Submit Another Application"}
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  {language === "ro" ? "Întrebări? Contactează-ne la " : "Questions? Contact us at "}
                  <a href="mailto:info@opentrialfootball.com" className="text-neon-green hover:underline">
                    info@opentrialfootball.com
                  </a>
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
        title={language === "ro" ? "Aplică - Open Trial" : "Apply - Open Trial"}
        description={language === "ro" ? "Fă primul pas către următoarea ta oportunitate în fotbal. Trimite aplicația ta la Open Trial." : "Take the first step toward your next football opportunity. Submit your application to Open Trial."}
        language={language}
      />
      
      <Navigation />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
        
        <div className="container relative z-10 text-center py-20">
          <Badge className="mb-6 bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20 text-sm px-4 py-1">
            {language === "ro" ? "Începe Călătoria Ta" : "Start Your Journey"}
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-glow">
            {t("apply.title").toUpperCase()}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t("apply.subtitle")}
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
                    <Label htmlFor="fullName" className="text-foreground">{t("apply.full_name")} *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      required
                      disabled={state.submitting}
                      className="bg-background border-border focus:border-neon-green"
                      placeholder={language === "ro" ? "Numele tău complet" : "Your full name"}
                    />
                    <ValidationError field="fullName" errors={state.errors} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">{t("apply.email")} *</Label>
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
                      <Label htmlFor="phone" className="text-foreground">{t("apply.phone")} *</Label>
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
                      <Label htmlFor="dateOfBirth" className="text-foreground">{t("apply.date_of_birth")} *</Label>
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
                      <Label htmlFor="nationality" className="text-foreground">{t("apply.nationality")} *</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        required
                        disabled={state.submitting}
                        className="bg-background border-border focus:border-neon-green"
                        placeholder={language === "ro" ? "Naționalitatea ta" : "Your nationality"}
                      />
                      <ValidationError field="nationality" errors={state.errors} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-foreground">{t("apply.position")} *</Label>
                      <select
                        id="position"
                        name="position"
                        required
                        disabled={state.submitting}
                        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">{language === "ro" ? "Selectează poziția" : "Select position"}</option>
                        <option value="Goalkeeper">{language === "ro" ? "Portar" : "Goalkeeper"}</option>
                        <option value="Defender">{language === "ro" ? "Fundaș" : "Defender"}</option>
                        <option value="Midfielder">{language === "ro" ? "Mijlocaș" : "Midfielder"}</option>
                        <option value="Forward">{language === "ro" ? "Atacant" : "Forward"}</option>
                        <option value="Winger">{language === "ro" ? "Extremă" : "Winger"}</option>
                        <option value="Striker">{language === "ro" ? "Atacant Central" : "Striker"}</option>
                      </select>
                      <ValidationError field="position" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentClub" className="text-foreground">{t("apply.current_club")}</Label>
                      <Input
                        id="currentClub"
                        name="currentClub"
                        disabled={state.submitting}
                        className="bg-background border-border focus:border-neon-green"
                        placeholder={language === "ro" ? "Numele clubului sau Agent Liber" : "Club name or Free Agent"}
                      />
                      <ValidationError field="currentClub" errors={state.errors} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="height" className="text-foreground">{t("apply.height")} *</Label>
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
                      <Label htmlFor="weight" className="text-foreground">{t("apply.weight")} *</Label>
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
                      <Label htmlFor="preferredFoot" className="text-foreground">{t("apply.preferred_foot")} *</Label>
                      <select
                        id="preferredFoot"
                        name="preferredFoot"
                        required
                        disabled={state.submitting}
                        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">{language === "ro" ? "Selectează piciorul" : "Select foot"}</option>
                        <option value="right">{t("apply.foot.right")}</option>
                        <option value="left">{t("apply.foot.left")}</option>
                        <option value="both">{t("apply.foot.both")}</option>
                      </select>
                      <ValidationError field="preferredFoot" errors={state.errors} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="careerHighlights" className="text-foreground">
                      {language === "ro" ? "Momente de Vârf în Carieră" : "Career Highlights"}
                    </Label>
                    <Textarea
                      id="careerHighlights"
                      name="careerHighlights"
                      disabled={state.submitting}
                      rows={3}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder={language === "ro" ? "Descrie momentele de vârf din cariera ta..." : "Describe your career highlights..."}
                    />
                    <ValidationError field="careerHighlights" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="achievements" className="text-foreground">
                      {language === "ro" ? "Realizări" : "Achievements"}
                    </Label>
                    <Textarea
                      id="achievements"
                      name="achievements"
                      disabled={state.submitting}
                      rows={3}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder={language === "ro" ? "Enumeră realizările tale..." : "List your achievements..."}
                    />
                    <ValidationError field="achievements" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="playingStyle" className="text-foreground">
                      {language === "ro" ? "Stilul de Joc" : "Playing Style"}
                    </Label>
                    <Textarea
                      id="playingStyle"
                      name="playingStyle"
                      disabled={state.submitting}
                      rows={3}
                      className="bg-background border-border focus:border-neon-green resize-none"
                      placeholder={language === "ro" ? "Descrie stilul tău de joc..." : "Describe your playing style..."}
                    />
                    <ValidationError field="playingStyle" errors={state.errors} />
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
                      {state.submitting ? t("apply.submitting") : t("apply.submit")}
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