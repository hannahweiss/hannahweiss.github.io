import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import main from './../styles/main.css'

export default function Header(props) {
  return (
    <div>
      <h1>Hannah Weiss</h1>
      <Navbar className={main.nav}>
      <Navbar.Brand href="/">Hannah Weiss</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="projects">Projects</Nav.Link>
        <Nav.Link href="contact">Contact</Nav.Link>
      </Nav>
    </Navbar>

    </div>
    

  );
}