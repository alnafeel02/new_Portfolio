import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const container = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section tracking
      const sections = ['about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from('.nav-pill-wrapper', {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`} ref={container}>
      <div className="container">
        <div className="nav-pill-wrapper">
          {/* Logo */}
          <a href="#" className="logo">
            <div className="logo-icon">
              <Sparkles size={16} />
            </div>
            <span className="logo-text">
              Al Nafeel<span className="logo-dot">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
                {activeSection === link.id && <span className="active-dot" />}
              </a>
            ))}
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="nav-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle" 
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} className="sun-icon" /> : <Moon size={18} className="moon-icon" />}
            </button>

            {/* Mobile Toggle */}
            <button 
              className="mobile-toggle" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-inner">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-actions">
            <button onClick={toggleTheme} className="theme-toggle-mobile">
              <span>{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

