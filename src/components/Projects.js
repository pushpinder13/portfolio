import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
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
// import fam from "../assets/img/YeTunFamcolored.jpg"

import Eatthis1 from "../assets/img/Eatthis1.png"
import Eatthis2 from "../assets/img/Eatthis2.png"
import Eatthis3 from "../assets/img/Eatthis3.png"
import Eatthis4 from "../assets/img/Eatthis4.png"
import Eatthis5 from "../assets/img/Eatthis5.png"
import Eatthis6 from "../assets/img/Eatthis6.png"


import 'animate.css';

export const Projects = () => {

  const EatthisProject = [
    {
      title: "ReelBite",
      // description: "Web App",
      imgUrl: Eatthis1,
    },
    {
      title: "ReelBite",
      // description: "Web App",
      imgUrl: Eatthis2,
    },
    {
      title: "ReelBite",
      // description: "Web App",
      imgUrl: Eatthis3,
    },
    {
      title: "ReelBite",
      // description: "Web App",
      imgUrl: Eatthis4,
    },
    {
      title: "ReelBite",
      // description: "Web App",
      imgUrl: Eatthis5,
    },

    {
      title: "ReelBite",
      // description: "Web App",
      imgUrl: Eatthis6,
    },

  ];

  const Kajaproject = [
    {
      title: "Review Hub",
      // description: "Design & Development",
      imgUrl: KajaImg1,
    },
    {
      title: "Review Hub",
      // description: "Design & Development",
      imgUrl: KajaImg2,
    },
    {
      title: "Review Hub",
      // description: "Design & Development",
      imgUrl: KajaImg3,
    },
    {
      title: "Review Hub",
      // description: "Design & Development",
      imgUrl: KajaImg4,
    },
    {
      title: "Review Hub",
      // description: "Design & Development",
      imgUrl: KajaImg5,
    },

  ];

  const GANprojects = [
    {
      title: "VoteBoss Hub",
      // description: "Training Result 0 of 100",
      imgUrl: Gan1,
    },
    {
      title: "VoteBoss Hub",
      // description: "Training Result 20 of 100",
      imgUrl: Gan2,
    },
    {
      title: "VoteBoss Hub",
      // description: "Training Result 40 0f 100",
      imgUrl: Gan3,
    },
    {    
      title: "VoteBoss Hub",
      // description: "Training Result 60 of 100",
      imgUrl: Gan4,
    },
    {
      title: "VoteBoss Hub",
      // description: "Training Result 80 of 100",
      imgUrl: Gan5,
    },
    {
      title: "VoteBoss Hub",
      // description: "Training Result 100 of 100",
      imgUrl: Gan6,
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
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Here are the demos of some of the projects that I worked on. For more information visit my github provided on top fo the page</p>
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
                  <Nav.Link eventKey="fourth">Coming Soon...</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
              <Tab.Pane eventKey="first">
                <p>ReelBite - Your ultimate online destination for movie reviews, ticket bookings, and meal orders. (Where movies meet meals). Link - <a href="https://reelbite1.netlify.app/">ReelBite</a></p>
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
                <p>Review Hub - Discover and share detailed reviews on food, academics, sports, and faculty at universities with our user-friendly platform. Link - <a href="https://surveyform13.netlify.app/">Review Hub</a></p>
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
                <p>VoteBoss Hub - Cast your votes on selected players effortlessly and access reliable reviews with our seamless, user-friendly platform.Link - <a href="https://big-boss-voting-zone.netlify.app/signup/signup#">VoteBoss Hub</a></p>
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
                {/* <Tab.Pane eventKey="fourth">
                  <p>More Project to come but for now just enjoy some cute art :P</p>
                  <Row>
                    {
                      more.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
