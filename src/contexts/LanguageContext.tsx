import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ro" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ro: {
    // Navigation
    "nav.home": "Acasă",
    "nav.how_it_works": "Cum Funcționează",
    "nav.regulations": "Regulament",
    "nav.contact": "Contact",
    "nav.apply": "Aplică Acum",
    "nav.admin": "Admin",
    
    // Hero Section
    "hero.subtitle": "Platformă digitală pentru managementul selecțiilor deschise în fotbalul românesc",
    "hero.cta": "Aplică pentru Selecție",
    "hero.learn_more": "Află Mai Multe",
    
    // Stats Section
    "stats.clubs": "Cluburi Partenere",
    "stats.players": "Jucători Înregistrați",
    "stats.trials": "Selecții Active",
    "stats.countries": "Țări Reprezentate",
    
    // How It Works
    "how.title": "Cum Funcționează",
    "how.subtitle": "Procesul nostru simplu și transparent",
    "how.step1.title": "Înregistrare",
    "how.step1.desc": "Completează formularul online cu informații despre tine și experiența ta fotbalistică",
    "how.step2.title": "Evaluare Preliminară",
    "how.step2.desc": "Echipa noastră evaluează profilul tău în funcție de cerințele cluburilor partenere",
    "how.step3.title": "Invitație la Selecție",
    "how.step3.desc": "Candidații selectați primesc invitație pentru selecție la unul dintre cluburile partenere",
    "how.step4.title": "Demonstrație",
    "how.step4.desc": "Participi la selecția practică unde îți arăți abilitățile în fața scouterilor profesionisti",
    
    // Countries Section
    "countries.title": "Selectăm Talente din Toată Europa",
    "countries.subtitle": "Platforma Open Trial reunește jucători din peste 40 de țări europene",
    "countries.cta": "Vezi Procesul Complet",
    
    // Partners Section
    "partners.title": "Parteneri",
    "partners.subtitle": "Cluburi și organizații cu care colaborăm",
    
    // Early Access
    "early.badge": "Program Pilot",
    "early.title": "Devino Parte din Viitorul Fotbalului",
    "early.subtitle": "Fii printre primii care experimentează platforma Open Trial. Înscrie-te pentru acces anticipat și primește notificări despre următoarele selecții.",
    "early.name": "Nume Complet",
    "early.email": "Adresă Email",
    "early.phone": "Telefon",
    "early.position": "Poziție Preferată",
    "early.position.gk": "Portar",
    "early.position.def": "Fundaș",
    "early.position.mid": "Mijlocaș",
    "early.position.fwd": "Atacant",
    "early.country": "Țara de Origine",
    "early.country.placeholder": "Selectează țara",
    "early.submit": "Înscrie-te pentru Acces Anticipat",
    "early.submitting": "Se trimite...",
    "early.success": "Mulțumim! Te vom contacta în curând.",
    "early.error": "A apărut o eroare. Te rugăm să încerci din nou.",
    
    // Footer
    "footer.tagline": "Platforma digitală care conectează talentele fotbalistice cu oportunitățile profesionale",
    "footer.company": "Companie",
    "footer.about": "Despre Noi",
    "footer.how_it_works": "Cum Funcționează",
    "footer.regulations": "Regulament",
    "footer.resources": "Resurse",
    "footer.contact": "Contact",
    "footer.faq": "Întrebări Frecvente",
    "footer.support": "Suport",
    "footer.legal": "Legal",
    "footer.privacy": "Politica de Confidențialitate",
    "footer.terms": "Termeni și Condiții",
    "footer.cookies": "Politica de Cookie-uri",
    "footer.rights": "Toate drepturile rezervate.",
    
    // Contact Page
    "contact.title": "Contactează-ne",
    "contact.subtitle": "Ai întrebări? Suntem aici să te ajutăm",
    "contact.name": "Nume",
    "contact.email": "Email",
    "contact.subject": "Subiect",
    "contact.message": "Mesaj",
    "contact.send": "Trimite Mesaj",
    "contact.sending": "Se trimite...",
    "contact.success": "Mesajul tău a fost trimis cu succes! Îți vom răspunde în curând.",
    "contact.error": "A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.",
    
    // Apply Page
    "apply.title": "Aplică pentru Selecție",
    "apply.subtitle": "Completează formularul de aplicare pentru a participa la următoarea selecție",
    "apply.personal": "Informații Personale",
    "apply.full_name": "Nume Complet",
    "apply.email": "Adresă Email",
    "apply.phone": "Număr de Telefon",
    "apply.date_of_birth": "Data Nașterii",
    "apply.nationality": "Naționalitate",
    "apply.nationality.placeholder": "Selectează naționalitatea",
    "apply.football": "Informații Fotbalistice",
    "apply.position": "Poziție",
    "apply.height": "Înălțime (cm)",
    "apply.weight": "Greutate (kg)",
    "apply.preferred_foot": "Picior Preferat",
    "apply.foot.right": "Drept",
    "apply.foot.left": "Stâng",
    "apply.foot.both": "Ambele",
    "apply.current_club": "Club Actual",
    "apply.previous_clubs": "Cluburi Anterioare",
    "apply.experience": "Experiență și Realizări",
    "apply.submit": "Trimite Aplicația",
    "apply.submitting": "Se trimite...",
    "apply.success": "Aplicația ta a fost trimisă cu succes! Te vom contacta în curând.",
    "apply.error": "A apărut o eroare la trimiterea aplicației. Te rugăm să încerci din nou.",
    
    // Regulations Page
    "regulations.title": "Regulament Open Trial",
    "regulations.subtitle": "Termeni și condiții pentru participarea la selecțiile Open Trial",
    "regulations.updated": "Ultima actualizare",
    
    // How It Works Page
    "how_page.title": "Cum Funcționează Open Trial",
    "how_page.subtitle": "Ghidul complet pentru participarea la selecțiile noastre",
    "how_page.overview": "Prezentare Generală",
    "how_page.overview.text": "Open Trial este o platformă digitală inovatoare care simplifică procesul de selecție în fotbal. Oferim o experiență transparentă și structurată pentru jucătorii care doresc să își demonstreze abilitățile în fața scouterilor profesionisti.",
    "how_page.steps": "Pașii Procesului",
    "how_page.timeline": "Cronologia Selecției",
    "how_page.faq": "Întrebări Frecvente",
    "how_page.ready": "Gata să Începi?",
    "how_page.ready.text": "Alătură-te sutelor de jucători care și-au găsit oportunități prin Open Trial",
    "how_page.apply_now": "Aplică Acum",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.how_it_works": "How It Works",
    "nav.regulations": "Regulations",
    "nav.contact": "Contact",
    "nav.apply": "Apply Now",
    "nav.admin": "Admin",
    
    // Hero Section
    "hero.subtitle": "Digital platform for managing open trials in Romanian football",
    "hero.cta": "Apply for Trial",
    "hero.learn_more": "Learn More",
    
    // Stats Section
    "stats.clubs": "Partner Clubs",
    "stats.players": "Registered Players",
    "stats.trials": "Active Trials",
    "stats.countries": "Countries Represented",
    
    // How It Works
    "how.title": "How It Works",
    "how.subtitle": "Our simple and transparent process",
    "how.step1.title": "Registration",
    "how.step1.desc": "Complete the online form with information about yourself and your football experience",
    "how.step2.title": "Preliminary Evaluation",
    "how.step2.desc": "Our team evaluates your profile based on partner club requirements",
    "how.step3.title": "Trial Invitation",
    "how.step3.desc": "Selected candidates receive an invitation to trial at one of our partner clubs",
    "how.step4.title": "Showcase",
    "how.step4.desc": "Participate in the practical trial where you demonstrate your skills in front of professional scouts",
    
    // Countries Section
    "countries.title": "Scouting Talent Across Europe",
    "countries.subtitle": "Open Trial connects players from over 40 European countries",
    "countries.cta": "See Full Process",
    
    // Partners Section
    "partners.title": "Partners",
    "partners.subtitle": "Clubs and organizations we collaborate with",
    
    // Early Access
    "early.badge": "Pilot Program",
    "early.title": "Become Part of Football's Future",
    "early.subtitle": "Be among the first to experience the Open Trial platform. Sign up for early access and receive notifications about upcoming trials.",
    "early.name": "Full Name",
    "early.email": "Email Address",
    "early.phone": "Phone",
    "early.position": "Preferred Position",
    "early.position.gk": "Goalkeeper",
    "early.position.def": "Defender",
    "early.position.mid": "Midfielder",
    "early.position.fwd": "Forward",
    "early.country": "Country of Origin",
    "early.country.placeholder": "Select country",
    "early.submit": "Sign Up for Early Access",
    "early.submitting": "Submitting...",
    "early.success": "Thank you! We'll contact you soon.",
    "early.error": "An error occurred. Please try again.",
    
    // Footer
    "footer.tagline": "Digital platform connecting football talent with professional opportunities",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.how_it_works": "How It Works",
    "footer.regulations": "Regulations",
    "footer.resources": "Resources",
    "footer.contact": "Contact",
    "footer.faq": "FAQ",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "All rights reserved.",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions? We're here to help",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Your message has been sent successfully! We'll respond soon.",
    "contact.error": "An error occurred while sending your message. Please try again.",
    
    // Apply Page
    "apply.title": "Apply for Trial",
    "apply.subtitle": "Complete the application form to participate in the next trial",
    "apply.personal": "Personal Information",
    "apply.full_name": "Full Name",
    "apply.email": "Email Address",
    "apply.phone": "Phone Number",
    "apply.date_of_birth": "Date of Birth",
    "apply.nationality": "Nationality",
    "apply.nationality.placeholder": "Select nationality",
    "apply.football": "Football Information",
    "apply.position": "Position",
    "apply.height": "Height (cm)",
    "apply.weight": "Weight (kg)",
    "apply.preferred_foot": "Preferred Foot",
    "apply.foot.right": "Right",
    "apply.foot.left": "Left",
    "apply.foot.both": "Both",
    "apply.current_club": "Current Club",
    "apply.previous_clubs": "Previous Clubs",
    "apply.experience": "Experience and Achievements",
    "apply.submit": "Submit Application",
    "apply.submitting": "Submitting...",
    "apply.success": "Your application has been submitted successfully! We'll contact you soon.",
    "apply.error": "An error occurred while submitting your application. Please try again.",
    
    // Regulations Page
    "regulations.title": "Open Trial Regulations",
    "regulations.subtitle": "Terms and conditions for participating in Open Trial selections",
    "regulations.updated": "Last updated",
    
    // How It Works Page
    "how_page.title": "How Open Trial Works",
    "how_page.subtitle": "Complete guide to participating in our trials",
    "how_page.overview": "Overview",
    "how_page.overview.text": "Open Trial is an innovative digital platform that simplifies the selection process in football. We offer a transparent and structured experience for players who want to demonstrate their abilities in front of professional scouts.",
    "how_page.steps": "Process Steps",
    "how_page.timeline": "Trial Timeline",
    "how_page.faq": "Frequently Asked Questions",
    "how_page.ready": "Ready to Start?",
    "how_page.ready.text": "Join hundreds of players who found opportunities through Open Trial",
    "how_page.apply_now": "Apply Now",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ro");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("opentrial-language") as Language;
    if (savedLanguage && (savedLanguage === "ro" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("opentrial-language", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}