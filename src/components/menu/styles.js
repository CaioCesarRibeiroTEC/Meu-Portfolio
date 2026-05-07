'use client';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: ${({ $isOpen }) => ($isOpen ? '5px' : '0')};
  width: 100%;
  z-index: 9999;
  transition: all 0.4s ease-in-out;
  display: ${({ $currentSection }) => ($currentSection === 'inicio' ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${({ $isOpen }) => ($isOpen ? 'auto' : '30px')}; 
  background-color: ${({ $isOpen }) => ($isOpen ? '#080808c5' : 'transparent')};
  border-radius: ${({ $isOpen }) => ($isOpen ? '20px' : 'none')};

  
  @media screen and (min-width: 500px) and (max-width: 800px) { 
    width: 70%;
    left: 30px
  }

  @media (min-width: 800px) {
  
    height: 80px;
    padding: 5px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    border: none;
    width: 50%;

  
  }


`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: start; 
  align-items: center;
  width: 100%;
  height: ${({ $isOpen }) => ($isOpen ? '15px' : '50px')};
  padding: ${({ $isOpen }) => ($isOpen ? '5px' : '0')};


  h2 {
    color: #00ffcc;
    font-size: 2rem;
    text-transform: capitalize;

    display: none; 
  }

  .menu-icon {
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 15px;
  }

  @media (min-width: 800px) {
    width: auto;


    h2 {
      display: block;
    }

    .menu-icon {
      display: none;
    }
  }
`;

export const NavLinks = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'grid' : 'none')};
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 10px 0;
  gap: 25px;

  @media screen and (min-width: 500px) and (max-width: 800px) { padding-left: 30px; }



  a {
    color: aqua;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;
    

    &:hover {
      color: #00ffcc;
    }
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    background: none;
    border: none;
    padding: 0 5px ;
    gap: 75px;


    a {
      font-size: 1.5rem;
      font-weight: normal;
    }
  }
`;