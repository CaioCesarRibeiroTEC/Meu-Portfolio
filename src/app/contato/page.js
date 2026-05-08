'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import * as S from './styles';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaPaperPlane, FaTrash, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socket = io('http://192.168.1.10:3002');

export default function Contato() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [chatStage, setChatStage] = useState('welcome'); 
  const [userName, setUserName] = useState('');
  const [isCaioOnline, setIsCaioOnline] = useState(false);
  
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  
  const chatScrollRef = useRef(null);

  useEffect(() => {
    setIsMounted(true); 

    socket.on('caio_status', (data) => {
      setIsCaioOnline(data.isOnline);
    });

    const savedSession = localStorage.getItem('cr_developer_chat');
    
    if (savedSession) {
      try {
        const parsedData = JSON.parse(savedSession);
        const loadedHistory = parsedData.history || [];
        const loadedName = parsedData.userName || '';

        setMessages(loadedHistory);

        if (loadedName) {
          setUserName(loadedName);
          setChatStage('active');
          setCurrentOptions([
            {label: "Fale da sua experiência"}, 
            {label: "Quais são seus projetos?"},
            {label: "Quais tecnologias você usa?"},
            {label: "Falar com o Caio"}
          ]);
          socket.emit('start_session', { userName: capturedName, history: newHistory });
          saveSessionToMemory(newHistory, capturedName);
          return;
        } else {
          startWelcomeSequence();
        }
      } catch (error) {
        startWelcomeSequence();
      }
    } else {
      startWelcomeSequence();
    }

    socket.on('bot_response', (data) => {
      setIsTyping(false);
      setMessages(prev => {
        const newHistory = [...(prev || []), { sender: 'bot', ...data }];
        saveSessionToMemory(newHistory, userName);
        return newHistory;
      });

      const formattedOptions = (data.options || []).map(opt => ({ label: opt }));
      setCurrentOptions(formattedOptions);

      if (data.type === 'navigate' && data.route) {
        setTimeout(() => {
          router.push(data.route); 
        }, 3000); 
      }
    });

    socket.on('caio_response', (data) => {
      setIsTyping(false);
      setMessages(prev => {
        const newHistory = [...(prev || []), { sender: 'caio', text: data.text }];
        saveSessionToMemory(newHistory, userName);
        return newHistory;
      });
      setCurrentOptions([]);
    });

    return () => {
      socket.off('caio_status');
      socket.off('bot_response');
      socket.off('caio_response');
    };
  }, [userName, router]); 

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const saveSessionToMemory = (historyToSave, currentName) => {
    const nameToSave = currentName || userName;
    if (nameToSave) {
      localStorage.setItem('cr_developer_chat', JSON.stringify({
        userName: nameToSave,
        history: historyToSave || [],
        lastTimestamp: Date.now() 
      }));
    }
  };

  const startWelcomeSequence = () => {
    setIsTyping(true);
    setMessages([{ sender: 'bot', text: "" }]);
    
    const text1 = "Olá! Sou o CR-Bot, assistente virtual do Caio.";
    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      currentText += text1[index];
      setMessages([{ sender: 'bot', text: currentText }]);
      index++;
      
      if (index === text1.length) {
        clearInterval(interval);
        setTimeout(() => {
          setMessages(prev => [...(prev || []), { 
            sender: 'bot', 
            text: "Para iniciarmos nosso chat, por favor, me diga: Qual é o seu nome?" 
          }]);
          setIsTyping(false);
          setChatStage('asking_name');
        }, 800);
      }
    }, 30);
  };

  // 2. NOVA FUNÇÃO DEDICADA PARA LIMPAR O CHAT
  const handleClearChat = () => {
    localStorage.removeItem('cr_developer_chat');
    setMessages([]);
    setUserName('');
    setChatStage('welcome');
    setInputText('');
    setCurrentOptions([]);
    startWelcomeSequence();
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const textToSend = inputText;
    setInputText(''); 

    if (chatStage === 'asking_name') {
      const capturedName = textToSend;
      setUserName(capturedName);
      setChatStage('active');
      
      const newHistory = [
        ...(messages || []), 
        { sender: 'user', text: capturedName },
        { sender: 'bot', text: `Prazer em te conhecer, ${capturedName}! O que você gostaria de explorar hoje?` }
      ];
      
      setMessages(newHistory);
      setCurrentOptions([
        { label: "Fale da sua experiência" },
        { label: "Quais são seus projetos?" },
        { label: "Quero te contratar" }
      ]);

      socket.emit('start_session', { userName: capturedName, history: newHistory });
      saveSessionToMemory(newHistory, capturedName);
      return;
    }

    if (chatStage === 'active') {
      const updatedMessages = [...(messages || []), { sender: 'user', text: textToSend }];
      setMessages(updatedMessages);
      setCurrentOptions([]);
      setIsTyping(true);
      
      saveSessionToMemory(updatedMessages, userName);
      socket.emit('user_message', { text: textToSend });
    }
  };

  const handleOptionClick = (label) => {
    setInputText(label);
    setTimeout(() => {
      document.getElementById('chat-form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 50);
  };

  return (
    <S.Container>
      <S.InfoArea>
        <h2>Vamos conversar?</h2>
        <p>Interaja com a minha IA treinada ao lado para conhecer meus projetos, ou entre em contato diretamente.</p>
        <S.SocialLinks>
          <a href="https://www.linkedin.com/in/caio-c%C3%A9sar-ribeiro-b07b46325/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin /></a>
         
          <a href="https://www.instagram.com/cr.developer.dev/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram /></a>

          <a href="https://x.com/https://x.com/kayorib90121176" target="_blank" rel="noopener noreferrer" title="X">
            <FaXTwitter />
          </a>

          <a href="https://wa.me/5562981904367" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <FaWhatsapp /></a>

        </S.SocialLinks>
      </S.InfoArea>

      <S.ChatArea>
        <S.ChatBox>
          <S.ChatHeader>
            <div className="avatar">CR</div>
            <div className="status">
              <h3>CR-Bot</h3>
              <p>
                <S.OnlineBadge $isOnline={isCaioOnline} />
                {isCaioOnline ? 'Caio Online' : 'Caio Offline'} 
                {isTyping && ' • Digitando...'}
              </p>
            </div>
            
            {/* 3. INCLUÍMOS O BOTÃO DE LIXEIRA AQUI NO HEADER */}
            <S.ClearButton onClick={handleClearChat} title="Limpar conversa">
              <FaTrash />
            </S.ClearButton>

          </S.ChatHeader>

          <S.MessagesContainer ref={chatScrollRef}>
            <div className="messages-wrapper">
              {isMounted && (messages || []).map((msg, idx) => (
                <div key={`msg-${idx}-${msg.sender}`}>
                  {msg.sender === 'caio' && <div style={{fontSize: '0.8rem', color: '#00ffcc', marginBottom: '4px'}}>Caio César:</div>}
                  
                  <S.MessageBubble $isUser={msg.sender === 'user'} style={msg.sender === 'caio' ? { border: '1px solid #00ffcc'} : {}}>
                    {msg.text}
                  </S.MessageBubble>
                </div>
              ))}
            </div>
            
            <div className="typing-wrapper">
              {isMounted && isTyping && (messages || []).length > 0 && chatStage === 'active' ? (
                <S.TypingIndicator><span /><span /><span /></S.TypingIndicator>
              ) : null}
            </div>
          </S.MessagesContainer>

          <S.ChatFooter>
            <S.OptionsArea>
              {isMounted && (currentOptions || []).map((opt, idx) => (
                <S.OptionButton key={idx} onClick={() => handleOptionClick(opt.label)}>
                  {opt.label}
                </S.OptionButton>
              ))}
            </S.OptionsArea>

            <S.InputArea id="chat-form" onSubmit={handleSendMessage}>
              <input 
                type="text" 
                placeholder={chatStage === 'asking_name' ? "Digite seu nome..." : "Escreva uma mensagem..."} 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isTyping && chatStage === 'active'}
              />
              <button type="submit" disabled={(isTyping && chatStage === 'active') || !inputText.trim()}>
                <FaPaperPlane />
              </button>
            </S.InputArea>
          </S.ChatFooter>

        </S.ChatBox>
      </S.ChatArea>
    </S.Container>
  );
}