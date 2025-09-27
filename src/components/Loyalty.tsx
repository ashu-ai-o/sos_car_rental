import React, { useState } from 'react';
import { Gift, Crown, Star, Mail, Users, Percent } from 'lucide-react';

const Loyalty: React.FC = () => {
  const [email, setEmail] = useState('');
  const [currentPoints] = useState(2850); // Example points
  const [currentLevel] = useState('Gold');

  const loyaltyLevels = [
    { 
      name: 'Bronze', 
      points: 0, 
      color: 'from-amber-600 to-amber-800',
      benefits: ['5% discount on rentals', 'Priority booking', 'Basic support']
    },
    { 
      name: 'Silver', 
      points: 1000, 
      color: 'from-gray-400 to-gray-600',
      benefits: ['10% discount on rentals', 'Free GPS & baby seat', 'Dedicated support', 'Late return flexibility']
    },
    { 
      name: 'Gold', 
      points: 2500, 
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['15% discount on rentals', 'Free chauffeur (2hrs/month)', 'VIP lounge access', 'Complimentary delivery']
    },
    { 
      name: 'Platinum', 
      points: 5000, 
      color: 'from-purple-400 to-purple-600',
      benefits: ['20% discount on rentals', 'Unlimited free extras', 'Personal account manager', '24/7 concierge service']
    }
  ];

  const offers = [
    {
      title: 'Weekend Warrior',
      discount: '25% OFF',
      description: 'Book any supercar for weekend rentals (Fri-Sun)',
      validUntil: '2024-02-29',
      code: 'WEEKEND25',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'First Timer Special',
      discount: '30% OFF',
      description: 'New customers get 30% off their first luxury rental',
      validUntil: '2024-03-15',
      code: 'FIRST30',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Monthly Luxury',
      discount: '40% OFF',
      description: 'Long-term rentals (30+ days) with massive savings',
      validUntil: '2024-04-30',
      code: 'MONTHLY40',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Refer & Earn',
      discount: '500 AED',
      description: 'Both you and your friend get 500 AED credit',
      validUntil: 'Ongoing',
      code: 'REFER500',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const getCurrentLevelIndex = () => {
    return loyaltyLevels.findIndex(level => level.name === currentLevel);
  };

  const getNextLevel = () => {
    const currentIndex = getCurrentLevelIndex();
    return currentIndex < loyaltyLevels.length - 1 ? loyaltyLevels[currentIndex + 1] : null;
  };

  const getProgressToNextLevel = () => {
    const nextLevel = getNextLevel();
    if (!nextLevel) return 100;
    
    const currentLevelPoints = loyaltyLevels[getCurrentLevelIndex()].points;
    const pointsInCurrentLevel = currentPoints - currentLevelPoints;
    const pointsNeededForNext = nextLevel.points - currentLevelPoints;
    
    return (pointsInCurrentLevel / pointsNeededForNext) * 100;
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
    // Show success message
  };

  return (
    <section id="loyalty" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-white">VIP Loyalty &</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ml-4">
              Rewards
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock exclusive benefits and rewards with every luxury rental
          </p>
        </div>

        {/* Loyalty Status */}
        <div className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Status */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-2xl font-bold text-white">Your Status: {currentLevel}</h3>
                  <p className="text-gray-400">You have {currentPoints.toLocaleString()} points</p>
                </div>
              </div>

              {/* Progress Bar */}
              {getNextLevel() && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Progress to {getNextLevel()?.name}</span>
                    <span className="text-cyan-400 font-semibold">
                      {getNextLevel()?.points - currentPoints} points to go
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressToNextLevel()}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Current Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Your Current Benefits:</h4>
                <ul className="space-y-2">
                  {loyaltyLevels[getCurrentLevelIndex()].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Loyalty Levels Overview */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">All Membership Levels</h4>
              <div className="space-y-4">
                {loyaltyLevels.map((level, index) => (
                  <div
                    key={level.name}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      level.name === currentLevel 
                        ? 'border-yellow-400 bg-yellow-400/10' 
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${level.color}`}></div>
                        <span className="text-white font-semibold">{level.name}</span>
                        {level.name === currentLevel && (
                          <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <span className="text-gray-400 text-sm">{level.points.toLocaleString()}+ points</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {level.benefits[0]} • {level.benefits.length - 1} more benefits
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <Gift className="w-8 h-8 inline mr-3 text-yellow-400" />
              Exclusive Offers
            </h3>
            <p className="text-gray-400">Limited-time deals and seasonal promotions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 group"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${offer.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Percent className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {offer.title}
                </h4>
                
                <div className="text-2xl font-bold text-yellow-400 mb-3">
                  {offer.discount}
                </div>
                
                <p className="text-gray-400 text-sm mb-4">
                  {offer.description}
                </p>
                
                <div className="mb-4">
                  <span className="bg-black/60 text-yellow-400 px-3 py-1 rounded-lg font-mono text-sm">
                    {offer.code}
                  </span>
                </div>
                
                <p className="text-gray-500 text-xs">
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-500"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 p-8 text-center">
          <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
          
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay in the Loop
          </h3>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our exclusive newsletter for the latest offers, new arrivals, and VIP-only deals. 
            Plus, get 100 bonus points just for signing up!
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-black/60 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
              >
                Join VIP
              </button>
            </div>
          </form>

          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        {/* Referral Program */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 p-8">
            <Users className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Refer Friends, Earn Rewards
            </h3>
            
            <p className="text-gray-400 mb-6">
              Invite your friends to experience luxury. You both get 500 AED credit when they make their first booking!
            </p>

            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
              Get Your Referral Link
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loyalty;