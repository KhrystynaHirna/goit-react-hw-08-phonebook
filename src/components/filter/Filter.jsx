import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { filter, getFilter } from '../../redux/contacts/ContactsSlice';

export default function Filter() {
  const { name } = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterInput = event => {
    dispatch(filter(event.target.value));
  };
  return (
    <Card style={{ width: '500px', margin: '30px auto' }}>
      <Card.Header as="h4">Searching Contacts</Card.Header>
      <Card.Body>
        <Form.Label>Find contacts by name</Form.Label>
        <Form.Control
          placeholder="Enter contact name"
          type="text"
          name="filter"
          value={name}
          onChange={onFilterInput}
        />
      </Card.Body>
    </Card>
  );
}