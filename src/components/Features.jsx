import React from 'react';
import { ShoppingBag, Map, CloudSun, BadgePercent, PhoneCall, ShieldCheck, Sparkles, Sprout } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: ShoppingBag,
      title: 'Direct Farm Marketplace',
      description: 'Browse fresh harvest listings directly from local farmers with complete quantity, weight, and price details per kg.',
      badge: 'Farm Direct'
    },
    {
      icon: Map,
      title: 'Interactive Map View',
      description: 'Locate nearby farms within custom radius distances using an intuitive dark-themed map view with live crop location pins.',
      badge: 'GPS Powered'
    },
    {
      icon: CloudSun,
      title: 'Real-time Weather Insights',
      description: 'Stay updated with live weather conditions across farming regions to plan harvest purchasing and local pickups smoothly.',
      badge: 'Live Forecast'
    },
    {
      icon: BadgePercent,
      title: 'Zero Middlemen Commission',
      description: 'Save big by cutting out agents. Farmers retain 100% of their earnings while consumers get the freshest prices possible.',
      badge: '0% Fees'
    },
    {
      icon: PhoneCall,
      title: 'Instant Direct Contact',
      description: 'Connect directly via phone or messaging to negotiate bulk orders, discuss organic certifications, and arrange transportation.',
      badge: 'Direct Connect'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Farmer Profiles',
      description: 'Rest easy knowing produce comes from authenticated local agriculturalists with transparent customer ratings & reviews.',
      badge: '100% Verified'
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#121417] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7BB354]/10 border border-[#7BB354]/30 text-[#88C458] text-xs font-bold uppercase tracking-widest mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>Built For Modern Agriculture</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Why Choose <span className="green-gradient-text">Farmer Bazar</span>?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Our Android mobile app brings power back to local farmers while delivering farm-fresh quality produce to consumers.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7BB354]/20 to-[#7BB354]/5 border border-[#7BB354]/30 flex items-center justify-center text-[#88C458] group-hover:scale-110 group-hover:bg-[#7BB354] group-hover:text-gray-950 transition-all duration-300 shadow-lg shadow-[#7BB354]/10">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#88C458] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1 text-xs font-bold text-[#88C458]">
                  <span>Explore feature in app</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
