import BookingWidget from "@/components/booking/BookingWidget";
import { Star, MapPin, Users, Bed, Bath, Wifi, Coffee, Wind, Tv, ShieldCheck } from "lucide-react";

export default function PropertyDetail() {
  const property = {
    name: "Ganga View Luxury Villa",
    price: 12000,
    rating: 4.9,
    reviews: 24,
    location: "Tapovan, Rishikesh",
    guests: 6,
    beds: 3,
    baths: 3,
    host: "Ananya",
    description: "Experience the spiritual aura of Rishikesh from this ultra-luxury villa overlooking the holy Ganges. Designed with premium aesthetics, the property offers floor-to-ceiling windows, an expansive balcony, and modern amenities wrapped in traditional elegance.",
    images: [
      "/images/prop1.jpg",
      "/images/prop4.jpg",
      "/images/prop5.jpg",
      "/images/prop2.jpg"
    ]
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Title & Meta */}
      <div className="container mx-auto px-4 pt-10 pb-6">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-2">{property.name}</h1>
        <div className="flex items-center text-sm text-charcoal/80 space-x-4">
          <span className="flex items-center"><Star className="w-4 h-4 text-gold fill-gold mr-1" /> {property.rating} ({property.reviews} reviews)</span>
          <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-gold" /> {property.location}</span>
          <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1 text-gold" /> Verified by Co-Hosts</span>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <div className="md:col-span-2 row-span-2 h-full">
            <img src={property.images[0]} alt="Main View" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" />
          </div>
          <div className="hidden md:block col-span-1 h-full">
            <img src={property.images[1]} alt="Bedroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" />
          </div>
          <div className="hidden md:block col-span-1 h-full">
            <img src={property.images[2]} alt="Living Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" />
          </div>
          <div className="hidden md:block col-span-2 h-full">
            <img src={property.images[3]} alt="Balcony" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Details */}
          <div className="w-full lg:w-2/3">
            <div className="flex justify-between items-center pb-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-forest">Entire luxury villa hosted by {property.host}</h2>
                <div className="flex space-x-4 mt-2 text-sm text-charcoal/70">
                  <span>{property.guests} guests</span> • 
                  <span>{property.beds} bedrooms</span> • 
                  <span>{property.baths} baths</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-forest font-serif font-bold text-xl shadow-md">
                {property.host.charAt(0)}
              </div>
            </div>

            <div className="py-8 border-b border-gray-200">
              <h3 className="font-serif text-2xl font-bold text-forest mb-4">About this space</h3>
              <p className="text-charcoal/80 leading-relaxed text-lg font-light">
                {property.description}
              </p>
            </div>

            <div className="py-8 border-b border-gray-200">
              <h3 className="font-serif text-2xl font-bold text-forest mb-6">What this place offers</h3>
              <div className="grid grid-cols-2 gap-y-4">
                <div className="flex items-center text-charcoal/80"><Wifi className="w-5 h-5 mr-3 text-gold" /> Fast Wi-Fi</div>
                <div className="flex items-center text-charcoal/80"><Wind className="w-5 h-5 mr-3 text-gold" /> Air conditioning</div>
                <div className="flex items-center text-charcoal/80"><Coffee className="w-5 h-5 mr-3 text-gold" /> Full Kitchen</div>
                <div className="flex items-center text-charcoal/80"><Tv className="w-5 h-5 mr-3 text-gold" /> Smart TV</div>
                <div className="flex items-center text-charcoal/80"><MapPin className="w-5 h-5 mr-3 text-gold" /> Ganga View</div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="w-full lg:w-1/3">
            <BookingWidget pricePerNight={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
}
