import React from 'react';
import { ArrowLeft, Plane, User, Calendar, Trophy, CreditCard, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Plane,
      title: 'Airport Pickup & Delivery',
      description: 'Seamless collection and delivery at all UAE airports with meet & greet service',
      features: ['Dubai International Airport', 'Abu Dhabi International', 'Sharjah Airport', 'Meet & Greet Service'],
      color: 'from-blue-400 to-blue-600',
      price: 'from 100 AED'
    },
    {
      icon: User,
      title: 'Professional Chauffeur',
      description: 'Experienced, licensed chauffeurs for the ultimate luxury experience',
      features: ['Multilingual drivers', 'Smart casual dress code', 'Local area expertise', 'Flexible scheduling'],
      color: 'from-purple-400 to-purple-600',
      price: 'from 300 AED/day'
    },
    {
      icon: Calendar,
      title: 'Weekly & Monthly Rentals',
      description: 'Extended rental packages with significant discounts for longer periods',
      features: ['Up to 40% savings', 'Flexible terms', 'Maintenance included', 'Priority booking'],
      color: 'from-green-400 to-green-600',
      price: 'Save up to 40%'
    },
    {
      icon: Trophy,
      title: 'Event & Wedding Rentals',
      description: 'Make your special occasions unforgettable with our premium fleet',
      features: ['Wedding packages', 'Corporate events', 'Photo shoots', 'Red carpet arrivals'],
      color: 'from-yellow-400 to-yellow-600',
      price: 'Custom packages'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Options',
      description: 'Multiple payment methods including installments and crypto payments',
      features: ['Apple Pay & Google Pay', 'Tabby & Tamara installments', 'Cryptocurrency accepted', 'No deposit options'],
      color: 'from-pink-400 to-pink-600',
      price: '0% interest available'
    },
    {
      icon: MapPin,
      title: 'UAE-Wide Delivery',
      description: 'Complete coverage across all emirates with same-day delivery available',
      features: ['Dubai & Abu Dhabi', 'Sharjah & Ajman', 'Ras Al Khaimah & Fujairah', 'Al Ain delivery'],
      color: 'from-cyan-400 to-cyan-600',
      price: 'from 50 AED'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance whenever you need it'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage on all vehicles'
    },
    {
      icon: User,
      title: 'VIP Treatment',
      description: 'Personalized service tailored to your preferences'
    },
    {
      icon: MapPin,
      title: 'GPS Tracking',
      description: 'Advanced security with real-time vehicle tracking'
    }
  ];

  const emirates = [
    'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 
    'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>

          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Premium</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ml-4">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience luxury beyond just the car with our comprehensive service offerings
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <span className="text-yellow-400 font-bold text-lg">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 px-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Benefits Bar */}
          <div className="bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 p-8 mb-20">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Why Choose SOS Luxury</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Emirates Coverage */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Complete UAE Coverage</h3>
            <p className="text-gray-400 mb-8">We deliver to all seven emirates across the United Arab Emirates</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
              {emirates.map((emirate) => (
                <div
                  key={emirate}
                  className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 text-center group hover:scale-105"
                >
                  <MapPin className="w-6 h-6 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm group-hover:text-yellow-400 transition-colors">
                    {emirate}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('fleet')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              View Our Fleet
            </button>
            <button
              onClick={() => onNavigate('calculator')}
              className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Get Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;