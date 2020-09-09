import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import northeastern from './../images/northeastern_logo.png'
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
                <Col className={educationStyle.text}>
                    <p style={{fontWeight: "550"}}> Graduation: 2021 (expected) <br/>
                        BS in Computer Science, Minor in Economics
                    
                    </p>
                    <p>
                        Relevant Courses:
                    </p>

                    <Row>
                        <Col>
                            <p>
                                Computer Science
                            </p>
                            <ul style = {{fontSize:"small"}}> 
                                <li>Fundamentals of Computer Science</li>
                                <li>Discrete Structures</li>
                                <li>Logic and Computation</li>
                                <li>Object Oriented Design</li>
                                <li>Algorithms and Data</li>
                                <li>Computer Systems</li>
                                <li>Theory of Computation</li>
                                <li>Embedded Design</li>
                                <li>Database Design</li>
                                <li>Computer Systems</li>
                                <li>Networks and Distributed Systems</li>
                                <li>Software Development</li>
                            </ul>
                        </Col>
                        <Col>
                            <p>
                                Math
                            </p>
                            <ul style = {{fontSize:"small"}}>
                                <li>Linear Algebra</li>
                                <li>Probability and Statistics</li>
                            </ul>
                            <p>
                                Economics
                            </p>
                            <ul style = {{fontSize:"small"}}>
                                <li>Microeconomic Theory</li>
                                <li>Labor Economics</li>
                                <li>Applied Econometrics</li>
                            </ul>
                        </Col>

                    </Row>

                    

                   
                    
                

                    {/* <ClassButton/> */}
                    {/* <Button style = {{background:"none", color:"black", border:"none", textDecoration:"underline"}}>
                        Computer Science
                    </Button>
                    <br/>
                    <Button>
                        Math
                    </Button>
                    <br/>
                    <Button>
                        Economics
                    </Button> */}
                    
                </Col>
            </Row>
        </Container>

    );

}