import React, { useState } from 'react';
import { X, Calendar, MapPin, User, CreditCard, Shield, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Step 1: Car & Dates
    selectedCar: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    
    // Step 2: Extras
    extras: {
      gps: false,
      babySeat: false,
      chauffeur: false,
      additionalDriver: false,
      delivery: true
    },
    insurance: 'basic',
    
    // Step 3: Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    licenseNumber: '',
    licenseExpiry: '',
    
    // Step 4: Payment
    paymentMethod: 'card'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const cars = [
    { id: 'lamborghini-huracan', name: 'Lamborghini Huracán EVO', price: 1800 },
    { id: 'ferrari-f8', name: 'Ferrari F8 Tributo', price: 2200 },
    { id: 'rolls-cullinan', name: 'Rolls-Royce Cullinan', price: 1500 },
    { id: 'mclaren-720s', name: 'McLaren 720S', price: 2000 },
    { id: 'tesla-plaid', name: 'Tesla Model S Plaid', price: 800 },
    { id: 'bentley-gt', name: 'Bentley Continental GT', price: 1200 }
  ];

  const locations = [
    'Dubai International Airport',
    'Abu Dhabi International Airport',
    'Sharjah Airport',
    'Dubai Marina',
    'Downtown Dubai',
    'Palm Jumeirah',
    'Business Bay',
    'JBR Beach'
  ];

  const extras = [
    { id: 'gps', name: 'GPS Navigation', price: 25 },
    { id: 'babySeat', name: 'Baby Seat', price: 30 },
    { id: 'chauffeur', name: 'Professional Chauffeur', price: 300 },
    { id: 'additionalDriver', name: 'Additional Driver', price: 50 },
    { id: 'delivery', name: 'Delivery & Collection', price: 100 }
  ];

  const insuranceOptions = [
    { id: 'basic', name: 'Basic Coverage', price: 0, excess: '5,000 AED' },
    { id: 'premium', name: 'Premium Coverage', price: 150, excess: '2,500 AED' },
    { id: 'comprehensive', name: 'Comprehensive Coverage', price: 300, excess: '0 AED' }
  ];

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.startsWith('extras.')) {
        const extraName = name.split('.')[1];
        setBookingData({
          ...bookingData,
          extras: { ...bookingData.extras, [extraName]: checked }
        });
      } else {
        setBookingData({ ...bookingData, [name]: checked });
      }
    } else {
      setBookingData({ ...bookingData, [name]: value });
    }
  };

  const calculateTotal = () => {
    const selectedCarData = cars.find(car => car.id === bookingData.selectedCar);
    if (!selectedCarData) return 0;

    const pickupDate = new Date(bookingData.pickupDate);
    const dropoffDate = new Date(bookingData.dropoffDate);
    const days = Math.max(1, Math.ceil((dropoffDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)));

    let total = selectedCarData.price * days;

    // Add extras
    extras.forEach(extra => {
      if (bookingData.extras[extra.id as keyof typeof bookingData.extras]) {
        total += extra.price * days;
      }
    });

    // Add insurance
    const selectedInsurance = insuranceOptions.find(ins => ins.id === bookingData.insurance);
    if (selectedInsurance) {
      total += selectedInsurance.price * days;
    }

    return total;
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
    }, 2000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Select Car & Dates</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Choose Your Car
              </label>
              <select
                name="selectedCar"
                value={bookingData.selectedCar}
                onChange={handleInputChange}
                required
                className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
              >
                <option value="">Select a car...</option>
                {cars.map((car) => (
                  <option key={car.id} value={car.id} className="bg-black">
                    {car.name} - {car.price} AED/day
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pickup Location
                </label>
                <select
                  name="pickupLocation"
                  value={bookingData.pickupLocation}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Select location...</option>
                  {locations.map((location) => (
                    <option key={location} value={location} className="bg-black">
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={bookingData.pickupDate}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={bookingData.pickupTime}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Drop-off Date
                </label>
                <input
                  type="date"
                  name="dropoffDate"
                  value={bookingData.dropoffDate}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Drop-off Time
              </label>
              <input
                type="time"
                name="dropoffTime"
                value={bookingData.dropoffTime}
                onChange={handleInputChange}
                required
                className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Extras & Insurance</h3>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Optional Extras</h4>
              <div className="space-y-3">
                {extras.map((extra) => (
                  <label key={extra.id} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name={`extras.${extra.id}`}
                        checked={bookingData.extras[extra.id as keyof typeof bookingData.extras]}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-yellow-400 border-gray-600 rounded focus:ring-yellow-400"
                      />
                      <span className="text-white">{extra.name}</span>
                    </div>
                    <span className="text-yellow-400 font-semibold">{extra.price} AED/day</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Insurance Coverage</h4>
              <div className="space-y-3">
                {insuranceOptions.map((insurance) => (
                  <label key={insurance.id} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="insurance"
                        value={insurance.id}
                        checked={bookingData.insurance === insurance.id}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-yellow-400 border-gray-600 focus:ring-yellow-400"
                      />
                      <div>
                        <div className="text-white font-medium">{insurance.name}</div>
                        <div className="text-gray-400 text-sm">Excess: {insurance.excess}</div>
                      </div>
                    </div>
                    <span className="text-yellow-400 font-semibold">
                      {insurance.price > 0 ? `${insurance.price} AED/day` : 'Included'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={bookingData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={bookingData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={bookingData.dateOfBirth}
                onChange={handleInputChange}
                required
                className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Driving License Number *
                </label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={bookingData.licenseNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  License Expiry Date *
                </label>
                <input
                  type="date"
                  name="licenseExpiry"
                  value={bookingData.licenseExpiry}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Payment & Confirmation</h3>
            
            {/* Booking Summary */}
            <div className="bg-black/40 rounded-lg p-4 border border-yellow-400/20">
              <h4 className="text-lg font-semibold text-white mb-4">Booking Summary</h4>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Car:</span>
                  <span className="text-white">
                    {cars.find(car => car.id === bookingData.selectedCar)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Pickup:</span>
                  <span className="text-white">{bookingData.pickupDate} at {bookingData.pickupTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Drop-off:</span>
                  <span className="text-white">{bookingData.dropoffDate} at {bookingData.dropoffTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Location:</span>
                  <span className="text-white">{bookingData.pickupLocation}</span>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-4 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Total Amount:</span>
                  <span className="text-yellow-400">{calculateTotal()} AED</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Payment Method</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setBookingData({...bookingData, paymentMethod: 'card'})}
                  className={`p-4 border rounded-lg transition-colors ${
                    bookingData.paymentMethod === 'card'
                      ? 'border-yellow-400 bg-yellow-400/10'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <CreditCard className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <span className="text-white text-sm">Credit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setBookingData({...bookingData, paymentMethod: 'apple'})}
                  className={`p-4 border rounded-lg transition-colors ${
                    bookingData.paymentMethod === 'apple'
                      ? 'border-yellow-400 bg-yellow-400/10'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <div className="w-6 h-6 bg-yellow-400 rounded mx-auto mb-2"></div>
                  <span className="text-white text-sm">Apple Pay</span>
                </button>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">
                  Secure payment powered by Stripe. Your information is protected.
                </p>
                <div className="flex justify-center items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">SSL Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isCompleted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 max-w-md mx-4 border border-yellow-400/30 text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          
          <h2 className="text-2xl font-bold text-white mb-4">Booking Confirmed!</h2>
          
          <p className="text-gray-300 mb-6">
            Your luxury car rental has been confirmed. We'll send you a confirmation email with all the details.
          </p>
          
          <div className="bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/20 mb-6">
            <p className="text-yellow-400 font-semibold">Booking Reference</p>
            <p className="text-white font-mono text-lg">SOS-{Date.now().toString().slice(-6)}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 px-6 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-yellow-400/30">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Book Your Luxury Car</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex items-center ${step < 4 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${
                  step <= currentStep
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-600 text-gray-300'
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-colors ${
                    step < currentStep ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
              }`}
            >
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-300 hover:to-yellow-500'
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
              </button>
            )}
          </div>
        </form>

        {/* Total Display */}
        {bookingData.selectedCar && (
          <div className="mt-6 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20 text-center">
            <p className="text-gray-300 mb-1">Estimated Total</p>
            <p className="text-2xl font-bold text-yellow-400">{calculateTotal()} AED</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;