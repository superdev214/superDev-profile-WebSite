import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../component/Nav";

const Home = () => {
  return (
    <header id="header" className="header-tops">
      <Container>
        <h1><a>Song JuanJuan</a></h1>
        <h2>
          I'm a senior <span>Full Stack Engineer</span>
        </h2>
         <NavBar /> 
        <div className="social-links">
          <a href="/" className="linkedin" target="_blank">
            <i className="icofont-linkedin"></i>
          </a>
          <a href="/" target="_blank" className="twitter">
            <i className="icofont-twitter"></i>
          </a>
          <a href="/" className="facebook" target="_blank">
            <i className="icofont-facebook"></i>
          </a>
          <a href="/" target="_blank" className="twitter">
            <i className="icofont-github"></i>
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Home;
