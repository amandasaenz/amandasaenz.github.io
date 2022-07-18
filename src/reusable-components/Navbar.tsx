import React, { useEffect, useRef, useState, useContext } from 'react';
import styled from '@emotion/styled';
import { useSpring, a, animated, SpringValue } from 'react-spring';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';
import Icon from './Icons';
import ToggleDarkMode from '../theme/ToggleDarkMode';
import LinksAnimation from './LinksAnimation';

interface INav {
  children: React.ReactNode;
  width: number;
}

const Web: React.FC<INav> = ({ children }) => {
  const { toggleDark } = useContext(ThemeContext);
  return (
    <StyledWeb>
      <Button onClick={toggleDark}>
        <ToggleDarkMode />
      </Button>
      {children}
    </StyledWeb>
  );
};

const Mobile: React.FC<INav> = ({ children }) => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const rotate = useSpring<SpringValue>({
    transformOrigin: 'center',
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
  });

  const glassDrop = useSpring<SpringValue>({
    height: isOpen ? '570px' : '64px',
  });

  // if user clicks outside of Navbar on mobile, it will close
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && ref.current.contains(event.target as HTMLDivElement))
        return;

      setOpen(false);
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleClickOutside);
    document.addEventListener('popstate', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
      document.removeEventListener('popstate', handleClickOutside);
    };
  }, [ref, isOpen]);

  return (
    <div ref={ref}>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          height: '64px',
          alignItems: 'center',
          padding: '0 1rem',
        }}
      >
        <Button
          onClick={() => {
            setOpen(!isOpen);
          }}
          style={rotate}
        >
          <Icon icon='burger' color={theme.secondary} />
        </Button>
        <Button onClick={toggleDark}>
          <ToggleDarkMode />
        </Button>
      </div>
      <>
        <Glass style={glassDrop} theme={theme} />
        <LinksAnimation opened={isOpen}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement, {
              onClick: () => {
                setOpen(!isOpen);
              },
            })
          )}
        </LinksAnimation>
      </>
    </div>
  );
};

const Navbar: React.FC<INav> = ({ width, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <>
      {width <= 700 ? (
        <StyledNav>
          <Mobile width={width} {...props} />
        </StyledNav>
      ) : (
        <StyledNav>
          <Web width={width} {...props} />
          <Glass theme={theme} />
        </StyledNav>
      )}
    </>
  );
};

export default Navbar;

const StyledNav = styled.div`
  height: 64px;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
`;

const StyledWeb = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7rem;

  @media screen and (max-width: 1000px) {
    padding: 0 1rem;
  }
`;

const Glass = styled(animated.div)<Theme>`
  height: 64px;
  position: absolute;
  top: 0;

  background-color: ${(p) => p.theme.glassColor};
  backdrop-filter: blur(4px);
  width: 100%;
  z-index: -1;
`;

export const Button = styled(animated.div)`
  padding: 8px;
  margin: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
