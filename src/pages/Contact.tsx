import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '24/7 VIP Hotline',
      details: ['+971 4 XXX XXXX', '+971 50 XXX XXXX'],
      description: 'Call us anytime for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['vip@sosluxury.ae', 'bookings@sosluxury.ae'],
      description: 'Get detailed responses within 30 minutes'
    },
    {
      icon: MapPin,
      title: 'Showroom Location',
      details: ['Dubai Marina Walk', 'Building 6, Ground Floor'],
      description: 'Visit our luxury showroom by appointment'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['24/7 Operations', 'Showroom: 9 AM - 10 PM'],
      description: 'Always available for your convenience'
    }
  ];

  const locations = [
    { name: 'Dubai Marina', address: 'Marina Walk, Building 6', phone: '+971 4 XXX 1001' },
    { name: 'Downtown Dubai', address: 'Burj Khalifa Boulevard', phone: '+971 4 XXX 1002' },
    { name: 'Dubai International Airport', address: 'Terminal 3, Arrivals', phone: '+971 4 XXX 1003' },
    { name: 'Abu Dhabi', address: 'Corniche Road, Capital Centre', phone: '+971 2 XXX 2001' }
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
              <span className="text-white">Contact</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ml-4">
                SOS Luxury
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get in touch with our VIP concierge team for personalized luxury car rental assistance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none resize-none"
                      placeholder="Tell us about your luxury car rental needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 px-6 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 inline mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {info.title}
                      </h3>
                      
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-yellow-400 font-semibold mb-1">
                          {detail}
                        </p>
                      ))}
                      
                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Actions */}
              <div className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20">
                <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-400 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                  
                  <button className="bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Locations</h2>
              <p className="text-gray-400">Visit us at any of our premium locations across the UAE</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 text-center group hover:scale-105"
                >
                  <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {location.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3">
                    {location.address}
                  </p>
                  
                  <p className="text-yellow-400 font-semibold text-sm">
                    {location.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
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
              onClick={() => onNavigate('about')}
              className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;