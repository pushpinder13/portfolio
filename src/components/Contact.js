import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    // Simple mailto fallback - opens user's email client
    const subject = `Portfolio Contact: ${formDetails.firstName} ${formDetails.lastName}`;
    const body = `Name: ${formDetails.firstName} ${formDetails.lastName}%0D%0AEmail: ${formDetails.email}%0D%0APhone: ${formDetails.phone}%0D%0A%0D%0AMessage:%0D%0A${formDetails.message}`;
    const mailtoLink = `mailto:pdhaliwalp3@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.open(mailtoLink);
    
    setFormDetails(formInitialDetails);
    setStatus({success: true, message: 'Email client opened! Please send the email from your email app.'});
    setButtonText("Send");
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
              <img src={contactImg} alt="Let's Connect"/>
          </Col>
          <Col size={12} md={6}>
            <div className="contact-form-wrapper">
              <h2>Let's Connect & Create</h2>
              <p className="contact-subtitle">Have a project in mind? Whether it's a web application, machine learning solution, or innovative idea - I'd love to hear about it and help bring it to life.</p>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" value={formDetails.message} placeholder="Describe your project, timeline, and any specific requirements..." onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                    <button type="submit" className="contact-submit-btn">
                      <i className="fas fa-paper-plane"></i>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  }
                </Row>
              </form>
              
              <div className="contact-info">
                <div className="response-time">
                  <i className="fas fa-clock"></i>
                  <span>I typically respond within 24 hours</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
