import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';

import ThemeContext from './ThemeContext';
import Themes from './Themes';

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];
  useEffect(() => {
    // console.log('theme = ', themeMode);
  }, [themeMode]);
  return (
    <ThemeContainer>
      <div>
        <SunIcon
          onClick={() => {
            setThemeMode(themeMode === 'light' ? 'dark' : 'light');
          }}
          theme={currentTheme}
          ifclick={themeMode}
          style={{
            cursor: 'pointer',
            margin: 0,
            width: '48px',
            height: '48px',
          }}
        />
      </div>

      <div>
        <MoonIcon
          onClick={() => {
            setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
          }}
          ifclick={themeMode}
          theme={currentTheme}
          style={{
            cursor: 'pointer',
            margin: 0,
            width: '48px',
            height: '48px',
          }}
        />
      </div>
    </ThemeContainer>
  );
};

export default ThemeToggler;

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (min-width: 480px) {
    margin-right: 16px;
  }
`;

const SunIcon = styled.div`
  height: 32px;
  width: 32px;
  margin: 8px;
  background-image: url('${(props) => props.theme.sun}');
  background-repeat: no-repeat;
  background-position: center;
`;

const MoonIcon = styled.div`
  height: 32px;
  width: 32px;
  margin: 8px;
  background-image: url('${(props) => props.theme.moon}');
  background-repeat: no-repeat;
  background-position: center;
`;
