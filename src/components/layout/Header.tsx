'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1e3a5f] text-[#f5f5dc] shadow-lg">
      {/* Top bar with Triangle K */}
      <div className="bg-[#152d4a] py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-sm tracking-wider">MIGHTY 8TH AIR FORCE</span>
          <span className="text-sm tracking-wider">1ST BOMBARDMENT DIVISION</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo / Title */}
          <Link href="/" className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-16 h-16 bg-[#f5f5dc] flex items-center justify-center rounded">
              <span className="text-[#1e3a5f] font-bold text-2xl">K</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                379th Bomb Group
              </h1>
              <p className="text-[#d4a017] text-sm tracking-widest">THE GRAND SLAM GROUP</p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} />
    </header>
  );
}
