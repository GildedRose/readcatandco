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
          <p>Hello, you gorgeous visitor, you!</p>
          
          <p>Please see the below regarding storefront shopping limitations.</p>
         
          <p>Thank you!</p>
          <p><b>Physical Location:</b> Unfortunately due to COVID-19 concerns regarding close proximity, I've chosen to ensure my customers' safety by temporarily shutting down the on-site location of my shop for now.</p>
          <p><i>2202 Broadway St<br />San Antonio, Tx. 78215</i></p>
          <p><b>Phone:</b> (210) 912-3955</p>
          <p><b>E-mail:</b> <Mailto email="jessica@redcatandco.com" subject="General Inquiry" body="I'd like to ask about ...">Send me an e-mail!</Mailto></p>
          <p><a href="https://www.google.com/maps?daddr=2202+Broadway+St,+78215" target="_blank" class="btn"><img src={require('../assets/images/Maps.jpg')}></img></a></p>
        </div>
      </Col>
    </Row>
  </Container>
)