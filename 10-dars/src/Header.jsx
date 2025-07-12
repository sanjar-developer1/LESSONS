import { useContext, useState } from "react";
import ThemeContext from "./themeContext.jsx";

function Header() {
  const { theme, toogleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>{theme === "light" ? "Red Mode" : "Blue mode"}</h1>
      <button onClick={toogleTheme}>Toogle Theme</button>
    </div>
  );
}

export default Header;
