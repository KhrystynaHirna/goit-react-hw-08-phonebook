import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { filter, getFilter } from '../../redux/contacts/ContactsSlice';
import s from './Filter.module.css';

export default function Filter() {
  const { name } = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterInput = event => {
    dispatch(filter(event.target.value));
  };
  return (
    <Card >
      <Card as="h4">Searching Contacts</Card>   
        <Form className={s.label}>Find contacts by name</Form>
        <Form.Control
          placeholder="Enter contact name"
          type="text"
          name="filter"
          value={name}
          onChange={onFilterInput}
          className={s.input}
        />
    </Card>
  );
}