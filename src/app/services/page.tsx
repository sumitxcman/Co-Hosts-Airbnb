export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl font-bold text-forest mb-6">Our Services</h1>
        <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-16">Comprehensive Airbnb and vacation rental management in Rishikesh.</p>
        
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
    </div>
  );
}
