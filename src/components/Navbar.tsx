'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#hotels', label: 'Hotels' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/85 backdrop-blur-md shadow-sm z-50 px-6 py-4 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-linear-to-r from-slate-900 to-emerald-700 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">✨</span>
          </div>
          <span className="text-3xl text-slate-900 hidden sm:inline luxury-heading">
            LuxeStay
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-emerald-700 transition-colors duration-300 font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-linear-to-r from-slate-900 to-emerald-800 text-white font-bold py-2 px-6 rounded-full hover:shadow-lg hover:shadow-emerald-700/30 transition-all duration-300">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-900 flex flex-col gap-1"
        >
          <span className={`w-6 h-0.5 bg-slate-900 transform transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-slate-900 transform transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md mt-0 border-b border-stone-200">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-emerald-700 transition-colors py-2 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-linear-to-r from-slate-900 to-emerald-800 text-white font-bold py-2 px-6 rounded-full w-full">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
