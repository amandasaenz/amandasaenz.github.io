import React, { useEffect, useRef, useState, useContext } from 'react';
import styled from '@emotion/styled';
import { useSpring, a, animated, SpringValue } from 'react-spring';
import { LinkWRouter as Link } from '../reusable-components/Link';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';
import Icon from './Icon';
import ToggleDarkMode from '../theme/ToggleDarkMode';
import LinksAnimation from './LinksAnimation';

interface INav {
  width: number;
}

const Web: React.FC<INav> = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  return (
    <StyledWeb>
      <Button onClick={toggleDark}>
        <ToggleDarkMode />
      </Button>
      <Link to='/' variant='nav'>
        Home
      </Link>
      <Link to='/#3d-art' variant='nav'>
        3D Art
      </Link>
      <Link to='/#front-end' variant='nav'>
        UI/UX
      </Link>
      <Link to='/#resume' variant='nav'>
        Resumé
      </Link>
      <Link to='/spidey-css' variant='nav'>
        Spidey CSS
      </Link>
    </StyledWeb>
  );
};

const Mobile: React.FC<INav> = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  const [isOpen, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // if user clicks outside of Navbar, it will close
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

  const rotate = useSpring<SpringValue>({
    transformOrigin: 'center',
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
  });

  const glassDrop = useSpring<SpringValue>({
    height: isOpen ? '480px' : '64px',
  });

  return (
    <StyledNav ref={ref}>
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
          <Icon burger color={theme.secondary} />
        </Button>
        <Button onClick={toggleDark}>
          <ToggleDarkMode />
        </Button>
      </div>
      <LinksAnimation opened={isOpen}>
        <Link to='/' variant='nav' onClick={() => setOpen(!isOpen)}>
          Home
        </Link>
        <Link to='/#3d-art' variant='nav' onClick={() => setOpen(!isOpen)}>
          3D Art
        </Link>
        <Link to='/#front-end' variant='nav' onClick={() => setOpen(!isOpen)}>
          UI/UX
        </Link>
        <Link to='/#resume' variant='nav' onClick={() => setOpen(!isOpen)}>
          Resumé
        </Link>
        <Link to='/spidey-css' variant='nav' onClick={() => setOpen(!isOpen)}>
          Spidey CSS
        </Link>
      </LinksAnimation>

      <Glass style={glassDrop} theme={theme} />
    </StyledNav>
  );
};

const Navbar: React.FC<INav> = ({ width, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <>
      {width <= 630 ? (
        <Mobile width={width} {...props} />
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

const Button = styled(animated.button)`
  padding: 8px;
  margin: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
