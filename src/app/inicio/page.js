'use client';
import { useState } from 'react'; 
import Image from 'next/image'; // 1. IMPORTAMOS O COMPONENTE DE IMAGEM DO NEXT.JS
import * as S from './styles';
import { FaWhatsapp, FaInstagram, FaXTwitter, FaGithub, FaLinkedin, FaCommentDots } from 'react-icons/fa6';

export default function Beginning() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.Container>
      <S.Banner>
        <div className="logo-area">
          <Image 
            src="/assets/eu.png" 
            alt="CRdeveloper" 
            width={300} 
            height={150} 
            priority={true}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              maxWidth: '300px',
              borderRadius: '15px'
            }}
          />
        </div>

        <div className='links-container'>

          <span>Meus Contatos</span>
            <a href="https://linkedin.com/in/https://www.linkedin.com/in/caio-c%C3%A9sar-ribeiro-b07b46325/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <div className="links-area">
              <a href="https://wa.me/5562981904367" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/https://github.com/CaioCesarRibeiroTEC" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://instagram.com/https://www.instagram.com/cr.developer.dev/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com/https://x.com/kayorib90121176" target="_blank" rel="noopener noreferrer" title="X">
              <FaXTwitter />
            </a>
            <a href="#contato" title="Abrir Chat">
              <FaCommentDots />
            </a>
          </div>

          <div className='profile'>
            <S.ProfileButton onClick={() => setIsModalOpen(true)}>
              certificado
            </S.ProfileButton>

            <S.ProfileButton 
              as="a" 
              href="/assets/meu-curriculum-pdf(1).pdf" 
              download="CV_CaioCesarRibeiro.pdf"
            >
              baixar cv
            </S.ProfileButton>
             
          </div>

        </div>
      </S.Banner>

      <S.MainContent>
        <div className="text-info">
          <h2>Olá, eu sou</h2>
          <h1>Caio César Ribeiro</h1>
          <h2>Full Stack Web Developer</h2>
          <p>
            Especialista em criar soluções modernas e robustas com o <strong>ecossistema JavaScript</strong>. 
            Focado em entregar performance, UX refinada e código de alta qualidade.
          </p>
        </div>
                
        <S.ScrollArrow>
          <h1 ><b>Conheça meu trabalho</b></h1>
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
            <path className="a4" d="M0 60 L30 92 L60 60"></path>
          </svg>
        </S.ScrollArrow>
      </S.MainContent>

      {/* ------ ESTRUTURA DO MODAL ------ */}
      {isModalOpen && (
        <S.ModalOverlay onClick={() => setIsModalOpen(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setIsModalOpen(false)}>X</S.CloseButton>
            
            <img src="/assets/certificado.jpeg" alt="Certificado Caio César Ribeiro" />
          </S.ModalContent>
        </S.ModalOverlay>
      )}

    </S.Container>
  );
}