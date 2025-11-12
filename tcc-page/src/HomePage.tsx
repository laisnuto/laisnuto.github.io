import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const styles = {
    container: {
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      color: '#333',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '60px',
      padding: '40px 20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    },
    title: {
      fontSize: '3rem',
      marginBottom: '15px',
      color: '#2c3e50',
      fontWeight: 'bold' as const,
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#7f8c8d',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1.1rem',
      color: '#555',
      maxWidth: '700px',
      margin: '20px auto',
      lineHeight: '1.8',
    },
    projectsSection: {
      marginTop: '60px',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#2c3e50',
      marginBottom: '30px',
      borderBottom: '3px solid #4a89dc',
      paddingBottom: '15px',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '30px',
    },
    projectCard: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
    },
    projectCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
    },
    projectTitle: {
      fontSize: '1.5rem',
      color: '#2c3e50',
      marginBottom: '15px',
      fontWeight: 'bold' as const,
    },
    projectDescription: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    projectTags: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '10px',
      marginTop: '15px',
    },
    tag: {
      padding: '5px 12px',
      backgroundColor: '#e8f4f8',
      color: '#4a89dc',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '500' as const,
    },
    linkButton: {
      display: 'inline-block',
      marginTop: '15px',
      padding: '10px 20px',
      backgroundColor: '#4a89dc',
      color: 'white',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: '500' as const,
      transition: 'background-color 0.3s ease',
    },
    footer: {
      marginTop: '80px',
      textAlign: 'center' as const,
      padding: '40px 20px',
      borderTop: '1px solid #eaeaea',
      color: '#7f8c8d',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
    },
    socialLink: {
      color: '#4a89dc',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Laís Nuto Rossman</h1>
        <p style={styles.subtitle}>Portfólio de Trabalhos</p>
        <p style={styles.description}>
          Bem-vindo ao meu portfólio! Aqui você encontrará uma seleção dos meus projetos 
          acadêmicos e profissionais, com foco em tecnologia, educação e pesquisa.
        </p>
      </header>

      <section style={styles.projectsSection}>
        <h2 style={styles.sectionTitle}>Projetos</h2>
        <div style={styles.projectsGrid}>
          <Link 
            to="/tcc" 
            style={styles.projectCard}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.projectCardHover);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = styles.projectCard.boxShadow as string;
            }}
          >
            <h3 style={styles.projectTitle}>Trabalho de Conclusão de Curso</h3>
            <p style={styles.projectDescription}>
              Avaliação Automática da Competência 3 em Redações do ENEM com Modelos de Linguagem. 
              Projeto de pesquisa que explora o uso de LLMs para correção automática de redações, 
              com foco em melhorar a precisão na avaliação de argumentos.
            </p>
            <div style={styles.projectTags}>
              <span style={styles.tag}>IA</span>
              <span style={styles.tag}>Educação</span>
              <span style={styles.tag}>NLP</span>
              <span style={styles.tag}>ENEM</span>
            </div>
            <span style={styles.linkButton}>Ver Projeto →</span>
          </Link>

          {/* Você pode adicionar mais projetos aqui no futuro */}
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2024 Laís Nuto Rossman</p>
        <div style={styles.socialLinks}>
          {/* Adicione seus links sociais aqui se desejar */}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

