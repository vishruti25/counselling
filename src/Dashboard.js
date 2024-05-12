import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Form, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import svitlogo from './svitlogo.png'
import pb from './db'
import bg from './bg.jpg'
import landing from './landing.png'
import { Carousel } from 'react-bootstrap';
import c2 from './images.jpeg'
import c3 from './c3.jpg'
import c4 from './c4.jpg'



import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const navigate=useNavigate()
  const logout=()=>{
    pb.authStore.clear();
    navigate('/stuLogin')
  }
  const myStyle = {
    backgroundImage: `url(${bg})`,
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity:0.4,
};
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
     {/* <figure class="figure" >
        <img src={landing} className='figure-img img-fluid '    />
        
    </figure>  */}

    {/* <div style={myStyle}>
    </div> */}
    <Carousel>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src={landing} alt='1'/>
        {/* <landing text="First slide" /> */}
        <Carousel.Caption>
          <h3>We're here to support your journey towards personal and academic success. </h3>
          <p>Discover a range of services tailored to meet your needs — from academic advising to mental health support. Let's navigate your path together</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <landing text="Second slide" /> */}
        <img className='d-block w-100' src={c3} alt='1'/>
        <Carousel.Caption>
          <h3>Explore Our Comprehensive Support Services! </h3>
          <p>Whether you're facing academic challenges, seeking career guidance, or need someone to talk to, we're here for you. Our services include academic advising, career counseling, mental health support, and more</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <bg text="Third slide" /> */}
        <img className='d-block w-100' src={c4} alt='1'/>

        <Carousel.Caption>
          <h3>Join Our Workshops and Events</h3>
          <p>that
          designed to equip you with the skills for success. From stress management workshops to career fairs, there's always something happening at the Counseling Center. Stay engaged and empowered          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    </div>
  );
}

export default Dashboard