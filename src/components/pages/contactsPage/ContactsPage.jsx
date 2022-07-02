import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContactForm from '../../phonebookForm/ContactForm';
import Filter from '../../filter/Filter';
import ContactList from '../../contacts/ContactList';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <Container className={s.container}>
      <h2 className={s.text}>Phonebook</h2>
      <Row>
        <Col>
          <ContactForm />
          <Filter />
        </Col>
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}