"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, TrendingUp, Key, MessageSquare, Sparkles, Wrench, BarChart3 } from "lucide-react";
import ToastButton from "@/components/ui/ToastButton";
import Link from "next/link";
import ActionModal from "@/components/ui/ActionModal";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function HostPage() {
  const router = useRouter();
  const [calcData, setCalcData] = useState({ type: 'Villa', beds: 3, price: 10000, occupancy: 60 });
  const [modalState, setModalState] = useState({ isOpen: false, title: "", content: "" });

  const openModal = (title: string, content: string) => {
    setModalState({ isOpen: true, title, content });
  };
  const calculateRevenue = () => {
    const daily = calcData.price;
    const monthlyDays = 30 * (calcData.occupancy / 100);
    const monthlyRev = daily * monthlyDays;
    return {
      monthly: Math.round(monthlyRev),
      yearly: Math.round(monthlyRev * 12)
    };
  };

  const revenue = calculateRevenue();

  const SERVICES = [
    { icon: <Sparkles className="w-6 h-6 text-gold" />, title: "Listing Optimization", desc: "Professional photography and SEO-optimized listings." },
    { icon: <TrendingUp className="w-6 h-6 text-gold" />, title: "Dynamic Pricing", desc: "Algorithm-driven pricing to maximize daily revenue." },
    { icon: <MessageSquare className="w-6 h-6 text-gold" />, title: "Guest Communication", desc: "24/7 prompt replies, booking handling, and support." },
    { icon: <CheckCircle2 className="w-6 h-6 text-gold" />, title: "Housekeeping", desc: "Hotel-grade cleaning and fresh linen after every stay." },
    { icon: <Wrench className="w-6 h-6 text-gold" />, title: "Maintenance", desc: "Routine checks and quick repairs coordination." },
    { icon: <BarChart3 className="w-6 h-6 text-gold" />, title: "Revenue Management", desc: "Transparent owner dashboard with detailed analytics." },
  ];

  return (
    <div className="bg-background min-h-screen">


      {/* Calculator Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="p-8 md:p-12 w-full md:w-1/2">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-gold mr-3" />
                <h2 className="font-serif text-3xl text-forest font-bold">Revenue Calculator</h2>
              </div>
              <p className="text-charcoal/70 mb-8">Estimate your potential earnings with Co-Hosts Rishikesh management.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Property Type</label>
                  <select 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gold focus:border-gold outline-none"
                    value={calcData.type}
                    onChange={(e) => setCalcData({...calcData, type: e.target.value})}
                  >
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Studio</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Average Nightly Price (₹)</label>
                  <input 
                    type="range" min="2000" max="30000" step="500" 
                    className="w-full accent-gold"
                    value={calcData.price}
                    onChange={(e) => setCalcData({...calcData, price: parseInt(e.target.value)})}
                  />
                  <div className="text-right text-forest font-bold mt-2">₹{calcData.price.toLocaleString()}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Expected Occupancy (%)</label>
                  <input 
                    type="range" min="30" max="95" step="5" 
                    className="w-full accent-gold"
                    value={calcData.occupancy}
                    onChange={(e) => setCalcData({...calcData, occupancy: parseInt(e.target.value)})}
                  />
                  <div className="text-right text-forest font-bold mt-2">{calcData.occupancy}%</div>
                </div>
              </div>
            </div>
            
            <div className="bg-forest p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center text-ivory">
              <h3 className="text-lg text-gold font-medium mb-2 uppercase tracking-wider">Estimated Revenue</h3>
              <p className="text-xs text-ivory/60 mb-8">*Not Guaranteed. Based on market averages.</p>
              
              <div className="mb-8 border-b border-ivory/20 pb-8">
                <p className="text-sm text-ivory/80 mb-1">Monthly Potential</p>
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold">
                  ₹{revenue.monthly.toLocaleString()}
                </div>
              </div>
              
              <div className="mb-10">
                <p className="text-sm text-ivory/80 mb-1">Annual Potential</p>
                <div className="text-3xl md:text-4xl font-serif font-bold">
                  ₹{revenue.yearly.toLocaleString()}
                </div>
              </div>

              <a 
                href="https://wa.me/919625933365"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-50 flex items-center justify-center space-x-2 text-center w-full py-4 bg-gold text-forest font-bold rounded-xl hover:bg-white transition-all shadow-lg shadow-black/20 cursor-pointer"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>Contact Us Now on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-forest font-bold mb-6">Our Management Services</h2>
            <p className="text-charcoal/70 text-lg">We provide an end-to-end hospitality solution for property owners.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 bg-forest/5 rounded-xl flex items-center justify-center mb-6">
                  {srv.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">{srv.title}</h3>
                <p className="text-charcoal/70">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ActionModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
        title={modalState.title}
      >
        <div className="text-charcoal/80 text-lg leading-relaxed mb-6">
          {modalState.content}
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <button 
            onClick={() => setModalState({ ...modalState, isOpen: false })}
            className="px-6 py-2 rounded-lg font-medium text-charcoal bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
          <button 
            onClick={() => setModalState({ ...modalState, isOpen: false })}
            className="px-6 py-2 rounded-lg font-medium text-white bg-forest hover:bg-forest/90 transition-colors shadow-lg"
          >
            Confirm
          </button>
        </div>
      </ActionModal>
    </div>
  );
}
