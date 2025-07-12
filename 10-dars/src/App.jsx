import React from "react";
import { useState } from "react";
import ThemeContext from "./themeContext";
import Header from "./Header";
import About from "./About";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    const themes = [
      "light",
      "dark",
      "nature",
      "sunset",
      "galaxy",
      "ocean",
      "gold",
    ];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    setTheme(nextTheme);
  };

  return (
    <div className={theme == "light" ? "red" : "blue"}>
      <ThemeContext.Provider value={{ theme, toogleTheme }}>
        <Header />
        <About />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
