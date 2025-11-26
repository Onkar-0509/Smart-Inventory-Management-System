// import React, { useState, useRef, useEffect } from 'react';
// import { FiSend, FiTrash2, FiBot, FiUser, FiClock } from 'react-icons/fi';
// import { toast } from 'react-toastify';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hello! I'm your AI Shop Assistant. I can help you analyze sales, check inventory, view customer data, and provide business insights. What would you like to know?",
//       sender: 'bot',
//       timestamp: new Date()
//     }
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [conversationHistory, setConversationHistory] = useState([]);
//   const messagesEndRef = useRef(null);

//   // API endpoint - replace with your actual backend URL
//   const API_URL = 'http://localhost:5000/api/chat';

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Enhanced API call to backend
//   const sendMessageToAPI = async (userMessage, history) => {
//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           message: userMessage,
//           conversation_history: history,
//           context: {
//             user_type: 'shop_owner',
//             timestamp: new Date().toISOString()
//           }
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to get response from AI');
//       }

//       const data = await response.json();
//       return data.response;
//     } catch (error) {
//       console.error('API Error:', error);
//       throw new Error('Sorry, I encountered an error. Please try again.');
//     }
//   };

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === '') return;

//     // Add user message
//     const userMessage = {
//       id: Date.now(),
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputMessage('');
//     setIsLoading(true);

//     try {
//       // Update conversation history
//       const updatedHistory = [...conversationHistory, { role: 'user', content: inputMessage }];
//       setConversationHistory(updatedHistory);

//       // Send to backend API
//       const aiResponse = await sendMessageToAPI(inputMessage, updatedHistory);
      
//       const botMessage = {
//         id: Date.now() + 1,
//         text: aiResponse,
//         sender: 'bot',
//         timestamp: new Date()
//       };

//       setMessages(prev => [...prev, botMessage]);
//       setConversationHistory(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      
//     } catch (error) {
//       toast.error(error.message);
      
//       const errorMessage = {
//         id: Date.now() + 1,
//         text: "I'm having trouble connecting right now. Please try again in a moment.",
//         sender: 'bot',
//         timestamp: new Date(),
//         isError: true
//       };
      
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const clearChat = () => {
//     setMessages([
//       {
//         id: 1,
//         text: "Hello! I'm your AI Shop Assistant. I can help you analyze sales, check inventory, view customer data, and provide business insights. What would you like to know?",
//         sender: 'bot',
//         timestamp: new Date()
//       }
//     ]);
//     setConversationHistory([]);
//     toast.info('Chat cleared');
//   };

//   const quickActions = [
//     { label: 'Sales Report', query: 'Show me today\'s sales report' },
//     { label: 'Low Stock', query: 'Which items are low in stock?' },
//     { label: 'Top Products', query: 'What are my top selling products this week?' },
//     { label: 'Customer Insights', query: 'Give me customer purchase insights' },
//     { label: 'Revenue Analysis', query: 'How is my revenue trending this month?' },
//     { label: 'Inventory Status', query: 'Show current inventory status' }
//   ];

//   const formatTime = (date) => {
//     return date.toLocaleTimeString('en-US', { 
//       hour: '2-digit', 
//       minute: '2-digit',
//       hour12: true 
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
//       {/* Enhanced Chat Header */}
//       <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
//               <FiBot className="w-8 h-8" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold">AI Shop Assistant</h1>
//               <p className="text-purple-100 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//                 Online • Ready to analyze your business
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={clearChat}
//             className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 backdrop-blur-sm"
//           >
//             <FiTrash2 className="w-4 h-4" />
//             Clear Chat
//           </button>
//         </div>
//       </div>

//       {/* Quick Actions Bar */}
//       <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4">
//         <div className="flex flex-wrap gap-2 justify-center">
//           {quickActions.map((action, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 setInputMessage(action.query);
//                 setTimeout(handleSendMessage, 100);
//               }}
//               disabled={isLoading}
//               className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
//             >
//               {action.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Enhanced Messages Container */}
//       <div className="h-96 overflow-y-auto p-6 bg-gradient-to-b from-white to-slate-50">
//         <div className="space-y-6">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div className={`flex gap-3 max-w-2xl ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
//                 {/* Avatar */}
//                 <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center ${
//                   message.sender === 'user' 
//                     ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
//                     : 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white'
//                 }`}>
//                   {message.sender === 'user' ? <FiUser className="w-5 h-5" /> : <FiBot className="w-5 h-5" />}
//                 </div>

//                 {/* Message Bubble */}
//                 <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
//                   <div className={`rounded-3xl px-5 py-3 shadow-sm ${
//                     message.sender === 'user'
//                       ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md'
//                       : message.isError
//                       ? 'bg-gradient-to-br from-red-100 to-red-50 border border-red-200 text-red-800'
//                       : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 text-gray-800 rounded-bl-md'
//                   }`}>
//                     {message.text.split('\n').map((line, index) => (
//                       <p key={index} className="leading-relaxed">{line}</p>
//                     ))}
//                   </div>
                  
//                   {/* Timestamp */}
//                   <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
//                     <FiClock className="w-3 h-3" />
//                     {formatTime(new Date(message.timestamp))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
          
//           {/* Enhanced Loading Indicator */}
//           {isLoading && (
//             <div className="flex justify-start">
//               <div className="flex gap-3 max-w-2xl">
//                 <div className="flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
//                   <FiBot className="w-5 h-5" />
//                 </div>
//                 <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl rounded-bl-md px-5 py-4">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
//                     <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                     <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">Analyzing your query...</p>
//                 </div>
//               </div>
//             </div>
//           )}
          
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       {/* Enhanced Input Area */}
//       <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm p-6">
//         <div className="flex space-x-4">
//           <div className="flex-1 relative">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Ask me anything about your shop: sales, inventory, customers..."
//               className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 bg-white shadow-sm disabled:opacity-50 pr-12"
//               disabled={isLoading}
//             />
//           </div>
//           <button
//             onClick={handleSendMessage}
//             disabled={isLoading || inputMessage.trim() === ''}
//             className="px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 font-semibold"
//           >
//             <FiSend className="w-5 h-5" />
//             Send
//           </button>
//         </div>
        
//         {/* Suggestions Text */}
//         <div className="text-center mt-4">
//           <p className="text-sm text-gray-500">
//             Try asking about: <span className="text-purple-600 font-medium">sales trends</span>, <span className="text-purple-600 font-medium">inventory levels</span>, or <span className="text-purple-600 font-medium">customer insights</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

import React from 'react'

const chatbot = () => {
  return (
    <div>
      
    </div>
  )
}

export default chatbot
