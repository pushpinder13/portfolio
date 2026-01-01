import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import KajaImg1 from "../assets/img/Kaja1.png";
import KajaImg2 from "../assets/img/Kaja2.png";
import KajaImg3 from "../assets/img/Kaja3.png";
import KajaImg4 from "../assets/img/Kaja4.png";
import KajaImg5 from "../assets/img/Kaja5.png";

import Gan1 from "../assets/img/GAN1.png"
import Gan2 from "../assets/img/GAN2.png"
import Gan3 from "../assets/img/GAN3.png"
import Gan4 from "../assets/img/GAN4.png"
import Gan5 from "../assets/img/GAN5.png"
import Gan6 from "../assets/img/GAN6.png"

import Eatthis1 from "../assets/img/Eatthis1.png"
import Eatthis2 from "../assets/img/Eatthis2.png"
import Eatthis3 from "../assets/img/Eatthis3.png"
import Eatthis4 from "../assets/img/Eatthis4.png"
import Eatthis5 from "../assets/img/Eatthis5.png"
import Eatthis6 from "../assets/img/Eatthis6.png"

// Wine Quality Project Images
import Wine1 from "../assets/img/wine1.png"

// Vehicle Project Images  
import Vehicle1 from "../assets/img/vehicle1.png"

import 'animate.css';

export const Projects = () => {
  useScrollAnimation();

  const EatthisProject = [
    {
      title: "ReelBite",
      description: "Home Page",
      imgUrl: Eatthis1,
    },
    {
      title: "ReelBite",
      description: "Movie Listings",
      imgUrl: Eatthis2,
    },
    {
      title: "ReelBite",
      description: "Booking Interface",
      imgUrl: Eatthis3,
    },
    {
      title: "ReelBite",
      description: "Food Ordering",
      imgUrl: Eatthis4,
    },
    {
      title: "ReelBite",
      description: "User Dashboard",
      imgUrl: Eatthis5,
    },
    {
      title: "ReelBite",
      description: "Reviews Section",
      imgUrl: Eatthis6,
    },
  ];

  const Kajaproject = [
    {
      title: "Review Hub",
      description: "Landing Page",
      imgUrl: KajaImg1,
    },
    {
      title: "Review Hub",
      description: "Review Form",
      imgUrl: KajaImg2,
    },
    {
      title: "Review Hub",
      description: "Categories",
      imgUrl: KajaImg3,
    },
    {
      title: "Review Hub",
      description: "User Interface",
      imgUrl: KajaImg4,
    },
    {
      title: "Review Hub",
      description: "Results Display",
      imgUrl: KajaImg5,
    },
  ];

  const GANprojects = [
    {
      title: "VoteBoss Hub",
      description: "Home Page",
      imgUrl: Gan1,
    },
    {
      title: "VoteBoss Hub",
      description: "Voting Interface",
      imgUrl: Gan2,
    },
    {
      title: "VoteBoss Hub",
      description: "Player Profiles",
      imgUrl: Gan3,
    },
    {    
      title: "VoteBoss Hub",
      description: "Results Dashboard",
      imgUrl: Gan4,
    },
    {
      title: "VoteBoss Hub",
      description: "User Reviews",
      imgUrl: Gan5,
    },
    {
      title: "VoteBoss Hub",
      description: "Admin Panel",
      imgUrl: Gan6,
    },
  ];

  const wineQualityProject = [
    {
      title: "Wine Quality Predictor",
      description: "ML Model for Wine Quality Assessment",
      imgUrl: Wine1,
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      githubLink: "https://github.com/pushpinder13/wine-quality"
    },
  ];

  const vehicleProject = [
    {
      title: "Vehicle Management System",
      description: "Comprehensive Vehicle Tracking",
      imgUrl: Vehicle1,
      technologies: ["React.js", "Node.js", "MySQL", "Express.js"],
      githubLink: "https://github.com/pushpinder13/vehicle-management"
    },
  ];

  // const more = [
  //   {
  //     title: "Family Picture",
  //     description: "Just thought it would be cute",
  //     imgUrl: fam,
  //   },
  // ];

  return (
    <section className="project fade-in-up" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="fade-in-up">
              <h2>Projects</h2>
              <p>Here are the demos of some of the projects that I worked on. Each project showcases different technologies and skills. For more information and source code, visit my GitHub profile.</p>
            </div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">ReelBite</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Review Hub</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">VoteBoss Hub</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Wine Quality</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Vehicle System</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
              <Tab.Pane eventKey="first">
                <p><strong>ReelBite</strong> - Your ultimate online destination for movie reviews, ticket bookings, and meal orders. (Where movies meet meals)<br/>
                <strong>Technologies:</strong> React.js, Node.js, MongoDB, Express.js<br/>
                <strong>Live Demo:</strong> <a href="https://reelbite1.netlify.app/" target="_blank" rel="noopener noreferrer">ReelBite</a></p>
                  <Row>
                    {
                      EatthisProject.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <p><strong>Review Hub</strong> - Discover and share detailed reviews on food, academics, sports, and faculty at universities with our user-friendly platform.<br/>
                <strong>Technologies:</strong> HTML5, CSS3, JavaScript, Bootstrap<br/>
                <strong>Live Demo:</strong> <a href="https://surveyform13.netlify.app/" target="_blank" rel="noopener noreferrer">Review Hub</a></p>
                  <Row>
                    {
                      Kajaproject.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <p><strong>VoteBoss Hub</strong> - Cast your votes on selected players effortlessly and access reliable reviews with our seamless, user-friendly platform.<br/>
                <strong>Technologies:</strong> React.js, CSS3, JavaScript, Local Storage<br/>
                <strong>Live Demo:</strong> <a href="https://big-boss-voting-zone.netlify.app/" target="_blank" rel="noopener noreferrer">VoteBoss Hub</a></p>
                  <Row>
                    {
                      GANprojects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>  
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p><strong>Wine Quality Predictor</strong> - Machine learning model that predicts wine quality based on chemical properties using various ML algorithms.<br/>
                  <strong>Technologies:</strong> Python, Scikit-learn, Pandas, NumPy, Matplotlib<br/>
                  <strong>Features:</strong> Data preprocessing, Model training, Quality prediction, Visualization</p>
                  <Row>
                    {
                      wineQualityProject.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <p><strong>Vehicle Management System</strong> - Comprehensive system for tracking and managing vehicle information, maintenance, and performance metrics.<br/>
                  <strong>Technologies:</strong> React.js, Node.js, MySQL, Express.js<br/>
                  <strong>Features:</strong> Vehicle tracking, Maintenance scheduling, Performance analytics, User management</p>
                  <Row>
                    {
                      vehicleProject.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
