"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-forest uppercase">Co-Hosts</span>
              <span className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Rishikesh</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/host" 
              className="text-sm font-medium text-forest hover:text-gold transition-colors duration-200"
            >
              List Your Property
            </Link>
            <Link 
              href="/#properties"
              className="px-6 py-2.5 bg-forest text-white text-sm font-medium rounded-full hover:bg-forest/90 transition-all duration-200 shadow-lg shadow-forest/20"
            >
              Book a Stay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-charcoal hover:text-gold focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-background overflow-y-auto z-40 border-t border-foreground/10 shadow-2xl">
          <div className="px-4 py-6 flex flex-col min-h-full">
            <div className="space-y-2 flex-grow">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-lg font-medium text-charcoal hover:text-gold hover:bg-forest/5 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-foreground/10 flex flex-col space-y-4 pb-12">
              <Link 
                href="/host" 
                className="w-full py-4 text-lg font-medium text-forest text-center rounded-xl border border-forest hover:bg-forest hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                List Your Property
              </Link>
              <Link 
                href="/#properties"
                className="w-full py-4 bg-forest text-white text-center text-lg font-bold rounded-xl hover:bg-forest/90 shadow-lg shadow-forest/20"
                onClick={() => setIsOpen(false)}
              >
                Book a Stay
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
