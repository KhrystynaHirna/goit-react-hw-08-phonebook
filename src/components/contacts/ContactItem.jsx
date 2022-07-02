import React from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useRemoveContactsMutation } from '../../redux/contacts/ContactsApi';
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const [removeContact, { isLoading }] = useRemoveContactsMutation();
  function onRemoveContact(id) {
    removeContact(id);
    Notify.warning(`The contact "${name}" was deleted`);
  }

  return (
    <ListGroup key={id}>
      {isLoading && <Spinner animation="border" variant="primary" />}
      <Row className={s.item}>
        <Col>
          <Card >{name}: {number}</Card>
        </Col>
        <Col>
          <Button
            className={s.button}
            variant="primary"
            type="button"
            onClick={() => onRemoveContact(id)}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroup>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};