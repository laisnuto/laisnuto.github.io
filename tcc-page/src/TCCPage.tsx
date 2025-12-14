import React, { useState, useEffect } from 'react';

// Define the types for our sections and navigation
interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
  action?: () => void; // Nova propriedade opcional para executar ações ao clicar no botão
}

const TCCPage: React.FC = () => {
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
      fontSize: '1.8rem',
      marginBottom: '5px',
      color: '#2c3e50',
      textAlign: 'center' as const,
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '0',
      color: '#7f8c8d',
      textAlign: 'center' as const,
      fontStyle: 'italic' as const,
    },
    author: {
      fontSize: '1.1rem',
      marginTop: '30px',
      marginBottom: '8px',
      color: '#2c3e50',
      textAlign: 'center' as const,
    },
    supervisors: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      marginTop: '16px',
    },
    supervisorLine: {
      fontSize: '1rem',
      color: '#2c3e50',
      textAlign: 'center' as const,
    },
    supervisorLabel: {
      fontWeight: 'bold' as const,
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
      gap: '10px',
      marginTop: '30px',
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

 
  const openProposalPDF = () => {
    window.open('/files/Proposta_de_TCC.pdf', '_blank');
  };

 
  const openPosterPDF = () => {
    window.open('/files/poster.pdf', '_blank');
  };

  const openMonografiaPDF = () => {
    window.open('/files/monografia.pdf', '_blank');
  };

  // Define the sections
  const sections: Section[] = [
    {
      id: 'about',
      title: 'Resumo',
      content: (
        <div>
          <h2 style={styles.sectionHeading}>Resumo</h2>
          <p>
          Sistemas automatizados de correção de redações podem, por um lado, reduzir a carga de trabalho dos professores nessa tarefa e, por outro, permitir que os estudantes pratiquem com mais frequência devido a ciclos de <em>feedback</em> mais rápidos. No português brasileiro, há um interesse crescente em sistemas de correção automática voltados para o exame padronizado ENEM. No entanto, os conjuntos de dados atualmente disponíveis consistem apenas em redações produzidas como prática para o exame oficial.
          </p>
          <p>
          A questão sobre se esses conjuntos de dados de simulados fornecem informações úteis para a avaliação de redações oficiais do ENEM ainda não havia sido investigada na literatura. Este trabalho preenche essa lacuna ao apresentar um novo conjunto de dados rotulados composto por 157 redações escritas no exame oficial do ENEM.
          </p>
          <p>
          Foi observado que o conjunto de dados apresentado neste trabalho compartilha características semelhantes às de conjuntos de redações produzidas em simulados. Também foi demonstrado que, para conjuntos pequenos como o utilizado neste estudo, o uso de <em>Large Language Models</em> (LLMs) pré-treinados em redações de simulados melhora significativamente o desempenho de sistemas automáticos de correção aplicados a textos oficiais do ENEM, resultando em um ganho médio de 0,27 pontos na métrica <em>Quadratic Weighted Kappa</em> em comparação com o treinamento realizado exclusivamente com dados oficiais.
          </p>
          <div style={styles.flexRow}>
            <div style={styles.card}>
              <h3>Problema de Pesquisa</h3>
                <p>
                Modelos treinados em redações não oficiais (simulados do ENEM) podem avaliar adequadamente redações oficiais do exame? Existe transferência de aprendizado entre datasets de redações não oficiais e redações oficiais do ENEM?
                </p>
            </div>
            <div style={styles.card}>
              <h3>Objetivos</h3>
              <p>Construir e disponibilizar um dataset de redações oficiais do ENEM com suas notas oficiais.</p>
              <p>Investigar se os simulados são realmente parecidos com as redações oficiais através de análise comparativa.</p>
              <p>Avaliar se modelos treinados apenas em simulados conseguem corrigir adequadamente textos reais (zero-shot).</p>
              <p>Analisar o desempenho ao treinar modelos apenas no conjunto oficial (pequeno).</p>
              <p>Verificar se o pré-treino em simulados melhora a correção de textos oficiais.</p>
            </div>
            <div style={styles.card}>
              <h3>Justificativa</h3>
              <p>Apesar dos avanços em IA, os modelos atuais de correção automática enfrentam uma limitação crítica: são treinados principalmente em redações de simulados do ENEM, pois redações oficiais são extremamente difíceis de obter. No entanto, não há validação se esses modelos performam adequadamente em redações oficiais do exame. A criação de um dataset de redações oficiais permite validar a efetividade desses sistemas, tornando-os mais confiáveis e úteis como ferramenta de apoio para estudantes, professores e plataformas educacionais que buscam preparação para o ENEM real.</p>
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
            Carregando o PDF...
          </p>
        </div>
      ),
      action: openProposalPDF,
    },
    {
      id: 'poster',
      title: 'Poster',
      content: (
        <div>
          <h2 style={styles.sectionHeading}>Poster</h2>
          <p>
            Carregando o PDF...
          </p>
        </div>
      ),
      action: openPosterPDF,
    },
    {
      id: 'monografia',
      title: 'Monografia',
      content: (
        <div>
          <h2 style={styles.sectionHeading}>Monografia</h2>
          <p>
            Carregando o PDF...
          </p>
        </div>
      ),
      action: openMonografiaPDF,
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
        
        <h1 style={styles.title}>Avaliação de Modelos de Correção Automática de Redações ENEM</h1>
        <p style={styles.subtitle}>
        um estudo com redações oficiais
        </p>
    
        <div style={styles.supervisors}>
          <p style={styles.supervisorLine}>
            <span style={styles.supervisorLabel}>Autor:</span> Laís Nuto Rossman
          </p>
          <p style={styles.supervisorLine}>
              <span style={styles.supervisorLabel}>Orientador:</span> Prof. Dr. Denis Deratani Mauá
          </p>
          <p style={styles.supervisorLine}>
            <span style={styles.supervisorLabel}>Coorientador:</span> Prof. Msc. Igor Cataneo Silveira
          </p>
        </div>
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

export default TCCPage;

