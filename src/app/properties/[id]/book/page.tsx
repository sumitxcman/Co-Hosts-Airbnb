"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { MOCK_PROPERTIES } from "@/lib/constants";
import { ArrowLeft, CheckCircle2, Star, MapPin } from "lucide-react";

export default function BookNowPage() {
  const params = useParams();
  const router = useRouter();
  const propertyId = Number(params.id);
  const property = MOCK_PROPERTIES.find((p) => p.id === propertyId);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-ivory">
        <h1 className="text-2xl text-forest font-serif mb-4">Property not found</h1>
        <Link href="/" className="text-gold underline">Return Home</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-forest/10">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-serif text-forest mb-4">Booking Request Sent!</h2>
          <p className="text-charcoal/80 mb-8">
            Thank you for choosing {property.name}. Our team will review your request and contact you shortly to confirm your reservation.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="w-full py-4 rounded-xl bg-forest text-white font-semibold hover:bg-forest/90 transition-all shadow-lg shadow-forest/20"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-forest hover:text-gold transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-forest/10">
              <h1 className="text-3xl font-serif text-forest mb-2">Request to Book</h1>
              <p className="text-charcoal/60 mb-8 pb-8 border-b border-forest/10">
                Please fill in your details and we will get back to you with confirmation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-forest mb-2">Check-in Date</label>
                    <input required type="date" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-ivory/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest mb-2">Check-out Date</label>
                    <input required type="date" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-ivory/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest mb-2">Number of Guests</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-ivory/50">
                    {Array.from({length: property.guests}).map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1} {i === 0 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-6 border-t border-forest/10">
                  <h3 className="text-xl font-serif text-forest mb-6">Guest Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-forest mb-2">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-forest mb-2">Email Address</label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-forest mb-2">Phone Number</label>
                        <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-forest/10">
                  <label className="block text-sm font-medium text-forest mb-2">Special Requests (Optional)</label>
                  <textarea rows={3} placeholder="Any specific requirements or questions?" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 mt-8 rounded-xl bg-forest text-white font-semibold text-lg hover:bg-forest/90 transition-all shadow-xl shadow-forest/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    "Send Booking Request"
                  )}
                </button>
                <p className="text-xs text-center text-charcoal/60 mt-4">
                  You won't be charged yet. Our team will contact you for payment.
                </p>
              </form>
            </div>
          </div>

          {/* RIGHT: PROPERTY SUMMARY */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-sm border border-forest/10 overflow-hidden sticky top-8">
              <div className="relative h-64 w-full">
                <Image 
                  src={property.img} 
                  alt={property.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-forest">{property.name}</h3>
                  <div className="flex items-center text-sm font-medium px-2 py-1 bg-gold/10 text-forest rounded-lg">
                    <Star className="w-4 h-4 text-gold mr-1 fill-gold" />
                    {property.rating}
                  </div>
                </div>
                <div className="flex items-center text-charcoal/60 text-sm mb-6">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}, Rishikesh
                </div>

                <div className="space-y-4 pt-6 border-t border-forest/10">
                  <div className="flex justify-between items-center text-charcoal/80">
                    <span>₹{property.price.toLocaleString()} x 1 night</span>
                    <span>₹{property.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-charcoal/80">
                    <span>Cleaning fee</span>
                    <span>₹1,500</span>
                  </div>
                  <div className="flex justify-between items-center text-charcoal/80 pb-4 border-b border-forest/10">
                    <span>Taxes</span>
                    <span>₹{(property.price * 0.12).toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-xl text-forest pt-2">
                    <span>Total (INR)</span>
                    <span>₹{(property.price + 1500 + property.price * 0.12).toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
