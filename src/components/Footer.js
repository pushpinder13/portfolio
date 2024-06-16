import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <SocialIcon url = "https://github.com/pushpinder13"/>
              <SocialIcon url = "https://www.linkedin.com/in/pushpinder13/"/>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
