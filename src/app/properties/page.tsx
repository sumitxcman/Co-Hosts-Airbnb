"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, MapPin, Users, Bed, Bath, Search, Filter } from "lucide-react";

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const MOCK_PROPERTIES = [
    { id: 1, name: "Ganga View Luxury Villa", price: 12000, type: "Villas", guests: 6, beds: 3, baths: 3, location: "Tapovan", rating: 4.9, img: "/images/prop1.jpg", tags: ["Ganga View", "Pool"] },
    { id: 2, name: "Serene Forest Retreat", price: 8500, type: "Apartments", guests: 4, beds: 2, baths: 2, location: "Shivpuri", rating: 4.8, img: "/images/prop2.jpg", tags: [] },
    { id: 3, name: "Boutique Mountain Studio", price: 5000, type: "Apartments", guests: 2, beds: 1, baths: 1, location: "Laxman Jhula", rating: 4.7, img: "/images/prop3.jpg", tags: ["Ganga View"] },
    { id: 4, name: "Riverside Luxury Tent", price: 6500, type: "Glamping", guests: 2, beds: 1, baths: 1, location: "Neelkanth Road", rating: 4.9, img: "/images/prop4.jpg", tags: ["Ganga View"] },
    { id: 5, name: "Heritage Homestay", price: 4000, type: "Apartments", guests: 4, beds: 2, baths: 2, location: "Swarg Ashram", rating: 4.6, img: "/images/prop5.jpg", tags: [] },
    { id: 6, name: "Premium Pool Villa", price: 18000, type: "Villas", guests: 8, beds: 4, baths: 4, location: "Narendra Nagar", rating: 5.0, img: "/images/prop6.jpg", tags: ["Pool"] },
  ];

  const filteredProperties = MOCK_PROPERTIES.filter(property => {
    // Search match
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter match
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
    <div className="bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-forest text-ivory py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Discover Exceptional Stays</h1>
          <p className="text-ivory/80 max-w-2xl mx-auto">
            Experience Rishikesh in luxury. Browse our curated collection of premium properties managed with professional care.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white p-4 rounded-xl shadow-lg border border-forest/5 flex flex-col md:flex-row gap-4 items-center">
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
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
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
            <button className="px-4 py-3 rounded-lg bg-forest/5 text-forest flex items-center shrink-0">
              <Filter className="h-5 w-5 mr-2" /> More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="container mx-auto px-4 mt-16">
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
                    <div className="flex items-center text-sm text-charcoal/80"><Bed className="w-4 h-4 mr-2 text-gold"/> {property.beds} Beds</div>
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
    </div>
  );
}
