import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Calendar, ArrowRight, Star, Shield, Clock } from 'lucide-react';

interface HeroProps {
  onBookingOpen: () => void;
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingOpen, onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Star, title: '500+ Luxury Cars', description: 'Premium fleet available' },
    { icon: Shield, title: '24/7 VIP Support', description: 'Round-the-clock assistance' },
    { icon: Clock, title: 'Instant Delivery', description: 'Airport & hotel pickup' }
  ];

  const quickActions = [
    { title: 'View Fleet', page: 'fleet', description: 'Browse our luxury cars', color: 'from-blue-400 to-blue-600' },
    { title: 'Get Quote', page: 'calculator', description: 'Calculate rental cost', color: 'from-green-400 to-green-600' },
    { title: 'Virtual Tours', page: 'tours', description: 'See cars in 360°', color: 'from-purple-400 to-purple-600' },
    { title: 'Our Services', page: 'services', description: 'Premium offerings', color: 'from-red-400 to-red-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
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
              onClick={() => onNavigate('fleet')}
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Why Choose SOS Luxury?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the difference with our premium service and exclusive fleet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 text-center group hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Explore Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover everything we offer to make your luxury experience unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => onNavigate(action.page)}
                className="group bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 text-left"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {action.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {action.description}
                </p>
                
                <div className="flex items-center text-yellow-400 font-semibold group-hover:translate-x-2 transform transition-transform duration-300">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Book your dream car today and enjoy premium service with flexible payment options
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookingOpen}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Book Now - Instant Quote
            </button>
            
            <button
              onClick={() => onNavigate('contact')}
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Contact VIP Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;