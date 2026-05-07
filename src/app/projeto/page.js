'use client';
import { useState, useEffect, useRef } from 'react'; // Adicionamos useEffect e useRef
import * as S from './styles';
import { FaArrowLeft, FaExternalLinkAlt, FaTools, FaGlobe } from 'react-icons/fa';

// Importando os dados do arquivo separado
import { myProjects } from './data'; 

export default function Projetos() {
  const [activeProject, setActiveProject] = useState(null);
  const [showTechSheet, setShowTechSheet] = useState(null);

  // 1. Criamos a referência para a tela de Projetos
  const containerRef = useRef(null);

  const scrollAreaRef = useRef(null);

  // 2. O Vigia: fecha tudo se o usuário rolar para fora da página
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se a página de projetos não estiver mais visível na tela
        if (!entry.isIntersecting) {
          setActiveProject(null); // Fecha o Iframe
          setShowTechSheet(null); // Fecha a Ficha Técnica
          if (scrollAreaRef.current) {// voltar o conteudo para o inicio
            scrollAreaRef.current.scrollTop = 0;
          }
        }
      },
      { threshold: 0.1 } // Dispara quando sobrar apenas 10% da seção na tela
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    // 3. Conectamos o vigia no Container principal
    <S.Container ref={containerRef}>
      <span className="mobile-page-title">Projetos</span>

      <S.ScrollArea ref={scrollAreaRef}>
        {/* SEÇÃO FREELANCER */}
        <S.SectionTitle>Experiência Freelancer</S.SectionTitle>
        <S.CardList>
          {myProjects.freelance.map((proj, index) => (
            <S.ProjectCard 
              key={proj.id} 
              $isEven={index % 2 === 0} 
              onClick={() => setActiveProject(proj)}
            >
              <div className="img-box">
                <picture>
                  {proj.thumbMobile && <source media="(max-width: 700px)" srcSet={proj.thumbMobile} />}
                  <img src={proj.thumb} alt={proj.title} />
                </picture>
              </div>
              <div className="info-box">
                <div className="text-content">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                </div>
                <div className="button-group">
                  <S.CardButton $outline onClick={(e) => { e.stopPropagation(); setShowTechSheet(proj); }}>
                    Ficha Técnica
                  </S.CardButton>
                  <S.CardButton onClick={(e) => { e.stopPropagation(); setActiveProject(proj); }}>
                    Visitar Site
                  </S.CardButton>
                </div>
              </div>
            </S.ProjectCard>
          ))}
        </S.CardList>

        {/* SEÇÃO VITRINE */}
        <S.SectionTitle>Projetos de Vitrine</S.SectionTitle>
        <S.CardList>
          {myProjects.vitrine.map((proj, index) => (
            <S.ProjectCard 
              key={proj.id} 
              $isEven={index % 2 === 0} 
              onClick={() => setActiveProject(proj)}
            >
              <div className="img-box">
                <picture>
                  {proj.thumbMobile && <source media="(max-width: 700px)" srcSet={proj.thumbMobile} />}
                  <img src={proj.thumb} alt={proj.title} />
                </picture>
              </div>
              <div className="info-box">
                <div className="text-content">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                </div>
                <div className="button-group">
                  <S.CardButton $outline onClick={(e) => { e.stopPropagation(); setShowTechSheet(proj); }}>
                    Ficha Técnica
                  </S.CardButton>
                  <S.CardButton onClick={(e) => { e.stopPropagation(); setActiveProject(proj); }}>
                    Visitar Site
                  </S.CardButton>
                </div>
              </div>
            </S.ProjectCard>
          ))}
        </S.CardList>
      </S.ScrollArea>

      {/* VIEW: VISITAR SITE (IFRAME) */}
      {activeProject && (
        <S.ProjectViewer>
          <S.ViewerHeader>
            <S.ActionButton onClick={() => setActiveProject(null)}>
              <FaArrowLeft /> Voltar
            </S.ActionButton>
            
            <div className="project-title">
              {activeProject.title}
            </div>

            <S.ActionButton $primary onClick={() => openNewTab(activeProject.url)}>
              Nova Aba <FaExternalLinkAlt />
            </S.ActionButton>
          </S.ViewerHeader>

          <S.ProjectIframe 
            src={activeProject.url} 
            title={activeProject.title}
          />
        </S.ProjectViewer>
      )}

      {/* VIEW: FICHA TÉCNICA */}
      {showTechSheet && (
        <S.TechSheet>
          <div className="sheet-header">
            <h2>{showTechSheet.title} - Ficha Técnica</h2>
            <S.CardButton onClick={() => setShowTechSheet(null)}>Fechar</S.CardButton>
          </div>
          
          <p style={{color: '#ccc', fontSize: '1.1rem', marginBottom: '20px'}}>
            {showTechSheet.description}
          </p>
          
          {showTechSheet.techContent}

        </S.TechSheet>
      )}

    </S.Container>
  );
}