import React from 'react';

const polaroids = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1509956/pexels-photo-1509956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Our first selfie together!"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "That crazy adventure day"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "When we matched outfits"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2421250/pexels-photo-2421250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Midnight snack attack"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Bestie beach day"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/5707720/pexels-photo-5707720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "To many more years!"
  }
];

const PolaroidGallery: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="dancing-font text-friendship-pink-600">Polaroid</span> Memories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Some moments are too precious not to capture. Here are our favorites!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {polaroids.map((polaroid) => (
            <div key={polaroid.id} className="polaroid">
              <img 
                src={polaroid.src} 
                alt={`Polaroid ${polaroid.id}`} 
                className="w-full h-64 object-cover mb-3"
              />
              <p className="text-center text-gray-700">{polaroid.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolaroidGallery;