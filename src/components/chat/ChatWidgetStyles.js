// src/components/ChatWidgetStyles.js
import styled from 'styled-components';

export const Launcher = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #00ffcc;
  color: #111;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 255, 204, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: ${props => props.$minimized ? '30px' : '30px'};
  right: 30px;
  width: 350px;
  height: ${props => props.$minimized ? '60px' : '500px'};
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 9999;
  transition: height 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const Header = styled.div`
  background-color: #111;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #00ffcc;
  border-bottom: 1px solid #333;
  user-select: none;

  .actions {
    display: flex;
    gap: 15px;
    cursor: pointer;
    color: #888;

    svg:hover {
      color: #fff;
    }
  }
`;

export const Messages = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 3px;
  }
`;

export const Bubble = styled.div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
  align-self: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  background-color: ${props => props.$isUser ? '#00ffcc' : '#222'};
  color: ${props => props.$isUser ? '#000' : '#fff'};
  border-bottom-right-radius: ${props => props.$isUser ? '4px' : '12px'};
  border-bottom-left-radius: ${props => props.$isUser ? '12px' : '4px'};
`;

export const Footer = styled.form`
  display: flex;
  padding: 15px;
  background-color: #111;
  border-top: 1px solid #333;

  input {
    flex: 1;
    background: #222;
    border: 1px solid #444;
    padding: 10px 15px;
    border-radius: 20px;
    color: #fff;
    outline: none;
    
    &:focus { border-color: #00ffcc; }
  }

  button {
    background: transparent;
    border: none;
    color: #00ffcc;
    font-size: 1.2rem;
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover { color: #fff; }
  }
`;

export const Loading = styled.div`
  color: #888;
  font-size: 0.8rem;
  align-self: flex-start;
  margin-left: 10px;
`;