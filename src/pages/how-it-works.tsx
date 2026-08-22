import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={language === "ro" ? "Cum Funcționează - Open Trial" : "How It Works - Open Trial"}
        description={language === "ro" ? "Află cum Open Trial conectează jucători de fotbal cu cluburi, scouteri și recrutori. Platformă simplă, transparentă, concentrată pe oportunități." : "Learn how Open Trial connects football players with clubs, scouts, and recruiters. Simple, transparent, opportunity-focused platform."}
        image="/og-image.png"
        language={language}
      />
      
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
        <div className="absolute inset-0 bg-[url('/generated/tactics-board.png')] bg-center bg-no-repeat opacity-5"></div>
        
        <div className="container relative z-10 text-center py-20">
          <Badge className="mb-6 bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20 text-sm px-4 py-1">
            {language === "ro" ? "Călătoria Ta Începe Aici" : "Your Journey Starts Here"}
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-glow">
            {t("how.title").toUpperCase()}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {language === "ro" ? "Simplu. Transparent. Concentrat pe Oportunități." : "Simple. Transparent. Opportunity Focused."}
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
                {language === "ro" ? "PREZINTĂ-ȚI TALENTUL" : "SHOWCASE YOUR TALENT"}
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                {language === "ro" ? "Încarcă conținut convingător care demonstrează abilitățile și capacitățile tale" : "Upload compelling content that demonstrates your skills and abilities"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                    <Video className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {language === "ro" ? "Videoclipuri Highlight" : "Highlight Videos"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "ro" ? "Compilație cu cele mai bune momente care prezintă abilitățile și capacitățile cheie" : "Best moments compilation showcasing your key skills and abilities"}
                  </p>
                  <Badge className="bg-neon-green/10 text-neon-green border-neon-green/30">
                    {language === "ro" ? "Obligatoriu" : "Required"}
                  </Badge>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                    <Upload className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {language === "ro" ? "Înregistrări de Meci" : "Match Footage"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "ro" ? "Înregistrări complete de meciuri sau secvențe de joc extinse" : "Full match recordings or extended gameplay sequences"}
                  </p>
                  <Badge className="bg-muted text-muted-foreground">
                    {language === "ro" ? "Recomandat" : "Recommended"}
                  </Badge>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                    <ImageIcon className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {language === "ro" ? "Fotografie Jucător" : "Player Photo"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "ro" ? "Fotografie profesională pentru prezentarea profilului tău" : "Professional headshot for your profile presentation"}
                  </p>
                  <Badge className="bg-neon-green/10 text-neon-green border-neon-green/30">
                    {language === "ro" ? "Obligatoriu" : "Required"}
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
                {language === "ro" ? "FII ANALIZAT" : "GET ANALYZED"}
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                {language === "ro" ? "Open Trial oferă informații profesionale pentru a-ți întări profilul" : "Open Trial provides professional insights to strengthen your profile"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
                <CardContent className="p-6">
                  <Eye className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    {language === "ro" ? "Revizuire Profil" : "Profile Review"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ro" ? "Evaluare expert a prezentării profilului tău și calității conținutului" : "Expert evaluation of your profile presentation and content quality"}
                  </p>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
                <CardContent className="p-6">
                  <BarChart3 className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    {language === "ro" ? "Analiză Performanță" : "Performance Insights"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ro" ? "Analiză bazată pe date a statisticilor și traiectoriei tale în carieră" : "Data-driven analysis of your statistics and career trajectory"}
                  </p>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 transition-all">
                <CardContent className="p-6">
                  <TrendingUp className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    {language === "ro" ? "Recomandări Vizibilitate" : "Visibility Recommendations"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ro" ? "Îndrumări strategice pentru a maximiza expunerea către cluburile relevante" : "Strategic guidance to maximize exposure to relevant clubs"}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="tactical-card bg-card/50 backdrop-blur border-neon-green/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon-green">
                  {language === "ro" ? "Panou de Analiză" : "Analysis Dashboard"}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded border border-border">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-neon-green" />
                      <span className="font-medium">
                        {language === "ro" ? "Completitudine Profil" : "Profile Completeness"}
                      </span>
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
                      <span className="font-medium">
                        {language === "ro" ? "Vizualizări Profil (7 zile)" : "Profile Views (7 days)"}
                      </span>
                    </div>
                    <span className="text-xl font-bold font-mono text-neon-green">247</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded border border-border">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-neon-green" />
                      <span className="font-medium">
                        {language === "ro" ? "Scor Engagement" : "Engagement Score"}
                      </span>
                    </div>
                    <Badge className="bg-neon-green/10 text-neon-green border-neon-green/30">
                      {language === "ro" ? "Ridicat" : "High"}
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
                {language === "ro" ? "CONECTEAZĂ-TE CU OPORTUNITĂȚI" : "CONNECT WITH OPPORTUNITIES"}
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                {language === "ro" ? "Cluburile și recrutori se implică activ cu jucători talentați" : "Clubs and recruiters actively engage with talented players"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300">
                <CardContent className="p-6">
                  <Search className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    {language === "ro" ? "Caută Profiluri" : "Search Profiles"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ro" ? "Cluburile caută jucători după poziție, vârstă, naționalitate și experiență" : "Clubs browse players by position, age, nationality, and experience"}
                  </p>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300">
                <CardContent className="p-6">
                  <UserPlus className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    {language === "ro" ? "Contactează Jucători" : "Contact Players"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ro" ? "Recrutori contactează direct prin platformă" : "Recruiters reach out directly through the platform"}
                  </p>
                </CardContent>
              </Card>

              <Card className="tactical-card bg-card/50 backdrop-blur border-border hover:border-neon-green/50 hover:glow-green transition-all duration-300">
                <CardContent className="p-6">
                  <MessageSquare className="w-10 h-10 text-neon-green mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    {language === "ro" ? "Solicită Informații" : "Request Information"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ro" ? "Cluburile solicită înregistrări suplimentare, statistici sau programează întâlniri" : "Clubs request additional footage, stats, or schedule meetings"}
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