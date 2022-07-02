import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import ContactItem from './ContactItem';
import { useGetContactsQuery } from '../../redux/contacts/ContactsApi';
import { getFilter } from '../../redux/contacts/ContactsSlice';
import s from './ContactList.module.css';

export default function ContactList() {
  const filterContact = useSelector(getFilter);
  const { data: contacts, isSuccess } = useGetContactsQuery();

  if (!isSuccess) {
    return;
  }

  const formData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  return (
    <Card className={s.list} >
      <Card as="h4">Contact List</Card>
        <ListGroup  >
          {contacts &&
            formData.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
        </ListGroup>
      
    </Card>
  );
}