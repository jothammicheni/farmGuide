import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import Sell from './sell';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Buy = () => {
  const [itemname, setName] = useState('');
  const [file, setFile] = useState('');
  const history = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Process the file or perform any required operations
    console.log(file);
    setFile(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    // Create a new FormData object to store the form data
    const formData = new FormData();
    formData.append('itemname', itemname);
    formData.append('file', file);

    // Send the new item to the PHP script for insertio
    axios.post('http://localhost/farmguide/products.php', formData)
      .then((response) => {
        console.log(response.data);
        // Optionally, perform any additional actions after successful insertion
      })
      .catch((error) => {
        console.error(error);
        // Handle errors if any
      });
  }

  return (
    <Container className='mt-5'>
      <h4>Fill all the fields</h4>
      <Container>
        <Form  onSubmit={onSubmit} >
          <Row>
            <Col>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label>City<span className='star'>*</span></Form.Label>
                <Form.Control
                  className='input'
                  value={itemname}
                  onChange={(e) => setName(e.target.value)}
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
            <Button className='mt-6' type='submit'>Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
      
    </Container>
  );
};

export default Buy;
