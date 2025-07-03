import "./App.css";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
