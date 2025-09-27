import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';

interface FloatingCTAsProps {
  onBookingOpen: () => void;
}

const FloatingCTAs: React.FC<FloatingCTAsProps> = ({ onBookingOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTAs after user scrolls down a bit
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Pulse animation every 3 seconds
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971525933795?text=Hi, I\'m interested in renting a luxury car', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+971525933795', '_self');
  };

  if (!isVisible) return null;

  return (
    <>  
      {/* Desktop Floating CTAs */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {/* Book Now */}
        <button
          onClick={onBookingOpen}
          className={`group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-4 rounded-full shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-110 ${
            isPulsing ? 'animate-pulse' : ''
          }`}
          title="Book Now"
        >
          <Calendar className="w-6 h-6" />
          <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Book Now
          </span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="group bg-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            WhatsApp Us
          </span>
        </button>

        {/* Call */}
        <button
          onClick={handleCallClick}
          className="group bg-blue-500 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-110"
          title="Call Us"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Now
          </span>
        </button>
      </div>

      {/* Mobile Bottom CTAs */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black via-black/90 to-transparent p-4">
        <div className="flex gap-3 max-w-sm mx-auto">
          <button
            onClick={onBookingOpen}
            className={`flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 px-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 ${
              isPulsing ? 'animate-pulse' : ''
            }`}
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
          </button>

          <button
            onClick={handleCallClick}
            className="bg-blue-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTAs;