import React from 'react';
import { MapPin, Download, Github } from 'lucide-react';

export default function Footer({ onOpenDownload }) {
  return (
    <footer className="bg-[#0e1013] border-t border-white/10 text-gray-400 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/android_splash_logo.png"
              alt="Farmer Bazar Logo"
              className="h-8 w-auto drop-shadow-[0_2px_8px_rgba(123,179,84,0.4)]"
            />
            <div className="flex flex-col">
              <span className="font-heading font-black text-white text-base tracking-wider">
                FARMER<span className="text-[#88C458]">BAZAR</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                Connecting Farmers to Consumers
              </span>
            </div>
          </div>

          {/* Location, GitHub & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1 text-[#88C458]">
              <MapPin className="w-3.5 h-3.5" /> Pune, Maharashtra
            </span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="https://github.com/Agent47UG/Farmer_Bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#7BB354] transition-colors font-bold"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span>© {new Date().getFullYear()} Farmer Bazar. All rights reserved.</span>
          </div>

          {/* Download CTA Button */}
          <button
            onClick={onOpenDownload}
            className="px-4 py-2 rounded-xl bg-[#7BB354]/20 border border-[#7BB354]/40 text-[#88C458] hover:bg-[#7BB354] hover:text-gray-950 font-bold text-xs transition-all flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </button>

        </div>
      </div>
    </footer>
  );
}
