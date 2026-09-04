import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-inner">
          {/* Logo & Info */}
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-icon">
                <Sparkles size={16} />
              </div>
              <span className="logo-text">
                Al Nafeel<span className="logo-dot">.</span>
              </span>
            </a>
            <p className="footer-sub">
              Crafting digital experiences with modern web technologies.
            </p>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Al Nafeel. All rights reserved.</p>
          <p className="footer-tech">
            Engineered with <Heart size={14} className="heart-icon" /> using React 19 & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

