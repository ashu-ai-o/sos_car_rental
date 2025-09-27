import React, { useState } from 'react';
import { Calculator, Plus, Minus, Shield, MapPin, User, Calendar } from 'lucide-react';

const QuoteCalculator: React.FC = () => {
  const [quote, setQuote] = useState({
    car: '',
    days: 1,
    extras: {
      gps: false,
      babySeat: false,
      chauffeur: false,
      additionalDriver: false
    },
    insurance: 'basic',
    kmAllowance: '200',
    delivery: true
  });

  const cars = [
    { id: 'lamborghini-huracan', name: 'Lamborghini Huracán EVO', basePrice: 1800 },
    { id: 'ferrari-f8', name: 'Ferrari F8 Tributo', basePrice: 2200 },
    { id: 'rolls-cullinan', name: 'Rolls-Royce Cullinan', basePrice: 1500 },
    { id: 'mclaren-720s', name: 'McLaren 720S', basePrice: 2000 },
    { id: 'tesla-plaid', name: 'Tesla Model S Plaid', basePrice: 800 },
    { id: 'bentley-gt', name: 'Bentley Continental GT', basePrice: 1200 }
  ];

  const extras = [
    { id: 'gps', name: 'GPS Navigation', price: 25, icon: MapPin },
    { id: 'babySeat', name: 'Baby Seat', price: 30, icon: User },
    { id: 'chauffeur', name: 'Professional Chauffeur', price: 300, icon: User },
    { id: 'additionalDriver', name: 'Additional Driver', price: 50, icon: User }
  ];

  const insuranceOptions = [
    { id: 'basic', name: 'Basic Coverage', price: 0, description: 'Standard protection' },
    { id: 'premium', name: 'Premium Coverage', price: 150, description: 'Enhanced protection' },
    { id: 'comprehensive', name: 'Comprehensive Coverage', price: 300, description: 'Full protection' }
  ];

  const kmAllowanceOptions = [
    { id: '200', name: '200 km/day', price: 0 },
    { id: '300', name: '300 km/day', price: 50 },
    { id: 'unlimited', name: 'Unlimited km', price: 150 }
  ];

  const calculateTotal = () => {
    const selectedCar = cars.find(car => car.id === quote.car);
    if (!selectedCar) return { subtotal: 0, total: 0, breakdown: [] };

    const basePrice = selectedCar.basePrice * quote.days;
    let breakdown = [
      { item: `${selectedCar.name} (${quote.days} day${quote.days > 1 ? 's' : ''})`, price: basePrice }
    ];

    let extrasTotal = 0;
    extras.forEach(extra => {
      if (quote.extras[extra.id as keyof typeof quote.extras]) {
        const extraPrice = extra.price * quote.days;
        extrasTotal += extraPrice;
        breakdown.push({ item: extra.name, price: extraPrice });
      }
    });

    const selectedInsurance = insuranceOptions.find(ins => ins.id === quote.insurance);
    const insurancePrice = selectedInsurance ? selectedInsurance.price * quote.days : 0;
    if (insurancePrice > 0) {
      breakdown.push({ item: selectedInsurance.name, price: insurancePrice });
    }

    const selectedKmAllowance = kmAllowanceOptions.find(km => km.id === quote.kmAllowance);
    const kmPrice = selectedKmAllowance ? selectedKmAllowance.price * quote.days : 0;
    if (kmPrice > 0) {
      breakdown.push({ item: selectedKmAllowance.name, price: kmPrice });
    }

    const deliveryPrice = quote.delivery ? 100 : 0;
    if (deliveryPrice > 0) {
      breakdown.push({ item: 'Airport Delivery', price: deliveryPrice });
    }

    const subtotal = basePrice + extrasTotal + insurancePrice + kmPrice + deliveryPrice;
    const tax = subtotal * 0.05; // 5% VAT
    breakdown.push({ item: 'VAT (5%)', price: tax });

    return { subtotal, total: subtotal + tax, breakdown };
  };

  const { total, breakdown } = calculateTotal();

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Instant Quote</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ml-4">
              Calculator
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get your personalized quote in seconds with our interactive calculator
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left Side - Configuration */}
              <div className="space-y-8">
                {/* Car Selection */}
                <div>
                  <label className="block text-lg font-semibold text-white mb-4">
                    <Calculator className="w-5 h-5 inline mr-2 text-yellow-400" />
                    Select Your Dream Car
                  </label>
                  <select
                    value={quote.car}
                    onChange={(e) => setQuote({...quote, car: e.target.value})}
                    className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="" className="bg-black">Choose a car...</option>
                    {cars.map((car) => (
                      <option key={car.id} value={car.id} className="bg-black">
                        {car.name} - {car.basePrice} AED/day
                      </option>
                    ))}
                  </select>
                </div>

                {/* Days */}
                <div>
                  <label className="block text-lg font-semibold text-white mb-4">
                    <Calendar className="w-5 h-5 inline mr-2 text-yellow-400" />
                    Rental Duration
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuote({...quote, days: Math.max(1, quote.days - 1)})}
                      className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-bold text-white min-w-[3rem] text-center">
                      {quote.days}
                    </span>
                    <button
                      onClick={() => setQuote({...quote, days: quote.days + 1})}
                      className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="text-gray-400 ml-4">day{quote.days > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Extras */}
                <div>
                  <label className="block text-lg font-semibold text-white mb-4">
                    Optional Extras
                  </label>
                  <div className="space-y-3">
                    {extras.map((extra) => (
                      <label key={extra.id} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={quote.extras[extra.id as keyof typeof quote.extras]}
                            onChange={(e) => setQuote({
                              ...quote,
                              extras: {...quote.extras, [extra.id]: e.target.checked}
                            })}
                            className="w-4 h-4 text-yellow-400 border-gray-600 rounded focus:ring-yellow-400"
                          />
                          <extra.icon className="w-4 h-4 text-yellow-400" />
                          <span className="text-white">{extra.name}</span>
                        </div>
                        <span className="text-yellow-400 font-semibold">{extra.price} AED/day</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Insurance */}
                <div>
                  <label className="block text-lg font-semibold text-white mb-4">
                    <Shield className="w-5 h-5 inline mr-2 text-yellow-400" />
                    Insurance Coverage
                  </label>
                  <div className="space-y-3">
                    {insuranceOptions.map((insurance) => (
                      <label key={insurance.id} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="insurance"
                            value={insurance.id}
                            checked={quote.insurance === insurance.id}
                            onChange={(e) => setQuote({...quote, insurance: e.target.value})}
                            className="w-4 h-4 text-yellow-400 border-gray-600 focus:ring-yellow-400"
                          />
                          <div>
                            <div className="text-white font-medium">{insurance.name}</div>
                            <div className="text-gray-400 text-sm">{insurance.description}</div>
                          </div>
                        </div>
                        <span className="text-yellow-400 font-semibold">
                          {insurance.price > 0 ? `${insurance.price} AED/day` : 'Free'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* KM Allowance */}
                <div>
                  <label className="block text-lg font-semibold text-white mb-4">
                    Daily Kilometer Allowance
                  </label>
                  <div className="space-y-3">
                    {kmAllowanceOptions.map((km) => (
                      <label key={km.id} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="kmAllowance"
                            value={km.id}
                            checked={quote.kmAllowance === km.id}
                            onChange={(e) => setQuote({...quote, kmAllowance: e.target.value})}
                            className="w-4 h-4 text-yellow-400 border-gray-600 focus:ring-yellow-400"
                          />
                          <span className="text-white">{km.name}</span>
                        </div>
                        <span className="text-yellow-400 font-semibold">
                          {km.price > 0 ? `+${km.price} AED/day` : 'Included'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Delivery */}
                <div>
                  <label className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={quote.delivery}
                        onChange={(e) => setQuote({...quote, delivery: e.target.checked})}
                        className="w-4 h-4 text-yellow-400 border-gray-600 rounded focus:ring-yellow-400"
                      />
                      <MapPin className="w-4 h-4 text-yellow-400" />
                      <div>
                        <div className="text-white font-medium">Airport Delivery & Collection</div>
                        <div className="text-gray-400 text-sm">We'll deliver and collect anywhere in UAE</div>
                      </div>
                    </div>
                    <span className="text-yellow-400 font-semibold">100 AED</span>
                  </label>
                </div>
              </div>

              {/* Right Side - Quote Summary */}
              <div className="bg-gradient-to-b from-black/60 to-gray-900/60 rounded-xl p-6 border border-yellow-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Your Quote Summary</h3>
                
                {quote.car ? (
                  <div className="space-y-4">
                    {breakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                        <span className="text-gray-300">{item.item}</span>
                        <span className="text-white font-semibold">{item.price} AED</span>
                      </div>
                    ))}
                    
                    <div className="border-t border-yellow-400/30 pt-4 mt-6">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xl font-bold text-white">Total Amount</span>
                        <span className="text-3xl font-bold text-yellow-400">{Math.round(total)} AED</span>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-4 px-6 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 mb-4">
                        Reserve Now - Pay Later
                      </button>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-black border border-yellow-400 text-yellow-400 py-3 px-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                          Apple Pay
                        </button>
                        <button className="bg-black border border-yellow-400 text-yellow-400 py-3 px-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                          Google Pay
                        </button>
                      </div>
                      
                      <p className="text-gray-400 text-sm mt-4 text-center">
                        Installment options available with Tabby & Tamara
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Select a car to see your quote</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;