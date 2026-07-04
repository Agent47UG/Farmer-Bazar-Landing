import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0D0B]/85 backdrop-blur-xl border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Only */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/assets/intro_page_logo.png"
            alt="Farmer Bazar Logo"
            className="h-9 sm:h-10 w-auto"
          />
        </a>

      </div>
    </header>
  );
}
