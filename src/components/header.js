import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import mainStyle from './../styles/main.module.css'

export default function Header(props) {
  return (
    <Container>
      <h1 className={mainStyle.name}>Hannah Weiss</h1>
      <Nav className="justify-content-center">
        <Nav.Link className={mainStyle.navLinks} href="about">About</Nav.Link>
        <Nav.Link className={mainStyle.navLinks} href="projects">Projects</Nav.Link>
        <Nav.Link className={mainStyle.navLinks} href="contact">Contact</Nav.Link>
      </Nav>

    </Container>
    

  );
}