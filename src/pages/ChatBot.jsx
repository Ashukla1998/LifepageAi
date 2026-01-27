import React from 'react'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../hooks/Chatbot/config';
import ActionProvider from '../hooks/Chatbot/ActionProvider';
import MessageParser from '../hooks/Chatbot/MessageParser';
export default function ChatBot() {
  return (
    <div>
        <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />
    </div>
  )
}
