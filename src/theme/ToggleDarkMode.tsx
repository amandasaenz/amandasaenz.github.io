import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { useSpring, animated, SpringValue } from 'react-spring';

import ThemeContext from './ThemeContext';
import Theme from './Themes';

const ToggleDarkMode: React.FC = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const theme = Theme[dark === false ? 'light' : 'dark'];

  const SunScale = useSpring<SpringValue>({
    r: dark === false ? 6 : 10,
  });

  const MaskScale = useSpring<SpringValue>({
    r: dark === false ? 0 : 8,
  });

  const RayScale = useSpring<SpringValue>({
    r: dark === false ? 2 : 0,
  });

  const SunRotate = useSpring<SpringValue>({
    transformOrigin: 'center',
    transform: dark === false ? 'rotate(45deg)' : 'rotate(0deg)',
  });

  return (
    // <Button onClick={toggleDark}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 28 28'
      width='24px'
      height='24px'
    >
      <animated.g style={SunRotate}>
        <animated.circle
          style={SunScale}
          cx='14'
          cy='14'
          r='10'
          mask='url(#mask)'
          fill={theme.secondary}
        />
        <mask id='mask'>
          <rect x='0' y='0' width='100%' height='100%' fill='#FFFFFF' />
          <animated.circle
            style={MaskScale}
            cx='20'
            cy='10'
            r='8'
            fill='#000000'
          />
        </mask>
      </animated.g>

      <animated.circle
        style={RayScale}
        cx='14'
        cy='2'
        r='2'
        fill={theme.secondary}
      />
      <animated.circle
        style={RayScale}
        cx='14'
        cy='26'
        r='2'
        fill={theme.secondary}
      />
      <animated.circle
        style={RayScale}
        cx='26'
        cy='14'
        r='2'
        fill={theme.secondary}
      />
      <animated.circle
        style={RayScale}
        cx='2'
        cy='14'
        r='2'
        fill={theme.secondary}
      />
      <animated.circle
        style={RayScale}
        cx='22.5'
        cy='5.5'
        r='2'
        fill={theme.secondary}
      />
      <animated.circle
        style={RayScale}
        cx='5.5'
        cy='22.5'
        r='2'
        fill={theme.secondary}
      />
      <animated.circle
        style={RayScale}
        cx='22.5'
        cy='22.5'
        r='2'
        fill={theme.secondary}
      />
      <animated.circle
        style={RayScale}
        cx='5.5'
        cy='5.5'
        r='2'
        fill={theme.secondary}
      />
    </svg>
    // </Button>
  );
};

export default ToggleDarkMode;

export const Button = styled(animated.button)`
  height: 24px;
  width: 24px;
  margin: 8px;
  border: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
