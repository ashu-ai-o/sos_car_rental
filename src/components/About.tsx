import React from 'react';
import { Award, Shield, Clock, Users, Phone, Mail, MapPin, Star } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, label: 'UAE\'s #1 Luxury Car Rental', value: 'Since 2018' },
    { icon: Users, label: 'Happy Customers Served', value: '10,000+' },
    { icon: Star, label: 'Average Customer Rating', value: '4.9/5' },
    { icon: Shield, label: 'Years of Trusted Service', value: '6+' }
  ];

  const values = [
    {
      title: 'Exceptional Service',
      description: 'We go above and beyond to exceed your expectations with personalized VIP treatment.',
      icon: Star,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Trust & Reliability',
      description: 'Your safety and satisfaction are our top priorities. We maintain the highest standards.',
      icon: Shield,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Premium Quality',
      description: 'Only the finest luxury and supercars make it into our exclusive, hand-picked fleet.',
      icon: Award,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Always Available',
      description: '24/7 concierge support ensures you\'re never alone on your luxury journey.',
      icon: Clock,
      color: 'from-green-400 to-green-600'
    }
  ];

  const team = [
    {
      name: 'Omar Al Rashid',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Automotive enthusiast with 15 years in luxury hospitality'
    },
    {
      name: 'Sarah Mitchell',
      position: 'Head of VIP Services',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Specialized in luxury customer experience management'
    },
    {
      name: 'Hassan Al Mahmoud',
      position: 'Fleet Operations Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert in luxury automotive maintenance and logistics'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-white">About</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ml-4">
              SOS Luxury
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The UAE's premier luxury car rental service, delivering unparalleled experiences 
            with the world's most prestigious automotive masterpieces since 2018.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 leading-relaxed">
              Founded in Dubai with a vision to redefine luxury mobility, SOS Luxury began as a boutique 
              car rental service catering to the most discerning clients in the UAE. What started with 
              just five premium vehicles has grown into the region's most trusted luxury automotive experience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We recognized that luxury isn't just about the car – it's about the entire experience. 
              From the moment you contact us to the final drop-off, every interaction is crafted to 
              exceed expectations and create lasting memories.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we're proud to serve celebrities, business leaders, tourists, and luxury enthusiasts 
              across all seven Emirates, maintaining our commitment to excellence that has made us 
              the UAE's #1 choice for luxury car rentals.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl p-8 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-white mb-6">Why We're Different</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Hand-selected fleet of only the finest luxury and supercars</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">White-glove concierge service with personal attention</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Transparent pricing with no hidden fees or surprises</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">24/7 support and assistance wherever you are in the UAE</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Flexible payment options including crypto and installments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 text-center group hover:scale-105"
            >
              <achievement.icon className="w-8 h-8 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-white mb-2">{achievement.value}</div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do and every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 text-center group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {value.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Meet Our Team</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The passionate professionals behind your extraordinary luxury experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 text-center group hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-3 border-yellow-400/30 group-hover:border-yellow-400 transition-colors"
                />
                
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                  {member.name}
                </h4>
                
                <p className="text-yellow-400 font-semibold mb-3">
                  {member.position}
                </p>
                
                <p className="text-gray-400 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400">
              Ready to experience luxury? Our VIP concierge team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-white font-semibold mb-2">Call Us</h4>
              <p className="text-yellow-400 font-semibold">+971 4 XXX XXXX</p>
              <p className="text-gray-400 text-sm">24/7 VIP Hotline</p>
            </div>

            <div className="group">
              <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-yellow-400 font-semibold">vip@sosluxury.ae</p>
              <p className="text-gray-400 text-sm">Concierge Services</p>
            </div>

            <div className="group">
              <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-white font-semibold mb-2">Visit Us</h4>
              <p className="text-yellow-400 font-semibold">Dubai Marina</p>
              <p className="text-gray-400 text-sm">Luxury Showroom</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
              Schedule a Showroom Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;