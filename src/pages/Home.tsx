import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

const Home: React.FC = () => (
  <section id="home" className="home-container"> {/* Added id here */}
    <Container fluid>
      <Row className="align-items-center justify-content-center text-center">
        <Col md={8}>
          <h1 className="title">Hi, I'm Mladen Stankovic</h1>
          <p className="subtitle">
            Full Stack Developer | JavaScript | TypeScript | React | Node.js | Python | Django | C | SQL | MongoDB | Machine Learning
          </p>
          <p className="description">
            With a passion for creating elegant and efficient solutions, I specialize in building robust full-stack applications using modern technologies. My expertise spans across:
          </p>
          <ul className="skills-list">
            <li><strong>Front-End:</strong> JavaScript, TypeScript, React, HTML5, CSS3, Bootstrap.</li>
            <li><strong>Back-End:</strong> Node.js, Express, Python (Django, Flask), RESTful APIs, GraphQL.</li>
            <li><strong>Database Management:</strong> SQL, MongoDB, NoSQL.</li>
            <li><strong>Other Skills:</strong> C programming, Machine Learning with Python, algorithm optimization, and project scalability.</li>
          </ul>
          <p className="call-to-action">
            I thrive in solving complex problems, optimizing user experiences, and continuously learning new technologies to stay ahead in the tech landscape. Explore my projects and let's collaborate on something impactful!
          </p>
          <Button href="#projects" className="btn-primary btn-lg">View My Projects</Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Home;
