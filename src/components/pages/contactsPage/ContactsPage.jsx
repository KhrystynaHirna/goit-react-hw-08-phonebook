import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContactForm from '../../phonebookForm/ContactForm';
import Filter from '../../filter/Filter';
import ContactList from '../../contacts/ContactList';

export default function ContactsPage() {
  return (
    <Container className="mt-4">
      <h2>Phonebook</h2>
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