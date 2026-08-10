import { BUSINESS_INFO } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl font-bold text-forest mb-6">About {BUSINESS_INFO.name}</h1>
        <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-12">
          {BUSINESS_INFO.sub_tagline}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <img src="/images/prop8.jpg" alt="Hotel Exterior" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
          <img src="/images/prop6.jpg" alt="Hotel Interior Lounge" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
        </div>

        <div className="bg-white p-10 rounded-2xl max-w-4xl mx-auto shadow-sm border border-gray-100 text-left">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">Our Mission</h2>
          <p className="text-charcoal/70 leading-relaxed mb-8">
            To provide property owners with peace of mind through professional management, while delivering exceptional, 5-star experiences to guests visiting Rishikesh. We believe in transparency, premium hospitality, and maximizing property potential.
          </p>
          
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">Why Choose Us</h2>
          <p className="text-charcoal/70 leading-relaxed">
            With years of experience in the Rishikesh hospitality market, we understand what guests want and how to position your property for maximum occupancy and revenue. From housekeeping to dynamic pricing, we handle every detail.
          </p>
        </div>
      </div>
    </div>
  );
}
