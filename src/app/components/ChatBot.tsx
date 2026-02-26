import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { Send, X, Bot, User, MessageCircle, Loader2 } from 'lucide-react';
import { useTheme } from 'next-themes';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm Farooq's AI assistant. How can I help you today? I can tell you about his UX experience, his design process, or help you book a meeting.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (input: string): string => {
    const text = input.toLowerCase();
    if (text.includes('experience') || text.includes('work')) {
      return "Farooq has over 12 years of experience in UX/UI design, specifically focusing on enterprise-scale SaaS products and healthcare dashboards.";
    }
    if (text.includes('process') || text.includes('design')) {
      return "His process is user-centered, involving deep UX research, wireframing, rapid prototyping, and meticulous UI implementation using tools like Figma.";
    }
    if (text.includes('contact') || text.includes('email') || text.includes('talk')) {
      return "You can reach Farooq directly at farooq260786@gmail.com or we can schedule a quick intro call!";
    }
    if (text.includes('location') || text.includes('where')) {
      return "Farooq is based in Kolkata, West Bengal, India, and is available for remote opportunities worldwide.";
    }
    return "That's interesting! I'd love to chat more about that. You can also email Farooq directly at farooq260786@gmail.com for more specific inquiries.";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] md:hidden"
          />
          
          <Motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
            className={`fixed bottom-4 right-4 md:bottom-24 md:right-8 w-[calc(100%-2rem)] md:w-96 h-[600px] max-h-[80vh] rounded-3xl shadow-2xl z-[101] flex flex-col overflow-hidden border ${
              isDarkMode ? 'bg-[#101828] border-white/10' : 'bg-white border-gray-200'
            }`}
          >
            {/* Header */}
            <div className={`p-4 border-b flex items-center justify-between ${
              isDarkMode ? 'bg-blue-600 border-white/10' : 'bg-blue-600 border-gray-100'
            }`}>
              <div className="flex items-center gap-3">
                <div className="size-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <Bot className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Farooq's Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] text-blue-100 font-medium uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`size-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : (isDarkMode ? 'bg-white/5 text-blue-400' : 'bg-blue-50 text-blue-600')
                    }`}>
                      {msg.sender === 'user' ? <User className="size-4" /> : <Bot className="size-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : (isDarkMode ? 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none' : 'bg-gray-100 text-gray-800 rounded-tl-none')
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2">
                    <div className={`size-8 rounded-full flex items-center justify-center ${
                      isDarkMode ? 'bg-white/5 text-blue-400' : 'bg-blue-50 text-blue-600'
                    }`}>
                      <Bot className="size-4" />
                    </div>
                    <div className={`p-4 rounded-2xl rounded-tl-none ${
                      isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-100'
                    }`}>
                      <Loader2 className="size-4 animate-spin text-blue-500" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${isDarkMode ? 'border-white/10 bg-[#0d121f]' : 'border-gray-100 bg-gray-50'}`}>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className={`w-full pl-4 pr-12 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 text-white placeholder:text-gray-500' 
                      : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
                  }`}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="size-4" />
                </button>
              </form>
              <p className={`text-[10px] text-center mt-3 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                Farooq usually responds to emails within 24 hours.
              </p>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
