'use client';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import * as S from './styles';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('inicio');

  // Monitora as seções para atualizar o título e visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll('.secession');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  // Lógica de clique: Rola a tela e fecha o menu após 1.5s no mobile
  const handleNavClick = () => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1500); // Aguarda 1.5s após o clique para voltar a ser ícone
    }
  };

  return (
    <S.NavContainer $isOpen={isOpen} $currentSection={currentSection}>
        
        <S.NavLinks $isOpen={isOpen}>
            <a href="#inicio" onClick={handleNavClick}>Início</a>
            <a href="#Competências" onClick={handleNavClick}>Competências</a>
            <a href="#projetos" onClick={handleNavClick}>Projetos</a>
            <a href="#contato" onClick={handleNavClick}>Contato</a>
        </S.NavLinks>

        <S.MobileHeader $isOpen={isOpen}>
            <h2>{currentSection}</h2>

            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

        </S.MobileHeader>

    </S.NavContainer>
  );
}