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
      <div>
          <h2>Contact Us</h2>
          <p>Hello, you gorgeous visitor, you!
            <br /> Unfortunately due to COVID-19 concerns regarding close proximity, I've chosen to ensure my customers' safety by temporarily shutting down the on-site location of my shop for now.</p>
          <p>Physical Location: `[Temporarily Closed]`</p>
          <p>2202 Broadway St<br />San Antonio, Tx. 78215</p>
          <p>Phone: (210) 912-3955</p>
          <p>E-mail: <Mailto email="jessica@redcatandco.com" subject="General Inquiry" body="I'd like to ask about ...">Send me an e-mail!</Mailto></p>
          <p><a href="https://www.google.com/maps?daddr=2202+Broadway+St,+78215" target="_blank" class="btn"><img src="./src/assets/cover/Maps.png"></img></a></p>
        </div>
      </Col>
    </Row>
  </Container>
        
)