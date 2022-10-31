import { useEffect, useState } from "react";
import React from "react";
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume";
import Service from "./pages/Service";
import "./css/scene.css"
/**
 * 
 * @returns Vender CSs
 */

import "./vendor/icofont/icofont.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default App;
