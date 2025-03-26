import React, { createContext, useContext, useState, useEffect } from 'react';
const ThemeContext = createContext();
export function ThemeProvider({
  children
}) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  return <ThemeContext.Provider value={{
    theme,
    toggleTheme
  }}>
      {children}
    </ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);