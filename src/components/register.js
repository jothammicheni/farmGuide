import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import '../styles/register.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  County from '../assets/counties'
const Register = () => {
  const nextPage = useNavigate();
  const toLogin=useNavigate()

  const navigateToLoginPage=()=>{
    toLogin('./login') 
  }
  
 


  const validateData = (values) => {
    const errors = {};

    if (!values.Name) {
      errors.Name = 'Please Enter Employee Name';
    }else if(values.Name.length<5){
      errors.Name='Name too shot'
    }

    if (!values.Address) {
      errors.Address = 'Please Enter Address';
    }

    if (!values.password) {
      errors.password = 'Please Enter a Password';
    }
    else if(values.password.length<8){
      errors.password='Password must contain 8 Charactors';
    }

    if (!values.email) {
      errors.email = 'Please Enter an Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }

    return errors;
  };
  const handleSubmit = (values) => {
    axios.post('http://localhost/farmguide/register.php', values)
      .then((response) => {
        console.log(response.data);
        nextPage('/faq');
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const formik = useFormik({
    initialValues: {
      Name: '',
      Address: '',
      password: '',
      email: '',
    },
    validate: validateData,
    onSubmit: handleSubmit,
  });


  return (
    <Container className='mt-4'>
      <h1 className='register_title text-danger'>Fill all the required details</h1>
      <Form className='mt-4 p-4 bg-info text-white' onSubmit={formik.handleSubmit}   method='POST'>
        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>Address <span className='star'>*</span></Form.Label>
          <Form.Control
            placeholder='jotham'
            className='input'
            name='Name'
            value={formik.values.Name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.Name && formik.errors.Name && (
            <div className='error'>{formik.errors.Name}</div>
          )}
        </Form.Group>

        <Form.Group className='mb-3' controlId='formGridAddress2'>
          <Form.Label>Address 2 <span className='star'>*</span></Form.Label>
          <Form.Control
            placeholder='Apartment, studio, or floor'
            className='input'
            name='Address'
            value={formik.values.Address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.Address && formik.errors.Address && (
            <div className='error'>{formik.errors.Address}</div>
          )}
        </Form.Group>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email <span className='star'>*</span></Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              className='input'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className='error'>{formik.errors.email}</div>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Password<span className='star'>*</span></Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              className='input'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='error'>{formik.errors.password}</div>
            )}
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City<span className='star'>*</span></Form.Label>
            <Form.Control className='input' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>County<span className='star'>*</span></Form.Label>
            <Form.Select defaultValue='Choose...'>
            { County.map((county)=>{
            return<option key={county}  value={county} >
                 {county}
              </option>
            })
            }
            </Form.Select>

          </Form.Group>

          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Zip<span className='star'>*</span></Form.Label>
            <Form.Control className='input' />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' id='formGridCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Register
        </Button>
      </Form>
      <h5>Have an account? <span onClick={navigateToLoginPage}>Login</span></h5>
    </Container>
  );
};

export default Register;
