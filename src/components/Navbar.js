import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">YS</span>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            {t.nav.about}
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            {t.nav.skills}
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">
            {t.nav.experience}
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            {t.nav.projects}
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            {t.nav.contact}
          </button>

          <div className="navbar-controls">
            <button 
              onClick={toggleTheme} 
              className="control-button"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;