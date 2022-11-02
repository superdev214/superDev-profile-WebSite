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
          <a href="/" class="linkedin" target="_blank">
            <i class="icofont-linkedin"></i>
          </a>
          <a href="/" target="_blank" class="twitter">
            <i class="icofont-twitter"></i>
          </a>
          <a href="/" class="facebook" target="_blank">
            <i class="icofont-facebook"></i>
          </a>
          <a href="/" target="_blank" class="twitter">
            <i class="icofont-github"></i>
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Home;
