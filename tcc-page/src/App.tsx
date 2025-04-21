import React, { useState, useEffect } from 'react';

// Define the types for our sections and navigation
interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
  action?: () => void; // Nova propriedade opcional para executar ações ao clicar no botão
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

  // Função para abrir o PDF da proposta
  const openProposalPDF = () => {
    window.open('/Proposta_de_TCC.pdf', '_blank');
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
          Este projeto representa uma parte muito importante da minha trajetória acadêmica. Desde o Ensino Médio, me envolvo com iniciativas voluntárias na área da Educação e, nos últimos anos, venho trabalhando em uma EdTech. Por isso, poder unir esses dois mundos no meu TCC, tecnologia e Educação, torna esse projeto ainda mais significativo.
          </p>
          <p>
          O foco do trabalho é entender como os modelos de linguagem (LLMs) podem ajudar na correção automática da redação do ENEM, especialmente na competência 3, que avalia a construção de argumentos. A ideia é usar engenharia de prompts, analisar dados reais e conversar com corretoras para tentar aproximar o modelo computacional da forma como uma pessoa realmente avalia esse tipo de texto. Minha intenção é contribuir para que a tecnologia seja uma aliada mais justa, transparente e eficaz no contexto educacional.
          </p>
          <div style={styles.flexRow}>
            <div style={styles.card}>
              <h3>Problema de Pesquisa</h3>
                <p>
                Como melhorar a precisão de corretores automáticos baseados em IA na avaliação de redações do ENEM, especialmente em competências argumentativas como a competência 3, que ainda apresentam desempenho baixo e maior disparidade em relação à avaliação feita por corretores humanos?
                </p>
            </div>
            <div style={styles.card}>
              <h3>Objetivos</h3>
              <p>Coletar um dataset de redações reais com vista pedagógica.</p>
              <p>Testar abordagens com engenharia de prompt e extração de argumentos com LLMs</p>
              <p>Avaliar o desempenho de diferentes modelos e técnicas de fine-tuning</p>
            
            </div>
            <div style={styles.card}>
              <h3>Justificativa</h3>
              <p>Apesar dos avanços em IA os modelos atuais ainda enfrentam dificuldades em interpretar argumentos e avaliar aspectos subjetivos da escrita, especialmente nas competências 3 do ENEM. Por outro lado, corretores humanos apresentam taxa significativamente alta de concordância nessa competência, o que pode tornar os sistemas de correção mais precisos e úteis como ferramenta de apoio para estudantes, professores e plataformas educacionais.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'proposal',
      title: 'Proposta',
      content: (
        <div>
          <h2 style={styles.sectionHeading}>Proposta de TCC</h2>
          <p>
            Carregando o PDF da proposta...
          </p>
        </div>
      ),
      action: openProposalPDF,
    },
  ];

  // Handler for changing sections
  const handleSectionChange = (sectionId: string) => {
    const selectedSection = sections.find(section => section.id === sectionId);
    
    // Se a seção tiver uma ação definida, execute-a
    if (selectedSection && selectedSection.action) {
      selectedSection.action();
      return;
    }
    
    // Caso contrário, apenas mude a seção ativa
    setActiveSection(sectionId);
  };

  // Use effect para abrir o PDF automaticamente quando a seção de proposta é selecionada diretamente
  useEffect(() => {
    if (activeSection === 'proposal') {
      openProposalPDF();
      // Após abrir o PDF, volte para a seção "Sobre o Projeto"
      setActiveSection('about');
    }
  }, [activeSection]);

  // Find the current active section
  const currentSection = sections.find(section => section.id === activeSection) || sections[0];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Trabalho de Conclusão de Curso</h1>
        <p style={styles.subtitle}>
        Avaliação Automática da Competência 3 em Redações do ENEM com Modelos de Linguagem <br />
          Laís Nuto Rossman - Universidade de São Paulo
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


    </div>
  );
};

export default App;
