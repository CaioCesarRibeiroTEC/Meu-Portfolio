'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './ChatWidgetStyles';
import { FaComments } from 'react-icons/fa';

export default function ChatWidget() {
  const router = useRouter();
  const [hasActiveSession, setHasActiveSession] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    // 1. Lógica do Relógio de 5 Minutos
    const checkSession = () => {
      const saved = localStorage.getItem('cr_developer_chat');
      if (saved) {
        const parsed = JSON.parse(saved);
        const lastActive = parsed.lastTimestamp || 0;
        const now = Date.now();

        if (now - lastActive > 5 * 60 * 1000) {
          localStorage.removeItem('cr_developer_chat');
          setHasActiveSession(false);
        } else {
          setHasActiveSession(true);
        }
      } else {
        setHasActiveSession(false);
      }
    };

    // 2. Lógica Espacial (Descobrir onde o utilizador está na página)
    const checkVisibility = () => {
      const contactSection = document.getElementById('contato');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Se a secção de contacto estiver na zona visível do ecrã
        setIsContactVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    checkSession();
    checkVisibility();

    const interval = setInterval(checkSession, 5000);
    window.addEventListener('scroll', checkVisibility);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  // REGRA DE OURO: O ícone só aparece se existir sessão E se o chat principal NÃO estiver no ecrã
  const shouldShowIcon = !isContactVisible && hasActiveSession;

  if (!shouldShowIcon) return null;

  return (
    <S.Launcher onClick={() => router.push('/#contato')}>
      <FaComments />
    </S.Launcher>
  );
}