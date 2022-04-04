import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><strong>Sony Headphone</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='navbar-link' to={'/'}>Home</Link>
            <Link className='navbar-link' to={'/reviews'}>Reviews</Link>
            <Link className='navbar-link' to={'/dashboard'}>Dashboard</Link>
            <Link className='navbar-link' to={'/blogs'}>Blogs</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
