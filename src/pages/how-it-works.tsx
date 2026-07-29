import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { 
  Upload,
  Video,
  Image as ImageIcon,
  BarChart3,
  Eye,
  TrendingUp,
  Search,
  UserPlus,
  MessageSquare,
  CheckCircle
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <>
      <SEO
        title="How It Works - Open Trial"
        description="Learn how Open Trial connects football players with clubs, scouts, and recruiters. Simple, transparent, opportunity-focused platform."
        image="/og-image.png"
      />
      
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
        <div className="absolute inset-0 bg-[url('/generated/tactics-board.png')] bg-center bg-no-repeat opacity-5"></div>
        
        <div className="container relative z-10 text-center py-20">
          <Badge className="mb-6 bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20 text-sm px-4 py-1">
            Your Journey Starts Here
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-glow">
            HOW IT WORKS
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Simple. Transparent. Opportunity Focused.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-green/10 border border-neon-green/30 mb-6">
                <span className="text-3xl font-bold text-neon-green">1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                SHOWCASE YOUR TALENT
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Upload compelling content that demonstrates your skills and abilities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                    <Video className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Highlight Videos</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Best moments compilation showcasing your key skills and abilities
                  </p>
                  <Badge className="bg-neon-green/10 text-neon-green border-neon-green/30">
                    Required
                  </Badge>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                    <Upload className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Match Footage</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Full match recordings or extended gameplay sequences
                  </p>
                  <Badge className="bg-muted text-muted-foreground">
                    Recommended
                  </Badge>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                    <ImageIcon className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Player Photo</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Professional headshot for your profile presentation
                  </p>
                  <Badge className="bg-neon-green/10 text-neon-green border-neon-green/30">
                    Required
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-green/10 border border-neon-green/30 mb-6">
                <span className="text-3xl font-bold text-neon-green">2</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                GET ANALYZED
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Open Trial provides professional insights to strengthen your profile
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
                <CardContent className="p-6">
                  <Eye className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">Profile Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert evaluation of your profile presentation and content quality
                  </p>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
                <CardContent className="p-6">
                  <BarChart3 className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">Performance Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Data-driven analysis of your statistics and career trajectory
                  </p>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
                <CardContent className="p-6">
                  <TrendingUp className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">Visibility Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Strategic guidance to maximize exposure to relevant clubs
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="tactical-card bg-card/50 backdrop-blur border-neon-green/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon-green">Analysis Dashboard</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded border border-border">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-neon-green" />
                      <span className="font-medium">Profile Completeness</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-neon-green w-[85%]"></div>
                      </div>
                      <span className="text-sm font-mono text-neon-green">85%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded border border-border">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-neon-green" />
                      <span className="font-medium">Profile Views (7 days)</span>
                    </div>
                    <span className="text-xl font-bold font-mono text-neon-green">247</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded border border-border">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-neon-green" />
                      <span className="font-medium">Engagement Score</span>
                    </div>
                    <Badge className="bg-neon-green/10 text-neon-green border-neon-green/30">
                      High
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-green/10 border border-neon-green/30 mb-6">
                <span className="text-3xl font-bold text-neon-green">3</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                CONNECT WITH OPPORTUNITIES
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Clubs and recruiters actively engage with talented players
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300">
                <CardContent className="p-6">
                  <Search className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">Search Profiles</h3>
                  <p className="text-sm text-muted-foreground">
                    Clubs browse players by position, age, nationality, and experience
                  </p>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300">
                <CardContent className="p-6">
                  <UserPlus className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">Contact Players</h3>
                  <p className="text-sm text-muted-foreground">
                    Recruiters reach out directly through the platform
                  </p>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300">
                <CardContent className="p-6">
                  <MessageSquare className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">Request Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Clubs request additional footage, stats, or schedule meetings
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}