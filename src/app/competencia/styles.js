'use client';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;

  @media (min-width: 800px) {
    padding-top: 70px; /* Respiro para o menu do desktop */
  }
`;

export const TitleMobile = styled.span`
  font-size: 1.5rem;
  color: #00ffcc;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  z-index: 10;

`;

export const CardsWrapper = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  gap: ${({ $isActive }) => ($isActive ? '5px' : '10px')};
  transition: all 0.6s cubic-bezier(1, 1, 0.50, 1);
  margin-bottom: ${({ $isActive }) => ($isActive ? '20px' : '15px')};


  @media (min-width: 800px) {
    width: ${({ $isActive }) => ($isActive ? '80%' : '40%')};
    margin-top: ${({ $isActive }) => ($isActive ? '20px' : '10px')};
  }
`;

export const Card = styled.div`
  flex: ${({ $isActive }) => ($isActive ? '10' : '1')};
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: ${({ $bg }) => $bg || '#111111ad'};
  border-top: 1px solid ${({ $isActive }) => ($isActive ? '#00ffcc' : '#333')};
  border-bottom: 1px solid ${({ $isActive }) => ($isActive ? '#00ffcc' : '#333')};
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ $isActive }) => ($isActive ? '10px' : '5px 10px')};
  border-radius: 15px;
  opacity: ${({ $isActive }) => ($isActive ? '0.6' : '0.8')};


  &:hover {
    opacity: 0.9;
  }

  .content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: ${({ $isActive }) => ($isActive ? '#00ffcc' : '#fff')};
    font-size: ${({ $isActive }) => ($isActive ? '1.8rem' : '1.2rem')};
    transition: all 0.5s ease;
    margin-bottom: ${({ $isActive }) => ($isActive ? '15px' : '0')};
    text-align: center;

    @media (min-width: 800px) {
      text-align: left;
      
    }
  }

  .description {
    color: #ccc;
    font-size: 1rem;
    line-height: 1.6;
    /* O texto desaparece e sobe suavemente quando o card é fechado */
    opacity: ${({ $isActive }) => ($isActive ? '1' : '0')};
    transform: ${({ $isActive }) => ($isActive ? 'translateY(0)' : 'translateY(20px)')};
    transition: all 0.5s ease;
    pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};
    
    /* Previne que o texto empurre o layout enquanto o card está encolhido */
    max-height: ${({ $isActive }) => ($isActive ? '500px' : '0')};
    overflow: hidden;
  }
`;



/* =========================================
   ESTILOS INTERNOS DOS CARDS (DO SEU PROJETO BASE)
   ========================================= */

export const ContentArea = styled.div`
  width: 100%;
  max-height: ${({ $isActive }) => ($isActive ? '90vh' : '0')};
  overflow-y: auto; /* Permite rolar o texto se for muito grande */
  overflow-x: hidden;
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0')};
  transition: all 0.5s ease;
  pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};
  display:flex;
  align-items: center;
  overscroll-behavior: contain;

  flex-direction: column;


  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00ffcc;
    border-radius: 10px;
  }

  .experiences-container{
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly
  }
`;

export const DescriptionP = styled.p`
    margin: 10px;
    font-family: "Baskervville SC", system-ui;
    font-size: 18px;
    text-align: justify;
    color: #ff7d04;
    line-height: 1.5;

    @media (max-width: 750px) { 
        font-size: 14px;
        margin-top: 15px;
    }
`;

export const MySkills = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1100px) { 
        width: 50%;
        
    }


    span {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: start;
        margin-top: 15px;

       @media (min-width: 1100px) { 
            margin-left: 100px;
        }

        .title-card{
            margin-bottom: 5px;
            font-size: 1rem;
        }
    }
`;

export const MySkillsLi = styled.b`
    font-family: "Baskervville SC", system-ui;
    font-size: 1.2rem;
    list-style: none;
    margin-bottom: 5px;
    
    @media (max-width: 500px) { 
        font-size: 1rem;
    }
`;

export const MyExperiences = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

    b{
        margin-top: 20px;
    
        @media (min-width: 800px) { 
            margin-top: 0;
        }
    }
`;

export const ExperiencesLi = styled.span`
    font-family: "Baskervville SC", system-ui;
    font-size: 1rem;
    list-style: none;
    color: #60a4be;

    @media (max-width: 750px) { 

        margin-top: 2px;
    }

    @media (min-width: 900px) { 
        font-size: 1.2rem;

    }
`;



export const SeeMoreHint = styled.p`
  color: #00ffcc;
  font-size: 0.85rem;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: pulseHint 2s infinite ease-in-out;
  pointer-events: none;

  @keyframes pulseHint {
    0% { opacity: 0.4; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(4px); }
    100% { opacity: 0.4; transform: translateY(0); }
  }

  @media (min-width: 800px) {
    text-align: left;
  }
`;