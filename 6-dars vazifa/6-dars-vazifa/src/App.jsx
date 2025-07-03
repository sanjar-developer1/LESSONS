import React from "react";
import "./App.css";
import { NavLink, Router } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <h1>Logo</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </Router>
  );
}
export default App;
