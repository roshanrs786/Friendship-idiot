import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MemoriesGallery from './components/MemoriesGallery';
import Messages from './components/Messages';
import FriendshipQuiz from './components/FriendshipQuiz';
import Celebration from './components/Celebration';
import Footer from './components/Footer';
import MessageModal from './components/MessageModal';
import { MessageProvider } from './context/MessageContext';

function App() {
  return (
    <div className="min-h-screen font-poppins">
      <div id="confetti-container"></div>
      
      <MessageProvider>
        <Navbar />
        <Hero />
        <MemoriesGallery />
        <Messages />
        <FriendshipQuiz />
        <Celebration />
        <Footer />
        <MessageModal />
      </MessageProvider>
    </div>
  );
}

export default App;