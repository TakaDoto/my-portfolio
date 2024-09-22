import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './Skills.css';

const skills = [
  { name: 'JavaScript', proficiency: 80 },
  { name: 'TypeScript', proficiency: 70 },
  { name: 'React', proficiency: 70 },
  { name: 'Node.js', proficiency: 70 },
  { name: 'CSS', proficiency: 90 },
  { name: 'Python', proficiency: 90 },
  { name: 'Django', proficiency: 90 },
  { name: 'C Programming', proficiency: 50 },
  { name: 'SQL', proficiency: 50 },
  { name: 'MongoDB', proficiency: 50 },
  { name: 'Machine Learning', proficiency: 50 },
];

const Skills: React.FC = () => (
  <section id="skills" className="skills-section">
    <Container>
      <h2 className="section-title">Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={6} key={index} className="mb-3">
            <h4>{skill.name}</h4>
            <ProgressBar now={skill.proficiency} label={`${skill.proficiency}%`} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;
