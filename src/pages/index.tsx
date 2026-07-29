import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Globe, TrendingUp, CheckCircle, Eye, Award, Zap, Target, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Player {
  id: number;
  name: string;
  position: string;
  nationality: string;
  age: number;
  status: string;
  image: string;
}

const players: Player[] = [
  { id: 1, name: "Marcus Silva", position: "Forward", nationality: "Brazil", age: 22, status: "Seeking", image: "/generated/player-1.png" },
  { id: 2, name: "Ahmed Hassan", position: "Midfielder", nationality: "Egypt", age: 24, status: "Active", image: "/generated/player-2.png" },
  { id: 3, name: "Diego Martinez", position: "Striker", nationality: "Spain", age: 21, status: "Seeking", image: "/generated/player-3.png" },
  { id: 4, name: "Jean-Pierre Koné", position: "Winger", nationality: "Ivory Coast", age: 23, status: "Active", image: "/generated/player-4.png" },
  { id: 5, name: "Carlos Mendes", position: "Defender", nationality: "Portugal", age: 25, status: "Seeking", image: "/generated/player-5.png" },
  { id: 6, name: "Kwame Osei", position: "Midfielder", nationality: "Ghana", age: 22, status: "Active", image: "/generated/player-6.png" },
];

const testimonials = [
  {
    name: "David Okonkwo",
    position: "Striker",
    club: "Signed with FC Salzburg",
    quote: "Open Trial gave me the visibility I needed. Within 3 months, I was contacted by scouts from Europe.",
    image: "/generated/player-1.png",
  },
  {
    name: "Luis Fernández",
    position: "Midfielder",
    club: "Trial with Ajax Academy",
    quote: "The platform connected me directly with recruiters. I'm now on trial with Ajax's development squad.",
    image: "/generated/player-2.png",
  },
  {
    name: "Samuel Adeyemi",
    position: "Winger",
    club: "Signed with Sporting CP B",
    quote: "Professional presentation made all the difference. Clubs could see my potential clearly.",
    image: "/generated/player-3.png",
  },
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function HomePage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="Open Trial - Talent Meets Opportunity"
        description="Connect football players with clubs, scouts, and recruiters worldwide. Professional presentation, performance analysis, and direct opportunities."
        image="/og-image.png"
      />
      
      <Navigation />

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
          <Badge className="mb-6 bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20 text-sm px-4 py-1 animate-fade-up">
            Discover • Analyze • Connect
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up-delay-1 text-glow tracking-tight">
            TALENT MEETS<br />OPPORTUNITY
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up-delay-2">
            Open Trial helps football players showcase their talent, gain visibility, and connect with clubs, scouts, and recruiters worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <Button asChild size="lg" className="bg-neon-green text-background hover:bg-neon-green/90 glow-green group text-base px-8">
              <Link href="/apply">
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-neon-green/30 text-neon-green hover:bg-neon-green/10 text-base px-8">
              <Link href="/how-it-works">
                Explore Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-border bg-card/30 backdrop-blur overflow-hidden">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground mb-8 tracking-wide">
            Trusted By Players Seeking Opportunities Across Europe
          </p>
          <div className="relative">
            <div className="flex animate-scroll-slow">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8 px-4">
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇦🇱</span>
                    <span className="text-xs text-muted-foreground">Albania</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇦🇹</span>
                    <span className="text-xs text-muted-foreground">Austria</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇧🇪</span>
                    <span className="text-xs text-muted-foreground">Belgium</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇧🇦</span>
                    <span className="text-xs text-muted-foreground">Bosnia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇧🇬</span>
                    <span className="text-xs text-muted-foreground">Bulgaria</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇭🇷</span>
                    <span className="text-xs text-muted-foreground">Croatia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇨🇾</span>
                    <span className="text-xs text-muted-foreground">Cyprus</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇨🇿</span>
                    <span className="text-xs text-muted-foreground">Czechia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇩🇰</span>
                    <span className="text-xs text-muted-foreground">Denmark</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇪🇪</span>
                    <span className="text-xs text-muted-foreground">Estonia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇫🇮</span>
                    <span className="text-xs text-muted-foreground">Finland</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇫🇷</span>
                    <span className="text-xs text-muted-foreground">France</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇬🇪</span>
                    <span className="text-xs text-muted-foreground">Georgia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇩🇪</span>
                    <span className="text-xs text-muted-foreground">Germany</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇬🇷</span>
                    <span className="text-xs text-muted-foreground">Greece</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇭🇺</span>
                    <span className="text-xs text-muted-foreground">Hungary</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇮🇸</span>
                    <span className="text-xs text-muted-foreground">Iceland</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇮🇪</span>
                    <span className="text-xs text-muted-foreground">Ireland</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇮🇹</span>
                    <span className="text-xs text-muted-foreground">Italy</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇽🇰</span>
                    <span className="text-xs text-muted-foreground">Kosovo</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇱🇻</span>
                    <span className="text-xs text-muted-foreground">Latvia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇱🇹</span>
                    <span className="text-xs text-muted-foreground">Lithuania</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇱🇺</span>
                    <span className="text-xs text-muted-foreground">Luxembourg</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇲🇹</span>
                    <span className="text-xs text-muted-foreground">Malta</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇲🇩</span>
                    <span className="text-xs text-muted-foreground">Moldova</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇲🇪</span>
                    <span className="text-xs text-muted-foreground">Montenegro</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇳🇱</span>
                    <span className="text-xs text-muted-foreground">Netherlands</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇲🇰</span>
                    <span className="text-xs text-muted-foreground">N. Macedonia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇳🇴</span>
                    <span className="text-xs text-muted-foreground">Norway</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇵🇱</span>
                    <span className="text-xs text-muted-foreground">Poland</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇵🇹</span>
                    <span className="text-xs text-muted-foreground">Portugal</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇷🇴</span>
                    <span className="text-xs text-muted-foreground">Romania</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇷🇸</span>
                    <span className="text-xs text-muted-foreground">Serbia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇸🇰</span>
                    <span className="text-xs text-muted-foreground">Slovakia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇸🇮</span>
                    <span className="text-xs text-muted-foreground">Slovenia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇪🇸</span>
                    <span className="text-xs text-muted-foreground">Spain</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇸🇪</span>
                    <span className="text-xs text-muted-foreground">Sweden</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇨🇭</span>
                    <span className="text-xs text-muted-foreground">Switzerland</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇹🇷</span>
                    <span className="text-xs text-muted-foreground">Turkey</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇺🇦</span>
                    <span className="text-xs text-muted-foreground">Ukraine</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 group cursor-pointer flex-shrink-0">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🇬🇧</span>
                    <span className="text-xs text-muted-foreground">UK</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stats-section" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-glow">
            TALENT IS EVERYWHERE.<br />OPPORTUNITY IS NOT.
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Thousands of football players are overlooked every season due to limited visibility, lack of connections, and inaccessible recruitment networks. Open Trial exists to bridge that gap.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <div className="text-4xl font-bold font-mono mb-2 text-neon-green">
                  {statsVisible && <Counter end={15000} />}
                  {!statsVisible && "0"}+
                </div>
                <p className="text-muted-foreground">Players Seeking Opportunities</p>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <div className="text-4xl font-bold font-mono mb-2 text-neon-green">
                  {statsVisible && <Counter end={2500} />}
                  {!statsVisible && "0"}+
                </div>
                <p className="text-muted-foreground">Clubs Recruiting Talent</p>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <div className="text-4xl font-bold font-mono mb-2 text-neon-green">
                  {statsVisible && <Counter end={45} />}
                  {!statsVisible && "0"}+
                </div>
                <p className="text-muted-foreground">Countries Reached</p>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <div className="text-4xl font-bold font-mono mb-2 text-neon-green">
                  {statsVisible && <Counter end={8700} />}
                  {!statsVisible && "0"}+
                </div>
                <p className="text-muted-foreground">Profiles Created</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/generated/tactics-board.png')] bg-center bg-no-repeat opacity-5"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-glow">
            HOW OPEN TRIAL WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Create Profile", desc: "Build a professional football profile.", icon: Users },
              { step: "02", title: "Showcase Talent", desc: "Upload videos and achievements.", icon: Eye },
              { step: "03", title: "Get Analyzed", desc: "Receive performance insights.", icon: Award },
              { step: "04", title: "Connect", desc: "Get discovered by clubs and scouts.", icon: Zap },
            ].map((item, idx) => (
              <Card 
                key={idx}
                className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-neon-green/20 mb-4 group-hover:text-neon-green/40 transition-colors">
                    {item.step}
                  </div>
                  <item.icon className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-glow">
            WHO IT&apos;S FOR
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Amateur Players", desc: "Starting your professional journey with ambition and drive.", emoji: "⚽" },
              { title: "Semi-Professional Players", desc: "Ready to take the next step in your career.", emoji: "⚽" },
              { title: "Professional Players", desc: "Seeking new opportunities and career advancement.", emoji: "⚽" },
              { title: "Academy Graduates", desc: "Transitioning from youth football to professional level.", emoji: "⚽" },
              { title: "Free Agents", desc: "Available and ready for your next club opportunity.", emoji: "⚽" },
              { title: "Clubs & Scouts", desc: "Discover undiscovered talent from around the world.", emoji: "⚽" },
            ].map((item, idx) => (
              <Card
                key={idx}
                className={`tactical-card bg-card/50 backdrop-blur border-border cursor-pointer transition-all duration-300 ${
                  expandedCard === idx ? "border-neon-green" : "hover:border-neon-green/50"
                }`}
                onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className={`text-muted-foreground transition-all ${expandedCard === idx ? "block" : "line-clamp-2"}`}>
                    {item.desc}
                  </p>
                  <button className="text-neon-green text-sm mt-2 hover:underline">
                    {expandedCard === idx ? "Show less" : "Learn more"}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-glow">
            RECENT PLAYER PROFILES
          </h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-slide">
                {[...players, ...players].map((player, index) => (
                  <div key={`${player.id}-${index}`} className="flex-shrink-0 w-64 mx-3">
                    <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300 group overflow-hidden h-full">
                      <div className="relative h-48 bg-muted">
                        <Image
                          src={player.image}
                          alt={player.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 blur-sm"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-neon-green transition-colors truncate">
                          {player.name}
                        </h3>
                        <div className="space-y-1 text-xs text-muted-foreground mb-3">
                          <p><span className="text-foreground">Position:</span> {player.position}</p>
                          <p><span className="text-foreground">Nationality:</span> {player.nationality}</p>
                          <p><span className="text-foreground">Age:</span> {player.age}</p>
                        </div>
                        <Badge className={player.status === "Active" ? "bg-neon-green/10 text-neon-green border-neon-green/30 text-xs" : "bg-muted text-muted-foreground text-xs"}>
                          {player.status}
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-glow">
            WHY OPEN TRIAL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Exposure",
                desc: "Reach clubs beyond your network.",
                details: "Connect with scouts and recruiters from over 45 countries. Your profile is visible to decision-makers worldwide."
              },
              {
                icon: Award,
                title: "Professional Presentation",
                desc: "Showcase yourself professionally.",
                details: "Create a polished, comprehensive profile that highlights your skills, achievements, and potential."
              },
              {
                icon: TrendingUp,
                title: "Performance Analysis",
                desc: "Stand out with objective insights.",
                details: "Receive data-driven insights that help clubs understand your capabilities and potential value."
              },
              {
                icon: Zap,
                title: "Direct Opportunities",
                desc: "Connect with recruiters and clubs.",
                details: "Get contacted directly by clubs, scouts, and agents actively searching for talent like yours."
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
                <CardContent className="p-8">
                  <benefit.icon className="w-12 h-12 text-neon-green mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{benefit.desc}</p>
                  <p className="text-sm text-muted-foreground">{benefit.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-transparent"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-glow">
            SUCCESS STORIES
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-neon-green/30 glow-green">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover blur-md"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl italic mb-6 text-foreground">
                      &quot;{testimonials[currentTestimonial].quote}&quot;
                    </p>
                    <div>
                      <p className="font-bold text-neon-green">{testimonials[currentTestimonial].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].position}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].club}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentTestimonial ? "bg-neon-green w-8" : "bg-muted"
                      }`}
                      aria-label={`View testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
            READY TO TAKE THE NEXT STEP?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of players who have already created their profiles and connected with opportunities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-neon-green text-background hover:bg-neon-green/90 glow-green-strong group text-base px-8">
              <Link href="/apply">
                Apply Now
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