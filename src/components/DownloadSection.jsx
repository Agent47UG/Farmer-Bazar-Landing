import React from 'react';
import { Download, QrCode, ShieldCheck, Smartphone, CheckCircle, Sparkles, Cpu } from 'lucide-react';

export default function DownloadSection({ onOpenDownload }) {
  return (
    <section id="download" className="py-24 bg-[#16191D] relative overflow-hidden border-t border-white/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7BB354]/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card */}
        <div className="glass-card rounded-[40px] p-8 sm:p-12 lg:p-16 border border-[#7BB354]/30 relative overflow-hidden green-glow">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7BB354]/20 border border-[#7BB354]/40 text-[#88C458] text-xs font-extrabold uppercase tracking-widest">
                <Smartphone className="w-4 h-4" />
                <span>Official Android Release</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Download <span className="green-gradient-text">Farmer Bazar</span> App Today
              </h2>

              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Empower your local farming trade or start buying direct produce right now. Free to download with zero hidden fees.
              </p>

              {/* APK Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 max-w-xl mx-auto lg:mx-0">
                <div className="glass-card p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[10px] text-gray-400 font-bold block uppercase">Version</span>
                  <span className="text-sm font-black text-white">v1.0.0</span>
                </div>
                <div className="glass-card p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[10px] text-gray-400 font-bold block uppercase">File Size</span>
                  <span className="text-sm font-black text-[#88C458]">70 MB</span>
                </div>
                <div className="glass-card p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[10px] text-gray-400 font-bold block uppercase">Requires</span>
                  <span className="text-sm font-black text-white">Android 8.0+</span>
                </div>
                <div className="glass-card p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[10px] text-gray-400 font-bold block uppercase">Security</span>
                  <span className="text-sm font-black text-[#88C458]">Verified APK</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenDownload}
                  className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#7BB354] to-[#5c8d3d] text-gray-950 font-black text-lg shadow-2xl shadow-[#7BB354]/40 hover:shadow-[#7BB354]/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border border-white/20"
                >
                  <Download className="w-6 h-6 text-gray-950" />
                  <span>Download Farmer Bazar APK</span>
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#88C458]" /> Safe & Secure
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#88C458]" /> Instant Installation
                </span>
              </div>

            </div>

            {/* Right QR Code Box */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="glass-card p-6 rounded-3xl border border-white/15 text-center shadow-2xl max-w-[260px] w-full bg-[#121417]/80">
                
                <div className="relative p-4 rounded-2xl bg-white mb-4 shadow-inner flex items-center justify-center">
                  {/* Styled SVG QR Code Simulation */}
                  <svg className="w-36 h-36" viewBox="0 0 100 100" fill="none">
                    <rect width="100" height="100" fill="white"/>
                    {/* Corner Position Detection Squares */}
                    <rect x="5" y="5" width="25" height="25" fill="#121417"/>
                    <rect x="9" y="9" width="17" height="17" fill="white"/>
                    <rect x="13" y="13" width="9" height="9" fill="#7BB354"/>

                    <rect x="70" y="5" width="25" height="25" fill="#121417"/>
                    <rect x="74" y="9" width="17" height="17" fill="white"/>
                    <rect x="78" y="13" width="9" height="9" fill="#7BB354"/>

                    <rect x="5" y="70" width="25" height="25" fill="#121417"/>
                    <rect x="9" y="74" width="17" height="17" fill="white"/>
                    <rect x="13" y="78" width="9" height="9" fill="#7BB354"/>

                    {/* Matrix Data Dots */}
                    <rect x="35" y="5" width="6" height="6" fill="#121417"/>
                    <rect x="45" y="12" width="10" height="6" fill="#7BB354"/>
                    <rect x="35" y="25" width="6" height="10" fill="#121417"/>
                    <rect x="10" y="35" width="15" height="6" fill="#121417"/>
                    <rect x="30" y="35" width="20" height="8" fill="#7BB354"/>
                    <rect x="55" y="35" width="12" height="6" fill="#121417"/>
                    <rect x="75" y="35" width="20" height="6" fill="#121417"/>

                    <rect x="35" y="50" width="12" height="12" fill="#7BB354"/>
                    <rect x="52" y="50" width="15" height="6" fill="#121417"/>
                    <rect x="72" y="50" width="12" height="12" fill="#121417"/>

                    <rect x="35" y="70" width="8" height="25" fill="#121417"/>
                    <rect x="50" y="70" width="15" height="10" fill="#7BB354"/>
                    <rect x="70" y="70" width="10" height="15" fill="#121417"/>
                    <rect x="85" y="85" width="10" height="10" fill="#7BB354"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-[#121417] p-1.5 rounded-xl border border-[#7BB354] shadow-md">
                      <img src="/assets/android_splash_logo.png" alt="Logo" className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-gray-200 mb-1">
                  <QrCode className="w-4 h-4 text-[#88C458]" />
                  <span>Scan to Download</span>
                </div>
                <span className="text-[11px] text-gray-400 block">
                  Scan with your Android camera
                </span>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
