import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ModernProjects = () => {
  useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "VEHIQL: Car Dealership Management Platform",
      category: "fullstack",
      type: "Full-Stack Application",
      description: "Comprehensive car dealership platform with user authentication, inventory management, and admin dashboard with role-based access control.",
      technologies: ["React.js", "JavaScript", "PostgreSQL", "Node.js", "Express.js"],
      features: [
        "User authentication and authorization",
        "Responsive frontend with search & filtering",
        "PostgreSQL database with CRUD operations",
        "Admin dashboard with sales analytics",
        "Review moderation system"
      ],
      githubUrl: "https://github.com/pushpinder13/vehiql",
      liveUrl: "https://vehiql-rust.vercel.app/",
      image: ["/images/vehiql1.png", "/images/vehiql2.png", "/images/vehiql3.png"],
      status: "Ongoing",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Wine Quality Prediction System",
      category: "ml",
      type: "Machine Learning Application",
      description: "Random Forest web application for wine quality prediction achieving 93% accuracy with real-time analysis and interactive dashboard.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit"],
      features: [
        "93% prediction accuracy with Random Forest",
        "Interactive Streamlit dashboard",
        "Real-time quality analysis",
        "Feature importance visualization",
        "End-to-end ML pipeline"
      ],
      githubUrl: "https://github.com/pushpinder13/wine-quality",
      liveUrl: "https://wine-quality-predictor.streamlit.app",
      image: ["/images/wine1.png", "/images/wine2.png", "/images/wine3.png"],
      status: "Completed",
      duration: "2 months"
    },
    {
      id: 3,
      title: "Rentifyy: Home Rental Hub",
      category: "fullstack",
      type: "Full-Stack Application",
      description: "Ultimate home rental platform for furniture, appliances, electronics, and decor with real-time bookings, vendor dashboard, and seamless rental management.",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "HTML5", "CSS3"],
      features: [
        "Real-time booking system",
        "Vendor dashboard for listing management",
        "User-friendly rental process",
        "Inventory management system",
        "Responsive design for all devices"
      ],
      githubUrl: "https://github.com/pushpinder13/Rentifyy",
      liveUrl: null,
      image: ["/images/rentifyy1.png", "/images/rentifyy2.png", "/images/rentifyy3.png"],
      status: "Completed",
      duration: "4 months"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'fullstack', label: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'ml', label: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  console.log('Active filter:', activeFilter);
  console.log('Filtered projects:', filteredProjects);

  const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % project.image.length);
    };
    
    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + project.image.length) % project.image.length);
    };
    
    console.log('Rendering project:', project.title);
    return (
      <Col lg={12} className="mb-4" style={{ display: 'block' }}>
        <div className="modern-project-card fade-in-up" style={{ opacity: 1, visibility: 'visible' }}>
          <div className="project-header">
            <div className="project-meta">
              <span className="project-type">{project.type}</span>
              <span className="project-status">{project.status}</span>
            </div>
            <div className="project-duration">{project.duration}</div>
          </div>

          <div className="project-content">
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                <h4>Technologies:</h4>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <i className="fab fa-github"></i>
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-visual">
              <div className="project-image" style={{ position: 'relative' }}>
                <img src={project.image[currentImageIndex]} alt={`${project.title} ${currentImageIndex + 1}`} style={{ width: '100%', height: 'auto' }} />
                <button onClick={prevImage} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.7)', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer', zIndex: 10, borderRadius: '5px' }}>‹</button>
                <button onClick={nextImage} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.7)', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer', zIndex: 10, borderRadius: '5px' }}>›</button>
                <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '5px', zIndex: 10 }}>
                  {project.image.map((_, index) => (
                    <div key={index} onClick={() => setCurrentImageIndex(index)} style={{ width: '12px', height: '12px', borderRadius: '50%', background: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.5)', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)' }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  };

  return (
    <section className="modern-projects" id="projects">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="projects-header fade-in-up">
              <h2 className="section-title">
                <span className="text-gradient">Featured Projects</span>
              </h2>
              <p className="section-subtitle">
                Showcasing my expertise in full-stack development, machine learning, and modern web technologies
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={12}>
            <div className="project-filters fade-in-up">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => {
                    console.log('Filter clicked:', filter.key);
                    setActiveFilter(filter.key);
                  }}
                >
                  {filter.label}
                  <span className="filter-count">{filter.count}</span>
                </button>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={`project-${project.id}-${index}`} project={project} />
            ))
          ) : (
            <Col lg={12} className="text-center">
              <div style={{ color: 'white', padding: '2rem' }}>
                <h3>No projects found</h3>
              </div>
            </Col>
          )}
        </Row>


      </Container>
    </section>
  );
};