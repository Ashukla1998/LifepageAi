// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'LifePageBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#E46C09',
    },
    chatButton: {
      backgroundColor: '#E46C09',
    },
  },
};

export default config;