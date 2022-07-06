import React, { useState, ReactNode } from 'react';
import ThemeContext from './ThemeContext';

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
