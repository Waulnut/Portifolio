import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {currentYear} Yuri Sousa. {t.footer.rights}</p>
          <p className="footer-built">{t.footer.made}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;