import React, { useState } from 'react';
import { Smartphone, MapPin, Search, Sun, CheckCircle, Eye } from 'lucide-react';

export default function ScreenshotsShowcase() {
  const [activeTab, setActiveTab] = useState('marketplace');

  return (
    <section id="app-preview" className="py-24 bg-[#16191D] relative overflow-hidden border-t border-white/5">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#7BB354]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7BB354]/10 border border-[#7BB354]/30 text-[#88C458] text-xs font-bold uppercase tracking-widest mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>Actual Android Interface</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Sleek Dark Mode <span className="green-gradient-text">App Experience</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Designed for effortless navigation in the field or at home. Preview the real screens of the Farmer Bazar Android app below.
          </p>
        </div>

        {/* Tab Selection Switches */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex glass-card p-1.5 rounded-full border border-white/10 shadow-xl">
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === 'marketplace'
                  ? 'bg-[#7BB354] text-gray-950 shadow-lg shadow-[#7BB354]/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Marketplace Home</span>
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === 'map'
                  ? 'bg-[#7BB354] text-gray-950 shadow-lg shadow-[#7BB354]/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Interactive Map Radius</span>
            </button>
          </div>
        </div>

        {/* Main Showcase Box */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Description Panel */}
          <div className="lg:col-span-6 space-y-6">
            {activeTab === 'marketplace' ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="inline-block px-3 py-1 rounded-lg bg-[#7BB354]/20 border border-[#7BB354]/40 text-[#88C458] text-xs font-bold uppercase tracking-wider">
                  Screen 01 • Main Marketplace
                </div>
                <h3 className="font-heading text-3xl font-bold text-white">
                  Discover Fresh Local Harvests At Your Fingertips
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  The Farmer Bazar home screen welcomes users with localized weather forecasts (e.g. Pune 23°C Clouds), a quick product search bar, and clean product cards categorized by grains, vegetables, and fruits.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[#7BB354]/20 text-[#88C458] shrink-0">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Real-time Weather Header</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Stay aware of local temperature and cloud conditions before making farm visits.</p>
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[#7BB354]/20 text-[#88C458] shrink-0">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Instant Search & Distance Filter</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Filter crops by proximity (e.g. 160 km) or exact harvest categories with transparent rates.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="inline-block px-3 py-1 rounded-lg bg-[#7BB354]/20 border border-[#7BB354]/40 text-[#88C458] text-xs font-bold uppercase tracking-wider">
                  Screen 02 • Radius Map View
                </div>
                <h3 className="font-heading text-3xl font-bold text-white">
                  Visualized Map Pin Searching & Proximity Radius
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  Search View Map gives buyers a geographical perspective of local farm hubs around their city with distance radius rings and popup produce details.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[#7BB354]/20 text-[#88C458] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Green Farm Location Markers</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Pinpoint exact farm origins along highways (e.g. 548A, 160A, 753F) across Maharashtra.</p>
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[#7BB354]/20 text-[#88C458] shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Interactive Bottom Produce Card</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Click any marker to reveal product photo, distance (e.g. 9.9 km), rating, and direct contact.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Phone Showcase Frame */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative z-10 w-[300px] sm:w-[330px] rounded-[50px] bg-[#1F2329] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(123,179,84,0.25)] border-4 border-gray-700/80">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-800"></div>
              </div>

              {/* Dynamic Image Render */}
              <div className="relative rounded-[40px] overflow-hidden bg-black aspect-[9/19.5] border border-white/10">
                <img
                  src={
                    activeTab === 'marketplace'
                      ? '/assets/Screenshot_20260705_031115-portrait.png'
                      : '/assets/Screenshot_20260705_031132-portrait.png'
                  }
                  alt="Farmer Bazar Screen Preview"
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
