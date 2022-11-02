import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/Nav";
const Resume = () => {
  return (
    <div className="resume">
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
          <div className="resume-me-container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>CHECK MY RESUME</p>
            </div>
            <div className="resume-container">
              <Row>
                <Col sm={6}>
                  <h2 className="resume-title">Summery</h2>
                  <div className="resume-item">
                    <h4>Full Stack Engineer</h4>

                    <p>
                      <em>
                        ● 10+ years of software development experience in all
                        phases of SDLC including Planning, Requirement Analysis,
                        Design, Development, Testing, and Deployment <br />
                        ● 10+ years of experience in front end development using
                        HTML/HTML5, XHTML, CSS2/CSS3, JavaScript/Typescript,
                        Bootstrap, jQuery, Ajax, JSON, and XML and IDE tools
                        like VSCode, WebStorm, Sublime text, and Eclipse <br />
                        ● 5 years of experience in back end development in
                        PHP/Laravel and Dot Net (C#) <br />
                        ● 5 years of experience in React, Redux, Redux-Thunk,
                        and Redux-Saga <br />
                        ● 5 years of experience in Vue.js, VueX, Vuetify.js,
                        Nuxt.js, and Element UI Library <br />
                        ● 5 years of experience in back end development in
                        Node.js/Express/Nest <br />
                        ● 5 years of experience in developing Restful Web
                        Services and Micro Services using Node/Golang <br />
                        ● 5 years of experience in hybrid mobile app development
                        using React Native <br />● 2 years of experience in
                        Blockchain Development, especially in ICON-based DApp
                        platform, Smart Contract, ICX token, and ICX wallet
                      </em>
                    </p>
                  </div>

                  <h2 className="resume-title">Education</h2>
                  <div className="resume-item">
                    <h4>COMPUTER SOFTWARE ENGINEERING</h4>
                    <h5>2008-2012</h5>
                    <p>
                      <em>Tsinghua University</em>
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <h2 className="resume-title">Experience</h2>
                  <div className="resume-item">
                    <h4>Top Rated Full-stack developer</h4>
                    <h5>Oct 2020 - Present</h5>
                    <p>Upwork</p>
                  </div>

                  <h2 className="resume-title">Education</h2>
                  <div className="resume-item">
                    <h4>Full Stack Engineer</h4>
                    <h5>Jan 2021 - Dec 2021</h5>
                    <p>Upbots.com</p>
                    <p>
                      <em>Los Angeles, United States</em>
                    </p>

                    <ul>
                      <li>
                       <p> Easy & Secure Crypto Trading, For Everyone. No matter
                        your skill or experience, UpBots is your gateway to
                        crypto. A trading platform where everyone wins or nobody
                        does.</p>
                      </li>
                    </ul>
                  </div>
                  <div class="resume-item">
                    <h4>Project Manager</h4>
                    <h5>Dec 2019 - Jun 2021</h5>
                    <p>PaulWagner.com</p>
                    <p>
                      <em>Colorado, United States</em>
                    </p>
                    
                      <ul>
                       <p> <li>https://www.paulwagner.com/</li></p>
                      </ul>
                    
                  </div>
                  <div class="resume-item">
                    <h4>Back-end Developer</h4>
                    <h5>Jun 2020 - Nov 2020</h5>
                    <p>FTI Ticketshop GmbH</p>
                    <p>
                      <em>Germany</em>
                    </p>
                    
                      <ul>
                        <li>
                         <p>As one of the largest airline consolidators, we issue
                          all airline tickets for travel agencies with/without
                          their own IATA license.</p> 
                        </li>
                      </ul>
                    
                  </div>
                  <div class="resume-item">
                    <h4>UX & Front-end engineer</h4>
                    <h5>Nov 2018 - May 2020</h5>
                    <p>Wagerr</p>
                    <p>
                      <em>Hong Kong SAR</em>
                    </p>
                    
                      <ul>
                        <li>
                         <p> Wagerr is a permissionless blockchain-based sportsbook
                          secured by a global decentralized network. Bet
                          anywhere. Best odds. Privacy-focused.</p>
                        </li>
                      </ul>
                    
                  </div>
                  <div class="resume-item">
                    <h4>Frontend Developer</h4>
                    <h5>Nov 2012 - May 2018</h5>
                    <p>China Mobile</p>
                    <p>
                      <em>Beijing, China</em>
                    </p>
                    
                      <ul>
                        <li>
                         <p> Like many major Chinese companies, China Mobile Ltd.
                          is state-owned. The company is primarily a mobile
                          service provider, not a software designer, but it does
                          boast a large software team among its over 450,000
                          employees.</p>
                        </li>
                      </ul>
                    
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Resume;
