import React, { useState } from 'react';
import { Sprout, ShoppingCart, UserCheck, ArrowRight, CheckCircle2, PhoneCall, MapPin } from 'lucide-react';

export default function HowItWorks() {
  const [role, setRole] = useState('farmer');

  const farmerSteps = [
    {
      num: '01',
      title: 'Download & Register Free Account',
      desc: 'Install the APK on your Android smartphone. Set up your farmer profile with location in seconds.',
      icon: UserCheck
    },
    {
      num: '02',
      title: 'Post Harvest & Set Your Rates',
      desc: 'Snap photos of your crops (Wheat, Tomatoes, Onions). Specify harvest quantity, weight, and your desired price per kg.',
      icon: Sprout
    },
    {
      num: '03',
      title: 'Receive Direct Buyer Calls',
      desc: 'Local consumers contact you directly for pickups or bulk orders. Keep 100% of your earnings with zero commission fees.',
      icon: PhoneCall
    }
  ];

  const consumerSteps = [
    {
      num: '01',
      title: 'Set Radius & Search Produce',
      desc: 'Open Farmer Bazar and set your distance radius (from 5km to 160km around Pune) to see what is harvesting locally.',
      icon: MapPin
    },
    {
      num: '02',
      title: 'Compare Prices & Check Ratings',
      desc: 'Browse verified farm listings, view produce photos, and check transparent price breakdowns per kg.',
      icon: ShoppingCart
    },
    {
      num: '03',
      title: 'Connect & Buy Direct',
      desc: 'Call the farmer directly to confirm pickup or delivery. Enjoy fresh, chemical-free organic produce at unbeatable prices.',
      icon: CheckCircle2
    }
  ];

  const currentSteps = role === 'farmer' ? farmerSteps : consumerSteps;

  return (
    <section id="how-it-works" className="py-24 bg-[#121417] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7BB354]/10 border border-[#7BB354]/30 text-[#88C458] text-xs font-bold uppercase tracking-widest mb-4">
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            How <span className="green-gradient-text">Farmer Bazar</span> Works
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            Select your role below to see how easy it is to connect directly without middlemen.
          </p>

          {/* Role Switcher */}
          <div className="inline-flex glass-card p-1.5 rounded-2xl border border-white/10 shadow-xl">
            <button
              onClick={() => setRole('farmer')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                role === 'farmer'
                  ? 'bg-[#7BB354] text-gray-950 shadow-lg shadow-[#7BB354]/30'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Sprout className="w-4 h-4" />
              <span>For Farmers (Sellers)</span>
            </button>
            <button
              onClick={() => setRole('consumer')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                role === 'consumer'
                  ? 'bg-[#7BB354] text-gray-950 shadow-lg shadow-[#7BB354]/30'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>For Consumers (Buyers)</span>
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-heading text-4xl font-black text-[#88C458]/40 group-hover:text-[#88C458] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#88C458] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#88C458] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-xs font-bold text-[#88C458] flex items-center gap-1">
                  <span>Step {idx + 1} of 3</span>
                  {idx < 2 && <ArrowRight className="w-3.5 h-3.5 ml-auto text-gray-500" />}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
