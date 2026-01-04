import { useEffect, useRef, useState } from 'react'
import './App.css'
import ChatInput from './components/input'
import ChatMessage from './components/message'
import './components/input.css'

function ChatMessages({chatMessages}){
  
 const chatMessagesRef= useRef(null);
  
  useEffect(()=>{
   const containerElem= chatMessagesRef.current;
   if(containerElem){
    containerElem.scrollTop =containerElem.scrollHeight;
   }
  },[chatMessages])
return (
  <div className='chat-container'
  ref={chatMessagesRef}>
      {chatMessages.map((chatMessage)=>{
            return (
              <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
              />
              
            )
          })}
          </div>
);
}

function App() {
  const [chatMessages,setChatMessages]= useState([/*{
    message:'hello chatbot',
    sender: 'user',
    id: 'id1'
  },
  {
    message:'Hello! How Can I Help you?',
    sender: 'robot',
    id: 'id2'
  },
  {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3'
  },
  {
    message: 'Today is December 31',
    sender: 'robot',
    id: 'id4'
  }*/
])

  return( 
  <div className='app-container'>
    {chatMessages.length === 0 && (
              <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox below.
              </p>
            )}
  <ChatMessages
  chatMessages={chatMessages}
  />
       <ChatInput 
  chatMessages={chatMessages}
  setChatMessages={setChatMessages}
  />
    </div>
  )
}

export default App
