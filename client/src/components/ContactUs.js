import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Mailto = ({ email, subject, body, children }) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};

export const ContactUs = () => (
  <Container>
    <Row>
      <Col>
          <h2 class="text-center"><img src={require('../assets/images/ContactUs.png')} width="50%" height="50%" alt="Contact Us Header" /></h2>
          <h5>Hello, you gorgeous visitor, you!</h5>
                  
          <p>Unfortunately due to COVID-19 health concerns regarding close proximity environments, I've made the decision to temporarily shut down my on-site location for the safetly of my customers.</p>
          
          <p class="text-center"><b>Phone:</b><br />(210) 912-3955</p>
          <p class="text-center"><a href="https://www.google.com/maps?daddr=2202+Broadway+St,+78215" target="_blank" class="btn"><img src={require('../assets/images/Maps.jpg')} class="border" width="80%" height="80%" alt="Map of Shop" /></a></p>
          <h5 class="text-danger text-center font-weight-bold">Location:</h5>
          <p class="text-center"><i>2202 Broadway St<br />San Antonio, TX 78215</i></p>
          <p class="text-center"><a href="https://www.facebook.com/redcatandco/" target="_blank"><img src={require('../assets/images/facebooklogo.png')} width="9%" height="9%" alt="Facebook Logo" /></a> <a href="https://www.instagram.com/redcatandco/" target="_blank"><img src={require('../assets/images/Instagram.png')} width="9%" height="9%" alt="Instagram Logo" /></a>  <Mailto email="jessica@redcatandco.com" subject="General Inquiry" body="I'd like to ask about ..."><img src={require('../assets/images/email.png')} width="10%" height="10%" alt="Email Me" /></Mailto></p>
      </Col>
    </Row>
  </Container>
)