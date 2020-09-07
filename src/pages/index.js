import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import mainStyle from './../styles/main.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home() {
  return (
    <Router>
       <Container>
      <h1 className={mainStyle.name}>Hannah Weiss</h1>
      <Nav className="justify-content-center">
        <Link className={mainStyle.navLinks} to="/" >About</Link>
        <Link className={mainStyle.navLinks} to="/projects">Projects</Link>
        <Link className={mainStyle.navLinks} to="/contact">Contact</Link>
      </Nav>
    </Container>

    </Router>
    
  );
}
