import React, { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../libs/Theme";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    lightTheme,
    darkTheme,
  });

  const toggleTheme = () => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };
  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
