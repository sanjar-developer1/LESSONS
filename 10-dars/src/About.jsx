import React, { useContext } from "react";
import ThemeContext from "./themeContext";

function About() {
  const { theme, toogleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>About Page</h1>
      <p>Current Theme : {theme}</p>
      <button onClick={toogleTheme}>Toggle Theme</button>
    </div>
  );
}

export default About;
