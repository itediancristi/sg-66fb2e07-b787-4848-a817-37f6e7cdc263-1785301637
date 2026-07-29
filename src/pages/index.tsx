import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X, CheckCircle } from "lucide-react";

const countries = [
  { name: "Germany", flag: "🇩🇪" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Romania", flag: "🇷🇴" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "United Kingdom", flag: "🇬🇧" },
];

const painPoints = [
  "Limited exposure",
  "No professional network",
  "No access to scouts",
  "Poor presentation of talent",
  "Lack of recruitment opportunities",
];

const solutions = [
  "Career history",
  "Match highlights",
  "Performance information",
  "Achievements",
  "Availability status",
  "Career objectives",
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="Open Trial - Your Next Football Opportunity Starts Here"
        description="Open Trial helps football players gain visibility, showcase their talent, and connect with clubs, scouts, and recruiters worldwide."
        image="/og-image.png"
      />
      
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 animate-scale-in">
          <Image
            src="/generated/stadium-hero.png"
            alt="Stadium"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>

        <div className="container relative z-10 text-center py-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-up text-glow tracking-tight">
            YOUR NEXT FOOTBALL<br />OPPORTUNITY<br />STARTS HERE
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-4xl mx-auto mb-6 animate-fade-up-delay-1 leading-relaxed">
            Open Trial helps football players gain visibility, showcase their talent, and connect with clubs, scouts, and recruiters worldwide.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 animate-fade-up-delay-2 leading-relaxed">
            Whether you are an academy graduate, free agent, amateur, semi-professional, or professional player, Open Trial provides a structured pathway to be seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <Button asChild size="lg" className="bg-neon-green text-background hover:bg-neon-green/90 glow-green group text-base px-8">
              <Link href="/apply">
                🟢 Create Your Profile
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-neon-green/30 text-neon-green hover:bg-neon-green/10 text-base px-8">
              <Link href="/how-it-works">
                ⚪ Learn How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-12 border-t border-b border-border bg-card/30 backdrop-blur">
        <div className="container">
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-6 font-medium tracking-wide uppercase">
            Trusted By Players Seeking Opportunities Across
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
            {countries.map((country) => (
              <div key={country.name} className="flex items-center gap-2 group cursor-pointer">
                <span className="text-4xl sm:text-5xl transition-transform group-hover:scale-110">
                  {country.flag}
                </span>
                <span className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINT SECTION */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="container">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-glow">
            THE REALITY OF<br />MODERN FOOTBALL
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Every year thousands of talented footballers struggle to progress because:
          </p>

          <div className="max-w-2xl mx-auto space-y-6 mb-12">
            {painPoints.map((point, idx) => (
              <Card key={idx} className="tactical-card bg-card/50 backdrop-blur border-destructive/30 hover:border-destructive/50 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-6 h-6 text-destructive" />
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl text-foreground">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              Talent alone is not enough.
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon-green text-glow">
              Visibility matters.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 sm:py-24 md:py-32 border-t border-border bg-gradient-to-b from-card/30 to-background">
        <div className="container">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-glow">
            OPEN TRIAL CREATES<br />VISIBILITY
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Instead of relying only on personal contacts, players can build a professional profile that showcases:
          </p>

          <div className="max-w-2xl mx-auto space-y-6 mb-12">
            {solutions.map((feature, idx) => (
              <Card key={idx} className="tactical-card bg-card/50 backdrop-blur border-neon-green/30 hover:border-neon-green/50 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-neon-green" />
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl text-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
              Giving clubs and recruiters a <span className="text-neon-green font-bold">clearer picture</span> of the player.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/generated/player-action.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-glow">
            READY TO TAKE<br />THE NEXT STEP?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of players who have already created their profiles and connected with opportunities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-neon-green text-background hover:bg-neon-green/90 glow-green-strong group text-base px-8">
              <Link href="/apply">
                Create Your Profile
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-neon-green/30 text-neon-green hover:bg-neon-green/10 text-base px-8">
              <Link href="/how-it-works">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}