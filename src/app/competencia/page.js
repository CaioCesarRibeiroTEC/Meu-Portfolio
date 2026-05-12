'use client';
import { useState, useEffect, useRef } from 'react';
import * as S from './styles';

export default function Competencias() {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setActiveCard(null);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // MÁGICA: Em vez de texto simples, passamos JSX para a propriedade 'content'
  const cardsData = [
    {
      id: 0,
      title: "Um pouco sobre mim",
      bg: "linear-gradient(to right, #1a1a1a, #0d0d0d)",
      content: (
        <>
            <S.DescriptionP onClick={(e) => e.stopPropagation()}>
                &emsp;Me chamo Caio César Ribeiro e minha jornada até a tecnologia é marcada por muita resiliência, adaptação e vontade de evoluir. Durante anos, construí minha base profissional atuando em setores bem diversos: fui desde agente de call center e motorista, até gerente em empresas industriais. 
            </S.DescriptionP>

            <S.DescriptionP onClick={(e) => e.stopPropagation()}>
                &emsp;Essa ampla bagagem no 'mundo real' me ensinou a resolver problemas sob pressão, entender as necessidades dos clientes e liderar equipes com eficiência. A tecnologia sempre foi uma paixão adormecida, e decidi transformar essa curiosidade na minha profissão. 
            </S.DescriptionP>

            <S.DescriptionP onClick={(e) => e.stopPropagation()}>
                &emsp;Ingressei de cabeça no mundo do desenvolvimento e, com muito empenho nos estudos e desafios práticos, me tornei um Desenvolvedor Web Full Stack. Hoje, uno a minha vivência de gestão e trabalho em equipe com código de alta qualidade, provando que a capacidade de se reinventar e entregar resultados de excelência é a minha maior marca
            </S.DescriptionP>
        </>
      )
    },
    {
      id: 1,
      title: "Minhas Habilidades",
      bg: "linear-gradient(to right, #0d0d0d, #1a1a1a)",
      content: (
        <S.MySkills >
            <span className='span-skills' style={{color:'#29cc1a'}} onClick={(e) => e.stopPropagation()}>
                <b className='title-card'><strong>Frontend & UI (Interface de Usuário):</strong></b>
                <S.MySkillsLi>♦ Javascript ES6 e TypeScript</S.MySkillsLi>
                <S.MySkillsLi>♦ React.js e Next.js (Foco em performance e SEO)</S.MySkillsLi>
                <S.MySkillsLi>♦ HTML5 e CSS3</S.MySkillsLi>
                <S.MySkillsLi>♦ Styled-Components e Tailwind CSS</S.MySkillsLi>
                <S.MySkillsLi>♦ Design Responsivo e Mobile-First</S.MySkillsLi>
            </span>
            <span style={{color:'gold'}} onClick={(e) => e.stopPropagation()}>
                <b className='title-card'><strong>Backend & Banco de Dados:</strong></b>
                <S.MySkillsLi>♦ Node.js</S.MySkillsLi>
                <S.MySkillsLi>♦ Bancos Relacionais: PostgreSQL</S.MySkillsLi>
                <S.MySkillsLi>♦ Bancos Não-Relacionais: MongoDB</S.MySkillsLi>
                <S.MySkillsLi>♦ Integração e consumo de APIs RESTful</S.MySkillsLi>
            </span>
            <span style={{color:'#0055f2'}} onClick={(e) => e.stopPropagation()}>
                <b className='title-card'><strong>Ferramentas, Cloud & DevOps:</strong></b>
                <S.MySkillsLi>♦ Git e GitHub (Versionamento de código)</S.MySkillsLi>
                <S.MySkillsLi>♦ Supabase e Firebase (BaaS / Autenticação)</S.MySkillsLi>
                <S.MySkillsLi>♦ Render e Vercel (Deploy e Hospedagem)</S.MySkillsLi>
                <S.MySkillsLi>♦ VS Code</S.MySkillsLi>
            </span>
        </S.MySkills>
      )
    },
    {
      id: 2,
      title: "Experiências e Qualificações",
      bg: "linear-gradient(to right, #1a1a1a, #0d0d0d)",
      content: (
        <div className='experiences-container'>
            <S.MyExperiences onClick={(e) => e.stopPropagation()}>
                <b><strong>Projetos e Atuação como Desenvolvedor:</strong></b>
                <S.ExperiencesLi>♦ E-commerce Charmosa Cosméticos: Desenvolvimento, arquitetura e deploy comercial completo de loja virtual..</S.ExperiencesLi>
                <S.ExperiencesLi>♦ Sistema Financeiro CR-Bank: Criação de aplicação bancária complexa, incluindo fluxos de simulação e integração com interface Pix.</S.ExperiencesLi>
                <S.ExperiencesLi>♦ Clone do YouTube: Desenvolvimento de aplicação de mídia com autenticação de usuários e backend escalável utilizando Supabase e Render.</S.ExperiencesLi>
                <S.ExperiencesLi>♦ Web App de Catálogo: Criação de cardápio digital dinâmico utilizando rotas e data mapping com Next.js.</S.ExperiencesLi>
                <S.ExperiencesLi>♦ Gestão de TI: Implantação e suporte de sistemas de gestão para pequenas empresas.</S.ExperiencesLi>
            </S.MyExperiences>

            <S.MyExperiences onClick={(e) => e.stopPropagation()}>
                <b><strong>Qualificações e Histórico Profissional:</strong></b>
                <S.ExperiencesLi>♦ Formação intensiva concluída no curso Profissão Programador.</S.ExperiencesLi>
                <S.ExperiencesLi>♦ Ampla experiência em Liderança de Equipes, Controle de Qualidade e Gestão Operacional em ambiente industrial.</S.ExperiencesLi>
                <S.ExperiencesLi>♦ Cursos focados em <strong>Liderança</strong> e <strong>Gestão de Pessoas</strong>.</S.ExperiencesLi>
                <S.ExperiencesLi>♦ Possui certificações técnicas profissionais em <strong>Segurança do trabalho e Operação</strong>, e <strong>Altura e plataforma / NR-12</strong>.</S.ExperiencesLi>
                <S.ExperiencesLi>♦ Histórico de excelência em trabalho em equipe, comunicação e resiliência, desenvolvidos ao longo de experiências operacionais e logísticas (DALAS Transportadoras, atendimento direto ao público, etc).</S.ExperiencesLi>
                                                                                
            </S.MyExperiences>
        </div>
      )
    }
  ];

  return (
    <S.Container ref={containerRef}>
      <S.TitleMobile className="mobile-page-title">Competências</S.TitleMobile>

      <S.CardsWrapper $isActive={activeCard !== null}>

        {cardsData.map((card, index) => (
          <S.Card
            key={card.id}
            $isActive={activeCard === index}
            $bg={card.bg}
            onClick={() => setActiveCard(activeCard === index ? null : index)} 
          >
            <div className="content-wrapper">
              <h2>{card.title}</h2>
              
              {activeCard === null && (
                <S.SeeMoreHint>Clique no card para ver mais </S.SeeMoreHint>
              )}

              <S.ContentArea $isActive={activeCard === index} >
                {card.content}
              </S.ContentArea>

            </div>
          </S.Card>
        ))}
      </S.CardsWrapper>
    </S.Container>
  );
}