import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import authOperations from '../../../redux/auth/Auth-operations';
import s from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Card style={{width: '500px', margin: '30px auto'}}>
      <Card.Header as="h2">Register</Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit} autoComplete="off">
      <Form.Group controlId="formBasicText">
      <Form.Label className={s.label}>
          Name
        <Form.Control placeholder="Enter name" 
        type="text" 
        name="name" 
        style={{width: '400px'}} 
        value={name} 
        onChange={handleChange} 
        className={s.input_first}/>

        </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label className={s.label}>
          Email
          <Form.Control placeholder="Enter email"
            type="email"
            name="email"
            style={{width: '400px'}}
            value={email}
            onChange={handleChange}
            className={s.input_second}
          />
        </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label className={s.label}>
          Password
          <Form.Control placeholder="Enter password"
            type="password"
            name="password"
            style={{width: '400px'}}
            value={password}
            onChange={handleChange}
            className={s.input_third}
          />
        </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" className={s.button}>Register</Button>
      </Form>
      </Card.Body>
    </Card>
  );
}