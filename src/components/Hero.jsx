import React, { useState } from 'react';
import { Download, Shield, Github } from 'lucide-react';

export default function Hero({ onOpenDownload }) {
  const [activeScreen, setActiveScreen] = useState('marketplace'); // 'marketplace' or 'map'

  return (
    <section className="relative py-16 sm:py-24 bg-[#0A0D0B] min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Side-by-Side Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Intro Page Logo, Headline, Tagline, Download */}
          <div className="lg:col-span-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            
            {/* Intro Page Logo */}
            <div className="mb-6 opacity-0 animate-logo-reveal">
              <img
                src="/assets/intro_page_logo.png"
                alt="Farmer Bazar Intro Logo"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_6px_25px_rgba(123,179,84,0.45)]"
              />
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-3 opacity-0 animate-artistic-reveal delay-100">
              FRESH HARVEST. DIRECT PRICE. <br />
              <span className="text-[#7BB354]">ZERO MIDDLEMEN.</span>
            </h1>

            {/* Tagline Below Headline */}
            <div className="text-lg sm:text-xl font-bold text-[#88C458] tracking-wide mb-6 font-heading opacity-0 animate-artistic-reveal delay-200">
              Connecting Farmers to Consumers
            </div>

            {/* Subheadline Description */}
            <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8 opacity-0 animate-artistic-reveal delay-300">
              Farmer Bazar connects local farmers and consumers directly. Search harvest listings within your distance radius, check live weather, and buy at fair farm rates.
            </p>

            {/* Download CTA Group, Version & GitHub Link */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 w-full sm:w-auto opacity-0 animate-artistic-reveal delay-400">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#7BB354] hover:bg-[#88C458] text-[#0A0D0B] font-black text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:scale-105"
              >
                <Download className="w-5 h-5 text-[#0A0D0B]" />
                <span>Get Farmer Bazar App</span>
              </button>

              {/* Version & GitHub Link Group */}
              <div className="flex items-center justify-center gap-3.5 text-xs text-gray-400 font-mono w-full sm:w-auto text-center sm:text-left">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#7BB354]" />
                  <span>v1.0.0</span>
                </div>

                <span className="text-gray-600">•</span>

                <a
                  href="https://github.com/Agent47UG/Farmer_Bazar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-300 hover:text-[#7BB354] transition-colors font-bold"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Stacked Deck Screenshots */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center opacity-0 animate-deck-entrance delay-300">
            <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[620px] flex items-center justify-center bg-transparent border-0 outline-none animate-organic-float">
              
              {/* Card 1: Marketplace Home Screen */}
              <div
                onClick={() => setActiveScreen(activeScreen === 'marketplace' ? 'map' : 'marketplace')}
                className={`absolute top-0 left-0 w-full cursor-pointer transition-all duration-500 ease-in-out bg-transparent border-0 outline-none ${
                  activeScreen === 'marketplace'
                    ? 'z-20 scale-100 translate-x-0 translate-y-0 opacity-100 drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)]'
                    : 'z-10 scale-95 translate-x-6 sm:translate-x-14 translate-y-4 opacity-50 hover:opacity-75 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'
                }`}
              >
                <img
                  src="/assets/Screenshot_20260705_031115-portrait.webp"
                  alt="Farmer Bazar Marketplace Screen"
                  className="w-full h-auto object-cover rounded-[24px] block border-0 outline-none bg-transparent"
                />
              </div>

              {/* Card 2: Map Radius View Screen */}
              <div
                onClick={() => setActiveScreen(activeScreen === 'map' ? 'marketplace' : 'map')}
                className={`absolute top-0 left-0 w-full cursor-pointer transition-all duration-500 ease-in-out bg-transparent border-0 outline-none ${
                  activeScreen === 'map'
                    ? 'z-20 scale-100 translate-x-0 translate-y-0 opacity-100 drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)]'
                    : 'z-10 scale-95 translate-x-6 sm:translate-x-14 translate-y-4 opacity-50 hover:opacity-75 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'
                }`}
              >
                <img
                  src="/assets/Screenshot_20260705_031132-portrait.webp"
                  alt="Farmer Bazar Map Radius Screen"
                  className="w-full h-auto object-cover rounded-[24px] block border-0 outline-none bg-transparent"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
