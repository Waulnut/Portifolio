import React from 'react';
import { Database, Code, BarChart3, FileSpreadsheet, PieChart, Workflow, Brain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Skills.css';

const skillIcons = {
  'Python': Code,
  'SQL': Database,
  'Power BI': BarChart3,
  'Excel': FileSpreadsheet,
  'Data Visualization': PieChart,
  'ETL': Workflow,
  'Machine Learning': Brain
};

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>
        <div className="skills-grid">
          {t.skills.items.map((skill, index) => {
            const IconComponent = skillIcons[skill.name] || Code;
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;