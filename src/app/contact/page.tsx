"use client";

import { useState } from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ActionModal from "@/components/ui/ActionModal";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setIsModalOpen(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 500);
  };

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
              <div className="flex items-center space-x-3 pt-2 flex-wrap gap-y-2">
                <FaWhatsapp className="w-7 h-7 text-green-400 shrink-0" />
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold font-semibold text-lg md:text-xl tracking-wide hover:underline"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-forest transition-all rounded-full px-3.5 py-1 text-xs md:text-sm font-bold tracking-wider uppercase cursor-pointer"
                >
                  CHAT NOW
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gold mr-4 shrink-0" />
                <a href="mailto:hello@cohosts-rishikesh.com" className="text-ivory/80 hover:text-gold transition-colors">hello@cohosts-rishikesh.com</a>
              </div>
            </div>
          </div>
          
          <div className="p-10 w-full md:w-3/5">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-gold" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Phone</label>
                  <input 
                    type="text" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-gold" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Email *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-gold" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Message *</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-gold"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-forest text-white font-bold rounded-xl hover:bg-forest/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <ActionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Message Sent Successfully!"
      >
        <div className="text-charcoal/80 text-lg leading-relaxed mb-6">
          Thank you for reaching out to Co-Hosts Rishikesh. We have received your message and our team will get back to you shortly.
        </div>
        <div className="flex justify-end mt-8">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-2 rounded-lg font-medium text-white bg-forest hover:bg-forest/90 transition-colors shadow-lg w-full"
          >
            Done
          </button>
        </div>
      </ActionModal>
    </div>
  );
}
