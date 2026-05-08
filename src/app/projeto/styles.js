'use client';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 5px; 
  overflow: hidden;

  .mobile-page-title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: aqua;
    
    @media screen and (min-width: 800px) {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 70%;
  }
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  min-height: 99vh;
  width: 100%;
  padding-bottom: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
   
  @media screen and (min-width: 800px) {
    margin-top: 65px;
  }

  scrollbar-width: none; 
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SectionTitle = styled.h2`
  color: #00ff88;
  font-family: "Baskervville SC", system-ui;
  text-align: center;
  font-size: 1rem;
  margin: 10px 0 1px 0;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (min-width: 600px) and (max-width: 1080px) { 
    margin: 10px 0 5px 0;
  }

`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1px;

  @media screen and (min-width: 500px) and (max-width: 1000px) { 

  } 
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: ${({ $isEven }) => ($isEven ? 'row' : 'row-reverse')};
  width: 100%; 
  background: #07070786;
  border: 3px solid #333;
  border-radius: 15px;
  margin: 2px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  

  &:hover {
    border-color: #00ffcc;
    box-shadow: 0 0 20px rgba(0, 255, 204, 0.15);
    transform: scale(1.02);
  }

  .img-box {
    width: 150px;
    height: 200px;
    background: #222;
    border-radius: 16px;

    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.4s ease;
      border-radius: 16px;
    }

    @media (min-width: 700px) {
      width: 300px;
      height: 190px;
      background: #222;
    }

  }

  &:hover .img-box img {
    transform: scale(1.05);
  }

  .info-box {
    width: 60%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: ${({ $isEven }) => ($isEven ? 'left' : 'right')};

    h3 { 
      color: #fff; 
      font-size: 1.2rem; 
      margin-bottom: 8px; 
      text-align: center;
    }
    p { 
      color: aqua; 
      font-size: 0.85rem; 
      line-height: 1.2; 
      text-align: center;
      
    }

    .button-group {
      width: 100%;
      display: flex;
      margin-top: 15px;
      align-items: center;
      justify-content: center;
      gap: 10px;
      
    }
  }

  @media (min-width: 700px) {
    width: 70%; 
    align-self: ${({ $isEven }) => ($isEven ? 'flex-start' : 'flex-end')};
    
    .info-box {
      h3 { font-size: 1.5rem; }
      p { font-size: 1rem; }
    }
  }
`;

export const CardButton = styled.button`
  background: ${({ $outline }) => ($outline ? 'transparent' : '#00ffcc')};
  color: ${({ $outline }) => ($outline ? '#00ffcc' : '#000')};
  border: 1px solid #00ffcc;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.6rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #00ffcc;
    color: #000;
    transform: translateY(-2px);
  }
`;

export const TechSheet = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100vh;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(10px);
  z-index: 10001; 
  display: flex;
  flex-direction: column;
  padding: 80px 20px 40px;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb { background: #00ffcc; border-radius: 10px; }

  .sheet-header {
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 1px solid #333; padding-bottom: 15px; margin-bottom: 20px;
    h2 { color: #00ffcc; font-size: 1.5rem; }
  }

  .tech-grid {

    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 900px) {
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px; margin-top: 30px;
      justify-content: center;
      align-items: start;

    }
  }

  .tech-item {
    background: #111; padding: 20px; border-radius: 10px; border-left: 3px solid #00ffcc;
    h4 { color: #fff; margin-bottom: 15px; text-transform: uppercase; }
    ul { list-style: none; color: #aaa; font-size: 0.95rem; line-height: 1.6; }
  }
`;

export const ProjectViewer = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100vh;
  background: #0a0a0a; z-index: 10000;
  display: flex; flex-direction: column;
`;

export const ViewerHeader = styled.header`
  width: 100%; height: 60px; background: #111;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px; border-bottom: 1px solid #00ffcc;
`;

export const ActionButton = styled.button`
  background: ${({ $primary }) => ($primary ? '#00ffcc' : 'transparent')};
  color: ${({ $primary }) => ($primary ? '#000' : '#00ffcc')};
  border: 1px solid #00ffcc; padding: 8px 15px; border-radius: 5px;
  cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px;
  transition: 0.3s;
  &:hover { opacity: 0.8; transform: scale(1.05); }
`;

export const ProjectIframe = styled.iframe`
  flex: 1; width: 100%; border: none; background: #fff;
`;

