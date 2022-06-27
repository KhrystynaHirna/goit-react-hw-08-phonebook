import React from 'react';
import Card from 'react-bootstrap/Card';
import image from './phonebook.jpg';

const HomePage = () => (
  <Card className="text-center">     
      <Card.ImgOverlay>
        <Card.Title as="h1">Welcome to Phonebook App!</Card.Title>
      </Card.ImgOverlay> 
      <Card.Img style={{ width: 'auto', height: '92.5vh' }} variant="top" src={image}/>
    </Card>
);

export default HomePage;