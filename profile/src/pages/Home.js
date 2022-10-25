import React from "react";
import NavBar from "../component/Nav";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Song Juan Juan</h1>
      <h3>
        I'm a senior <span>Full Stack Engineer</span>
      </h3>
      <NavBar />
      <div className="social-links">
        <a href="/" class="linkedin" target="_blank">
          <i class="icofont-linkedin"></i>
        </a>
        <a href="/" target="_blank">
          <i class="icofont-twitter"></i>
        </a>
        <a href="/" class="facebook" target="_blank">
          <i class="icofont-facebook"></i>
        </a>
        <a href="/" target="_blank">
          <i class="icofont-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
