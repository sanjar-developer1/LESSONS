import { useState } from "react";
import "./App.css";
import ThemeContext from "./themeContext";
import Header from "./Header";

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
      "aurora",
      "mint",
      "candy",
      "midnight",
      "sunshine",
      "coral",
    ];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    setTheme(nextTheme);
  };

  return (
    <div className={theme}>
      <ThemeContext.Provider value={{ theme, toogleTheme }}>
        <Header />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
