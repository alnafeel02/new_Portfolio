import { useRef } from 'react';
import { Download, Code2, Server, Database, Wrench, Sparkles, GraduationCap, CheckCircle2, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import resume from '../assets/AlNafeel_FullStackDeveloper.pdf';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

  const stats = [
    { number: '5+', label: 'Live Applications Deployed' },
    { number: '100%', label: 'Responsive Design Precision' },
    { number: '10+', label: 'Tech Stack Frameworks' },
    { number: '24/7', label: 'Continuous Learning Mindset' },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 size={22} className="cat-icon blue" />,
      skills: ['React 19', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'GSAP Animations', 'Responsive Web Design']
    },
    {
      title: 'Backend Engineering',
      icon: <Server size={22} className="cat-icon purple" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'OAuth Integration', 'Server Middleware']
    },
    {
      title: 'Database & Data Systems',
      icon: <Database size={22} className="cat-icon green" />,
      skills: ['MongoDB', 'Mongoose ODM', 'Data Modeling', 'CRUD Operations', 'JSON Querying', 'Data Security']
    },
    {
      title: 'Tools & Cloud Deployment',
      icon: <Wrench size={22} className="cat-icon orange" />,
      skills: ['Git & GitHub', 'Figma Design', 'Vercel Deployment', 'Render Cloud', 'VS Code', 'Npm / Vite']
    }
  ];

  useGSAP(() => {
    gsap.fromTo('.about-header, .stats-grid-box, .about-text-card, .skill-category-card', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        onComplete: () => {
          gsap.set('.about-header, .stats-grid-box, .about-text-card, .skill-category-card', { clearProps: 'opacity,transform' });
        }
      }
    );
  }, { scope: container });

  return (
    <section id="about" className="section" ref={container}>
      <div className="container">
        {/* Header */}
        <div className="section-header about-header">
          <span className="section-badge">
            <Sparkles size={14} /> About Me
          </span>
          <h2 className="section-title">
            Crafting Digital Solutions with <span className="gradient-text">Passion & Precision</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive look into my technical background, core competencies, and full-stack skills.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="glass-card stats-grid-box">
          {stats.map((st, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-number gradient-text">{st.number}</span>
              <span className="stat-label">{st.label}</span>
            </div>
          ))}
        </div>

        {/* Main Grid: Bio & Prominent Skills */}
        <div className="about-main-grid">
          {/* Detailed Bio Card */}
          <div className="glass-card about-text-card">
            <h3 className="card-heading">
              <GraduationCap size={22} className="heading-icon blue" /> My Journey & Background
            </h3>
            <p className="about-paragraph">
              I am a dedicated Full Stack Developer focused on turning complex ideas into seamless, elegant software applications. 
              My development methodology centers around user-centric design, clean modular code, and high-performance server architectures.
            </p>
            <p className="about-paragraph">
              Over the course of my projects, I have engineered full-featured applications ranging from responsive loan & finance calculators 
              to video-streaming wellness platforms and secure JWT authentication providers. I pay meticulous attention to micro-interactions, responsive breakpoints, and API route efficiency.
            </p>
            
            <div className="strengths-checklist">
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Modern React 19 Ecosystem & Hooks</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> REST API Architecture & Express Middleware</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> MongoDB Database Modeling & Aggregations</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Responsive Glassmorphism Design Systems</div>
            </div>

            <div className="resume-cta-wrapper">
              <a href={resume} download="AL_NAFEEL_FULLSTACKDEVELOPER.pdf" className="btn btn-primary resume-btn">
                <Download size={18} /> Download Full Resume (PDF)
              </a>
            </div>
          </div>

          {/* Prominent Technical Skills Grid */}
          <div className="skills-column">
            <div className="skills-column-header">
              <Cpu size={20} className="cat-icon blue" />
              <h3 className="skills-main-title">Technical Skills & Expertise</h3>
            </div>
            
            <div className="skills-categories-grid">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="glass-card skill-category-card">
                  <div className="category-header">
                    {cat.icon}
                    <h4 className="category-title">{cat.title}</h4>
                  </div>
                  <div className="skills-badge-list">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



