import React from 'react'
import '../styles/nav.css'

import Button from 'react-bootstrap/Button';
import {Container,Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Navbars = ({size}) => {
  return (
   
    <Navbar expand="lg" className="bg-navbar">
    <Container fluid>
      <Navbar.Brand href="#">Nav</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: 'auto' }}
          navbarScroll
        >
          <Nav.Link as={Link} to={'/'}  className='a'>Home</Nav.Link>
          
          <NavDropdown title="Services" id="navbarScrollingDropdown" className='b'>
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item >
              cabbage
            </NavDropdown.Item>
            <NavDropdown.Item >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item >
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to={'/sell'} className='a'></Nav.Link>
          <Nav.Link as={Link} to={'/buy'}  className='a'>products</Nav.Link>
          <Nav.Link as={Link} to={'/about'} className='a'>About us</Nav.Link>

          <Nav.Link as={Link} to={'/sell'}  className='a'>sell</Nav.Link>
          
        </Nav>
        
         <Card>
           
            <Nav.Link as={Link} to={'/cart'}  >
              <Card>
              
              <Card.Header>
                   <h3>Cart :{size}</h3>
              </Card.Header>
              </Card>
           </Nav.Link>
            
         </Card>
        <Nav.Link as={Link} to={'/register'}  >
            Register
          </Nav.Link>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars
