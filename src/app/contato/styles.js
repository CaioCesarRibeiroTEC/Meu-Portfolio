import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 8%;
  color: #fff;
  flex-wrap: wrap;
`;

export const InfoArea = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h2 {
    font-size: 3rem;
    color: #00ffcc;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.1rem;
    color: #ccc;
    line-height: 1.6;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  font-size: 1.8rem;

  a {
    color: #888;
    transition: 0.3s;
    &:hover { color: #00ffcc; transform: translateY(-3px); }
  }
`;

export const ChatArea = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatBox = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 12px;
  border: 1px solid #333;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #1a1a1a;
  border-bottom: 1px solid #222;

  .avatar {
    width: 45px;
    height: 45px;
    background-color: #00ffcc;
    color: #000;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }
  
  h3 { margin: 0; font-size: 1.1rem; }
  p { margin: 0; font-size: 0.8rem; color: #888; display: flex; align-items: center;}
`;

export const OnlineBadge = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${props => props.$isOnline ? '#00ffcc' : '#ff4444'};
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
  box-shadow: 0 0 8px ${props => props.$isOnline ? '#00ffcc' : 'transparent'};
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
`;

export const MessageBubble = styled.div`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.95rem;
  line-height: 1.5;
  align-self: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  background-color: ${props => props.$isUser ? '#00ffcc' : '#222'};
  color: ${props => props.$isUser ? '#000' : '#fff'};
  border-bottom-right-radius: ${props => props.$isUser ? '2px' : '12px'};
  border-bottom-left-radius: ${props => props.$isUser ? '12px' : '2px'};
`;

export const ProjectCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-left: 3px solid #00ffcc;
  padding: 12px;
  margin-top: 10px;
  border-radius: 6px;
  
  h4 { margin: 0 0 5px 0; color: #00ffcc; font-size: 0.9rem; }
  p { margin: 0; font-size: 0.8rem; color: #aaa; }
`;

export const ChatFooter = styled.div`
  background-color: #1a1a1a;
  border-top: 1px solid #222;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OptionsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const OptionButton = styled.button`
  background: transparent;
  border: 1px solid #00ffcc;
  color: #00ffcc;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover { background: #00ffcc; color: #000; }
`;

export const InputArea = styled.form`
  display: flex;
  align-items: center;
  background-color: #111;
  border: 1px solid #333;
  border-radius: 25px;
  padding: 5px 15px;

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #fff;
    padding: 10px 0;
    outline: none;
  }

  button {
    background: transparent;
    border: none;
    color: #00ffcc;
    font-size: 1.2rem;
    cursor: pointer;
    &:disabled { color: #444; cursor: not-allowed; }
  }
`;

const typing = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

export const TypingIndicator = styled.div`
  display: flex;
  gap: 4px;
  padding: 12px 16px;
  background-color: #222;
  border-radius: 12px;
  align-self: flex-start;
  width: fit-content;

  span {
    width: 6px; height: 6px; background-color: #888; border-radius: 50%;
    animation: ${typing} 1.4s infinite ease-in-out;
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`;

export const ClearButton = styled.button`
  background: transparent;
  border: none;
  color: #555;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: auto; /* Empurra o botão totalmente para o lado direito */
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ff4444; /* Fica vermelho estilo "apagar" */
    transform: scale(1.1);
  }
`;