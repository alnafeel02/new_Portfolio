import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';
import profileImg from '../assets/nafee.jpeg';

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-greeting', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.hero-title', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-description', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-actions', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-image-container', {
      x: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=1');

  }, { scope: container });

  return (
    <section className="hero" ref={container}>
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="hero-greeting">Hi, I'm Al Nafeel</span>
            <h1 className="hero-title">
              <span className="gradient-text">Building digital</span>
              <br />
              experiences that matter.
            </h1>
            <p className="hero-description">
              I'm a Full Stack Developer passionate about crafting accessible, pixel-perfect user interfaces and robust backend systems.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="image-blob"></div>
            <img src={profileImg} alt="Al Nafeel" className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
