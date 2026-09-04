import { useRef, useState } from 'react';
import { Mail, Github, Instagram, Linkedin, Send, Copy, Check, MapPin, Briefcase, MessageSquare, ChevronDown, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef(null);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  // Form State
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = 'alnafeel10207@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const faqs = [
    {
      question: 'What services or project types do you specialize in?',
      answer: 'I specialize in full-stack web application development, custom React frontend design systems, RESTful API architecture with Node.js and Express, MongoDB database integration, and responsive web performance optimization.'
    },
    {
      question: 'Are you available for full-time engineering roles or freelance work?',
      answer: 'Yes! I am actively open to full-time Software Engineer / Full Stack Developer positions (Remote or Hybrid) as well as select freelance projects.'
    },
    {
      question: 'What is your typical turnaround time for a web project?',
      answer: 'Small to medium-sized projects (e.g. landing pages, calculators, portfolio dashboards) typically take 1 to 2 weeks. Comprehensive full-stack platforms take 2 to 4 weeks depending on scope.'
    },
    {
      question: 'How do we get started working together?',
      answer: 'Simply send me a message through the contact form below or drop an email directly to alnafeel10207@gmail.com. I will review your requirements and respond with an initial roadmap within 24 hours.'
    }
  ];

  const socials = [
    {
      name: 'GitHub',
      handle: '@alnafeel02',
      icon: <Github size={22} />,
      url: 'https://github.com/alnafeel02'
    },
    {
      name: 'LinkedIn',
      handle: '@al-nafeel02',
      icon: <Linkedin size={22} />,
      url: 'https://www.linkedin.com/in/al-nafeel02/'
    },
    {
      name: 'Instagram',
      handle: '@al_nafeel02',
      icon: <Instagram size={22} />,
      url: 'https://www.instagram.com/al_nafeel02/'
    }
  ];

  useGSAP(() => {
    gsap.fromTo('.contact-header, .contact-info-pills-row, .contact-grid-main, .faq-section-box', 
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
          gsap.set('.contact-header, .contact-info-pills-row, .contact-grid-main, .faq-section-box', { clearProps: 'opacity,transform' });
        }
      }
    );
  }, { scope: container });

  return (
    <section id="contact" className="section" ref={container}>
      <div className="container">
        {/* Header */}
        <div className="section-header contact-header">
          <span className="section-badge">
            <Send size={14} /> Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, a job opportunity, or just want to chat tech? Send a message or connect directly.
          </p>
        </div>

        {/* Info Badges Row */}
        <div className="contact-info-pills-row">
          <div className="info-pill">
            <MapPin size={16} className="info-icon" />
            <span>Available Worldwide / Remote</span>
          </div>
          <div className="info-pill">
            <Briefcase size={16} className="info-icon" />
            <span>Full-Time & Freelance</span>
          </div>
          <div className="info-pill">
            <Clock size={16} className="info-icon" />
            <span>Under 24h Response Time</span>
          </div>
        </div>

        {/* Main Grid: Form + Quick Channels */}
        <div className="contact-grid-main">
          {/* Interactive Form Card */}
          <div className="glass-card contact-form-card">
            <div className="form-card-header">
              <MessageSquare size={20} className="form-header-icon" />
              <h3 className="form-title">Send Me a Message</h3>
            </div>

            {submitted ? (
              <div className="form-success-message">
                <CheckCircle2 size={42} className="success-icon" />
                <h4>Message Received!</h4>
                <p>Thank you for reaching out, {formState.name || 'friend'}! I will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      placeholder="John Doe" 
                      required 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      placeholder="john@example.com" 
                      required 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input 
                    type="text" 
                    id="contact-subject" 
                    placeholder="Project Inquiry / Job Opportunity" 
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea 
                    id="contact-message" 
                    rows={5} 
                    placeholder="Hi Al Nafeel, I'd like to discuss a project..." 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Channels & Direct Email Card */}
          <div className="contact-channels-column">
            {/* Direct Email Card */}
            <div className="glass-card direct-email-card">
              <div className="email-card-icon">
                <Mail size={24} />
              </div>
              <h4 className="email-card-title">Direct Email Address</h4>
              <p className="email-card-text">{email}</p>
              <div className="email-card-actions">
                <a href={`mailto:${email}`} className="btn btn-primary email-act-btn">
                  <Mail size={16} /> Open Mail App
                </a>
                <button onClick={copyToClipboard} className="btn btn-outline email-act-btn">
                  {copied ? <Check size={16} className="green-text" /> : <Copy size={16} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Cards */}
            <div className="socials-stack">
              <h4 className="socials-title">Connect on Networks</h4>
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card social-card-item"
                >
                  <div className="soc-icon-box">{soc.icon}</div>
                  <div className="soc-info">
                    <span className="soc-name">{soc.name}</span>
                    <span className="soc-handle">{soc.handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section-box">
          <div className="faq-header">
            <Sparkles size={18} className="faq-sparkle" />
            <h3 className="faq-title">Frequently Asked Questions</h3>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`glass-card faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-question-row">
                  <span className="faq-q-text">{faq.question}</span>
                  <ChevronDown size={18} className={`faq-arrow ${openFaq === idx ? 'rotated' : ''}`} />
                </div>
                {openFaq === idx && (
                  <div className="faq-answer-row">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


