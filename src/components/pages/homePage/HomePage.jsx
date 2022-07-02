import React from 'react';
import Card from 'react-bootstrap/Card';
import s from './HomePage.module.css'


const HomePage = () => (
  <Card>      
        <Card.Title as="h1" className={s.title}>Your phonebook App!</Card.Title>   
    </Card>
);

export default HomePage;