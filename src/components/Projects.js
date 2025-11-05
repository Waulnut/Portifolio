import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>
        <div className="projects-grid">
          {t.projects.items.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image">
                <img src={project.images[0]} alt={project.title} />
                <div className="project-overlay">
                  <ExternalLink size={32} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <p className="project-description">{project.shortDescription}</p>
                <button className="project-view-btn">
                  {t.projects.viewProject}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;