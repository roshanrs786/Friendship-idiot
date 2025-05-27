import { Heart } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <span className="text-xl dancing-font text-friendship-pink-400">Besties Forever</span>
            <p className="text-gray-400 mt-1">Celebrating 1 year of friendship</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>Created with <Heart className="inline-block mx-1 text-friendship-pink-400" size={14} fill="#f06292" /> for my amazing best friend</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;