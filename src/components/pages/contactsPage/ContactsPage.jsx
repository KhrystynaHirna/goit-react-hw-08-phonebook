import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContactForm from '../../ContactForm/ContactForm';
import Filter from '../../Filter/Filter';
import ContactList from '../../ContactList/ContactList';

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