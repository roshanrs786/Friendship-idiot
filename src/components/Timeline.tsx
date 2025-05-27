import React from 'react';
import { 
  Handshake, 
  LaughIcon, 
  Heart, 
  UmbrellaIcon, 
  HelpingHand 
} from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    title: "The First Meeting",
    description: "Remember when we first met? It was at the campus coffee shop. We sat next to each other by chance and started talking about our favorite books. Little did we know this would be the start of something special.",
    date: "June 2022",
    icon: <Handshake size={20} />
  },
  {
    id: 2,
    title: "First Laugh Together",
    description: "That time when we both tried to cook a fancy dinner and ended up ordering takeout after nearly burning down the kitchen. We couldn't stop laughing for hours! This was when I knew we'd get along perfectly.",
    date: "July 2022",
    icon: <LaughIcon size={20} />
  },
  {
    id: 3,
    title: "First Heart-to-Heart",
    description: "The night we stayed up until dawn sharing our deepest thoughts and dreams. That's when our friendship went from casual to meaningful.",
    date: "September 2022",
    icon: <Heart size={20} />
  },
  {
    id: 4,
    title: "Our First Adventure",
    description: "Our spontaneous weekend road trip was unforgettable! From singing at the top of our lungs to getting lost and finding that amazing little diner, we created memories that will last forever.",
    date: "November 2022",
    icon: <UmbrellaIcon size={20} />
  },
  {
    id: 5,
    title: "Being There For Each Other",
    description: "When you were going through that tough breakup, I was your shoulder to cry on. And I'll never forget how you supported me through my finals week crisis. That's when I realized - this is real friendship.",
    date: "February 2023",
    icon: <HelpingHand size={20} />
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline\" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="dancing-font text-friendship-pink-600">Our</span> Friendship Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From our first hello to becoming inseparable, here's our story in moments.
          </p>
        </div>
        
        <div className="timeline-container">
          {timelineEvents.map(event => (
            <div key={event.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="bg-friendship-pink-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-friendship-pink-100 text-friendship-pink-600 rounded-full p-2 mr-3">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                </div>
                <p className="text-gray-600">{event.description}</p>
                <div className="mt-4 flex justify-end">
                  <span className="text-sm text-friendship-pink-500">{event.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;