import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {
  useGetContactsQuery,
  useAddContactsMutation,
} from '../../redux/contacts/contactsApi';

export default function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactsMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = () => event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      return Notify.warning(`${name} is already in the contact list`);
    }

    addContact({ name, number });
    Notify.warning(`${name} was added to the contact list`);
    resetForm();
  };

  function resetForm() {
    setName('');
    setNumber('');
  }

  return (
    <Card style={{ width: '500px', margin: '30px auto' }}>
      <Card.Header as="h4">Add new contact</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              placeholder="Enter contact name"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange(name)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <Form.Label htmlFor="number">Number</Form.Label>
            <Form.Control
              placeholder="Enter phone number"
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChange(name)}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            {isLoading && <Spinner animation="border" variant="primary" />}
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isLoading}>
            Add contact
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}