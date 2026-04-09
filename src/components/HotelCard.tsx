'use client';

import { Star } from 'lucide-react';

interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  description: string;
  amenities: string[];
}

export default function HotelCard({ name, location, image, rating, reviews, price, description, amenities }: HotelCardProps) {
  return (
    <div className="bg-white/90 border border-stone-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-200">
        <div className="w-full h-full bg-linear-to-br from-stone-100 to-emerald-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">🏨</div>
            <p className="text-sm text-slate-600">{name}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-3xl text-slate-900 mb-1 luxury-heading">{name}</h3>
          <p className="text-sm text-slate-600 flex items-center gap-1">
            📍 {location}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(rating) ? 'fill-emerald-500 text-emerald-500' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-700">{rating.toFixed(1)}</span>
          <span className="text-xs text-slate-600">({reviews} reviews)</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {amenities.slice(0, 3).map((amenity, idx) => (
            <span
              key={idx}
              className="text-xs bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full font-medium"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t-2 border-gray-100">
          <div>
            <p className="text-xs text-slate-600">Night from</p>
            <p className="text-2xl font-bold text-slate-900">${price}</p>
          </div>
          <button className="bg-linear-to-r from-slate-900 to-emerald-800 text-white font-bold py-2 px-6 rounded-full hover:shadow-lg hover:shadow-emerald-700/30 transition-all duration-300 transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
