import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Shield,
  Users,
  Building2,
  AlertCircle,
  FileText,
  Lock
} from "lucide-react";

export default function RegulationsPage() {
  const { language } = useLanguage();

  return (
    <>
      <SEO
        title={language === "ro" ? "Regulamente & Termeni - Open Trial" : "Regulations & Terms - Open Trial"}
        description={language === "ro" ? "Termeni platformă Open Trial, responsabilități jucători și cluburi, politică conținut, disclaimer și informații confidențialitate." : "Open Trial platform terms, player and club responsibilities, content policy, disclaimers, and privacy information."}
        language={language}
      />
      
      <Navigation />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
        
        <div className="container relative z-10 text-center py-20">
          <Badge className="mb-6 bg-neon-green/10 text-neon-green border-neon-green/30 hover:bg-neon-green/20 text-sm px-4 py-1">
            {language === "ro" ? "Legal & Politici" : "Legal & Policies"}
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-glow">
            {language === "ro" ? "REGULAMENTE & TERMENI" : "REGULATIONS & TERMS"}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {language === "ro" ? "Ghiduri platformă, responsabilități și politici" : "Platform guidelines, responsibilities, and policies"}
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
                      {language === "ro" ? "Secțiunea 1" : "Section 1"}
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">
                      {language === "ro" ? "Scopul Platformei" : "Platform Purpose"}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === "ro" 
                      ? "Open Trial oferă vizibilitate și oportunități de networking între jucători de fotbal, cluburi, scouteri și recrutori din întreaga lume."
                      : "Open Trial provides visibility and networking opportunities between football players, clubs, scouts, and recruiters worldwide."}
                  </p>
                  
                  <div className="bg-muted/20 border border-border rounded-lg p-6 mt-6">
                    <p className="font-semibold text-foreground mb-2">
                      {language === "ro" ? "Disclaimer Important:" : "Important Disclaimer:"}
                    </p>
                    <p>
                      {language === "ro"
                        ? "Open Trial nu garantează contracte, selecții, transferuri sau angajare. Platforma servește ca instrument de conexiune, iar toate deciziile de recrutare rămân responsabilitatea exclusivă a cluburilor, scouterilor, recrutorilor și jucătorilor."
                        : "Open Trial does not guarantee contracts, trials, transfers, or employment. The platform serves as a connection tool, and all recruitment decisions remain the sole responsibility of clubs, scouts, recruiters, and players."}
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
                      {language === "ro" ? "Secțiunea 2" : "Section 2"}
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">
                      {language === "ro" ? "Responsabilități Jucători" : "Player Responsibilities"}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {language === "ro"
                      ? "Jucătorii care utilizează Open Trial trebuie să respecte următoarele responsabilități:"
                      : "Players using Open Trial must adhere to the following responsibilities:"}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">1</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Informații Exacte" : "Submit Accurate Information"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Toate informațiile din profil, statisticile și detaliile de carieră trebuie să fie adevărate și actuale"
                            : "All profile information, statistics, and career details must be truthful and current"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">2</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Drepturi asupra Conținutului" : "Own All Uploaded Content"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Trebuie să ai drepturi asupra tuturor videoclipurilor, imaginilor și materialelor încărcate în profilul tău"
                            : "You must have rights to all videos, images, and materials uploaded to your profile"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">3</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Conduită Profesională" : "Maintain Professional Conduct"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Interacționează respectuos cu scouteri, cluburi și alți utilizatori ai platformei"
                            : "Interact respectfully with scouts, clubs, and other platform users"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">4</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Actualizează Profilul" : "Update Profile Information"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Păstrează profilul actualizat cu schimbări de club, statistici și statut de disponibilitate"
                            : "Keep your profile current with club changes, statistics, and availability status"}
                        </p>
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
                      {language === "ro" ? "Secțiunea 3" : "Section 3"}
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">
                      {language === "ro" ? "Responsabilități Cluburi" : "Club Responsibilities"}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {language === "ro"
                      ? "Cluburile, scouterii și recrutori trebuie să:"
                      : "Clubs, scouts, and recruiters must:"}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">1</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Utilizare Profesională" : "Use Information Professionally"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Datele jucătorilor trebuie folosite exclusiv pentru scopuri legitime de recrutare"
                            : "Player data must be used solely for legitimate recruitment purposes"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">2</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Respectă Confidențialitatea" : "Respect Player Privacy"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Nu distribuiți, vindeți sau folosiți greșit informațiile de contact sau datele personale ale jucătorilor"
                            : "Do not share, sell, or misuse player contact information or personal data"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-neon-green">3</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Evită Practici Înșelătoare" : "Avoid Misleading Practices"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Fii onest despre oportunități, statusul clubului și procesele de recrutare"
                            : "Be honest about opportunities, club status, and recruitment processes"}
                        </p>
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
                      {language === "ro" ? "Secțiunea 4" : "Section 4"}
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">
                      {language === "ro" ? "Politică Conținut" : "Content Policy"}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {language === "ro"
                      ? "Următorul conținut este strict interzis pe Open Trial:"
                      : "The following content is strictly prohibited on Open Trial:"}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded border border-destructive/30">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">
                          {language === "ro" ? "Informații False" : "False Information"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Statistici fabricate, istoricul carierei sau acreditări ale jucătorilor"
                            : "Fabricated statistics, career history, or player credentials"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded border border-destructive/30">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">
                          {language === "ro" ? "Conținut Ofensator" : "Offensive Content"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Material discriminatoriu, abuziv sau nepotrivit"
                            : "Discriminatory, abusive, or inappropriate material"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded border border-destructive/30">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">
                          {language === "ro" ? "Încălcarea Copyright-ului" : "Copyright Infringement"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Utilizarea neautorizată a videoclipurilor, imaginilor sau media pe care nu le deții"
                            : "Unauthorized use of videos, images, or media you don't own"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded border border-destructive/30">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">
                          {language === "ro" ? "Impersonare" : "Impersonation"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "ro"
                            ? "Crearea de profiluri pentru alți jucători sau denaturarea identității"
                            : "Creating profiles for other players or misrepresenting identity"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/20 rounded border border-border">
                    <p className="text-sm text-muted-foreground">
                      {language === "ro"
                        ? "Încălcările pot duce la suspendarea profilului sau eliminarea permanentă de pe platformă."
                        : "Violations may result in profile suspension or permanent removal from the platform."}
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
                      {language === "ro" ? "Secțiunea 5" : "Section 5"}
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === "ro"
                      ? "Open Trial acționează ca o platformă de vizibilitate și networking conectând jucători de fotbal cu cluburi, scouteri și recrutori."
                      : "Open Trial acts as a visibility and networking platform connecting football players with clubs, scouts, and recruiters."}
                  </p>
                  
                  <div className="bg-muted/20 border border-border rounded-lg p-6">
                    <p className="font-semibold text-foreground mb-3">
                      {language === "ro" ? "Notă Importantă:" : "Important Notice:"}
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-neon-green mt-1">•</span>
                        <span>
                          {language === "ro"
                            ? "Deciziile de recrutare rămân responsabilitatea exclusivă a cluburilor, scouterilor, recrutorilor și jucătorilor"
                            : "Recruitment decisions remain solely the responsibility of clubs, scouts, recruiters, and players"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neon-green mt-1">•</span>
                        <span>
                          {language === "ro"
                            ? "Open Trial nu participă la negocieri de transfer sau discuții contractuale"
                            : "Open Trial does not participate in transfer negotiations or contract discussions"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neon-green mt-1">•</span>
                        <span>
                          {language === "ro"
                            ? "Platforma oferă instrumente pentru expunere și conexiune, nu garanții de angajare"
                            : "The platform provides tools for exposure and connection, not employment guarantees"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neon-green mt-1">•</span>
                        <span>
                          {language === "ro"
                            ? "Jucătorii sunt responsabili pentru verificarea legitimității oportunităților și cluburilor"
                            : "Players are responsible for verifying the legitimacy of opportunities and clubs"}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm">
                    {language === "ro"
                      ? "Folosind Open Trial, toate părțile recunosc aceste limitări și acceptă responsabilitatea deplină pentru interacțiunile și deciziile lor."
                      : "By using Open Trial, all parties acknowledge these limitations and accept full responsibility for their interactions and decisions."}
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
                      {language === "ro" ? "Secțiunea 6" : "Section 6"}
                    </Badge>
                    <h2 className="text-2xl font-bold mb-4">
                      {language === "ro" ? "Confidențialitate" : "Privacy"}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === "ro"
                      ? "Datele personale trimise către Open Trial sunt gestionate conform reglementărilor de protecție a datelor aplicabile."
                      : "Personal data submitted to Open Trial is handled according to applicable data protection regulations."}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <Lock className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Colectare Date" : "Data Collection"}
                        </p>
                        <p className="text-sm">
                          {language === "ro"
                            ? "Colectăm doar informațiile necesare pentru crearea profilului și funcționalitatea platformei"
                            : "We collect only information necessary for profile creation and platform functionality"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <Lock className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Utilizare Date" : "Data Usage"}
                        </p>
                        <p className="text-sm">
                          {language === "ro"
                            ? "Informațiile tale sunt folosite pentru a te conecta cu oportunități de recrutare"
                            : "Your information is used to connect you with recruitment opportunities"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <Lock className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Securitate Date" : "Data Security"}
                        </p>
                        <p className="text-sm">
                          {language === "ro"
                            ? "Implementăm măsuri de securitate standard din industrie pentru a proteja informațiile tale personale"
                            : "We implement industry-standard security measures to protect your personal information"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded border border-border">
                      <Lock className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">
                          {language === "ro" ? "Drepturile Tale" : "Your Rights"}
                        </p>
                        <p className="text-sm">
                          {language === "ro"
                            ? "Poți solicita acces, corectare sau ștergerea datelor tale personale oricând"
                            : "You may request access, correction, or deletion of your personal data at any time"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/20 rounded border border-border">
                    <p className="text-sm">
                      {language === "ro" ? (
                        <>Pentru întrebări despre confidențialitate sau cereri de date, contactează <a href="mailto:info@opentrialfootball.com" className="text-neon-green hover:underline">info@opentrialfootball.com</a></>
                      ) : (
                        <>For privacy inquiries or data requests, contact <a href="mailto:info@opentrialfootball.com" className="text-neon-green hover:underline">info@opentrialfootball.com</a></>
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-8">
              <p className="text-sm text-muted-foreground">
                {language === "ro" ? (
                  <>Actualizat ultima dată: Iulie 2026 • Pentru întrebări despre acești termeni, contactează{" "}
                  <a href="mailto:info@opentrialfootball.com" className="text-neon-green hover:underline">
                    info@opentrialfootball.com
                  </a></>
                ) : (
                  <>Last updated: July 2026 • For questions about these terms, contact{" "}
                  <a href="mailto:info@opentrialfootball.com" className="text-neon-green hover:underline">
                    info@opentrialfootball.com
                  </a></>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}