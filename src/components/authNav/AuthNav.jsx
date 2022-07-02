import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <Container>
      <Row className={s.nav}>     
        <Col>
          <Nav as={NavLink} to="/register" className={s.nav_registration}>
            Registration
          </Nav>
        </Col>
        <Col>
          <Nav as={NavLink} to="/login" className={s.nav_login}>
            Login
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}