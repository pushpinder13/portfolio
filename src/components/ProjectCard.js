import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, technologies, liveLink, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx modern-card">
        <img src={imgUrl} alt={`${title} project screenshot`}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {technologies && Array.isArray(technologies) && (
            <div className="project-tech">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          )}
          <div className="project-links">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn-modern btn-sm">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-modern btn-sm">
                <i className="fab fa-github"></i> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  )
}
