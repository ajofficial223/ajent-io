
import { useState, useEffect } from 'react';
import { Message } from '@/types/chat';
import { useToast } from "@/components/ui/use-toast";

export const useChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();
  
  const toggleChat = () => setIsOpen(!isOpen);
  
  const sendMessage = async (inputValue: string) => {
    const userMessage = {
      text: inputValue,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    try {
      const response = await fetch('https://ajtestingwork.app.n8n.cloud/webhook-test/AJent.io', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({ 
          message: inputValue,
          userId: 'website-visitor',
          timestamp: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      // Extract the bot response from different possible formats
      let botResponse = "Sorry, I couldn't understand the response format.";
      
      // Handle array format response
      if (Array.isArray(data) && data.length > 0 && data[0].output) {
        botResponse = data[0].output;
      } 
      // Handle direct output format
      else if (data.output) {
        botResponse = data.output;
      }
      // Handle response or message format
      else if (data.response || data.message) {
        botResponse = data.response || data.message;
      }
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: botResponse,
          isUser: false,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setIsTyping(false);
      }, 500);
      
    } catch (error) {
      console.error("Error sending message to webhook:", error);
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "I'm having trouble connecting right now. Please try again later.",
          isUser: false,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setIsTyping(false);
      }, 500);
      
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }
  };
  
  useEffect(() => {
    // Add initial bot message when chat is first opened
    if (isOpen && messages.length === 0) {
      setMessages([{
        text: "Hi there! I'm the AJent.io support assistant. How can I help you today?",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  }, [isOpen, messages.length]);
  
  return {
    isOpen,
    messages,
    isTyping,
    toggleChat,
    sendMessage
  };
};
