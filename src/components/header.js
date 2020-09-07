import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import mainStyle from './../styles/main.module.css'
import { Link } from "@reach/router"

export default function Header(){
    return (
        <Container>
            <h1 className={mainStyle.name}>Hannah Weiss</h1>
            <Nav className="justify-content-center">
                <Link className={mainStyle.navLinks} to="/" >About</Link>
                <Link className={mainStyle.navLinks} to="education">Education</Link>
                <Link className={mainStyle.navLinks} to="work">Work Experience</Link>
                <Link className={mainStyle.navLinks} to="interests">Interests </Link>
            </Nav>
            <br/>
            <br/>
        </Container>

    );
}

