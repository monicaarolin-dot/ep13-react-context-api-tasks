
import { useState, useContext } from "react";
import { ThemeContext } from "./Context/globalstore";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>Welcome to My Website</h1>
      <p>Current Theme: {theme}</p>
      <Header />
    </div>
  );
}

function Header() {
  return <ThemeButton />;
}

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() =>
      setTheme(theme === "light" ? "dark" : "light")
    }>
      Switch Theme
    </button>
  );
}
