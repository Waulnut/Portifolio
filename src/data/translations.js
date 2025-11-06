export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Yuri Sousa',
      title: 'Data Analyst',
      bio: 'Data Analyst with experience in BI, SQL, and Python. I turn data into actionable insights to support business decisions.',
      cta: 'View My Work'
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'Technologies I work with',
      items: [
        { name: 'Python', description: 'Data analysis, automation, and scripting' },
        { name: 'SQL', description: 'Database queries and data manipulation' },
        { name: 'Power BI', description: 'Interactive dashboards and reports' },
        { name: 'Excel', description: 'Advanced formulas, pivot tables, and VBA' },
        { name: 'Data Visualization', description: 'Creating insightful charts and graphs' },
        { name: 'ETL', description: 'Extract, Transform, Load processes' },
        { name: 'Machine Learning', description: 'Basic predictive modeling and analysis' }
      ]
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'My professional journey',
      items: [
        {
          title: 'Data Analyst Intern',
          company: 'Aperam',
          period: 'Jan 2024 – Dec 2024',
          description: 'Developed dashboards and reports using Power BI, performed SQL queries for data extraction, and supported decision-making processes with data-driven insights. Collaborated with cross-functional teams to identify business needs and deliver analytical solutions.'
        }
      ]
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Showcase of my analytical work',
      viewProject: 'View Project',
      backToHome: 'Back to Home',
      projectLink: 'View Live Project',
      items: [
        {
          id: 1,
          title: 'Sales Dashboard Analysis',
          technologies: ['Power BI', 'SQL', 'Excel'],
          shortDescription: 'Interactive dashboard analyzing sales performance across regions',
          fullDescription: 'Comprehensive sales analysis dashboard that provides real-time insights into revenue trends, regional performance, and customer behavior. The project involved data cleaning, transformation, and visualization to help stakeholders make informed decisions. Key metrics include sales growth, customer retention, and product performance.',
          images: ['https://placehold.co/800x500/1e3a8a/64FFDA?text=Sales+Dashboard'],
          liveLink: 'https://github.com'
        },
        {
          id: 2,
          title: 'Customer Segmentation',
          technologies: ['Python', 'Pandas', 'Scikit-learn'],
          shortDescription: 'Machine learning project for customer segmentation analysis',
          fullDescription: 'Applied clustering algorithms to segment customers based on purchasing behavior and demographics. Used Python libraries like Pandas for data manipulation and Scikit-learn for implementing K-means clustering. The results helped the marketing team create targeted campaigns for different customer segments.',
          images: ['https://placehold.co/800x500/1e3a8a/64FFDA?text=Customer+Segmentation'],
          liveLink: 'https://github.com'
        },
        {
          id: 3,
          title: 'ETL Pipeline Automation',
          technologies: ['Python', 'SQL', 'Airflow'],
          shortDescription: 'Automated data pipeline for daily report generation',
          fullDescription: 'Designed and implemented an automated ETL pipeline that extracts data from multiple sources, transforms it according to business rules, and loads it into a data warehouse. The pipeline runs daily and generates automated reports, reducing manual work by 80% and ensuring data accuracy.',
          images: ['https://placehold.co/800x500/1e3a8a/64FFDA?text=ETL+Pipeline'],
          liveLink: 'https://github.com'
        },
        {
          id: 4,
          title: 'Inventory Optimization',
          technologies: ['Excel', 'Power BI', 'SQL'],
          shortDescription: 'Data analysis to optimize inventory levels and reduce costs',
          fullDescription: 'Analyzed historical inventory data to identify patterns and optimize stock levels. Created predictive models to forecast demand and prevent stockouts while minimizing holding costs. The analysis resulted in a 15% reduction in inventory costs and improved service levels.',
          images: ['https://placehold.co/800x500/1e3a8a/64FFDA?text=Inventory+Analysis'],
          liveLink: 'https://github.com'
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Feel free to reach out',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.'
      },
      social: 'Connect with me'
    },
    footer: {
      rights: 'All rights reserved.',
      made: 'Built with React'
    },
    certificates: {
      button: 'Certificates',
      title: 'My Certificates',
      subtitle: 'Professional certifications and completed courses',
      items: [
        {
          title: 'Python for Data Science',
          issuer: 'Coursera - IBM',
          date: 'Dec 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Python+for+Data+Science'
        },
        {
          title: 'SQL Advanced Queries',
          issuer: 'LinkedIn Learning',
          date: 'Nov 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=SQL+Advanced'
        },
        {
          title: 'Power BI Essential Training',
          issuer: 'Microsoft',
          date: 'Oct 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Power+BI+Training'
        },
        {
          title: 'Data Visualization Fundamentals',
          issuer: 'Udemy',
          date: 'Sep 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Data+Visualization'
        },
        {
          title: 'Machine Learning Basics',
          issuer: 'Google - Coursera',
          date: 'Aug 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Machine+Learning'
        },
        {
          title: 'Excel for Business Analytics',
          issuer: 'Udacity',
          date: 'Jul 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Excel+Analytics'
        },
        {
          title: 'ETL Process and Data Warehousing',
          issuer: 'DataCamp',
          date: 'Jun 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=ETL+Data+Warehouse'
        },
        {
          title: 'Business Intelligence Fundamentals',
          issuer: 'Pluralsight',
          date: 'May 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=BI+Fundamentals'
        }
      ]
    }
  },
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato'
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Yuri Sousa',
      title: 'Analista de Dados',
      bio: 'Analista de Dados com experiência em BI, SQL e Python. Transformo dados em insights acionáveis para apoiar decisões de negócio.',
      cta: 'Ver Meu Trabalho'
    },
    skills: {
      title: 'Habilidades & Expertise',
      subtitle: 'Tecnologias que utilizo',
      items: [
        { name: 'Python', description: 'Análise de dados, automação e scripts' },
        { name: 'SQL', description: 'Consultas e manipulação de dados' },
        { name: 'Power BI', description: 'Dashboards e relatórios interativos' },
        { name: 'Excel', description: 'Fórmulas avançadas, tabelas dinâmicas e VBA' },
        { name: 'Visualização de Dados', description: 'Criação de gráficos e visualizações' },
        { name: 'ETL', description: 'Processos de extração, transformação e carga' },
        { name: 'Machine Learning', description: 'Modelagem preditiva básica e análise' }
      ]
    },
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Minha jornada profissional',
      items: [
        {
          title: 'Estagiário em Análise de Dados',
          company: 'Aperam',
          period: 'Jan 2024 – Dez 2024',
          description: 'Desenvolvimento de dashboards e relatórios usando Power BI, execução de consultas SQL para extração de dados e suporte a processos de tomada de decisão com insights orientados por dados. Colaboração com equipes multifuncionais para identificar necessidades de negócio e entregar soluções analíticas.'
        }
      ]
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Portfólio do meu trabalho analítico',
      viewProject: 'Ver Projeto',
      backToHome: 'Voltar ao Início',
      projectLink: 'Ver Projeto Online',
      items: [
        {
          id: 1,
          title: 'Dashboard de Análise de Vendas',
          technologies: ['Power BI', 'SQL', 'Excel'],
          shortDescription: 'Dashboard interativo analisando desempenho de vendas por região',
          fullDescription: 'Dashboard abrangente de análise de vendas que fornece insights em tempo real sobre tendências de receita, desempenho regional e comportamento do cliente. O projeto envolveu limpeza, transformação e visualização de dados para ajudar stakeholders a tomar decisões informadas. Métricas principais incluem crescimento de vendas, retenção de clientes e desempenho de produtos.',
          images: ['https://placehold.co/800x500/1e3a8a/64FFDA?text=Dashboard+de+Vendas'],
          liveLink: 'https://github.com'
        },
        {
          id: 2,
          title: 'Segmentação de Clientes',
          technologies: ['Python', 'Pandas', 'Scikit-learn'],
          shortDescription: 'Projeto de machine learning para análise de segmentação de clientes',
          fullDescription: 'Aplicação de algoritmos de clustering para segmentar clientes com base em comportamento de compra e demografia. Uso de bibliotecas Python como Pandas para manipulação de dados e Scikit-learn para implementação de clustering K-means. Os resultados ajudaram a equipe de marketing a criar campanhas direcionadas para diferentes segmentos de clientes.',
          images: ['https://placehold.co/800x500/1e3a8a/64FFDA?text=Segmentacao+de+Clientes'],
          liveLink: 'https://github.com'
        },
        {
          id: 3,
          title: 'Automação de Pipeline ETL',
          technologies: ['Python', 'SQL', 'Airflow'],
          shortDescription: 'Pipeline de dados automatizado para geração de relatórios diários',
          fullDescription: 'Design e implementação de um pipeline ETL automatizado que extrai dados de múltiplas fontes, transforma conforme regras de negócio e carrega em um data warehouse. O pipeline executa diariamente e gera relatórios automatizados, reduzindo trabalho manual em 80% e garantindo precisão dos dados.',
          images: ['https://placehold.co/800x500/1e3a8a/64FFDA?text=Pipeline+ETL'],
          liveLink: 'https://github.com'
        },
        {
          id: 4,
          title: 'Otimização de Estoque',
          technologies: ['Excel', 'Power BI', 'SQL'],
          shortDescription: 'Análise de dados para otimizar níveis de estoque e reduzir custos',
          fullDescription: 'Análise de dados históricos de estoque para identificar padrões e otimizar níveis de estoque. Criação de modelos preditivos para prever demanda e prevenir rupturas enquanto minimiza custos de manutenção. A análise resultou em uma redução de 15% nos custos de estoque e melhoria nos níveis de serviço.',
          images: ['https://placehold.co/800x500/1e3a8a/64FFDA?text=Analise+de+Estoque'],
          liveLink: 'https://github.com'
        }
      ]
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Sinta-se à vontade para conversar',
      form: {
        name: 'Seu Nome',
        email: 'Seu Email',
        message: 'Sua Mensagem',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso!',
        error: 'Falha ao enviar mensagem. Tente novamente.'
      },
      social: 'Conecte-se comigo'
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      made: 'Desenvolvido com React'
    },
    certificates: {
      button: 'Certificados',
      title: 'Meus Certificados',
      subtitle: 'Certificações profissionais e cursos concluídos',
      items: [
        {
          title: 'Python para Ciência de Dados',
          issuer: 'Coursera - IBM',
          date: 'Dez 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Python+Ciencia+Dados'
        },
        {
          title: 'Consultas Avançadas SQL',
          issuer: 'LinkedIn Learning',
          date: 'Nov 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=SQL+Avancado'
        },
        {
          title: 'Treinamento Essencial Power BI',
          issuer: 'Microsoft',
          date: 'Out 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Treinamento+Power+BI'
        },
        {
          title: 'Fundamentos de Visualização de Dados',
          issuer: 'Udemy',
          date: 'Set 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Visualizacao+Dados'
        },
        {
          title: 'Básico de Machine Learning',
          issuer: 'Google - Coursera',
          date: 'Ago 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Machine+Learning'
        },
        {
          title: 'Excel para Análise de Negócios',
          issuer: 'Udacity',
          date: 'Jul 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=Excel+Analise'
        },
        {
          title: 'Processo ETL e Data Warehousing',
          issuer: 'DataCamp',
          date: 'Jun 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=ETL+Data+Warehouse'
        },
        {
          title: 'Fundamentos de Business Intelligence',
          issuer: 'Pluralsight',
          date: 'Mai 2023',
          image: 'https://placehold.co/400x300/112240/64FFDA?text=BI+Fundamentos'
        }
      ]
    }
  }
};