import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/Nav";
import Icon_Box from "../component/service-icon-box";
const Service = () => {
  return (
    <div className="service">
     <div className="fix-top">
        <Container className="fix-top">
          {" "}
          <h1>
            <a id="title" href="/">
              SongJuanJuan
            </a>
          </h1>
          <NavBar />
        </Container>
      </div>
      {/* Service container */}
      <div className="section">
        <Container>
          <div className="service-container">
            <div className="section-title">
              <h2>SERVICES</h2>
              <p>MY SERVICES</p>
            </div>
            <Row>
              <Col sm={4}>
                {" "}
                <Icon_Box
                  class="icofont-dashboard-web"
                  target="Web Development"
                  detail="Bots Trading | Sports Betting | Booking System"
                />
                <Icon_Box
                  class="icofont-stock-mobile"
                  target="Mobile App Development"
                  detail="Online dating app | Delivery app | Fitness app | Online shopping app"
                />
              </Col>
              <Col sm={4}>
                <Icon_Box
                  class="icofont-bitcoin"
                  target="Blockchain"
                  detail="Defi and Dapps platform| Smart contracts | NFT"
                />
                <Icon_Box
                  class="icofont-behance"
                  target="UX/UI Design"
                  detail="User research | Ideation & Information architecture | Wireframing & Prototyping | Usability testing"
                />
              </Col>
              <Col sm={4}>
                <Icon_Box
                  class="icofont-presentation"
                  target="Business Model design"
                  detail="B2B | B2C | C2B | C2C"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Service;
