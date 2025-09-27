import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText, CreditCard, Shield, MapPin, Clock } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqCategories = [
    {
      title: 'Booking & Requirements',
      icon: FileText,
      color: 'from-blue-400 to-blue-600',
      questions: [
        {
          question: 'What documents do I need to rent a luxury car?',
          answer: 'You will need a valid driver\'s license (minimum 1 year experience), passport or Emirates ID, and a credit card in the primary driver\'s name. For UAE residents, Emirates ID is required. For tourists, a valid passport and international driving permit or home country license is acceptable.'
        },
        {
          question: 'What is the minimum age requirement?',
          answer: 'The minimum age is 21 years for luxury cars and SUVs, and 25 years for supercars (Ferrari, Lamborghini, McLaren). All drivers must have at least 1 year of driving experience. Additional drivers must meet the same requirements.'
        },
        {
          question: 'Can I book a car for someone else?',
          answer: 'Yes, but the person who will be driving must meet all requirements and be present during pickup with their valid documents. The booking can be made by a third party, but the driver must sign all agreements and provide their documentation.'
        },
        {
          question: 'How far in advance should I book?',
          answer: 'We recommend booking at least 24-48 hours in advance, especially during peak seasons (November-March) and major events. However, same-day bookings are often possible subject to availability.'
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      icon: CreditCard,
      color: 'from-green-400 to-green-600',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, bank transfers, and cryptocurrency. We also offer installment options through Tabby and Tamara for qualified customers.'
        },
        {
          question: 'What is included in the rental price?',
          answer: 'The base price includes comprehensive insurance, 200km daily allowance, basic GPS, 24/7 roadside assistance, and regular maintenance. Additional services like chauffeur, extra mileage, delivery, and premium insurance are available for an extra fee.'
        },
        {
          question: 'Is there a security deposit?',
          answer: 'Yes, a security deposit is required and varies by vehicle (typically 5,000-15,000 AED). The deposit is temporarily held on your credit card and released within 5-10 business days after the car is returned in good condition. We also offer no-deposit options for VIP members.'
        },
        {
          question: 'Can I get a refund if I cancel?',
          answer: 'Cancellations made 24+ hours before pickup receive a full refund. Cancellations within 24 hours are subject to a 25% cancellation fee. No-shows or cancellations after pickup time are non-refundable. Weather-related cancellations are handled case-by-case.'
        }
      ]
    },
    {
      title: 'Insurance & Safety',
      icon: Shield,
      color: 'from-red-400 to-red-600',
      questions: [
        {
          question: 'What insurance coverage is provided?',
          answer: 'All rentals include comprehensive insurance covering third-party liability, theft, and damage. Premium and comprehensive insurance packages with reduced excess are available. Coverage includes 24/7 roadside assistance and emergency services.'
        },
        {
          question: 'What happens if there is an accident?',
          answer: 'Immediately contact us and local authorities if required. Do not admit fault or make any agreements. Take photos and collect witness information. Our team will guide you through the process and coordinate with insurance providers. A replacement vehicle may be provided if available.'
        },
        {
          question: 'Are there any restricted areas?',
          answer: 'Our vehicles can be driven throughout the UAE. Cross-border travel to other GCC countries requires prior approval and additional insurance. Off-road driving and racing are strictly prohibited. Speed limits and traffic laws must be observed at all times.'
        },
        {
          question: 'What about traffic fines?',
          answer: 'Customers are responsible for all traffic violations and fines incurred during the rental period. We will notify you of any fines and collect payment along with an administrative fee. Serious violations may result in immediate termination of the rental agreement.'
        }
      ]
    },
    {
      title: 'Delivery & Pickup',
      icon: MapPin,
      color: 'from-purple-400 to-purple-600',
      questions: [
        {
          question: 'Do you offer delivery and collection?',
          answer: 'Yes, we provide delivery and collection throughout the UAE. Airport delivery is available at Dubai, Abu Dhabi, and Sharjah airports. Hotel, residence, and business address delivery is also available. Delivery fees apply based on location and distance.'
        },
        {
          question: 'How long does delivery take?',
          answer: 'Standard delivery within Dubai and Abu Dhabi takes 2-4 hours. Same-day delivery is available for bookings made before 2 PM. Express delivery (within 1 hour) is available for premium locations at an additional cost.'
        },
        {
          question: 'What if I need to extend my rental?',
          answer: 'Extensions are subject to availability and must be approved before the original return time. Daily rates apply for extensions. VIP members receive priority for extension requests. Contact us at least 4 hours before your original return time.'
        },
        {
          question: 'Can I return the car to a different location?',
          answer: 'Yes, one-way rentals are available between major cities (Dubai, Abu Dhabi, Sharjah). Additional fees apply based on the distance and logistics involved. Please specify your preferred return location when booking.'
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const itemId = categoryIndex * 100 + questionIndex;
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isOpen = (categoryIndex: number, questionIndex: number) => {
    const itemId = categoryIndex * 100 + questionIndex;
    return openItems.includes(itemId);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Frequently Asked</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ml-4">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about renting luxury cars in the UAE
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-400/5 transition-colors rounded-lg"
                    >
                      <span className="text-white font-semibold pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-yellow-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen(categoryIndex, questionIndex) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isOpen(categoryIndex, questionIndex) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <div className="border-t border-yellow-400/20 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 p-8 text-center">
            <HelpCircle className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our VIP concierge team is available 24/7 to assist you with any queries about our luxury car rental services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
                <Clock className="w-5 h-5 inline mr-2" />
                Chat with Us Now
              </button>
              
              <button className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Call +971 4 XXX XXXX
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div>
                <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                <p className="text-gray-400 text-sm">Round-the-clock assistance</p>
              </div>
              
              <div>
                <FileText className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Instant Quotes</h4>
                <p className="text-gray-400 text-sm">Get pricing in seconds</p>
              </div>
              
              <div>
                <MapPin className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">UAE-Wide Service</h4>
                <p className="text-gray-400 text-sm">All emirates covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;