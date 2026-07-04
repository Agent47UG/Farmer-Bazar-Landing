import React, { useState } from 'react';
import { MapPin, Sliders, Navigation, Star, ArrowRight, CheckCircle2, LocateFixed } from 'lucide-react';

export default function RadiusFilterDemo() {
  const [radius, setRadius] = useState(50);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const produceData = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      category: 'Vegetables',
      weight: '30 kg',
      totalPrice: '₹600.0',
      unitPrice: '₹20.0/kg',
      distance: 9.9,
      rating: 5.0,
      reviews: 1,
      location: 'Pirangut, Maharashtra',
      image: '🍅',
      farmName: 'Deshmukh Organic Farm',
      verified: true
    },
    {
      id: 2,
      name: 'Organic Wheat',
      category: 'Grains',
      weight: '5 kg',
      totalPrice: '₹150.0',
      unitPrice: '₹30.0/kg',
      distance: 30.0,
      rating: 4.8,
      reviews: 7,
      location: 'Hadapsar, Pune',
      image: '🌾',
      farmName: 'Golden Fields',
      verified: true
    },
    {
      id: 3,
      name: 'Red Onions',
      category: 'Vegetables',
      weight: '50 kg',
      totalPrice: '₹1,200.0',
      unitPrice: '₹24.0/kg',
      distance: 18.5,
      rating: 4.9,
      reviews: 12,
      location: 'Khed, Pune',
      image: '🧅',
      farmName: 'Shinde Agriculture',
      verified: true
    },
    {
      id: 4,
      name: 'Crisp Shimla Apples',
      category: 'Fruits',
      weight: '10 kg',
      totalPrice: '₹800.0',
      unitPrice: '₹80.0/kg',
      distance: 65.0,
      rating: 5.0,
      reviews: 4,
      location: 'Mahabaleshwar, MH',
      image: '🍎',
      farmName: 'Valley Fresh Orchards',
      verified: true
    },
    {
      id: 5,
      name: 'Fresh Sugarcane Harvest',
      category: 'Crops',
      weight: '100 kg',
      totalPrice: '₹1,200.0',
      unitPrice: '₹12.0/kg',
      distance: 140.0,
      rating: 4.7,
      reviews: 19,
      location: 'Baramati, Pune',
      image: '🎋',
      farmName: 'Green Cane Agro',
      verified: false
    }
  ];

  const categories = ['All', 'Vegetables', 'Grains', 'Fruits', 'Crops'];

  const filteredProduce = produceData.filter(
    (item) =>
      item.distance <= radius &&
      (selectedCategory === 'All' || item.category === selectedCategory)
  );

  return (
    <section id="radius-demo" className="py-24 bg-[#16191D] relative overflow-hidden border-y border-white/5">
      
      {/* Background Decorative Radial Grid */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7BB354]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7BB354]/10 border border-[#7BB354]/30 text-[#88C458] text-xs font-bold uppercase tracking-widest mb-4">
            <LocateFixed className="w-3.5 h-3.5" />
            <span>Interactive Web Feature Demo</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Live Product <span className="green-gradient-text">Distance Radius Search</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Experience how Farmer Bazar filters nearby farms in real-time. Adjust the radius slider below to discover fresh produce available within your preferred distance in Pune.
          </p>
        </div>

        {/* Interactive Demo Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Radius Controls & Map Preview Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#88C458]" />
                <span className="font-heading font-bold text-lg text-white">Distance Filter</span>
              </div>
              <span className="text-xs bg-[#7BB354]/20 text-[#88C458] px-3 py-1 rounded-full font-bold">
                Pune Center
              </span>
            </div>

            {/* Slider Widget */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300 font-medium">Search Distance:</span>
                <span className="text-2xl font-black font-heading text-[#88C458] bg-[#7BB354]/10 px-4 py-1 rounded-xl border border-[#7BB354]/30">
                  {radius} km
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="160"
                step="5"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#7BB354]"
              />
              <div className="flex justify-between text-xs text-gray-500 font-semibold px-1">
                <span>5 km (Local)</span>
                <span>50 km</span>
                <span>100 km</span>
                <span>160 km (Max)</span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mb-8">
              <span className="text-xs text-gray-400 font-semibold block mb-3 uppercase tracking-wider">
                Filter Harvest Category:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#7BB354] text-gray-950 shadow-lg shadow-[#7BB354]/30'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Map Radius Circle Visualizer */}
            <div className="relative rounded-2xl bg-[#111317] border border-white/10 p-5 overflow-hidden flex flex-col items-center justify-center text-center aspect-[4/3]">
              
              {/* Radar Rings */}
              <div
                className="absolute rounded-full border border-[#7BB354]/40 bg-[#7BB354]/10 transition-all duration-500 flex items-center justify-center"
                style={{
                  width: `${Math.min(100, (radius / 160) * 100)}%`,
                  height: `${Math.min(100, (radius / 160) * 100)}%`,
                }}
              >
                <div className="w-3 h-3 rounded-full bg-[#88C458] animate-ping"></div>
              </div>

              {/* Center Pin */}
              <div className="relative z-10 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#7BB354]/50 text-white shadow-xl">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#88C458]">
                  <MapPin className="w-4 h-4 fill-[#7BB354]" />
                  <span>Your Location (Pune)</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  Showing harvest within {radius} km
                </div>
              </div>

              <div className="absolute bottom-3 right-3 text-[10px] text-gray-500 font-mono">
                {filteredProduce.length} Farms Matched
              </div>

            </div>

          </div>

          {/* Right Column: Live Matching Produce Cards Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
                <span>Available Produce Nearby</span>
                <span className="text-xs bg-[#7BB354]/20 text-[#88C458] px-2.5 py-0.5 rounded-full font-bold">
                  {filteredProduce.length} Available
                </span>
              </h3>
              <span className="text-xs text-gray-400">Prices set directly by farmers</span>
            </div>

            {filteredProduce.length === 0 ? (
              <div className="glass-card p-12 rounded-3xl text-center border border-white/10">
                <div className="text-4xl mb-3">🌾</div>
                <h4 className="text-lg font-bold text-white mb-1">No Produce Within {radius} km</h4>
                <p className="text-sm text-gray-400 max-w-sm mx-auto mb-4">
                  Try expanding your distance slider to 50 km or 160 km to view regional farm listings.
                </p>
                <button
                  onClick={() => setRadius(100)}
                  className="px-4 py-2 rounded-xl bg-[#7BB354] text-gray-950 font-bold text-xs"
                >
                  Expand Search to 100 km
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredProduce.map((item) => (
                  <div
                    key={item.id}
                    className="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 relative flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Top Row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            {item.image}
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold text-[#88C458] tracking-wider">
                              {item.category}
                            </span>
                            <h4 className="font-heading font-bold text-base text-white group-hover:text-[#88C458] transition-colors">
                              {item.name}
                            </h4>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-lg text-amber-400 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex items-center justify-between text-xs text-gray-300 mb-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                        <div>
                          <span className="text-gray-400 block text-[10px]">Quantity</span>
                          <span className="font-bold text-white">{item.weight}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-400 block text-[10px]">Total Price</span>
                          <span className="font-extrabold text-[#88C458]">{item.totalPrice}</span>
                          <span className="text-[10px] text-gray-400 block">({item.unitPrice})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <MapPin className="w-3.5 h-3.5 text-[#88C458]" />
                        <span className="truncate">{item.location}</span>
                        <span className="text-[#88C458] font-bold ml-auto shrink-0">
                          {item.distance} km
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        {item.verified && <CheckCircle2 className="w-3.5 h-3.5 text-[#88C458]" />}
                        {item.farmName}
                      </span>
                      <a
                        href="#download"
                        className="text-xs font-bold text-[#88C458] hover:underline flex items-center gap-1"
                      >
                        Contact Farmer <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
