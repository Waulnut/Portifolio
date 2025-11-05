import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Experience.css';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </div>
        <div className="experience-timeline">
          {t.experience.items.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-icon">
                <Briefcase size={24} />
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-meta">
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-period">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;