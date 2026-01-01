import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Logo } from './Logo';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const ModernNavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="lg" className={`modern-navbar ${scrolled ? "scrolled" : ""}`} fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="brand-logo">
            <Logo size={35} />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="modern-toggler">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto modern-nav">
              <Nav.Link 
                href="#home" 
                className={`modern-nav-link ${activeLink === 'home' ? 'active' : ''}`} 
                onClick={() => onUpdateActiveLink('home')}
              >
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={`modern-nav-link ${activeLink === 'skills' ? 'active' : ''}`} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                <i className="fas fa-code"></i>
                <span>Skills</span>
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={`modern-nav-link ${activeLink === 'projects' ? 'active' : ''}`} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                <i className="fas fa-laptop-code"></i>
                <span>Projects</span>
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                className={`modern-nav-link ${activeLink === 'contact' ? 'active' : ''}`} 
                onClick={() => onUpdateActiveLink('contact')}
              >
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </Nav.Link>
            </Nav>
            
            <div className="navbar-actions">
              <div className="social-links">
                <a href="https://github.com/pushpinder13" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/pushpinder13/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <HashLink to='#contact'>
                <button className="cta-button">
                  <span>Let's Connect</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}