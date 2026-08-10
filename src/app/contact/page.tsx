import { BUSINESS_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-forest mb-6">Contact Us</h1>
          <p className="text-xl text-charcoal/70">Get a free property evaluation or inquire about a stay.</p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
          <div className="bg-forest p-10 text-ivory w-full md:w-2/5">
            <h3 className="font-serif text-2xl font-bold text-gold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold mr-4 shrink-0" />
                <span className="text-ivory/80">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-gold mr-4 shrink-0" />
                <span className="text-ivory/80">{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gold mr-4 shrink-0" />
                <span className="text-ivory/80">hello@cohosts-rishikesh.com</span>
              </div>
            </div>
          </div>
          
          <div className="p-10 w-full md:w-3/5">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Name</label>
                  <input type="text" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Phone</label>
                  <input type="text" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-gold" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
                <input type="email" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Message</label>
                <textarea rows={4} className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-gold"></textarea>
              </div>
              <button className="w-full py-3 bg-forest text-white font-bold rounded-xl hover:bg-forest/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
