import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Calendar } from 'lucide-react';

interface HeroProps {
  onBookingOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingOpen }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFleet = () => {
    const fleetSection = document.querySelector('#fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'url("https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">Drive the</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Dream
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
          Luxury Car Rentals in UAE
        </p>
        
        <p className="text-lg md:text-xl text-yellow-400 mb-12 font-medium">
          Airport delivery • Chauffeur options • Flexible payment
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onBookingOpen}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/25"
          >
            <Calendar className="w-5 h-5 inline mr-2" />
            Book Now — Get Instant Quote
          </button>
          
          <button
            onClick={scrollToFleet}
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-5 h-5 inline mr-2" />
            View Fleet
          </button>
        </div>

        <div className="mt-16 text-gray-400 text-sm">
          <p>1000+ bookings • Airport delivery • 24/7 VIP support</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-yellow-400" />
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-20 left-8 hidden lg:block">
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 border border-yellow-400/20">
          <div className="text-2xl font-bold text-yellow-400">500+</div>
          <div className="text-sm text-gray-300">Luxury Cars</div>
        </div>
      </div>

      <div className="absolute bottom-20 right-8 hidden lg:block">
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 border border-yellow-400/20">
          <div className="text-2xl font-bold text-yellow-400">24/7</div>
          <div className="text-sm text-gray-300">VIP Support</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;