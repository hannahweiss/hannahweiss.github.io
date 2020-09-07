import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import northeastern from './../images/northeastern_logo.png'
import pikesville from './../images/pikesville_logo.png'
import educationStyle from './../styles/education.module.css'
import Header from './../components/header.js'

export default function Education(){
    return (
        <Container>
            <Header />
            <Row>
                <Col md="auto">
                    <img className={educationStyle.logo} src={northeastern}
                        alt="northeastern logo"/>
                </Col>
                <Col md="auto">
                    <p> Graduation: 2021 (expected)</p>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col md="auto">
                    <img className={educationStyle.logo} src={pikesville}
                        alt="pikesville logo"/>
                </Col>
            </Row>
        </Container>

    );

}