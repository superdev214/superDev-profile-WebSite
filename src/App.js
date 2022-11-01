import { useEffect, useState } from "react";
import React from "react";
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume";
import Service from "./pages/Service";
import Portfolio from "./pages/portfolio";
import "./css/boxicons/css/boxicons.min.css"
import "./css/scene.css"
/**
 * 
 * @returns Vender CSs
 */

import "./vendor/icofont/icofont.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact";
const App = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default App;
