import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/Nav";

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="fix-top">
          <h1>
            <a id="title" href="/">
              SongJuanJuan
            </a>
          </h1>
          <NavBar />
        </div>
      </div>
      {/* Service container */}
      <div className="section">
        <Container>
          <div className="service-container">
            <div className="section-title">
              <h2>SERVICES</h2>
              <p>MY SERVICES</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Service;
