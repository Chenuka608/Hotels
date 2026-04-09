'use client';

import { useState } from 'react';

export default function Hero() {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const destinations = [
    'Colombo',
    'Kandy',
    'Galle',
    'Nuwara Eliya',
    'Mirissa',
    'Sigiriya',
    'Ella',
    'Unawatuna',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented later
    console.log('Search:', { selectedDestination, checkInDate, checkOutDate });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-stone-50 to-sky-50 z-0" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob z-0" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
            ✨ Discover Luxury in Paradise
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl text-slate-900 mb-6 leading-tight luxury-heading">
            Experience Luxury <br />
            <span className="bg-linear-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent">
              Hotels in Sri Lanka
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            Discover the finest luxury resorts and hotels across the tropical paradise of Sri Lanka. From coastal escapes to mountain retreats, find your perfect sanctuary.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-linear-to-r from-slate-900 to-emerald-800 text-white font-bold py-4 px-8 rounded-full hover:shadow-xl hover:shadow-emerald-700/30 transition-all duration-300 transform hover:scale-105">
              Explore Hotels
            </button>
            <button className="border-2 border-slate-800 text-slate-800 font-bold py-4 px-8 rounded-full hover:bg-slate-100 transition-all duration-300">
              View Destinations
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-stone-200 p-6 md:p-10">
          <form onSubmit={handleSearch} className="space-y-6">
            <h2 className="text-3xl text-slate-900 mb-6 luxury-heading">Find Your Perfect Stay</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Destination
                </label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select destination...</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Check-in Date */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Check-out Date */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-slate-900 to-emerald-800 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-emerald-700/30 transition-all duration-300 transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t-2 border-stone-200">
            <div>
              <p className="text-3xl font-bold text-emerald-700">50+</p>
              <p className="text-sm text-slate-600">Luxury Hotels</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-700">8</p>
              <p className="text-sm text-slate-600">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-700">10K+</p>
              <p className="text-sm text-slate-600">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Add animation for blobs */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
