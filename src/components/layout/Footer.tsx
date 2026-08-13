import Link from "next/link";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-forest text-ivory pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col inline-block">
              <span className="font-serif text-2xl font-bold tracking-wider text-ivory uppercase">Co-Hosts</span>
              <span className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Rishikesh</span>
            </Link>
            <p className="text-sm text-ivory/80 leading-relaxed max-w-xs pt-4">
              {BUSINESS_INFO.sub_tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-ivory/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-ivory/80">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-2 pt-1 flex-wrap gap-y-2">
                <FaWhatsapp className="h-5 w-5 text-green-400 shrink-0" />
                <a href={`https://wa.me/91${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gold hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
                <a href={`https://wa.me/91${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-forest transition-all rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase cursor-pointer">
                  CHAT NOW
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a href="mailto:hello@cohosts-rishikesh.com" className="text-sm text-ivory/80 hover:text-white transition-colors">
                  hello@cohosts-rishikesh.com
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/cohosts" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center text-ivory hover:bg-gold hover:text-forest transition-all">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/919625933365" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center text-ivory hover:bg-gold hover:text-forest transition-all">
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a href="https://t.me/cohosts" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center text-ivory hover:bg-gold hover:text-forest transition-all">
                <FaTelegramPlane className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          <p className="text-xs text-ivory/60">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-ivory/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
