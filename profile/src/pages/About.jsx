import React from "react";
import NavBar from "../component/Nav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = () => {
  return (
    <div className="about">
      <div className="about-nav">
        <div className="fix-top">
          <NavBar />
        </div>
      </div>
      images\me.jpg
     <Container className="justify-content-md-center">
      <Row>
      <Col sm = {4}>
        <img src="../../images/me.jpg" alt="asdf" />
      </Col>
      <Col sm = {8}>
      </Col>
      </Row>

     </Container>
    </div>
  );
};

export default About;
