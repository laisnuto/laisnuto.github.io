import React, { useState } from 'react';

// Define the types for our sections and navigation
interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const App: React.FC = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState<string>('about');
  
  // Define the styles using inline CSS
  const styles = {
    container: {
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      color: '#333',
    },
    header: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      marginBottom: '40px',
      padding: '20px',
      borderBottom: '1px solid #eaeaea',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '10px',
      color: '#2c3e50',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#7f8c8d',
      marginBottom: '20px',
      textAlign: 'center' as const,
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
      gap: '15px',
      marginBottom: '30px',
    },
    navButton: {
      padding: '10px 20px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    navButtonActive: {
      backgroundColor: '#4a89dc',
      color: 'white',
      border: '1px solid #4a89dc',
    },
    sectionContent: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      lineHeight: '1.6',
      minHeight: '300px',
    },
    footer: {
      marginTop: '40px',
      textAlign: 'center' as const,
      padding: '20px',
      borderTop: '1px solid #eaeaea',
      color: '#7f8c8d',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      margin: '15px 0',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      marginTop: '15px',
    },
    sectionHeading: {
      color: '#2c3e50',
      marginBottom: '20px',
      borderBottom: '2px solid #4a89dc',
      paddingBottom: '10px',
    },
    paper: {
      padding: '15px',
      margin: '10px 0',
      borderLeft: '4px solid #4a89dc',
      backgroundColor: '#f8f9fa',
      borderRadius: '0 4px 4px 0',
    },
    paperTitle: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    timeline: {
      borderLeft: '3px solid #4a89dc',
      paddingLeft: '20px',
      margin: '20px 0 20px 20px',
    },
    timelineItem: {
      position: 'relative' as const,
      marginBottom: '25px',
    },
    timelineDot: {
      position: 'absolute' as const,
      left: '-29px',
      top: '0',
      width: '15px',
      height: '15px',
      backgroundColor: '#4a89dc',
      borderRadius: '50%',
    },
    timelineDate: {
      fontWeight: 'bold',
      color: '#4a89dc',
      marginBottom: '5px',
    },
    flexRow: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap' as const,
    },
    card: {
      flex: '1 1 300px',
      padding: '20px',
      border: '1px solid #eaeaea',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
  };

  // Define the sections
  const sections: Section[] = [
    {
      id: 'about',
      title: 'Sobre o Projeto',
      content: (
        <div>
          <h2 style={styles.sectionHeading}>Sobre o Projeto</h2>
          <p>
            Bem-vindo à página do meu Trabalho de Conclusão de Curso (TCC). Este projeto representa o culminar da minha jornada acadêmica e reflete meus interesses e especializações na área de [sua área de estudo].
          </p>
          <p>
            O objetivo principal deste trabalho é investigar [breve descrição do seu objetivo]. Através de uma abordagem [metodologia], pretendo contribuir para o avanço do conhecimento neste campo.
          </p>
          <div style={styles.flexRow}>
            <div style={styles.card}>
              <h3>Problema de Pesquisa</h3>
              <p>Descreva aqui o problema de pesquisa que você está tentando resolver com seu TCC.</p>
            </div>
            <div style={styles.card}>
              <h3>Objetivos</h3>
              <p>Liste os objetivos gerais e específicos do seu projeto de pesquisa.</p>
            </div>
            <div style={styles.card}>
              <h3>Justificativa</h3>
              <p>Explique por que sua pesquisa é importante e qual sua contribuição para a área.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'schedule',
      title: 'Cronograma',
      content: (
        <div>
          <h2 style={styles.sectionHeading}>Cronograma</h2>
          <p>
            O desenvolvimento deste TCC segue um cronograma estruturado para garantir a conclusão bem-sucedida dentro do prazo estabelecido. Abaixo está o planejamento das principais atividades:
          </p>
          <div style={styles.timeline}>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineDate}>Março/2023 - Abril/2023</div>
              <div>Definição do tema e revisão bibliográfica inicial</div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineDate}>Maio/2023 - Junho/2023</div>
              <div>Desenvolvimento da metodologia e instrumentos de pesquisa</div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineDate}>Julho/2023 - Setembro/2023</div>
              <div>Coleta de dados e início da análise</div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineDate}>Outubro/2023 - Novembro/2023</div>
              <div>Análise final dos dados e redação da conclusão</div>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineDate}>Dezembro/2023</div>
              <div>Revisão final e apresentação do TCC</div>
            </div>
          </div>
        </div>
      ),
    },

  ];

  // Handler for changing sections
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  // Find the current active section
  const currentSection = sections.find(section => section.id === activeSection) || sections[0];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Trabalho de Conclusão de Curso</h1>
        <p style={styles.subtitle}>
          [Título do seu TCC] <br />
          [Seu Nome] - [Sua Universidade]
        </p>
        <nav style={styles.nav}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              style={{
                ...styles.navButton,
                ...(activeSection === section.id ? styles.navButtonActive : {}),
              }}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </header>

      <main style={styles.sectionContent}>
        {currentSection.content}
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
        <p>Esta página foi criada como parte do Trabalho de Conclusão de Curso em [Seu Curso]</p>
      </footer>
    </div>
  );
};

export default App;
