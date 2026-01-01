import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const ModernBanner = () => {
  useScrollAnimation();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Full Stack Developer", "React.js Expert", "Python Developer", "ML Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { 
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="modern-hero" id="home">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content fade-in-up">
            <div className="hero-badge">
              <i className="fas fa-code"></i>
              <span>Available for opportunities</span>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Pushpinder Singh</span>
            </h1>
            
            <h2 className="hero-subtitle">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h2>
            
            <p className="hero-description">
              Passionate full-stack developer specializing in modern web technologies, 
              machine learning, and creating exceptional digital experiences. 
              I transform ideas into scalable, user-friendly applications.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Projects</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>
            </div>
            
            <div className="hero-actions">
              <button 
                className="btn-primary hero-btn"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              
              <a 
                href="/Resume.pdf" 
                download 
                className="btn-secondary hero-btn"
              >
                <i className="fas fa-download"></i>
                <span>Download CV</span>
              </a>
            </div>
          </Col>
          
          <Col lg={6} className="hero-visual fade-in-up">
            <div className="hero-image-container">
              <div className="hero-image-bg"></div>
              <div className="code-snippet">
                <div className="code-header">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="code-title">portfolio.js</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span> 
                    <span className="code-variable"> developer</span> 
                    <span className="code-operator"> = </span>
                    <span className="code-string">{'{'}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-property">  name:</span> 
                    <span className="code-string">'Pushpinder Singh'</span>,
                  </div>
                  <div className="code-line">
                    <span className="code-property">  skills:</span> 
                    <span className="code-string">['React', 'Node.js', 'Python']</span>,
                  </div>
                  <div className="code-line">
                    <span className="code-property">  passion:</span> 
                    <span className="code-string">'Building amazing apps'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-string">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
}