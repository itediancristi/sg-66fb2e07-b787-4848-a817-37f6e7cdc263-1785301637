import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Video } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
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
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-neon-green transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-neon-green">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/open.trial?igsh=dHRsYm5jcWVmcmQ0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/198pZbCD3Z/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/open-trial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-green transition-colors"
                aria-label="TikTok"
              >
                <Video size={20} />
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