export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl font-bold text-forest mb-6">Rishikesh Experiences</h1>
        <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-16">Enhance your stay with our curated local experiences.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {[
            { title: "Yoga Retreats", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" },
            { title: "River Rafting", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=600&auto=format&fit=crop" },
            { title: "Trekking & Hiking", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop" },
            { title: "Ganga Aarti", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ken_Wieland_Ganga_Aarti_in_Rishikesh.jpg" },
            { title: "Temple Tours", image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Rishikesh%2C_Lakshman_Jhula.jpg" },
            { title: "Adventure Sports", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Bungee_Jumping.png" }
          ].map((exp, i) => (
            <div key={i} className="relative h-48 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-forest/40 group-hover:bg-forest/20 transition-all z-10" />
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="font-serif text-xl font-bold text-white">{exp.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
