'use client';

import HotelCard from './HotelCard';

const featuredHotels = [
  {
    id: '1',
    name: 'Sigiriya Palace',
    location: 'Sigiriya, Central Province',
    image: '/hotels/sigiriya.jpg',
    rating: 4.8,
    reviews: 342,
    price: 285,
    description: 'Luxury resort nestled beneath the iconic Sigiriya rock fortress with world-class amenities.',
    amenities: ['Spa', 'Pool', 'Fine Dining'],
  },
  {
    id: '2',
    name: 'Galle Fort Boutique',
    location: 'Galle, Southern Province',
    image: '/hotels/galle-fort.jpg',
    rating: 4.9,
    reviews: 527,
    price: 350,
    description: 'Historic boutique hotel within the UNESCO World Heritage Galle Fort with ocean views.',
    amenities: ['Sea View', 'Restaurant', 'Library'],
  },
  {
    id: '3',
    name: 'Nuwara Eliya Grand ',
    location: 'Nuwara Eliya, Central Highlands',
    image: '/hotels/nuwara-eliya.jpg',
    rating: 4.7,
    reviews: 289,
    price: 220,
    description: 'Colonial-style luxury hotel in the misty mountains with authentic highland charm.',
    amenities: ['Tea Lounge', 'Golf', 'Fireplace'],
  },
  {
    id: '4',
    name: 'Mirissa Beach Paradise',
    location: 'Mirissa, South Western',
    image: '/hotels/mirissa.jpg',
    rating: 4.9,
    reviews: 614,
    price: 310,
    description: 'Beachfront luxury resort with direct beach access and whale watching opportunities.',
    amenities: ['Beach Club', 'Water Sports', 'Sunset Bar'],
  },
  {
    id: '5',
    name: 'Kandy Heritage House',
    location: 'Kandy, Central Province',
    image: '/hotels/kandy.jpg',
    rating: 4.6,
    reviews: 198,
    price: 195,
    description: 'Luxurious heritage property overlooking the sacred Lake Kandy and Temple of the Tooth.',
    amenities: ['Lake View', 'Heritage Tour', 'Ayurveda'],
  },
  {
    id: '6',
    name: 'Ella Mountain Escape',
    location: 'Ella, Badulla District',
    image: '/hotels/ella.jpg',
    rating: 4.8,
    reviews: 421,
    price: 165,
    description: 'Eco-luxury hideaway in the misty highlands with tea plantation views and hiking trails.',
    amenities: ['Tea Tours', 'Hiking', 'Organic Spa'],
  },
];

export default function FeaturedHotels() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-stone-50 to-white" id="hotels">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-emerald-200">
            🏆 Our Curated Selection
          </div>
          <h2 className="text-5xl md:text-6xl text-slate-900 mb-4 luxury-heading">
            Featured Luxury <span className="bg-linear-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent">Hotels</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the finest luxury hotels and resorts across Sri Lanka's most beautiful destinations.
          </p>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels.map((hotel) => (
            <HotelCard key={hotel.id} {...hotel} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="border-2 border-slate-800 text-slate-800 font-bold py-4 px-10 rounded-full hover:bg-slate-100 transition-all duration-300 text-lg">
            View All Hotels
          </button>
        </div>
      </div>
    </section>
  );
}
