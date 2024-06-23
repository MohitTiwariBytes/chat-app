// src/Chat.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f2f5;
  font-family: 'Arial', sans-serif;
  color: black;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 70%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  overflow-y: scroll;
`;

const Message = styled.div`
  background-color: #e4e6eb;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  max-width: 70%;
  align-self: ${({ isOwnMessage }) => (isOwnMessage ? 'flex-end' : 'flex-start')};
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 60%;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isOwnMessage: true }]);
      setMessage('');
    }
  };

  return (
    <ChatContainer>
      <h1>Chat Application</h1>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <Message key={index} isOwnMessage={msg.isOwnMessage}>
            {msg.text}
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
