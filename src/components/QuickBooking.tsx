import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Car, Percent, ChevronDown } from 'lucide-react';

const QuickBooking: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bookingData, setBookingData] = useState({
    pickupLocation: 'Dubai International Airport',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    carCategory: 'luxury',
    promoCode: ''
  });

  const locations = [
    'Dubai International Airport',
    'Abu Dhabi International Airport',
    'Sharjah Airport',
    'Dubai Marina',
    'Downtown Dubai',
    'Palm Jumeirah',
    'Abu Dhabi City Center',
    'Al Ain'
  ];

  const carCategories = [
    { value: 'luxury', label: 'Luxury Cars', price: 'from 500 AED/day' },
    { value: 'supercar', label: 'Supercars', price: 'from 1,500 AED/day' },
    { value: 'suv', label: 'Luxury SUVs', price: 'from 800 AED/day' },
    { value: 'electric', label: 'Electric Luxury', price: 'from 600 AED/day' }
  ];

  return (
    <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-md border-b border-cyan-400/20">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className={`transition-all duration-500 ${isExpanded ? 'max-h-96' : 'max-h-20'} overflow-hidden`}>
          {/* Collapsed View */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Quick Booking</h3>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <span className="mr-2">{isExpanded ? 'Hide' : 'Show'} Form</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Expanded Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300 flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-yellow-400" />
                Pick-up Location
              </label>
              <select
                value={bookingData.pickupLocation}
                onChange={(e) => setBookingData({...bookingData, pickupLocation: e.target.value})}
                className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
              >
                {locations.map((location) => (
                  <option key={location} value={location} className="bg-black">
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Pick-up Date & Time */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300 flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-yellow-400" />
                Pick-up Date
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={bookingData.pickupDate}
                  onChange={(e) => setBookingData({...bookingData, pickupDate: e.target.value})}
                  className="flex-1 bg-black/60 border border-yellow-400/30 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                />
                <input
                  type="time"
                  value={bookingData.pickupTime}
                  onChange={(e) => setBookingData({...bookingData, pickupTime: e.target.value})}
                  className="flex-1 bg-black/60 border border-yellow-400/30 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Drop-off Date & Time */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300 flex items-center">
                <Clock className="w-4 h-4 mr-1 text-yellow-400" />
                Drop-off Date
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={bookingData.dropoffDate}
                  onChange={(e) => setBookingData({...bookingData, dropoffDate: e.target.value})}
                  className="flex-1 bg-black/60 border border-yellow-400/30 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                />
                <input
                  type="time"
                  value={bookingData.dropoffTime}
                  onChange={(e) => setBookingData({...bookingData, dropoffTime: e.target.value})}
                  className="flex-1 bg-black/60 border border-yellow-400/30 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Car Category */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300 flex items-center">
                <Car className="w-4 h-4 mr-1 text-yellow-400" />
                Car Category
              </label>
              <select
                value={bookingData.carCategory}
                onChange={(e) => setBookingData({...bookingData, carCategory: e.target.value})}
                className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
              >
                {carCategories.map((category) => (
                  <option key={category.value} value={category.value} className="bg-black">
                    {category.label} - {category.price}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Promo Code and Actions */}
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1 space-y-2">
              <label className="text-sm text-gray-300 flex items-center">
                <Percent className="w-4 h-4 mr-1 text-yellow-400" />
                Promo Code (Optional)
              </label>
              <input
                type="text"
                value={bookingData.promoCode}
                onChange={(e) => setBookingData({...bookingData, promoCode: e.target.value})}
                placeholder="Enter promo code"
                className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none placeholder-gray-500"
              />
            </div>
            
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
                Get Quote
              </button>
              <button className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Compare Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickBooking;