import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Globe, TrendingUp, CheckCircle, Eye, Award, Zap, Target, ChevronRight, Trophy, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

function Counter({ end, duration = 2000 }: {end: number;duration?: number;}) {
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

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { t, language } = useLanguage();

  // Animation variants for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Hero-specific animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const heroStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <>
      <SEO
        title={language === "ro" ? "Open Trial - Talent Meets Opportunity" : "Open Trial - Talent Meets Opportunity"}
        description={language === "ro" ? "Conectează jucători de fotbal cu cluburi, scouteri și oportunități în întreaga lume." : "Connect football players with clubs, scouts, and recruiters worldwide."}
        image="/og-image.png"
        language={language} />
      
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Stadium Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/stadium-hero.png"
            alt="Stadium"
            fill
            className="object-cover"
            priority />
          
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          
          <motion.div variants={heroVariants}>
            <Badge className="mb-4 sm:mb-6 bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20 text-xs sm:text-sm px-3 sm:px-4 py-1">
              Discover • Analyze • Connect
            </Badge>
          </motion.div>
          
          <motion.h1
            variants={heroVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-glow tracking-tight leading-tight">
            
            TALENT MEETS<br />OPPORTUNITY
          </motion.h1>
          
          <motion.p
            variants={heroVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 px-4">Open Trial transformă performanța în vizibilitate. Îți oferim cadrul profesionist prin care să ieși în evidență și să ajungi în atenția cluburilor, scouterilor și recrutorilor din România și din întreaga lume.Nu lăsa următoarea oportunitate să treacă pe lângă tine.


          </motion.p>

          <motion.div
            variants={heroVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            
            <Button asChild size="lg" className="bg-neon-green text-background hover:bg-neon-green/90 glow-green group text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto">
              <Link href="/apply">
                {t("hero.cta")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-neon-green/30 text-neon-green hover:bg-neon-green/10 text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto">
              <Link href="/how-it-works">
                {t("hero.learn_more")}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Early Access Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-16 border-t border-border bg-neon-green/5">
        
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-neon-green/20 text-neon-green border-neon-green/40 hover:bg-neon-green/30 text-sm px-4 py-1.5">
              {t("early.badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow">
              {t("early.title")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {t("early.subtitle")}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="stats-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 border-t border-border">
        
        <div className="container">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-glow">
            TALENT IS EVERYWHERE.<br />OPPORTUNITY IS NOT.
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            {language === "ro" ?
            "Mii de jucători de fotbal sunt trecuți cu vederea în fiecare sezon din cauza vizibilității limitate, lipsei de conexiuni și rețelelor de recrutare inaccesibile. Open Trial există pentru a reduce acest decalaj." :
            "Thousands of football players are overlooked every season due to limited visibility, lack of connections, and inaccessible recruitment networks. Open Trial exists to bridge that gap."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <div className="text-4xl font-bold font-mono mb-2 text-neon-green">
                  <Counter end={250} />+
                </div>
                <p className="text-muted-foreground">{t("stats.players")}</p>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <div className="text-4xl font-bold font-mono mb-2 text-neon-green">
                  <Counter end={15} />+
                </div>
                <p className="text-muted-foreground">{t("stats.clubs")}</p>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <div className="text-4xl font-bold font-mono mb-2 text-neon-green">
                  <Counter end={7} />+
                </div>
                <p className="text-muted-foreground">{t("stats.countries")}</p>
              </CardContent>
            </Card>

            <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <div className="text-4xl font-bold font-mono mb-2 text-neon-green">
                  <Counter end={176} />+
                </div>
                <p className="text-muted-foreground">{t("stats.trials")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 border-t border-border relative overflow-hidden">
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-glow">
            {t("how.title").toUpperCase()}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            { step: "01", title: t("how.step1.title"), desc: t("how.step1.desc"), icon: Users },
            { step: "02", title: t("how.step2.title"), desc: t("how.step2.desc"), icon: Eye },
            { step: "03", title: t("how.step3.title"), desc: t("how.step3.desc"), icon: Award },
            { step: "04", title: t("how.step4.title"), desc: t("how.step4.desc"), icon: Zap }].
            map((item, idx) =>
            <Card
              key={idx}
              className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300 group cursor-pointer">
              
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
            )}
          </div>
        </div>
      </motion.section>

      {/* What You Get Section */}
      <motion.section
        id="what-you-get-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 border-t border-border bg-muted/30 relative overflow-hidden">
        
        {/* Radial gradient spotlight effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at top, hsl(var(--neon-green) / 0.1), transparent 50%)'
          }} />
        </div>

        <div className="container relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-glow">
            {language === "ro" ? "CE OBȚII" : "WHAT YOU GET"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              icon: Users,
              title: language === "ro" ? "Profil Profesional" : "Professional Profile",
              desc: language === "ro" ? "Un profil cuprinzător care prezintă abilitățile, experiența și realizările tale." : "A comprehensive profile showcasing your skills, experience, and achievements."
            },
            {
              icon: Eye,
              title: language === "ro" ? "Vizibilitate" : "Visibility",
              desc: language === "ro" ? "Fii descoperit de cluburi, scouteri și recrutori care caută talente activ." : "Get discovered by clubs, scouts, and recruiters actively searching for talent."
            },
            {
              icon: Award,
              title: language === "ro" ? "Analiză Performanță" : "Performance Insights",
              desc: language === "ro" ? "Analiză bazată pe date care evidențiază punctele tale forte și potențialul." : "Data-driven analysis that highlights your strengths and potential."
            }].
            map((item, idx) =>
            <Card key={idx} className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <item.icon className="w-12 h-12 text-neon-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="who-its-for-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 border-t border-border relative overflow-hidden">
        
        {/* Football field lines pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 2px, transparent 2px),
              linear-gradient(to bottom, currentColor 2px, transparent 2px),
              radial-gradient(circle at center, currentColor 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 200px 200px',
            backgroundPosition: 'center, center, center'
          }} />
        </div>

        <div className="container relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-glow">
            {language === "ro" ? "PENTRU CINE ESTE" : "WHO IT'S FOR"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            { 
              title: language === "ro" ? "Jucători Amatori" : "Amateur Players", 
              desc: language === "ro" 
                ? "Joci fotbal pentru pasiune, în ligile locale sau competițiile de weekend. Ești determinat să transformi acea pasiune într-o carieră profesională și cauți modalitatea potrivită de a fi remarcat de scouteri și cluburi care apreciază dedicarea și potențialul tău, nu doar experiența anterioară la nivel profesional." 
                : "You play football for passion, in local leagues or weekend competitions. You're determined to turn that passion into a professional career and looking for the right way to be noticed by scouts and clubs who value dedication and potential, not just previous professional experience.", 
              emoji: "⚽" 
            },
            { 
              title: language === "ro" ? "Jucători Semi-Profesioniști" : "Semi-Professional Players", 
              desc: language === "ro" 
                ? "Joci deja la nivel competitiv în ligile semi-profesioniste, echilibrând fotbalul cu alte angajamente. Ești pregătit să faci pasul complet către fotbalul profesionist și cauți expunere către cluburi din campionate superioare care caută jucători cu experiență competițională dovedită și ambițiile potrivite." 
                : "You're already playing at a competitive level in semi-professional leagues, balancing football with other commitments. You're ready to make the full step into professional football and seeking exposure to clubs in higher leagues looking for players with proven competitive experience and the right ambitions.", 
              emoji: "⚽" 
            },
            { 
              title: language === "ro" ? "Jucători Profesioniști" : "Professional Players", 
              desc: language === "ro" 
                ? "Ai experiență în fotbalul profesionist și cauți un nou club, o ligă mai puternică sau oportunități internaționale. Ai nevoie de o platformă care să prezinte realizările tale într-un mod care atrage atenția cluburilor, scouterilor și agenților relevanți, facilitând trecerea către următoarea etapă a carierei tale." 
                : "You have experience in professional football and are seeking a new club, a stronger league, or international opportunities. You need a platform that presents your achievements in a way that attracts the attention of relevant clubs, scouts, and agents, facilitating the move to the next stage of your career.", 
              emoji: "⚽" 
            },
            { 
              title: language === "ro" ? "Absolvenți de Academie" : "Academy Graduates", 
              desc: language === "ro" 
                ? "Ai absolvit o academie de fotbal sau ai crescut în sistemul juvenil al unui club, dar încă nu ai găsit locul potrivit pentru cariera ta de senior. Cauți vizibilitate către cluburi care apreciază pregătirea academică solidă și sunt dispuse să ofere șanse tinerelor talente pregătite profesional." 
                : "You've graduated from a football academy or grown through a club's youth system, but haven't yet found the right place for your senior career. You're seeking visibility to clubs that value solid academy training and are willing to give chances to professionally prepared young talents.", 
              emoji: "⚽" 
            },
            { 
              title: language === "ro" ? "Agenți Liberi" : "Free Agents", 
              desc: language === "ro" 
                ? "Contractul tău a expirat sau ești între cluburi și cauți următoarea ta oportunitate. Ai nevoie de o platformă care te menține vizibil pentru cluburi, scouteri și agenți în timp ce explorezi opțiuni, permițându-ți să rămâi activ în procesul de recrutare chiar și între angajamente." 
                : "Your contract has expired or you're between clubs and looking for your next opportunity. You need a platform that keeps you visible to clubs, scouts, and agents while you explore options, allowing you to stay active in the recruitment process even between engagements.", 
              emoji: "⚽" 
            },
            { 
              title: language === "ro" ? "Cluburi & Scouteri" : "Clubs & Scouts", 
              desc: language === "ro" 
                ? "Ești în căutarea constantă de noi talente pentru clubul tău sau clienții tăi. Open Trial îți oferă acces la o bază de date de jucători verificați, cu profiluri detaliate, analize de performanță și filmări video, ajutându-te să identifici candidații potriviți mai rapid și mai eficient decât prin metodele tradiționale de scouting." 
                : "You're constantly searching for new talent for your club or clients. Open Trial gives you access to a database of verified players, with detailed profiles, performance analytics, and video footage, helping you identify the right candidates faster and more efficiently than through traditional scouting methods.", 
              emoji: "⚽" 
            }]
            .map((item, idx) =>
            <Card
              key={idx}
              className={`tactical-card bg-card/50 backdrop-blur border-border cursor-pointer transition-all duration-300 ${
              expandedCard === idx ? "border-neon-green" : "hover:border-neon-green/50"}`
              }
              onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}>
              
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className={`text-muted-foreground transition-all ${expandedCard === idx ? "block" : "line-clamp-2"}`}>
                    {item.desc}
                  </p>
                  <button className="text-neon-green text-sm mt-2 hover:underline">
                    {expandedCard === idx ? language === "ro" ? "Arată mai puțin" : "Show less" : language === "ro" ? "Află mai multe" : "Learn more"}
                  </button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </motion.section>

      {/* Technology Partners Section */}
      <motion.section
        id="tech-partners-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 border-t border-border bg-muted/20 relative overflow-hidden">
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, currentColor 1px, transparent 1px),
              linear-gradient(0deg, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neon-green">
              {language === "ro" ? "Susținut de Tehnologie Profesională de Fotbal" : "Powered By Professional Football Technology"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "ro" ?
              "Open Trial utilizează tehnologii de top din industrie pentru analiza jucătorilor, revizuirea video, urmărirea performanței și vizibilitatea în recrutare." :
              "Open Trial utilizes industry-leading technologies for player analysis, video review, performance tracking, and recruitment visibility."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
            <div className="relative h-12 w-24 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <Image
                src="/logo-veo.png"
                alt="Veo"
                fill
                className="object-contain" />
              
            </div>
            <div className="text-muted-foreground/30">|</div>
            <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <Image
                src="/logo-playmaker.jpg"
                alt="Playmaker"
                fill
                className="object-contain" />
              
            </div>
            <div className="text-muted-foreground/30">|</div>
            <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <Image
                src="/logo-hudl-wyscout.jpg"
                alt="Hudl Wyscout"
                fill
                className="object-contain" />
              
            </div>
            <div className="text-muted-foreground/30">|</div>
            <div className="relative h-12 w-36 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <Image
                src="/logo-transfermarkt.jpg"
                alt="Transfermarkt"
                fill
                className="object-contain" />
              
            </div>
            <div className="text-muted-foreground/30">|</div>
            <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <Image
                src="/logo-catapult.jpg"
                alt="Catapult"
                fill
                className="object-contain" />
              
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground max-w-4xl mx-auto italic">
            {language === "ro" ?
            "Open Trial poate utiliza platforme standard din industrie de tehnologie și analiză fotbalistică pentru a susține evaluarea jucătorilor și crearea profilurilor. Toate mărcile înregistrate rămân proprietatea deținătorilor respectivi." :
            "Open Trial may utilize industry-standard football technology and analysis platforms to support player evaluation and profile creation. All trademarks remain the property of their respective owners."}
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-24 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
        
        {/* Center spotlight effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at center, hsl(var(--neon-green) / 0.15), transparent 60%)'
          }} />
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-glow">
            {language === "ro" ? "GATA SĂ FACI URMĂTORUL PAS?" : "READY TO TAKE THE NEXT STEP?"}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {language === "ro" ?
            "Alătură-te miilor de jucători care și-au creat deja profiluri și s-au conectat cu oportunități în întreaga lume." :
            "Join thousands of players who have already created their profiles and connected with opportunities worldwide."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-neon-green text-background hover:bg-neon-green/90 glow-green-strong group text-base px-8">
              <Link href="/apply">
                {t("hero.cta")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-neon-green/30 text-neon-green hover:bg-neon-green/10 text-base px-8">
              <Link href="/how-it-works">
                {t("hero.learn_more")}
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>);

}