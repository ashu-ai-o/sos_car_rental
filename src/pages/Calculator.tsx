import React, { useState } from 'react';
import {
  ArrowLeft,
  Calculator as CalculatorIcon, // ✅ renamed here
  Plus,
  Minus,
  Shield,
  MapPin,
  User,
  Calendar,
} from 'lucide-react';

interface CalculatorProps {
  onNavigate: (page: string) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onNavigate }) => {
  const [quote, setQuote] = useState({
    car: '',
    days: 1,
    insurance: false,
    driver: false,
    location: '',
  });

  const cars = [
    { name: 'Sedan', rate: 40 },
    { name: 'SUV', rate: 60 },
    { name: 'Luxury', rate: 120 },
    { name: 'Electric', rate: 80 },
  ];

  const calculatePrice = () => {
    const carRate =
      cars.find((c) => c.name === quote.car)?.rate ?? 0;
    const insurance = quote.insurance ? 15 : 0;
    const driver = quote.driver ? 25 : 0;
    return (carRate + insurance + driver) * quote.days;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center bg-gray-900/80 backdrop-blur-md">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <h1 className="flex-1 text-center text-xl font-bold flex items-center justify-center">
          <CalculatorIcon className="w-6 h-6 mr-2 text-yellow-400" /> {/* ✅ updated here */}
          Rent Calculator
        </h1>
      </header>

      {/* Form */}
      <main className="flex-1 p-6 space-y-6">
        {/* Car Selection */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Select Car
          </label>
          <select
            value={quote.car}
            onChange={(e) =>
              setQuote({ ...quote, car: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">-- Choose Car --</option>
            {cars.map((car) => (
              <option key={car.name} value={car.name}>
                {car.name} (${car.rate}/day)
              </option>
            ))}
          </select>
        </div>

        {/* Days */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Rental Days
          </label>
          <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700">
            <button
              onClick={() =>
                setQuote({
                  ...quote,
                  days: Math.max(1, quote.days - 1),
                })
              }
              className="p-3 hover:bg-gray-700 rounded-l-lg"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="flex-1 text-center">
              {quote.days}
            </span>
            <button
              onClick={() =>
                setQuote({ ...quote, days: quote.days + 1 })
              }
              className="p-3 hover:bg-gray-700 rounded-r-lg"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Add-ons */}
        <div className="space-y-3">
          <label className="block text-sm text-gray-400">
            Additional Options
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={quote.insurance}
              onChange={(e) =>
                setQuote({
                  ...quote,
                  insurance: e.target.checked,
                })
              }
              className="form-checkbox text-yellow-400"
            />
            <Shield className="w-4 h-4 text-yellow-400" />
            <span>Insurance (+$15/day)</span>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={quote.driver}
              onChange={(e) =>
                setQuote({
                  ...quote,
                  driver: e.target.checked,
                })
              }
              className="form-checkbox text-yellow-400"
            />
            <User className="w-4 h-4 text-yellow-400" />
            <span>Driver (+$25/day)</span>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Pickup Location
          </label>
          <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700 p-3">
            <MapPin className="w-4 h-4 text-yellow-400 mr-2" />
            <input
              type="text"
              value={quote.location}
              onChange={(e) =>
                setQuote({ ...quote, location: e.target.value })
              }
              placeholder="Enter pickup location"
              className="flex-1 bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Result */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-semibold mb-4">
            Estimated Price
          </h2>
          <p className="text-3xl font-bold text-yellow-400">
            ${calculatePrice()}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            * Final price may vary based on availability and
            seasonal demand.
          </p>
        </div>
      </main>

      {/* CTA */}
      <footer className="p-6">
        <button
          onClick={() => onNavigate('booking')}
          disabled={!quote.car || !quote.location}
          className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Proceed to Booking
        </button>
      </footer>
    </div>
  );
};

export default Calculator;
