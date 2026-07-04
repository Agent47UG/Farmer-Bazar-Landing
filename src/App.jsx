import React, { useState } from 'react';
import Hero from './components/Hero';
import DownloadModal from './components/DownloadModal';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const handleOpenDownload = () => {
    setIsDownloadOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0D0B] text-gray-100 font-sans relative flex flex-col justify-center items-center overflow-x-hidden">
      {/* Main Single Hero Section */}
      <main className="w-full flex items-center justify-center">
        <Hero onOpenDownload={handleOpenDownload} />
      </main>

      {/* Download APK Modal */}
      <DownloadModal isOpen={isDownloadOpen} onClose={handleCloseDownload} />
    </div>
  );
}
