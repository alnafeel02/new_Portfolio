import { useRef } from 'react';
import { Github, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';
import yogaImg from '../assets/image1.png';
import authImg from '../assets/image2.png';
import ecommImg from '../assets/image3.png';
import proImg from '../assets/image4.png';
import financeImg from '../assets/image5.png';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef(null);

  const projects = [
    {
      title: 'Finance Management Portal',
      description: 'A responsive financial application enabling users to submit loan requests, check approval metrics, track payment history, and view dynamic dashboards.',
      image: financeImg,
      tags: ['React', 'JavaScript', 'Node.js', 'Vercel'],
      github: 'https://github.com/alnafeel02/finance_project',
      live: 'https://finance-project-green.vercel.app/'
    },
    {
      title: 'Yoga & Mindfulness Platform',
      description: 'A holistic wellness platform offering video class streaming, user progress tracking, and personalized scheduling for daily mindfulness practice.',
      image: yogaImg,
      tags: ['React', 'Tailwind CSS', 'GSAP', 'Vercel'],
      github: 'https://github.com/alnafeel02/Yoga_Course_Project',
      live: 'https://yoga-course-project.vercel.app/'
    },
    {
      title: 'Modern E-Commerce Store',
      description: 'Full-featured online shop with interactive product filtering, dynamic shopping cart drawer, checkout workflow, and responsive UI.',
      image: ecommImg,
      tags: ['React', 'State Management', 'REST API', 'Vercel'],
      github: 'https://github.com/alnafeel02/e-commerce-nafy',
      live: 'https://e-commerce-nafy.vercel.app/'
    },
    {
      title: 'Profile Management Dashboard',
      description: 'Comprehensive administration system featuring full CRUD user operations, image file uploads, dynamic data tables, and dark mode controls.',
      image: proImg,
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/alnafeel02/Profile_Management_Project',
      live: 'https://profile-management-project-seven.vercel.app/'
    },
    {
      title: 'JWT Auth & Security Suite',
      description: 'Full-stack user authentication engine with JSON Web Tokens, password encryption, role-based access control, and OAuth integration.',
      image: authImg,
      tags: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Render'],
      github: 'https://github.com/alnafeel02/Authentication_Project1',
      live: 'https://authentication-project1-client.onrender.com/'
    }
  ];

  useGSAP(() => {
    gsap.fromTo('.projects-header, .project-card', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        onComplete: () => {
          gsap.set('.projects-header, .project-card', { clearProps: 'opacity,transform' });
        }
      }
    );
  }, { scope: container });

  return (
    <section id="projects" className="section" ref={container}>
      <div className="container">
        {/* Header */}
        <div className="section-header projects-header">
          <span className="section-badge">
            <FolderGit2 size={14} /> Featured Work
          </span>
          <h2 className="section-title">
            Highlighting Recent <span className="gradient-text">Full Stack Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore live deployments and code repositories of real-world web applications built with modern web technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass-card project-card">
              {/* Browser Window Header */}
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="browser-address">
                  <span>{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
                </div>
              </div>

              {/* Image Preview Container */}
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                  loading="lazy" 
                />
                <div className="image-overlay">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="overlay-btn"
                  >
                    View Live <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-actions">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline proj-btn"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary proj-btn"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

