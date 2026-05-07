'use client';
import styled, { keyframes } from 'styled-components';


const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(-10px) translateX(-50%); }
  60% { transform: translateY(-5px) translateX(-50%); }
`;

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px;

`;

export const Banner = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #00ffcc; /* Linha de destaque CRdeveloper */

  @media (min-width: 900px) {
    width: 70%;
  }

  .logo-area {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 10px;
    
  
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      max-width: 300px;
      border-radius: 15px;
    }


  }
  

  .links-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 0.9rem;
    padding: 10px;
    

    .profile{
      display: flex; 
      align-items: center;
      justify-content: center;
      gap: 10px;
      

      @media (max-width: 500px) {
       flex-direction: column;
      }
    }

  }

  .links-area {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 30px;
    
  
    
    a {
      color: #ffffff;
      font-size: 1.5rem; /* Tamanho do ícone */
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        color: #00ffcc; /* Cor de destaque ao passar o mouse */
        transform: translateY(-3px) scale(1.1); /* Efeito de flutuar e crescer levemente */
      }
    }
  }

  
`;

export const ProfileButton = styled.button`
  text-decoration: none;
  border-radius: 20px;
  cursor: pointer;
  padding: 0 10px;
  background-color: #ffffff; 
  color: #000; /* Cor da letra para contrastar com fundo branco */
  font-weight: bold;
  border: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;

  &:hover {
    background-color: #00ffcc;
    transform: scale(1.05);
  }

`;

// --- ESTILOS DO MODAL ---

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85); /* Fundo muito escuro e opaco */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Garante que ficará por cima de banners e outras seções */
`;

export const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px; /* Tamanho máximo do certificado */
  background: #111;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #00ffcc; /* Borda neon acompanhando o design */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 30px rgba(0, 255, 204, 0.3);

  img {
    width: 100%;
    height: auto;
    max-height: 80vh; /* Para não vazar em telas muito pequenas */
    object-fit: contain;
    border-radius: 5px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  background: #ff3333;
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

  &:hover {
    background: #ff0000;
    transform: scale(1.1);
  }
`;







export const MainContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  text-align: center;


  .text-info {

    h1 { font-size: 2.5rem; margin: 10px 0; color: #abfab1; }
    h2 { font-size: 1.5rem; color: #70c6f8; font-weight: 400; margin-bottom: 15px; 
      @media (min-width: 500px) {
        font-size: 1.5rem;
      }
    }

    p { color: #abfab1; line-height: 1.8; max-width: 450px; font-size: 1rem;
      @media (min-width: 600px) {
        font-size: 1.25rem;
        line-height: 3rem
      }
    }
  }
`;

export const ScrollArrow = styled.div`
  width: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${bounce} 2s infinite;


  h1{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 10px;
    color: #00ffcc;

  }
   
  .arrows {
    margin-top: 20px;
    width: 60px;
    height: 100px;
  }
  
  path {
    stroke: aqua;
    fill: transparent;
    stroke-width: 10px;
    animation: arrow 3s infinite;
    -webkit-animation: arrow 3s infinite;
  }
  
  @keyframes arrow
  {
  0% {opacity:1}
  40% {opacity:0}
  80% {opacity:0}
  100% {opacity:0}
  }
  
  @-webkit-keyframes arrow
  {
  0% {opacity:0}
  40% {opacity:1}
  80% {opacity:0}
  100% {opacity:0}
  } 
  
  .arrows path.a1 {
      animation-delay:  -1.5s;
      -webkit-animation-delay:  -1.5s;
  }
  
  .arrows path.a2 {
      animation-delay:  -1s;
      -webkit-animation-delay:  -1s;
  }
  
  .arrows path.a3 {
      animation-delay:  -0.5s;
      -webkit-animation-delay:  -0.5s;
  }
  
    
  
  @media (max-width: 350px) { 
    .arrows-container {
      height: 300px;
    }
  }
`;