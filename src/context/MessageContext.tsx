import React, { createContext, useState, ReactNode } from 'react';

interface Message {
  id: string;
  title: string;
  content: string;
}

interface MessageContextType {
  messages: Message[];
  addMessage: (title: string, content: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MessageContext = createContext<MessageContextType>({
  messages: [],
  addMessage: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {}
});

interface MessageProviderProps {
  children: ReactNode;
}

export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addMessage = (title: string, content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      title,
      content
    };
    
    setMessages([...messages, newMessage]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage, isModalOpen, setIsModalOpen }}>
      {children}
    </MessageContext.Provider>
  );
};