import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { 
  Shield,
  Users,
  Building2,
  AlertCircle,
  FileText,
  Lock
} from "lucide-react";

export default function RegulationsPage() {
  return (
    <>
      <SEO
        title="Regulations & Terms - Open Trial"
        description="Open Trial platform terms, player and club responsibilities, content policy, disclaimers, and privacy information."
      />
      
      <Navigation />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
        
        <div className="container relative z-10 text-center py-20">
          <Badge className="mb-6 bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20 text-sm px-4 py-1">
            Legal & Policies
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-glow">
            REGULATIONS & TERMS
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Platform guidelines, responsibilities, and policies
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-neon-green/10 text-neon-green border-neon-green/30">
                      Section 1
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">Platform Purpose</h2>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Open Trial provides visibility and networking opportunities between football players, clubs, scouts, and recruiters worldwide.
                  </p>
                  
                  <div className="bg-muted/20 border border-border rounded-lg p-6 mt-6">
                    <p className="font-semibold text-foreground mb-2">Important Disclaimer:</p>
                    <p>
                      Open Trial <strong>does not guarantee</strong> contracts, trials, transfers, or employment. The platform serves as a connection tool, and all recruitment decisions remain the sole responsibility of clubs, scouts, recruiters, and players.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-neon-green/10 text-neon-green border-neon-green/30">
                      Section 2
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">Player Responsibilities</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">Players using Open Trial must adhere to the following responsibilities:</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">1</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Submit Accurate Information</p>
                        <p className="text-sm text-muted-foreground">All profile information, statistics, and career details must be truthful and current</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">2</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Own All Uploaded Content</p>
                        <p className="text-sm text-muted-foreground">You must have rights to all videos, images, and materials uploaded to your profile</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">3</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Maintain Professional Conduct</p>
                        <p className="text-sm text-muted-foreground">Interact respectfully with scouts, clubs, and other platform users</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">4</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Update Profile Information</p>
                        <p className="text-sm text-muted-foreground">Keep your profile current with club changes, statistics, and availability status</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-neon-green/10 text-neon-green border-neon-green/30">
                      Section 3
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">Club Responsibilities</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">Clubs, scouts, and recruiters must:</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">1</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Use Information Professionally</p>
                        <p className="text-sm text-muted-foreground">Player data must be used solely for legitimate recruitment purposes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">2</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Respect Player Privacy</p>
                        <p className="text-sm text-muted-foreground">Do not share, sell, or misuse player contact information or personal data</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">3</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Avoid Misleading Practices</p>
                        <p className="text-sm text-muted-foreground">Be honest about opportunities, club status, and recruitment processes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-neon-green/10 text-neon-green border-neon-green/30">
                      Section 4
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">Content Policy</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">The following content is strictly prohibited on Open Trial:</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded border border-destructive/30">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">False Information</p>
                        <p className="text-sm text-muted-foreground">Fabricated statistics, career history, or player credentials</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded border border-destructive/30">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">Offensive Content</p>
                        <p className="text-sm text-muted-foreground">Discriminatory, abusive, or inappropriate material</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded border border-destructive/30">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">Copyright Infringement</p>
                        <p className="text-sm text-muted-foreground">Unauthorized use of videos, images, or media you don&apos;t own</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded border border-destructive/30">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">Impersonation</p>
                        <p className="text-sm text-muted-foreground">Creating profiles for other players or misrepresenting identity</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/20 rounded border border-border">
                    <p className="text-sm text-muted-foreground">
                      Violations may result in profile suspension or permanent removal from the platform.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-neon-green/10 text-neon-green border-neon-green/30">
                      Section 5
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Open Trial acts as a <strong className="text-foreground">visibility and networking platform</strong> connecting football players with clubs, scouts, and recruiters.
                  </p>
                  
                  <div className="bg-muted/20 border border-border rounded-lg p-6">
                    <p className="font-semibold text-foreground mb-3">Important Notice:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-neon-green mt-1">•</span>
                        <span>Recruitment decisions remain solely the responsibility of clubs, scouts, recruiters, and players</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neon-green mt-1">•</span>
                        <span>Open Trial does not participate in transfer negotiations or contract discussions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neon-green mt-1">•</span>
                        <span>The platform provides tools for exposure and connection, not employment guarantees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neon-green mt-1">•</span>
                        <span>Players are responsible for verifying the legitimacy of opportunities and clubs</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm">
                    By using Open Trial, all parties acknowledge these limitations and accept full responsibility for their interactions and decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-neon-green/10 text-neon-green border-neon-green/30">
                      Section 6
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">Privacy</h2>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Personal data submitted to Open Trial is handled according to applicable data protection regulations.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <Lock className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Data Collection</p>
                        <p className="text-sm">We collect only information necessary for profile creation and platform functionality</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <Lock className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Data Usage</p>
                        <p className="text-sm">Your information is used to connect you with recruitment opportunities</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <Lock className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Data Security</p>
                        <p className="text-sm">We implement industry-standard security measures to protect your personal information</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <Lock className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Your Rights</p>
                        <p className="text-sm">You may request access, correction, or deletion of your personal data at any time</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/20 rounded border border-border">
                    <p className="text-sm">
                      For privacy inquiries or data requests, contact <a href="mailto:privacy@opentrial.com" className="text-neon-green hover:underline">privacy@opentrial.com</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-8">
              <p className="text-sm text-muted-foreground">
                Last updated: July 2026 • For questions about these terms, contact{" "}
                <a href="mailto:legal@opentrial.com" className="text-neon-green hover:underline">
                  legal@opentrial.com
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