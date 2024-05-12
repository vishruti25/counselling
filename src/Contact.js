import React from 'react'
import { useNavigate } from 'react-router-dom';
import pb from './db';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import svitlogo from './svitlogo.png'
import Contactus from './dashboard/Contactus';


function Contact() {

    const navigate=useNavigate()
    const logout=()=>{
    pb.authStore.clear();
    navigate('/stuLogin')
  }


  return (
    <div>
        <Navbar expand="lg" className="bg-body-primary"   sticky='top-5' >
   
   <div className='image '>
      <Image src={svitlogo} width={50} height={50} rounded  />
      
  </div> 
    <Container fluid >
      <Navbar.Brand href="#">Student Counselling System</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-3 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {/* <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Contact Us</Nav.Link> */}
          {/* <NavDropdown title="" id="navbarScrollingDropdown">
            <NavDropdown.Item  href="/sturegistration">Student</NavDropdown.Item>
            <NavDropdown.Item href="/teacherregistration">
              Teacher
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/go">
              batch allocation
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="" >
           
          </Nav.Link>
        </Nav>
        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>

        </Form> */}
        <Nav.Link variant="" href="/"><i class="bi bi-house-door-fill"></i>&nbsp; Home</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav.Link href="/contact"><i class="bi bi-person-lines-fill"></i>&nbsp; Contact Us</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Nav.Link href="/go"><i class="bi bi-person-lines-fill"></i>&nbsp; Batch Allocation</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

        <Button variant="outline-success" type='button'onClick={logout}>login</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <Contactus/>
    </div>
  )
}

export default Contact