import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck, CheckCircle2, AlertCircle, Smartphone, ArrowRight, RefreshCw } from 'lucide-react';

export default function DownloadModal({ isOpen, onClose }) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDownloading(true);
      setProgress(0);
      setCompleted(false);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setDownloading(false);
            setCompleted(true);

            // Trigger actual APK file download from GitHub release
            const element = document.createElement('a');
            element.href = "https://github.com/Agent47UG/Farmer_Bazar/releases/download/release/farmer-bazar-v1.0-all.apk";
            element.setAttribute('download', 'farmer-bazar-v1.0-all.apk');
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

            return 100;
          }
          return prev + 10;
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-card rounded-3xl border border-[#7BB354]/40 p-6 sm:p-8 shadow-2xl overflow-hidden bg-[#16191D]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#7BB354]/20 border border-[#7BB354]/40 flex items-center justify-center text-[#88C458]">
            <img src="/assets/android_splash_logo.png" alt="Logo" className="w-9 h-9" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-[#88C458] tracking-widest block">
              Direct Android APK
            </span>
            <h3 className="font-heading font-black text-2xl text-white">
              farmer-bazar-v1.0-all.apk
            </h3>
          </div>
        </div>

        {/* Download Status & Progress Bar */}
        <div className="mb-8 bg-black/40 p-5 rounded-2xl border border-white/5 space-y-3">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-gray-300 flex items-center gap-2">
              {downloading ? (
                <>
                  <RefreshCw className="w-4 h-4 text-[#88C458] animate-spin" />
                  <span>Downloading package...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#88C458]" />
                  <span>Download Complete!</span>
                </>
              )}
            </span>
            <span className="text-[#88C458] font-mono font-bold">{progress}%</span>
          </div>

          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#7BB354] to-[#4ADE80] rounded-full transition-all duration-150 shadow-lg shadow-[#7BB354]/50"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-[11px] text-gray-400">
            <span>Size: 70 MB</span>
            <span>Architecture: Universal APK</span>
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="space-y-4 mb-6">
          <h4 className="font-heading font-bold text-sm text-gray-200 uppercase tracking-wider flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#88C458]" />
            <span>Installation Guide for Android</span>
          </h4>

          <div className="space-y-2.5 text-xs text-gray-300">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="w-5 h-5 rounded-full bg-[#7BB354]/20 text-[#88C458] font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <span>Tap <strong>Open</strong> once <code>farmer-bazar-v1.0-all.apk</code> finishes downloading.</span>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="w-5 h-5 rounded-full bg-[#7BB354]/20 text-[#88C458] font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <span>If prompted by Chrome or Android, enable <strong>"Allow installation from unknown sources"</strong> in your settings.</span>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <span className="w-5 h-5 rounded-full bg-[#7BB354]/20 text-[#88C458] font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <span>Press <strong>Install</strong> and start connecting directly to local farmers!</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <a
            href="https://github.com/Agent47UG/Farmer_Bazar/releases/download/release/farmer-bazar-v1.0-all.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#88C458] hover:underline flex items-center gap-1.5 font-bold"
          >
            <Download className="w-4 h-4" />
            <span>Direct APK Link</span>
          </a>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl glass-card text-gray-300 hover:text-white text-xs font-bold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
