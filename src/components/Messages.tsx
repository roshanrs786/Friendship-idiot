import React, { useContext } from 'react';
import { MessageContext } from '../context/MessageContext';
import { Quote, Star, Heart, GlassWater } from 'lucide-react';

const Messages: React.FC = () => {
  const { setIsModalOpen } = useContext(MessageContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section id="messages" className="py-16 bg-friendship-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="dancing-font text-friendship-pink-600">Heartfelt</span> Messages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Words can't fully express what your friendship means to me, but here's my attempt.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="message-box p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-friendship-pink-100 text-friendship-pink-600 rounded-full p-3 mr-4 flex-shrink-0">
                <Quote size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">To My Dearest Bestie,</h3>
                <p className="text-gray-600">
                  One year ago, our paths crossed in the most unexpected way. What started as a chance meeting at that computer class has blossomed into the most precious friendship of my life. 
                  You've seen me at my best and my worst, and loved me through it all. Thank you for the laughter, the inside jokes, the shoulder to cry on, and the endless support.
                </p>
              </div>
            </div>
          </div>
          
          <div className="message-box p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-friendship-pink-100 text-friendship-pink-600 rounded-full p-3 mr-4 flex-shrink-0">
                <Star size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">What I Love About You</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Your incredible empathy that always makes everyone feel heard</li>
                  <li>The way you always remember the little details about my day</li>
                  <li>Your ability to find humor even in tough situations</li>
                  <li>How we can be completely silent together and still have the best time</li>
                  <li>Your boundless creativity in your dreams that inspires me daily 🤭</li>
                  <li>The way you call me "Thambii" and "Thango pulla" 🤣</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="message-box p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-friendship-pink-100 text-friendship-pink-600 rounded-full p-3 mr-4 flex-shrink-0">
                <Heart size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">My Promise to You</h3>
                <p className="text-gray-600">
                  As we celebrate this first year, I promise to always be there for you - to laugh with you, cry with you, and grow with you. 
                  I promise to listen without judgment, support without conditions, and love without limits. 
                  No matter where life takes us, you'll always have a piece of my heart.
                </p>
              </div>
            </div>
          </div>
          
          <div className="message-box p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-friendship-pink-100 text-friendship-pink-600 rounded-full p-3 mr-4 flex-shrink-0">
                <GlassWater size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Here's to Us!</h3>
                <p className="text-gray-600">
                  Cheers to 365 days of inside jokes, shared dreams, and unconditional support. 
                  Cheers to the midnight talks, the spontaneous adventures, and the comfortable silences. 
                  Cheers to a friendship that feels like home. Here's to many more years of creating memories together!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={openModal}
            className="bg-friendship-pink-500 hover:bg-friendship-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            <span className="mr-2">+</span> Add Your Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Messages;