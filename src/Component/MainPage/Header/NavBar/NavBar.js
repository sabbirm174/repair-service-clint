import React from 'react';
import { Button,Navbar,Form,FormControl,Nav } from 'react-bootstrap';
import './navbar.css'
import { useContext } from 'react';
import { MyContext } from './../../../../App';
import { Link } from 'react-router-dom';




const NavBar = () => {
  const [loggedInUsser,setLoggedInUser] =useContext(MyContext)
    return (
        <div>
            <Navbar  expand="lg">
  <div className="container">
  <Navbar.Brand href="#home">Rpaier Solution</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home"><Link to='/'>home</Link></Nav.Link>
      <Nav.Link href="#home"><Link to='/'>Shop</Link></Nav.Link>
      <Nav.Link href="#home"><Link to='/'>Contact Us</Link></Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  </div>
</Navbar>
        </div>
    );
};

export default NavBar;