import React, { useState } from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Cambiar Theme</button>
      {children}
    </div>
  );
};

export default ThemeSwitcher;
