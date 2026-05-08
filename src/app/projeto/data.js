

// src/app/projetos/data.js

export const myProjects = {
  freelance: [
    {
      id: 1,
      title: "Charmosa Cosméticos",
      description: "E-commerce completo com banco de dados PostgreSQL, chat integrado para suporte e painel administrativo.",
      thumb: "/assets/projeto(CH).png",
      thumbMobile: "/assets/thumbMobile(CH).png", 
      url: "https://charmosa-cosmeticos-xmlb.vercel.app/",

      techContent: (
        <div className="tech-grid">
          <div className="tech-item">
            <h4>Chapéus Profissionais</h4>
            <ul>
              <li>• UI/UX Designer: Criação da identidade visual, fluxo de navegação centrado em modais para evitar fricção (o usuário não abandona o contexto da página), e design de interface móvel priorizando a conversão.</li>
              <li>• Copywriter & Content Specialist: Desenvolvimento de todos os textos, descrições de produtos e estratégias de engajamento que conferem a "voz" da marca.</li>
              <li>• Especialista em Conversão (CRO): Implementação de fluxos de checkout otimizados (Mercado Pago) e integração direta com WhatsApp para suporte ao cliente.</li>
            </ul>
          </div>
          <div className="tech-item">
            <h4>Ficha Técnica (Hard Skills)</h4>
            <ul>
              <li>• Front-End: React (Vite), TypeScript, Styled Components (CSS-in-JS para estilização dinâmica e responsiva).</li>
              <li>• Gerenciamento de Estado: React Context API (Auth, Cart, AuthProvider).</li>
              <li>• Backend & Cloud: Firebase (Firestore para banco de dados NoSQL, Firebase Auth para gestão de perfis de usuário/admin, Firebase Storage para mídia).</li>
              <li>• Integrações: Mercado Pago (Payment Bricks para checkout seguro), API do ViaCEP para preenchimento automático de endereços.</li>
              <li>• Performance: Lazy loading de imagens, compressão e otimização via (wsrv.nl), manipulação de estado otimizada para evitar re-renderizações desnecessárias.</li>
            </ul>
          </div>
          <div className="tech-item">
            <h4>Diferencial de UX & Negócios</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.5' }}>
              &emsp;O diferencial deste projeto não é apenas técnico, mas estratégico. Minha experiência prévia com atendimento ao cliente moldou um sistema que minimiza o esforço do comprador:
              Navegação Sem Fricção: A estratégia de usar modais dinâmicos para a visualização de produtos e seleção de variantes (kits/avulsos) mantém o usuário dentro da experiência de compra, sem recarregar a página ou perder o foco no catálogo.
              Gestão de Variantes Inteligente: O sistema gerencia kits complexos e produtos avulsos de forma intuitiva. Entendi que o cliente quer rapidez; por isso, a interface guia a seleção de produtos e quantidades de maneira clara.
              "Olhar de Dono": A união de tratamento de imagem, copywriting atrativo e uma estrutura de dados bem organizada reflete a qualidade do negócio físico. A loja não apenas "funciona", ela "vende" através de uma apresentação curada.
              Rapidez no Checkout: Integração com o Mercado Pago para pagamentos instantâneos (PIX), com feedback claro de sucesso/falha, aumentando drasticamente a confiança e a conversão final.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Rodriguez Sanduicheria",
      description: "Cardápio digital dinâmico utilizando Next.js para renderização rápida e excelente SEO.",
      thumb: "/assets/projetos(R).jpg",
      thumbMobile: "/assets/thumbMobile(RS).png",
      url: "https://rodriguez-sanduicheria.vercel.app/",
      techContent: (
        <div className="tech-grid">
          <div className="tech-item">
            <h4>Chapéus Profissionais</h4>
            <ul>
              <li>• Desenvolvedor Web (Front-End & React): Responsável pela implementação da interface, roteamento e gestão de estado global (Context API).</li>
              <li>• UI/UX Designer: Foco total na "jornada do apetite" – garantindo que as fotos dos produtos (sanduíches, açaís) sejam o centro da experiência visual.</li>
              <li>• Product Manager & Content Strategist: Responsável pela arquitetura do cardápio e pela estratégia de conversão (CTA) que direciona o cliente para o pedido via WhatsApp.</li>
              <li>• Especialista em Performance Web: Otimização de assets e componentes para carregamento rápido (essencial para usuários famintos em mobile).</li>
            </ul>
          </div>
          <div className="tech-item">
            <h4>Ficha Técnica (Hard Skills)</h4>
            <ul>
              <li>• Stack: Next.js, React, JavaScript (ES6+).</li>
              <li>• Gestão de Estado: React Context API (src/context/userContext.js) para gerenciamento do carrinho de compras e preferências do usuário.</li>
              <li>• Estilização: Styled Components (src/components/cart/styled-cart.js, src/components/header/styled-header.js) para garantir um design modular e consistente.</li>
              <li>• Arquitetura de Dados: Estrutura organizada de dados (data-sandwich.js, data-combos.js, data-drinks.js) que facilita a manutenção e escalabilidade do cardápio.</li>
              <li>• Assets & UI: Otimização de imagens (public/assets/) categorizadas por tipo de produto.</li>
            </ul>
          </div>
          <div className="tech-item">
            <h4>Diferencial de UX & Negócios</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.5' }}>
              &emsp;Desenvolvi a plataforma digital da Rodríguez Sanduicheria com um foco estratégico em conversão e experiência do usuário (UX). Construí o front-end utilizando Next.js e React, criando uma vitrine virtual intuitiva onde o cliente visualiza, seleciona e fecha o pedido de forma rápida. Implementei uma gestão de estado eficiente com Context API e Styled Components para garantir que o menu, desde os lanches até as bebidas, seja navegado sem atrito. O meu diferencial neste projeto foi aplicar minha vivência em atendimento direto ao cliente para desenhar um fluxo que minimiza a fricção, utilizando o WhatsApp como canal de fechamento, o que otimiza o tempo do cliente e garante que a sanduicheria foque no que realmente importa: a entrega. É um projeto que une a robustez técnica do desenvolvimento com a sensibilidade comercial de quem entende o negócio por trás do código..
            </p>
          </div>
        </div>
      )
    }
    
  ],
  vitrine: [
    {
      id: 3,
      title: "YouTube Clone",
      description: "Aplicação responsiva de mídia com autenticação e consumo de API de vídeos, utilizando Supabase.",
      thumb: "/assets/projeto(Y).jpg",
      thumbMobile: "/assets/thumbMobile(YT).png",
      url: "https://youtube-clone-front-six.vercel.app/",
      techContent: (
        <div className="tech-grid">
          <div className="tech-item">
            <h4>Chapéus Profissionais</h4>
            <ul>
              <li>• Desenvolvedor Front-End: Responsável pela arquitetura de componentes, rotas e integração de dados.</li>
              <li>• UI/UX Designer: Focado na replicação fiel da interface do YouTube, garantindo hierarquia visual e usabilidade intuitiva.</li>
              <li>• Gestor de Estado: Especialista em manter a consistência da aplicação em tempo real (ex: controle de login e dados de usuário) via Context API.</li>
              <li>• Analista de Integração (Frontend-Backend): Responsável por consumir os dados da API de forma segura e performática.</li>
            </ul>
          </div>
          <div className="tech-item">
            <h4>Ficha Técnica (Hard Skills)</h4>
            <ul>
              <li>• Stack: React com Vite (para build rápido e desenvolvimento eficiente), TypeScript, Node.js, Express.</li>
              <li>• Estilização: Styled Components (para componentes modulares e estilização dinâmica).</li>
              <li>• Banco de Dados & ORM: PostgreSQL com Prisma ORM para gestão de esquemas e execução de queries eficientes.</li>
              <li>• Comunicação: Axios (para chamadas HTTP à API do back-end).</li>
              <li>• Gestão de Estado: React Context API (para estado global da aplicação).</li>
              <li>• Arquitetura(back): Aplicação do Repository Pattern (separando a lógica de acesso a dados da lógica de negócio nos diretórios modules/repository).</li>
              <li>• Arquitetura(front): Estrutura modular baseada em pages e components (Layout, Header, Menu, Home, VideoComponent), garantindo organização e reaproveitamento de código.</li>
              <li>• Roteamento: React Router (via routes.tsx) para navegação SPA (Single Page Application).</li>
            </ul>
          </div>
          <div className="tech-item">
            <h4>Diferencial de UX & Negócios</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.5' }}>
              &emsp;Meu diferencial aqui foi a percepção de valor através da fluidez. Em uma aplicação de streaming, o cliente espera uma interface que responda instantaneamente. Utilizei uma arquitetura de componentes altamente modularizada, o que permite que a interface seja "viva"—elementos como o menu, o header e os vídeos se comportam de forma orgânica. A escolha do React com Vite reduz o tempo de carregamento (TTI - Time to Interactive), e o tratamento de estados via Context API garante que o usuário não tenha que logar ou carregar dados desnecessariamente, criando uma experiência de consumo contínua e sem atritos.
            </p>
          </div>
        </div>
      )
    },

    {
      id: 4,
      title: "CR-Bank",
      description: "Sistema financeiro robusto com simulação de transações via interface Pix e gestão de saldo.",
      thumb: "/assets/projeto(CR).png",
      thumbMobile: "/assets/thumbMobile(CR).png",
      url: "https://cr-bank.vercel.app/",
      techContent: (
        <div className="tech-grid">
          <div className="tech-item">
            <h4>Chapéus Profissionais</h4>
            <ul>
              <li>• Engenheiro de APIs Financeiras: Responsável pelo desenvolvimento de endpoints seguros para transações, gestão de cartões e chaves Pix.</li>
              <li>• Database Architect: Modelagem relacional complexa, garantindo consistência e integridade em transações financeiras.</li>
              <li>• Arquiteto de Software: Estruturação modular da aplicação (Controllers/Routes/Services) para facilitar a manutenção.</li>
              <li>• UX/UI Designer: Criação de interface voltada para o mercado financeiro, com foco em clareza, transparência e confiança.</li>
              <li>• Especialista em Integração: Conexão entre o front-end e a API restritiva de serviços bancários.</li>
            </ul>
          </div>
          <div className="tech-item">
            <h4>Ficha Técnica (Hard Skills)</h4>
            <ul>
              <li>• Stack: Next.js (App Router), React, TypeScript.</li>
              <li>• Estilização: Styled Components e CSS global.</li>
              <li>• Banco de Dados & ORM: PostgreSQL com Prisma ORM.</li>
              <li>• Arquitetura: Estrutura de rotas baseada em pastas (/dashboard/pix, /dashboard/extrato, etc.) para organização e escalabilidade.</li>
              <li>• Segurança: Autenticação e gestão de usuários.L</li>
              <li>• Funcionalidades Core: Módulos dedicados para Pix, Transações e Cartões.</li>
            </ul>
          </div>
          <div className="tech-item">
            <h4>Diferencial de UX & Negócios</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.5' }}>
              &emsp;O diferencial aqui é a estabilidade transacional. Ao tratar um sistema bancário, a confiança do usuário depende da latência e da precisão. Estruturei os controllers para que a lógica de "depósito" ou "pix" seja atômica e segura. A separação clara entre as responsabilidades (UsuarioController, TransacaoController, etc.) torna o sistema escalável, permitindo que novos serviços financeiros sejam adicionados sem comprometer a estabilidade do núcleo já existente.
            </p>
          </div>
        </div>
      )
    }
    
  ]
};