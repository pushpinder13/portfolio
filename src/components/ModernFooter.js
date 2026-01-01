import { Container, Row, Col } from "react-bootstrap";
import { Logo } from './Logo';

export const ModernFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <Container>
          <Row>
            <Col lg={4} md={6} className="footer-section">
              <div className="footer-brand">
                <Logo size={40} />
                <p className="footer-description">
                  Crafting digital experiences with passion and precision. 
                  Let's build something amazing together.
                </p>
                <div className="footer-social">
                  <a href="https://github.com/pushpinder13" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/pushpinder13/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="mailto:your.email@example.com" className="social-link">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </Col>
            
            <Col lg={2} md={6} className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </Col>
            
            <Col lg={3} md={6} className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li><a href="#projects">Web Development</a></li>
                <li><a href="#projects">Mobile Apps</a></li>
                <li><a href="#projects">Machine Learning</a></li>
                <li><a href="#projects">UI/UX Design</a></li>
              </ul>
            </Col>
            
            <Col lg={3} md={6} className="footer-section">
              <h4 className="footer-title">Get In Touch</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>India</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="copyright">
                © {currentYear} Developed by Pushpinder Singh. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="footer-bottom-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}