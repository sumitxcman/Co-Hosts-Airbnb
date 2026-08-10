"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, TrendingUp, Key, MessageSquare, Sparkles, Wrench, BarChart3 } from "lucide-react";

export default function HostPage() {
  const [calcData, setCalcData] = useState({ type: 'Villa', beds: 3, price: 10000, occupancy: 60 });

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
      {/* Hero Section */}
      <section className="relative py-24 bg-forest text-ivory overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Turn Your Property Into a Profitable Stay</h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto mb-10">
            You own the property. We handle everything else. Professional Airbnb management in Rishikesh.
          </p>
          <button className="px-8 py-4 bg-gold text-forest font-bold rounded-full hover:bg-white transition-all duration-300">
            Get Your Free Evaluation
          </button>
        </div>
      </section>

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

              <button className="w-full py-4 bg-gold text-forest font-bold rounded-xl hover:bg-white transition-all shadow-lg shadow-black/20">
                Contact Us Now
              </button>
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
    </div>
  );
}
