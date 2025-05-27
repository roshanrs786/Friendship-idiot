import { Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { createConfetti } from '../utils/confetti';

// Import local images
import photo3 from '../assets/FullSizeRender.jpg';
import photo2 from '../assets/IMG-20240914-WA0009.jpg';
import photo1 from '../assets/IMG-20250319-WA0021.jpg';

const photos: string[] = [
  photo1,
  photo2,
  photo3
];

const Hero: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="dancing-font text-friendship-pink-600">1 Year</span> of 
              <span className="text-friendship-pink-600"> Friendship</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Celebrating the beautiful bond we've built over the past year. 
              Through laughter and tears, you've been my constant. Here's to many more years of friendship!
            </p>
            <button 
              onClick={createConfetti}
              className="bg-friendship-pink-500 hover:bg-friendship-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              <Heart className="inline-block mr-2" size={20} /> Celebrate Us!
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-friendship-pink-200 rounded-full flex items-center justify-center overflow-hidden shadow-xl floating">
                <img 
                  src={photos[currentPhotoIndex]} 
                  alt="Friendship" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="1260"
                  height="750"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-full shadow-lg heart-beat">
                <Heart fill="#ff6b8b" stroke="#ff6b8b" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;