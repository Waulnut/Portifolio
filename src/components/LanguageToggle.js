import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle-wrapper">
      <button 
        className="language-toggle"
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        <div className={`toggle-track ${language === 'en' ? 'active-en' : 'active-pt'}`}>
          <div className="toggle-thumb">
            {language === 'en' ? (
              <svg viewBox="0 0 30 30" className="flag-icon">
                <circle cx="15" cy="15" r="15" fill="#B22234"/>
                <g>
                  <rect x="0" y="2.3" width="30" height="2.3" fill="#FFF"/>
                  <rect x="0" y="6.9" width="30" height="2.3" fill="#FFF"/>
                  <rect x="0" y="11.5" width="30" height="2.3" fill="#FFF"/>
                  <rect x="0" y="16.1" width="30" height="2.3" fill="#FFF"/>
                  <rect x="0" y="20.7" width="30" height="2.3" fill="#FFF"/>
                  <rect x="0" y="25.3" width="30" height="2.3" fill="#FFF"/>
                </g>
                <rect x="0" y="0" width="12" height="20" fill="#3C3B6E"/>
              </svg>
            ) : (
              <svg viewBox="0 0 30 30" className="flag-icon">
                <circle cx="15" cy="15" r="15" fill="#009739"/>
                <path d="M 3,15 L 15,6 L 27,15 L 15,24 Z" fill="#FEDD00"/>
                <circle cx="15" cy="15" r="5" fill="#012169"/>
                <g fill="#FFF">
                  <circle cx="12" cy="13" r="0.4"/>
                  <circle cx="13.5" cy="12.5" r="0.4"/>
                  <circle cx="15" cy="12" r="0.4"/>
                  <circle cx="16.5" cy="12.5" r="0.4"/>
                  <circle cx="18" cy="13" r="0.4"/>
                  <circle cx="12.5" cy="14.5" r="0.4"/>
                  <circle cx="14" cy="14" r="0.4"/>
                  <circle cx="15" cy="13.8" r="0.4"/>
                  <circle cx="16" cy="14" r="0.4"/>
                  <circle cx="17.5" cy="14.5" r="0.4"/>
                  <circle cx="13" cy="16" r="0.4"/>
                  <circle cx="14.5" cy="15.8" r="0.4"/>
                  <circle cx="15" cy="15.5" r="0.4"/>
                  <circle cx="16" cy="15.8" r="0.4"/>
                  <circle cx="17" cy="16" r="0.4"/>
                  <circle cx="14" cy="17" r="0.4"/>
                  <circle cx="15" cy="17.2" r="0.4"/>
                  <circle cx="16" cy="17" r="0.4"/>
                </g>
                <path d="M 11.5,15.5 Q 15,16.5 18.5,15.5" stroke="#FFF" strokeWidth="0.5" fill="none"/>
              </svg>
            )}
          </div>
        </div>
        <div className="language-labels">
          <span className="label-left">EN</span>
          <span className="label-right">PT</span>
        </div>
      </button>
    </div>
  );
};

export default LanguageToggle;
