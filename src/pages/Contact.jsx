import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import NavBar from "../component/Nav";

const Contact = () => {
  return (
    <div className="contact">
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
      {/**Resume container */}
      <div className="section">
        <Container>
          <div className="contact-me-container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact ME!</p>
            </div>

            <Row>
              <Col md={6} xs={12}>
             
                <div className="contact-template">
                  <div class="info-box">
                    <i class="bx bx-map"></i>
                    <h3>My Address</h3>
                    <p>
                      Tai Yean Jie Shang Quan, Lanzhou St, Shenyang, Liaoning,
                      China{" "}
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className="contact-template">
                  <div class="info-box">
                    <i class="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div class="social-links">
                      <a
                        href="https://www.linkedin.com/in/song-juanjuan-39b8611b2/"
                        class="linkedin"
                      >
                        <i class="icofont-linkedin"></i>
                      </a>
                      <a
                        href="https://twitter.com/juanjuan_song"
                        class="twitter"
                      >
                        <i class="icofont-twitter"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100076066340705"
                        class="facebook"
                      >
                        <i class="icofont-facebook"></i>
                      </a>
                      <a href="https://github.com/jeydev310" class="twitter">
                        <i class="icofont-github"></i>
                      </a>
                      <a
                        href="https://www.behance.net/songjuan91"
                        class="twitter"
                      >
                        <i class="icofont-behance"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className="contact-template">
                  <div class="info-box">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Me</h3>
                    <p>juanjs120@outlook.com</p>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className="contact-template">
                  {" "}
                  <div class="info-box">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Me</h3>
                    <p>+86 182 4255 0239</p>
                  </div>
                </div>

              </Col>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Control type="name" placeholder="Your name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridSubject">
                  <Form.Control placeholder="Subject" />
                </Form.Group>

                <Form.Group className="message" controlId="formGridSubject">
                  <textarea placeholder="Message"></textarea>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
