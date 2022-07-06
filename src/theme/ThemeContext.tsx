import React from 'react';

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  dark: false,
};

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export default ThemeContext;
