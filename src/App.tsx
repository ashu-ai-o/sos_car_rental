import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './pages/Hero';
import Fleet from './pages/Fleet';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import VirtualTours from './pages/VirtualTours';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import BookingModal from './components/BookingModal';
import FloatingCTAs from './components/FloatingCTAs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('AED');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onBookingOpen={() => setIsBookingOpen(true)} onNavigate={setCurrentPage} />;
      case 'fleet':
        return <Fleet onBookingOpen={() => setIsBookingOpen(true)} onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'calculator':
        return <Calculator onNavigate={setCurrentPage} />;
      case 'tours':
        return <VirtualTours onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'faq':
        return <FAQ onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Hero onBookingOpen={() => setIsBookingOpen(true)} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation 
        scrollY={scrollY}
        language={language}
        setLanguage={setLanguage}
        currency={currency}
        setCurrency={setCurrency}
        onBookingOpen={() => setIsBookingOpen(true)}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      <main className="relative">
        {renderCurrentPage()}
      </main>

      <FloatingCTAs onBookingOpen={() => setIsBookingOpen(true)} />
      
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;