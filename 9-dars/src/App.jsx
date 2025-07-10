import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import SigIn from "./pages/sigIn.jsx";
import Product from "./pages/product.jsx";
import NotFound from "./pages/notFound.jsx";

function App() {
  const [count, setCount] = useState([]);

  return (
    <>
      <nav>
        <div className="logo">Logo</div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/SigIn">Sig in</NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/sigIn" element={<SigIn />} />
          <Route path="/notFound" element={<NotFound />} />
          {count.map((product) => {
            return <Route path={product.id} element={<h1>{id.title}</h1>} />;
          })}
        </Routes>
      </main>
    </>
  );
}

export default App;
