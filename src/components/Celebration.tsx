import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import { createConfetti } from '../utils/confetti';

const Celebration: React.FC = () => {
  const handleShare = () => {
    alert("Share this page with your bestie! (In a real app, this would open share options)");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-friendship-pink-400 to-purple-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 dancing-font">Happy 1 Year Friendship Anniversary!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Thank you for being you and for letting me be part of your life. Here's to many more years of laughter, love, and unforgettable memories!
        </p>
        <div className="flex flex-wrap justify-center space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
          <button 
            onClick={createConfetti}
            className="bg-white text-friendship-pink-600 hover:bg-friendship-pink-100 font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
          >
            <Heart className="inline-block mr-2" size={20} /> Celebrate Again!
          </button>
          <button 
            onClick={handleShare}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-friendship-pink-600 font-bold py-3 px-8 rounded-full transition"
          >
            <Share2 className="inline-block mr-2" size={20} /> Share This Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Celebration;