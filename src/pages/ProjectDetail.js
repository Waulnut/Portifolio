import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = t.projects.items.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
            <button
              onClick={() => navigate('/#projects')}
              className="back-btn"
            >
              <ArrowLeft size={20} />
              {t.projects.backToHome}
            </button>
        </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
          <button
            onClick={() => navigate('/#projects')}
            className="back-btn"
          >
            <ArrowLeft size={20} />
            {t.projects.backToHome}
          </button>
        <div className="project-detail-content">
          <div className="project-gallery">
            <div className="gallery-main">
              <img 
                src={project.images[currentImageIndex]} 
                alt={`${project.title} ${currentImageIndex + 1}`}
              />
              {project.images.length > 1 && (
                <>
                  <button 
                    className="gallery-nav prev" 
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    className="gallery-nav next" 
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            {project.images.length > 1 && (
              <div className="gallery-dots">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="project-info">
            <h1 className="project-detail-title">{project.title}</h1>
            
            <div className="project-detail-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>

            <p className="project-detail-description">{project.fullDescription}</p>

            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              {t.projects.projectLink}
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;