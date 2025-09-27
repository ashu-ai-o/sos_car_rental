import React, { useState } from 'react';
import { ArrowLeft, Play, Eye, X, Volume2, VolumeX } from 'lucide-react';

interface VirtualToursProps {
  onNavigate: (page: string) => void;
}

const VirtualTours: React.FC<VirtualToursProps> = ({ onNavigate }) => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [isMuted, setIsMuted] = useState(true);

  const virtualTours = [
    {
      id: 1,
      title: 'Lamborghini Huracán EVO',
      type: '360°',
      thumbnail: 'https://images.pexels.com/photos/2502803/pexels-photo-2502803.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience every angle of this Italian masterpiece',
      videoUrl: 'https://player.vimeo.com/video/example1'
    },
    {
      id: 2,
      title: 'Ferrari F8 Tributo Interior',
      type: 'Video Tour',
      thumbnail: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Step inside the cockpit of racing excellence',
      videoUrl: 'https://player.vimeo.com/video/example2'
    },
    {
      id: 3,
      title: 'Rolls-Royce Cullinan Luxury',
      type: '360°',
      thumbnail: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Immerse yourself in ultimate luxury and craftsmanship',
      videoUrl: 'https://player.vimeo.com/video/example3'
    },
    {
      id: 4,
      title: 'McLaren 720S Performance',
      type: 'Video Tour',
      thumbnail: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Witness British engineering at its finest',
      videoUrl: 'https://player.vimeo.com/video/example4'
    },
    {
      id: 5,
      title: 'Tesla Model S Plaid Tech',
      type: '360°',
      thumbnail: 'https://images.pexels.com/photos/7144177/pexels-photo-7144177.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Explore the future of automotive technology',
      videoUrl: 'https://player.vimeo.com/video/example5'
    },
    {
      id: 6,
      title: 'Bentley Continental GT Craftsmanship',
      type: 'Video Tour',
      thumbnail: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Discover handcrafted British luxury',
      videoUrl: 'https://player.vimeo.com/video/example6'
    }
  ];

  const quickVideos = [
    {
      id: 1,
      title: 'Ferrari Engine Sound',
      thumbnail: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '0:15'
    },
    {
      id: 2,
      title: 'Lamborghini Acceleration',
      thumbnail: 'https://images.pexels.com/photos/2502803/pexels-photo-2502803.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '0:20'
    },
    {
      id: 3,
      title: 'Rolls-Royce Interior',
      thumbnail: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '0:25'
    },
    {
      id: 4,
      title: 'McLaren Doors Opening',
      thumbnail: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '0:12'
    }
  ];

  const MediaModal = ({ media, onClose }: { media: any; onClose: () => void }) => {
    if (!media) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
        <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/80 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/80 transition-colors"
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>

          {/* Media Content */}
          <div className="w-full h-full flex items-center justify-center p-4">
            {media.type === '360°' ? (
              <div className="relative w-full h-full max-w-4xl max-h-[70vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-400/30">
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                    <p className="text-white text-xl font-semibold">360° Interactive View</p>
                    <p className="text-gray-400">Click and drag to explore</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-white font-bold">{media.title}</h3>
                  <p className="text-gray-300 text-sm">{media.description}</p>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full max-w-4xl max-h-[70vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-400/30">
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                    <p className="text-white text-xl font-semibold">Video Tour</p>
                    <p className="text-gray-400">Cinematic experience</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-white font-bold">{media.title}</h3>
                  <p className="text-gray-300 text-sm">{media.description}</p>
                </div>
              </div>
            )}
          </div>

          {/* Book This Car Button */}
          <div className="absolute bottom-4 right-4">
            <button 
              onClick={() => onNavigate('fleet')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Book This Car
            </button>
          </div>
        </div>
      </div>
    );
  };

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
              <span className="text-white">360° Tours &</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ml-4">
                Videos
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Immerse yourself in our fleet with interactive 360° views and cinematic video tours
            </p>
          </div>
        </div>
      </section>

      {/* Main Virtual Tours */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {virtualTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 cursor-pointer"
                onClick={() => setSelectedMedia(tour)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.thumbnail}
                    alt={tour.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      tour.type === '360°' ? 'bg-blue-400 text-black' : 'bg-red-400 text-white'
                    }`}>
                      {tour.type}
                    </span>
                  </div>

                  {/* Play/View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    {tour.type === '360°' ? (
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Eye className="w-8 h-8 text-black" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-black ml-1" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-semibold text-sm">
                      {tour.type === '360°' ? 'Interactive View' : 'Video Experience'}
                    </span>
                    <span className="text-yellow-400 text-sm group-hover:translate-x-2 transform transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Video Reels */}
          <div className="bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Quick Reels</h3>
              <p className="text-gray-400">Short cinematic moments from our luxury fleet</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative bg-gradient-to-b from-gray-800/50 to-black/50 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedMedia({...video, type: 'Video Tour'})}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-black ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white font-semibold text-sm mb-1">{video.title}</h4>
                    <span className="text-yellow-400 text-xs">{video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              onClick={() => onNavigate('contact')}
              className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Book Showroom Visit
            </button>
          </div>
        </div>
      </section>

      <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </div>
  );
};

export default VirtualTours;