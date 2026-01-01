import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ModernSkills = () => {
  useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      color: "#2563eb",
      skills: [
        { name: "Java", level: 85, color: "#ed8b00" },
        { name: "C++", level: 80, color: "#00599c" },
        { name: "Python", level: 85, color: "#3776ab" }
      ]
    },
    {
      title: "Frontend Tools", 
      icon: "fas fa-palette",
      color: "#10b981",
      skills: [
        { name: "React.js", level: 90, color: "#61dafb" },
        { name: "JavaScript", level: 85, color: "#f7df1e" },
        { name: "HTML", level: 90, color: "#e34f26" },
        { name: "CSS", level: 85, color: "#1572b6" }
      ]
    },
    {
      title: "Backend Frameworks",
      icon: "fas fa-server", 
      color: "#f59e0b",
      skills: [
        { name: "Express.js", level: 80, color: "#000000" },
        { name: "Node.js", level: 85, color: "#339933" }
      ]
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      color: "#8b5cf6",
      skills: [
        { name: "PostgreSQL", level: 80, color: "#336791" },
        { name: "MongoDB", level: 75, color: "#47a248" },
        { name: "SQL", level: 85, color: "#4479a1" }
      ]
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      color: "#ef4444",
      skills: [
        { name: "GitHub", level: 90, color: "#181717" },
        { name: "Git", level: 85, color: "#f05032" },
        { name: "VS Code", level: 90, color: "#007acc" },
        { name: "Draw.io", level: 75, color: "#f08705" },
        { name: "Jupyter Notebook", level: 80, color: "#f37626" }
      ]
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      color: "#06b6d4",
      skills: [
        { name: "Active Learner", level: 95, color: "#059669" },
        { name: "Time Management", level: 85, color: "#0891b2" },
        { name: "Problem Solving", level: 90, color: "#7c3aed" },
        { name: "Communication", level: 80, color: "#dc2626" }
      ]
    }
  ];

  const ProfessionalSkill = ({ skill }) => (
    <div className="professional-skill">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <div className="skill-rating">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`rating-dot ${i < Math.floor(skill.level / 20) ? 'active' : ''}`}
              style={{ backgroundColor: i < Math.floor(skill.level / 20) ? skill.color : '#e2e8f0' }}
            ></div>
          ))}
        </div>
      </div>
      <div className="skill-level-text">{skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}</div>
    </div>
  );

  return (
    <section className="modern-skills" id="skills">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="skills-header fade-in-up">
              <h2 className="section-title">
                <span className="text-gradient">Technical Skills</span>
              </h2>
              <p className="section-subtitle">
                Proficient in modern technologies with hands-on experience in full-stack development, 
                machine learning, and database management.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <Col lg={4} md={6} sm={12} key={categoryIndex} className="mb-3">
              <div className="skill-category fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <div className="category-header">
                  <div className="category-icon" style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)` }}>
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <ProfessionalSkill 
                      key={skillIndex}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12}>
            <div className="skills-summary fade-in-up">
              <h3>Additional Expertise</h3>
              <div className="expertise-tags">
                {[
                  "Time Management", "Active Learner", "Problem Solving", 
                  "Communication", "Team Collaboration", "Critical Thinking",
                  "Adaptability", "Leadership", "Project Management"
                ].map((tag, index) => (
                  <span key={index} className="expertise-tag" style={{ animationDelay: `${index * 0.1}s` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};