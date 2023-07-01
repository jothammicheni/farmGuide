import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import Sell from './sell';
import { useNavigate } from 'react-router-dom';

const Buy = () => {
  const [file, setFile] = useState('');
  const [city, setCity] = useState('');
  const [items, setItems] = useState([]);
  const history = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Process the file or perform any required operations
    console.log(file);
  };

  const onSubmit = () => {
    // Create a new item object
    const newItem = {
      city: city,
      file: file
    };

    // Send the new item to the PHP script for insertion
    fetch('http://localhost/farmguide%20database/products.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the items state if necessary
        setItems([...items, data]);
      })
      .catch((error) => {
        console.log(error);
      });

    // Reset the form inputs
    setCity('');
    setFile('');
  };

  return (
    <Container className='mt-5'>
      <h4>Fill all the fields</h4>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label>City<span className='star'>*</span></Form.Label>
                <Form.Control
                  className='input'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label>City<span className='star'>*</span></Form.Label>
                <Form.Control
                  type='file'
                  accept='jpeg/png/jpg'
                  className='input'
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col>
              <Button className='mt-6' onClick={onSubmit}>Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Sell items={items} />
    </Container>
  );
};

export default Buy;
