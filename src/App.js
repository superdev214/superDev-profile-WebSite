import { useEffect, useState } from "react";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Service from "./pages/Service";
import Portfolio from "./pages/portfolio";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./css/boxicons/css/boxicons.min.css";
import "./css/scene.css";
/**
 *
 * @returns Vender CSs
 */

import "./vendor/icofont/icofont.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
  
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>


    </div>
  );
};

export default App;
