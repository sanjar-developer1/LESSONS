import React from "react";
import "./Index.css";

// Bu yerda rasmlar
import Logo from "./assets/Uzum-logo.png";

function App() {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <img src={Logo} alt="Bu yerda uzum logo bor" loading="lazy" />
          <a href="#">uzum market</a>
        </div>
        <div className="nav-sereach">
          <button>Katalog</button>
        </div>
      </nav>
    </header>
  );
}

export default App;
