import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Form, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from './logo.png'
function Dashboard() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-primary"  bg="primary" sticky='top' >
      <Container fluid>
        <Navbar.Brand href="#">SVIT Counselling System</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">about</Nav.Link>
            <Nav.Link href="#action2">Annoucement</Nav.Link>
            <NavDropdown title="login" id="navbarScrollingDropdown">
              <NavDropdown.Item  href="/sturegistration">Student</NavDropdown.Item>
              <NavDropdown.Item href="/teacherregistration">
                Teacher
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                batch allocation
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    
   
    
    <div className=' '>
        <Image src={logo}  fluid />
        
    </div>
    
    
    
    </div>
  );
}

export default Dashboard