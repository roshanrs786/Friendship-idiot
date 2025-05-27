import React, { useContext, useState } from 'react';
import { X } from 'lucide-react';
import { MessageContext } from '../context/MessageContext';

const MessageModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen, addMessage } = useContext(MessageContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const handleClose = () => {
    setIsModalOpen(false);
  };
  
  const handleSave = () => {
    if (title && content) {
      addMessage(title, content);
      setTitle('');
      setContent('');
      setIsModalOpen(false);
      alert("Your personal message has been saved!");
    } else {
      alert("Please fill in both the title and message content.");
    }
  };
  
  if (!isModalOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Add Your Personal Message</h3>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="message-title" className="block text-gray-700 mb-2">Title</label>
          <input 
            type="text" 
            id="message-title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-friendship-pink-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message-content" className="block text-gray-700 mb-2">Your Message</label>
          <textarea 
            id="message-content" 
            rows={5} 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-friendship-pink-500"
          />
        </div>
        <div className="flex justify-end">
          <button 
            onClick={handleSave}
            className="bg-friendship-pink-500 hover:bg-friendship-pink-600 text-white font-bold py-2 px-6 rounded-md transition"
          >
            Save Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;