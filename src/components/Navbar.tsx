import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-friendship-pink-500 text-xl dancing-font">Besties Forever</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-friendship-pink-600 hover:text-friendship-pink-800 transition"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('messages')} 
              className="text-gray-600 hover:text-friendship-pink-600 transition"
            >
              Messages
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-friendship-pink-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-3 py-2 text-friendship-pink-600 hover:bg-friendship-pink-50 rounded-md"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('messages')} 
              className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-friendship-pink-50 hover:text-friendship-pink-600 rounded-md"
            >
              Messages
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;