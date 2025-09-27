import React from 'react';
import { Menu, X, Globe, DollarSign } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
  language: string;
  setLanguage: (lang: string) => void;
  currency: string;
  setCurrency: (curr: string) => void;
  onBookingOpen: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  scrollY, 
  language, 
  setLanguage, 
  currency, 
  setCurrency,
  onBookingOpen,
  currentPage,
  onNavigate
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isScrolled = scrollY > 100;

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Fleet', page: 'fleet' },
    { label: 'Services', page: 'services' },
    { label: 'Calculator', page: 'calculator' },
    { label: 'Virtual Tours', page: 'tours' },
    { label: 'About', page: 'about' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-yellow-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('home')}
            className="text-2xl font-bold hover:scale-105 transition-transform"
          >
            <span className="text-white">SOS</span>
            <span className="text-yellow-400 ml-2">LUXURY</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.page)}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === item.page 
                    ? 'text-yellow-400' 
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2">
              <Globe className="w-4 h-4 text-yellow-400" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-white border-none focus:outline-none cursor-pointer"
              >
                <option value="EN" className="bg-black">EN</option>
                <option value="AR" className="bg-black">AR</option>
                <option value="RU" className="bg-black">RU</option>
              </select>
            </div>

            {/* Currency Selector */}
            <div className="hidden md:flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-yellow-400" />
              <select 
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-white border-none focus:outline-none cursor-pointer"
              >
                <option value="AED" className="bg-black">AED</option>
                <option value="USD" className="bg-black">USD</option>
                <option value="EUR" className="bg-black">EUR</option>
              </select>
            </div>

            {/* Book Now Button */}
            <button
              onClick={onBookingOpen}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-yellow-400/20 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.page)}
                className={`block w-full text-left px-4 py-3 transition-all duration-200 ${
                  currentPage === item.page
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-white hover:text-yellow-400 hover:bg-yellow-400/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between px-4 py-3 border-t border-yellow-400/20 mt-4">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-yellow-400" />
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-white border-none focus:outline-none"
                >
                  <option value="EN" className="bg-black">EN</option>
                  <option value="AR" className="bg-black">AR</option>
                  <option value="RU" className="bg-black">RU</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-yellow-400" />
                <select 
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent text-white border-none focus:outline-none"
                >
                  <option value="AED" className="bg-black">AED</option>
                  <option value="USD" className="bg-black">USD</option>
                  <option value="EUR" className="bg-black">EUR</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;