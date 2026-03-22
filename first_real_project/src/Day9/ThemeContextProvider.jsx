import { createContext, useState } from "react";

export let ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
