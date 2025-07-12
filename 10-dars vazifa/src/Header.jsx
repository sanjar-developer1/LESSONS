import { useContext } from "react";
import ThemeContext from "./themeContext";
import "./App.css";

function Header() {
  const { theme, toogleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>{theme} MODE</h1>
      <button onClick={toogleTheme}>NEXT MODE</button>
    </div>
  );
}

export default Header;
