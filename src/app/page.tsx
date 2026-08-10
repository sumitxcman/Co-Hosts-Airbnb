"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO, REVIEWS } from "@/lib/constants";
import { Star, MapPin, Users, Bed, Bath, ArrowRight, Phone, Mail, Search, Filter } from "lucide-react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const MOCK_PROPERTIES = [
    { id: 1, name: "Panoramic Ganga View Suite", price: 12000, type: "Villas", guests: 6, beds: 3, baths: 3, location: "Tapovan", rating: 4.9, img: "/images/prop1.jpg", tags: ["Ganga View", "Pool"] },
    { id: 2, name: "Serene Forest Retreat", price: 8500, type: "Apartments", guests: 4, beds: 2, baths: 2, location: "Shivpuri", rating: 4.8, img: "/images/prop2.jpg", tags: [] },
    { id: 3, name: "Classic Ganga View Room", price: 5000, type: "Apartments", guests: 2, beds: 1, baths: 1, location: "Laxman Jhula", rating: 4.7, img: "/images/prop5.jpg", tags: ["Ganga View"] },
    { id: 4, name: "Riverside Cafe & Stay", price: 6500, type: "Glamping", guests: 2, beds: 1, baths: 1, location: "Neelkanth Road", rating: 4.9, img: "/images/prop4.jpg", tags: ["Ganga View"] },
    { id: 5, name: "Heritage Homestay", price: 4000, type: "Apartments", guests: 4, beds: 2, baths: 2, location: "Swarg Ashram", rating: 4.6, img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Berlin_Villa_Borsig_Tegel_asv2019-08_img09.jpg", tags: [] },
    { id: 6, name: "Premium Pool Villa", price: 18000, type: "Villas", guests: 8, beds: 4, baths: 4, location: "Narendra Nagar", rating: 5.0, img: "https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg", tags: ["Pool"] },
  ];

  const filteredProperties = MOCK_PROPERTIES.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesFilter = true;
    if (activeFilter !== "All") {
      if (activeFilter === "Villas" || activeFilter === "Apartments") {
        matchesFilter = property.type === activeFilter;
      } else {
        matchesFilter = property.tags.includes(activeFilter);
      }
    }
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply z-10" />
          <img 
            src="/images/prop3.jpg" 
            alt="Luxury Stay in Rishikesh" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center pt-32 md:pt-0">
          <span className="inline-block py-1 px-3 rounded-full bg-background/20 backdrop-blur-md border border-white/30 text-white text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6">
            Welcome to Rishikesh
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-4 md:mb-6 drop-shadow-lg max-w-5xl mx-auto leading-tight">
            Your Property. <br className="hidden md:block"/>
            <span className="text-gold italic">Our Expertise.</span> <br className="hidden md:block"/>
            Better Returns.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto font-light drop-shadow-md px-2">
            {BUSINESS_INFO.sub_tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
            <a 
              href="#properties" 
              className="px-6 py-4 md:px-8 bg-gold text-forest font-semibold rounded-full hover:bg-white transition-all duration-300 w-full sm:w-auto"
            >
              Explore Our Stays
            </a>
            <Link 
              href="/host" 
              className="px-6 py-4 md:px-8 bg-background/20 backdrop-blur-md text-white border border-white/50 font-semibold rounded-full hover:bg-white hover:text-forest transition-all duration-300 w-full sm:w-auto"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST / STATISTICS SECTION */}
      <section className="py-12 md:py-20 bg-forest text-ivory">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 text-center md:divide-x divide-ivory/20">
            <div className="flex flex-col items-center justify-center space-y-1 md:space-y-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold font-bold">50+</span>
              <span className="text-xs sm:text-sm md:text-base font-light tracking-wide uppercase">Properties Managed</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1 md:space-y-2 border-l border-ivory/20 md:border-none">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold font-bold">10k+</span>
              <span className="text-xs sm:text-sm md:text-base font-light tracking-wide uppercase">Guest Stays</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1 md:space-y-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold font-bold">{BUSINESS_INFO.rating}</span>
              <span className="text-xs sm:text-sm md:text-base font-light tracking-wide uppercase">Average Rating</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1 md:space-y-2 border-l border-ivory/20 md:border-none">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold font-bold">98%</span>
              <span className="text-xs sm:text-sm md:text-base font-light tracking-wide uppercase">Owner Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* FULL ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-6">About {BUSINESS_INFO.name}</h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-12">
            {BUSINESS_INFO.sub_tagline}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <img src="/images/prop8.jpg" alt="Hotel Exterior" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            <img src="/images/prop6.jpg" alt="Hotel Interior Lounge" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl max-w-4xl mx-auto shadow-sm border border-gray-100 text-left">
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
      </section>

      {/* FULL PROPERTIES SECTION */}
      <section id="properties" className="py-16 md:py-24 bg-forest/5 scroll-mt-20">
        <div className="container mx-auto px-4 text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-4">Discover Exceptional Stays</h1>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
            Experience Rishikesh in luxury. Browse our curated collection of premium properties managed with professional care.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="container mx-auto px-4 mb-12">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-forest/5 flex flex-col md:flex-row gap-4 items-center max-w-6xl mx-auto">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-3 top-3 h-5 w-5 text-charcoal/40" />
              <input 
                type="text" 
                placeholder="Search by location or property name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {['All', 'Villas', 'Apartments', 'Ganga View', 'Pool'].map(filter => (
                <button 
                  key={filter} 
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 whitespace-nowrap rounded-lg border transition-colors font-medium ${
                    activeFilter === filter 
                      ? "bg-gold border-gold text-white" 
                      : "border-gray-200 text-charcoal hover:border-gold hover:text-gold"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="container mx-auto px-4 max-w-7xl">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="font-serif text-2xl text-charcoal mb-2">No properties found</h3>
              <p className="text-charcoal/60">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => {setActiveFilter("All"); setSearchQuery("");}} 
                className="mt-6 px-6 py-2 bg-forest text-white rounded-lg hover:bg-forest/90"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <div key={property.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl shadow-forest/5 border border-forest/5 transition-all duration-300 hover:-translate-y-2 flex flex-col">
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <img src={property.img} alt={property.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      <span className="text-sm font-bold text-forest">{property.rating}</span>
                    </div>
                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {property.tags.map(tag => (
                        <span key={tag} className="bg-forest/80 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-xl font-bold text-forest">{property.name}</h3>
                      <span className="text-lg font-bold text-forest whitespace-nowrap ml-2">₹{property.price.toLocaleString()}<span className="text-sm font-normal text-charcoal/60">/night</span></span>
                    </div>
                    <div className="flex items-center text-charcoal/70 text-sm mb-6">
                      <MapPin className="w-4 h-4 mr-1 shrink-0" /> {property.location}, Rishikesh
                    </div>
                    <div className="flex items-center justify-between py-4 border-y border-forest/10 mb-6 mt-auto">
                      <div className="flex items-center text-sm text-charcoal/80"><Users className="w-4 h-4 mr-2 text-gold"/> {property.guests} Guests</div>
                      <div className="flex items-center text-sm text-charcoal/80"><Bed className="w-4 h-4 mr-2 text-gold"/> {property.beds} Rooms</div>
                      <div className="flex items-center text-sm text-charcoal/80"><Bath className="w-4 h-4 mr-2 text-gold"/> {property.baths} Baths</div>
                    </div>
                    <div className="flex space-x-3 mt-auto">
                      <Link href={`/properties/${property.id}`} className="flex-1 py-3 text-center rounded-xl border border-forest text-forest font-semibold hover:bg-forest hover:text-white transition-colors">
                        View Details
                      </Link>
                      <Link href={`/properties/${property.id}/book`} className="flex-1 py-3 text-center rounded-xl bg-forest text-white font-semibold hover:bg-forest/90 shadow-lg shadow-forest/20 transition-all">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FULL SERVICES SECTION */}
      <section id="services" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-16">Comprehensive Airbnb and vacation rental management in Rishikesh.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {[
              {
                title: "Satvik Fine Dining",
                desc: "Experience pure vegetarian and Satvik culinary excellence with our curated local dishes, served fresh daily.",
                img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/North_Indian_Vegetarian_Thali-MB51.jpg"
              },
              {
                title: "Outdoor Lounge & Ambiance",
                desc: "Relax in our beautiful outdoor seating areas, perfect for evening tea and spiritual serenity.",
                img: "/images/prop9.jpg"
              },
              {
                title: "Premium Property Management",
                desc: "From dynamic pricing to housekeeping, we handle everything for luxury stays.",
                img: "/images/prop8.jpg"
              },
              {
                title: "Guest Hospitality",
                desc: "Providing 5-star communication, check-ins, and local guidance for every single guest.",
                img: "/images/prop6.jpg"
              }
            ].map((srv, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-forest mb-3">{srv.title}</h3>
                  <p className="text-charcoal/70 text-lg leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL EXPERIENCES SECTION */}
      <section id="experiences" className="py-16 md:py-24 bg-forest/5 scroll-mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-6">Rishikesh Experiences</h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-16">Enhance your stay with our curated local experiences.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto text-left">
            {[
              { title: "Yoga Retreats", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" },
              { title: "River Rafting", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=600&auto=format&fit=crop" },
              { title: "Trekking & Hiking", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop" },
              { title: "Ganga Aarti", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ken_Wieland_Ganga_Aarti_in_Rishikesh.jpg" },
              { title: "Temple Tours", image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Rishikesh%2C_Lakshman_Jhula.jpg" },
              { title: "Adventure Sports", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bungee_Jumping.png" }
            ].map((exp, i) => (
              <div key={i} className="relative h-56 md:h-64 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-forest/40 group-hover:bg-forest/20 transition-all z-10" />
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUEST REVIEWS SECTION */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-gold font-semibold tracking-widest uppercase text-xs md:text-sm mb-2 block">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-5xl text-forest font-bold mb-4 md:mb-6">What Our Guests Say</h2>
            <p className="text-charcoal/70 text-base md:text-lg px-4 md:px-0">
              Based on {BUSINESS_INFO.reviewsCount} reviews with an average rating of {BUSINESS_INFO.rating} out of 5 stars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-forest/5 border border-forest/5 flex flex-col">
                <div className="flex space-x-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 md:w-5 h-4 md:h-5 ${i < review.rating ? 'text-gold fill-gold' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-charcoal/80 text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow italic">
                  "{review.content}"
                </p>
                <div className="flex items-center mt-auto border-t border-forest/10 pt-4 md:pt-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-forest/10 rounded-full flex items-center justify-center text-forest font-bold font-serif text-lg md:text-xl mr-3 md:mr-4 shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-forest text-sm md:text-base leading-tight">{review.name}</h4>
                    <p className="text-xs md:text-sm text-charcoal/60 mt-1">{review.role} • {review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* HOST CTA SECTION */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-forest">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-gold font-bold mb-4 md:mb-6 leading-tight">Turn Your Property Into a Profitable Stay</h2>
          <p className="text-base md:text-xl text-ivory/90 mb-8 md:mb-10 max-w-2xl mx-auto font-light">
            You own the property. We handle everything else. Professional Airbnb management that maximizes your returns.
          </p>
          <Link href="/host" className="inline-block w-full sm:w-auto px-8 md:px-10 py-4 bg-gold text-forest font-bold rounded-full hover:bg-white transition-all duration-300 shadow-xl shadow-black/20">
            List Your Property
          </Link>
        </div>
      </section>

      {/* FULL CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 bg-charcoal text-ivory scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-ivory/80">Get a free property evaluation or inquire about a stay.</p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row text-charcoal">
            <div className="bg-forest p-8 md:p-10 text-ivory w-full md:w-2/5">
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
            
            <div className="p-8 md:p-10 w-full md:w-3/5">
              <form className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <button type="button" className="w-full py-3 bg-forest text-white font-bold rounded-xl hover:bg-forest/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
