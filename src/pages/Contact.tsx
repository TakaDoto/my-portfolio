import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact: React.FC = () => {
  const phone = "+381606661581"; 
  const email = "mladenamaxa22@gmail.com"; 

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Row>
          <Col md={8} className="mx-auto text-center">
            <p>If you would like to get in touch, feel free to reach out via:</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
