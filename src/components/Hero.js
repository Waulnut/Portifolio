import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Certificates from './Certificates_OLD';
import '../styles/Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">{t.hero.greeting}</p>
            <h1 className="hero-name">{t.hero.name}</h1>
            <h2 className="hero-title">{t.hero.title}</h2>
            <p className="hero-bio">{t.hero.bio}</p>

            <div className="hero-buttons">
              <button onClick={scrollToProjects} className="hero-cta">
                {t.hero.cta}
                <ChevronDown size={20} />
              </button>
              <Certificates />
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src="https://placehold.co/400x400/0A192F/64FFDA?text=Yuri+Sousa" 
              alt="Yuri Sousa"
            />
          </div>
        </div>
      </div>

      <div className="hero-grid-overlay"></div>
    </section>
  );
};

export default Hero;
