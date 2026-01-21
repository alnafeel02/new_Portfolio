import { useRef } from 'react';
import { Mail, Github, Instagram, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef(null);

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
    .fromTo('.contact-text', 
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.contact-btn', 
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.4'
    )
    .fromTo('.social-icon', 
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.3'
    );

  }, { scope: container });

  return (
    <section id="contact" className="section container" ref={container}>
      <div className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <a href="mailto:alnafeel10207@gmail.com" className="btn btn-primary contact-btn">
          <Mail size={20} /> Say Hello
        </a>

        <div className="social-links">
          <a href="https://github.com/alnafeel02" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={24} />
          </a>
          <a href="https://www.instagram.com/al_nafeel02/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/al-nafeel02/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
