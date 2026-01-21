import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';
import yogaImg from '../assets/image1.png';
import authImg from '../assets/image2.png';
import ecommImg from '../assets/image3.png';
import proImg from '../assets/image4.png';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef(null);
  const projects = [
    {
      title: 'Yoga Course Project',
      description: 'A holistic wellness platform offering video classes, progress tracking, and personalized schedules for mindfulness.',
      image: yogaImg,
      github: 'https://github.com/alnafeel02/Yoga_Course_Project',
      live: '#'
    },
     {
      title: 'Profile Management Project',
      description: 'Full-featured online store with dynamic product catalog, shopping cart functionality, and secure payment processing.',
      image: proImg,
      github: 'https://github.com/alnafeel02/Profile_Management_Project',
      live: 'https://sage-macaron-aeab4e.netlify.app/'
    },
    {
      title: 'Authentication Project',
      description: 'Secure user management system featuring JWT implementation, OAuth integration, and role-based access control.',
      image: authImg,
      github: 'https://github.com/alnafeel02/Authentication_Project1',
      live: '#'
    },
    {
      title: 'E-Commerce Project',
      description: 'Full-featured online store with dynamic product catalog, shopping cart functionality, and secure payment processing.',
      image: ecommImg,
      github: 'https://github.com/alnafeel02/e-commerce-nafy',
      live: '#'
    },
    
  ];

  useGSAP(() => {
    gsap.fromTo('.section-title', 
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out'
      }
    );

    gsap.fromTo('.project-card', 
      { y: 50, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }
    );

  }, { scope: container });

  return (
    <section id="projects" className="section container" ref={container}>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Using a placeholder text if image fails or just bg color */}
            <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                <a href={project.github} className="link-icon">
                  <Github size={18} /> Code
                </a>
                <a href={project.live} className="link-icon">
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
