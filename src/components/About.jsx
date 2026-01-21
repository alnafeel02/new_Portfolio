import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import resume from '../assets/AL_NAFEEL_FULL_STACK_2025.pdf';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const skills = [
    'React', 'JavaScript (ES6+)', 'Node.js', 'Express',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'MongoDB', 'Figma'
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo('.section-title', 
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.about-text p', 
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.skill-tag', 
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.7)' },
      '-=0.5'
    )
    .fromTo('.resume-container',
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.2'
    );

  }, { scope: container });

  return (
    <section id="about" className="section container" ref={container}>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a dedicated developer with a strong focus on creating intuitive and dynamic user experiences. 
            My journey in web development started with a curiosity for how things work on the web, which has evolved into a passion for building robust full-stack applications.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open source, or refining my design skills. 
            I believe in writing clean, maintainable code and keeping up with the latest industry trends.
          </p>
        </div>
        <div className="skills-container">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
          <div className="resume-container">
            <a href={resume} download="AL_NAFEEL_FULL_STACK_2025.pdf" className="resume-btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
