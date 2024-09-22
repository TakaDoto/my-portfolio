import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'My personal website.',
    image: '/images/project1.jpg',
    link: 'https://takadoto.github.io/stankovic-tech-solutions/',
  },
  {
    title: 'Project 2',
    description: 'Ecomerce modern design website.',
    image: '/images/project2.jpg',
  },
  {
    title: 'Project 3',
    description: 'Coding tool for low memory devices for personal use.',
    image: '/images/project3.jpg',
  },
  {
    title: 'Project 4',
    description: 'Nail salon booking mobile app.',
    image: '/images/project4.jpg',
  }
];

const Projects: React.FC = () => (
  <Container fluid className="projects-container" id="projects">
    <h2 className="projects-title">My Projects</h2>
    <Row>
      {projects.map((project, index) => (
        <Col md={4} key={index}>
          <Card className="project-card">
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Live
                </a>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Projects;
