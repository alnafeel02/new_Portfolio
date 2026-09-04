import { useRef } from 'react';
import { ArrowRight, Code2, CheckCircle2, Terminal, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';
import profileImg from '../assets/nafee.jpeg';

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out'
    })
    .from('.hero-title', {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-description', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-actions', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-image-card', {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.4)'
    }, '-=0.8')
    .from('.floating-stat', {
      y: 15,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4');

  }, { scope: container });

  return (
    <section id="hero" className="hero-section" ref={container}>
      {/* Background Ambient Glows */}
      <div className="bg-ambient-orb hero-orb-1" />
      <div className="bg-ambient-orb hero-orb-2" />

      <div className="container">
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot" />
              <span>Available for New Projects</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Al Nafeel</span>.
              <br />
              Building Next-Gen <span className="gradient-text-alt">Web Experiences</span>.
            </h1>

            <p className="hero-description">
              Full Stack Developer specializing in responsive React frontend architectures, sleek visual design systems, and robust Node.js backend solutions.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                <Terminal size={18} /> Contact Me
              </a>
            </div>

            <div className="hero-tech-highlights">
              <span className="tech-chip"><Sparkles size={14} /> React 19</span>
              <span className="tech-chip"><Sparkles size={14} /> Node.js</span>
              <span className="tech-chip"><Sparkles size={14} /> JavaScript</span>
              <span className="tech-chip"><Sparkles size={14} /> Full Stack</span>
            </div>
          </div>

          {/* Profile Visual Card */}
          <div className="hero-visual">
            <div className="hero-image-card">
              <div className="card-glow-ring" />
              <img src={profileImg} alt="Al Nafeel" className="hero-profile-img" />

              {/* Floating Stat Badges */}
              <div className="floating-stat stat-top">
                <div className="stat-icon-wrapper blue">
                  <Code2 size={16} />
                </div>
                <div>
                  <div className="stat-title">Full Stack</div>
                  <div className="stat-sub">React & Node.js</div>
                </div>
              </div>

              <div className="floating-stat stat-bottom">
                <div className="stat-icon-wrapper purple">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="stat-title">5+ Live Apps</div>
                  <div className="stat-sub">Vercel & Render</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

