export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl font-bold text-forest mb-6">Explore Rishikesh</h1>
        <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-16">The Yoga Capital of the World awaits you.</p>
        
        <div className="bg-white p-8 rounded-2xl max-w-4xl mx-auto shadow-sm border border-gray-100 text-left">
          <h2 className="font-serif text-3xl font-bold text-forest mb-4">Locations to Visit</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-charcoal/80">
            <li>• Tapovan</li>
            <li>• Laxman Jhula</li>
            <li>• Ram Jhula</li>
            <li>• Swarg Ashram</li>
            <li>• Shivpuri</li>
            <li>• Neelkanth Mahadev Temple</li>
            <li>• Triveni Ghat</li>
            <li>• The Beatles Ashram (Chaurasi Kutia)</li>
            <li>• Parmarth Niketan</li>
            <li>• Neer Garh Waterfall</li>
            <li>• Vashishta Gufa (Cave)</li>
            <li>• Kunjapuri Devi Temple</li>
            <li>• Byasi</li>
            <li>• Phool Chatti</li>
            <li>• Muni Ki Reti</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
