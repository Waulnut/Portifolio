import React, { useState } from 'react';
import { Award, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Certificates.css';

const Certificates = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const certificates = t.certificates.items;

  return (
    <div className="certificates-container">
      {/* Certificates Button */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="certificates-trigger"
        data-testid="certificates-button"
        aria-label="View Certificates"
      >
        <Award size={20} />
        <span>{t.certificates.button}</span>
      </button>

      {/* Slide-out Panel Overlay */}
      {isOpen && (
        <div 
          className="certificates-overlay"
          onClick={() => setIsOpen(false)}
          data-testid="certificates-overlay"
        />
      )}

      {/* Slide-out Panel */}
      <div 
        className={`certificates-panel ${isOpen ? 'open' : ''}`}
        data-testid="certificates-panel"
      >
        <div className="certificates-header">
          <div className="certificates-header-content">
            <Award size={24} className="header-icon" />
            <h2>{t.certificates.title}</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="close-button"
            data-testid="certificates-close-button"
            aria-label="Close certificates"
          >
            <X size={24} />
          </button>
        </div>

        <div className="certificates-content">
          <p className="certificates-subtitle">{t.certificates.subtitle}</p>
          
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div 
                key={index} 
                className="certificate-card"
                data-testid={`certificate-card-${index}`}
              >
                <div className="certificate-image">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    loading="lazy"
                  />
                  <div className="certificate-overlay">
                    <Award size={32} />
                  </div>
                </div>
                <div className="certificate-info">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <span className="certificate-date">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;