import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import authSelectors from '../../redux/auth/Auth-selectors';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container >
      <Row className={s.nav}>
        <Col>
          <Nav as={NavLink} to="/" className={s.nav_home}>
            Home
          </Nav>
        </Col>
        {isLoggedIn && (
          <Col>
            <Nav as={NavLink} to="/contacts" className={s.nav_contacts}>
              Contacts
            </Nav>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Navigation;