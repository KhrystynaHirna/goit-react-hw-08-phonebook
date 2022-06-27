import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function AuthNav() {
  return (
    <Container>
      <Row>
        <Col>
          <Nav.Link className="mr-2" as={NavLink} to="/register">
            Registration
          </Nav.Link>
        </Col>
        <Col>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
}