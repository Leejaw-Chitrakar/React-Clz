import { useContext } from "react";
import "./ThemeToggle.css";
import { ThemeContext } from "./ThemeContextProvider.jsx";

const ThemeToggle = () => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <div className="nabBar">
      <h2>Theme Toggle Example</h2>
      <b>Mode: {isLight ? "Light" : "Dark"}</b>
      <br />
      <button onClick={() => setIsLight(!isLight)}>
        Switch to {isLight ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
