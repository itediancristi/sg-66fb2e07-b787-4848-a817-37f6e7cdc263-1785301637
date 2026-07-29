"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => {
    if (path === "/") {
      return router.pathname === "/";
    }
    return router.pathname === path;
  };

  const linkClass = (path: string) => {
    const baseClass = "text-sm font-medium transition-all duration-300";
    return isActive(path)
      ? `${baseClass} text-neon-green border-b-2 border-neon-green pb-1`
      : `${baseClass} hover:text-neon-green`;
  };

  const mobileLinkClass = (path: string) => {
    const baseClass = "block py-2 text-sm font-medium transition-all duration-300";
    return isActive(path)
      ? `${baseClass} text-neon-green border-l-2 border-neon-green pl-4`
      : `${baseClass} hover:text-neon-green pl-2`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/1.png" 
              alt="Open Trial Logo" 
              width={40} 
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="font-bold text-lg sm:text-xl group-hover:text-neon-green transition-colors">
              OPEN TRIAL
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/how-it-works" className={linkClass("/how-it-works")}>
              How It Works
            </Link>
            <Link href="/apply" className={linkClass("/apply")}>
              Apply
            </Link>
            <Link href="/regulations" className={linkClass("/regulations")}>
              Regulations
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-neon-green transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-neon-green transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              href="/"
              className={mobileLinkClass("/")}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className={mobileLinkClass("/how-it-works")}
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/apply"
              className={mobileLinkClass("/apply")}
              onClick={() => setIsOpen(false)}
            >
              Apply
            </Link>
            <Link
              href="/regulations"
              className={mobileLinkClass("/regulations")}
              onClick={() => setIsOpen(false)}
            >
              Regulations
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-sm font-medium hover:text-neon-green transition-colors pl-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}