import React, { useState, useEffect } from 'react';
import { Star, Eye, Video, Calendar, Fuel, Users, Settings } from 'lucide-react';

interface FeaturedFleetProps {
  onBookingOpen: () => void;
}

const FeaturedFleet: React.FC<FeaturedFleetProps> = ({ onBookingOpen }) => {
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const cars = [
    {
      id: 1,
      brand: 'Lamborghini',
      model: 'Huracán EVO',
      image: 'https://images.pexels.com/photos/2502803/pexels-photo-2502803.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '1,800',
      originalPrice: '2,200',
      category: 'Supercar',
      badges: ['VIP', 'Popular'],
      specs: {
        engine: '5.2L V10',
        power: '640 HP',
        acceleration: '3.2s 0-100km/h',
        topSpeed: '325 km/h',
        seats: 2,
        fuel: 'Petrol'
      },
      features: ['GPS Navigation', 'Premium Sound', 'Carbon Fiber Interior', '360° Camera'],
      rating: 4.9,
      reviews: 156
    },
    {
      id: 2,
      brand: 'Ferrari',
      model: 'F8 Tributo',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '2,200',
      originalPrice: '2,600',
      category: 'Supercar',
      badges: ['New', 'Premium'],
      specs: {
        engine: '3.9L V8',
        power: '720 HP',
        acceleration: '2.9s 0-100km/h',
        topSpeed: '340 km/h',
        seats: 2,
        fuel: 'Petrol'
      },
      features: ['Advanced Telemetry', 'Race Mode', 'Carbon Ceramic Brakes', 'Alcantara Interior'],
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      brand: 'Rolls-Royce',
      model: 'Cullinan',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '1,500',
      originalPrice: '1,800',
      category: 'Luxury SUV',
      badges: ['VIP'],
      specs: {
        engine: '6.75L V12',
        power: '571 HP',
        acceleration: '5.2s 0-100km/h',
        topSpeed: '250 km/h',
        seats: 5,
        fuel: 'Petrol'
      },
      features: ['Massage Seats', 'Champagne Cooler', 'Starlight Headliner', 'Whisper Quiet'],
      rating: 4.9,
      reviews: 203
    },
    {
      id: 4,
      brand: 'McLaren',
      model: '720S',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '2,000',
      originalPrice: '2,400',
      category: 'Supercar',
      badges: ['Track Ready'],
      specs: {
        engine: '4.0L V8',
        power: '720 HP',
        acceleration: '2.9s 0-100km/h',
        topSpeed: '341 km/h',
        seats: 2,
        fuel: 'Petrol'
      },
      features: ['Active Suspension', 'Track Mode', 'Carbon Fiber Body', 'Dihedral Doors'],
      rating: 4.7,
      reviews: 124
    },
    {
      id: 5,
      brand: 'Tesla',
      model: 'Model S Plaid',
      image: 'https://images.pexels.com/photos/7144177/pexels-photo-7144177.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '800',
      originalPrice: '1,000',
      category: 'Electric Luxury',
      badges: ['EV', 'Eco-Friendly'],
      specs: {
        engine: 'Tri-Motor',
        power: '1,020 HP',
        acceleration: '2.1s 0-100km/h',
        topSpeed: '320 km/h',
        seats: 5,
        fuel: 'Electric'
      },
      features: ['Autopilot', '17" Touchscreen', 'Premium Audio', '600km Range'],
      rating: 4.6,
      reviews: 78
    },
    {
      id: 6,
      brand: 'Bentley',
      model: 'Continental GT',
      image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '1,200',
      originalPrice: '1,500',
      category: 'Grand Tourer',
      badges: ['Luxury'],
      specs: {
        engine: '6.0L W12',
        power: '635 HP',
        acceleration: '3.7s 0-100km/h',
        topSpeed: '333 km/h',
        seats: 4,
        fuel: 'Petrol'
      },
      features: ['Rotating Display', 'Diamond Quilted Leather', 'Naim Audio', 'Adaptive Cruise'],
      rating: 4.8,
      reviews: 167
    }
  ];

  const CarModal = ({ car, onClose }: { car: any; onClose: () => void }) => {
    if (!car) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 max-w-4xl max-h-[90vh] overflow-y-auto m-4 border border-yellow-400/30">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-white">{car.brand} {car.model}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  <Eye className="w-4 h-4 inline mr-2" />
                  360° View
                </button>
                <button className="flex-1 border border-yellow-400 text-yellow-400 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                  <Video className="w-4 h-4 inline mr-2" />
                  Video Tour
                </button>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-yellow-400">{car.price} AED</span>
                  {car.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">{car.originalPrice} AED</span>
                  )}
                  <span className="text-gray-400">/day</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white">{car.rating}</span>
                  <span className="text-gray-400">({car.reviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold text-white">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{car.specs.engine}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold">HP</span>
                    <span className="text-gray-300">{car.specs.power}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold">0-100</span>
                    <span className="text-gray-300">{car.specs.acceleration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{car.specs.seats} seats</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold text-white">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {car.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onBookingOpen}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 px-6 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Book This Car Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="fleet" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Featured</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ml-4">
              Fleet
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the world's most prestigious automotive masterpieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {car.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        badge === 'VIP' ? 'bg-yellow-400 text-black' :
                        badge === 'New' ? 'bg-green-400 text-black' :
                        badge === 'Popular' ? 'bg-red-400 text-white' :
                        badge === 'EV' ? 'bg-green-500 text-white' :
                        'bg-cyan-400 text-black'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors transform hover:scale-105"
                  >
                    <Eye className="w-4 h-4 inline mr-2" />
                    Details
                  </button>
                  <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                    <Video className="w-4 h-4 inline mr-2" />
                    360°
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{car.brand}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{car.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4">{car.model}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-yellow-400">{car.price} AED</span>
                    {car.originalPrice && (
                      <span className="text-gray-500 line-through">{car.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-gray-400">/day</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <Settings className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-400">{car.specs.power}</span>
                  </div>
                  <div>
                    <Users className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-400">{car.specs.seats} seats</span>
                  </div>
                  <div>
                    <Fuel className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-400">{car.specs.fuel}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={onBookingOpen}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 px-4 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="border border-yellow-400 text-yellow-400 py-3 px-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </section>
  );
};

export default FeaturedFleet;