import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import photo from './../images/profile_photo.jpeg'
import aboutStyle from './../styles/about.module.css'
import Header from './../components/header.js'


export default function Home() {
  return (
    <Container>
      <Header/>
      <Row>
        <Col md="auto">
          <img className={aboutStyle.profileImage} src={photo} 
            alt="profile"/>
        </Col>
        <Col>
        <p className={aboutStyle.text}>
        I am a student at Northeastern University studying Computer Science with a minor in Economics. 
        I grew up in Baltimore, MD, and am currently living in Boston, MA. In my free time, 
        I love boxing, running, reading, exploring the city, baking, and watching movies with my roommates.
        </p>
        <p className={aboutStyle.text}>
        I created this website to showcase a little bit about myself and my experience as a software engineer. 
        Please reach out to me with any questions!
        </p>
        </Col>
      </Row>

      {/* <Router>
        <About path="/"/>
        <Education path="education"/>
        <Education path="work"/>
        <Education path="interests"/>
      </Router> */}

    </Container>
    // <Router>
    //   <Container>
    //     <h1 className={mainStyle.name}>Hannah Weiss</h1>
    //     <Nav className="justify-content-center">
    //       <Link className={mainStyle.navLinks} to="/" >About</Link>
    //       <Link className={mainStyle.navLinks} to="/education">Education</Link>
    //       <Link className={mainStyle.navLinks} to="/work">Work Experience</Link>
    //       <Link className={mainStyle.navLinks} to="/interests">Interests </Link>
    //     </Nav>
    //     <br></br>
    //     <br></br>

    //     <Switch>
    //       <Route path="/education">
    //         <Education/>
    //       </Route>
    //       <Route path="/work">
    //         <p>work experience</p>
    //       </Route>
    //       <Route path="/interests">
    //         <p>interests</p>
    //       </Route>
    //       <Route path="/">
    //         <About/>
    //       </Route>
    //     </Switch>
    //   </Container>

    // </Router>
    
  );
}

