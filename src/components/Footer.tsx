import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="Open Trial Logo" 
                width={40} 
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl">OPEN TRIAL</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Talent Meets Opportunity
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-neon-green">Platform</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-neon-green transition-colors">
                Home
              </Link>
              <Link href="/how-it-works" className="block text-sm text-muted-foreground hover:text-neon-green transition-colors">
                How It Works
              </Link>
              <Link href="/apply" className="block text-sm text-muted-foreground hover:text-neon-green transition-colors">
                Apply
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-neon-green">Legal</h3>
            <div className="space-y-2">
              <Link href="/regulations" className="block text-sm text-muted-foreground hover:text-neon-green transition-colors">
                Regulations
              </Link>
              <Link href="#contact" className="block text-sm text-muted-foreground hover:text-neon-green transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-neon-green">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Open Trial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}