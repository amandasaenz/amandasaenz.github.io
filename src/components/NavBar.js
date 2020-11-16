import React, { useState, useEffect, useRef, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import ThemeToggler from './ThemeToggler';
import ThemeContext from './ThemeContext';
import Themes from './Themes';

//NEED TO CHANGE ICON

// render Navbar on Mobile or Web, while passing in URL as a prop.
const NavBar = ({ data, width }) => {
  const location = useLocation();
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];
  // console.log(currentTheme.avatar);
  return width < 480 ? (
    <Mobile data={data} loc={location.pathname} theme={currentTheme} />
  ) : (
    <Web data={data} loc={location.pathname} theme={currentTheme} />
  );
};

// render if screen-width is for Mobile
const Mobile = ({ data, loc, theme }) => {
  const [isOpened, setOpened] = useState(false);
  const ref = useRef(null);

  // if user clicks outside of Navbar, it will close
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        isOpened === true ? setOpened(!isOpened) : isOpened;
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isOpened]);

  const rotate = useSpring({
    transform: isOpened ? 'rotateZ(90Deg)' : 'rotateZ(0Deg)',
  });

  const stretch = useSpring({
    height: isOpened ? '244px' : '64px',
    delay: isOpened ? 0 : 100,
  });

  const ease = useSpring({
    marginBottom: '32px',
    marginTop: '32px',
    transform: isOpened ? 'translateX(0)' : 'translateX(300px)',
    config: { friction: 20 },
  });

  const grow = useSpring({
    right: 0,
    delay: isOpened ? 200 : 0,
    opacity: isOpened ? 1 : 0,
    height: '1px',
    width: isOpened ? '100%' : '0%',
    height: '2px',
    borderRadius: '2px',
  });

  return (
    <Container ref={ref}>
      <Glass theme={theme} style={stretch} />
      <Info>
        {loc === '/resume' ? (
          <ResumeHeader data={data} theme={theme} />
        ) : (
          <LogoHeader data={data} theme={theme} />
        )}
        <RightContainer>
          <ThemeToggler />
          <Burger
            theme={theme}
            onClick={() => {
              setOpened(!isOpened);
            }}
            style={rotate}
          />
        </RightContainer>
      </Info>

      <Dropdown src={isOpened ? 1 : 0}>
        <Page
          theme={theme}
          style={ease}
          to='/'
          onClick={() => {
            setOpened(!isOpened);
          }}
        >
          {data.navbarLinks.projects}
        </Page>
        <Line theme={theme} style={grow} />
        <Page
          theme={theme}
          style={ease}
          to='/resume'
          onClick={() => {
            setOpened(!isOpened);
          }}
        >
          {data.navbarLinks.resume}
        </Page>
      </Dropdown>
    </Container>
  );
};

// render if screen-width is for Web
const Web = ({ data, loc, theme }) => {
  return (
    <Container>
      <Glass theme={theme} />
      <Info>
        {loc === '/resume' ? (
          <ResumeHeader data={data} theme={theme} />
        ) : (
          <LogoHeader data={data} theme={theme} />
        )}

        <RightContainer>
          <ThemeToggler />
          <Page theme={theme} to='/'>
            {data.navbarLinks.projects}
          </Page>
          <Page theme={theme} to='/resume'>
            {data.navbarLinks.resume}
          </Page>
        </RightContainer>
      </Info>
    </Container>
  );
};

const LogoHeader = ({ theme }) => {
  console.log('in logo header: ', theme.avatar);
  return (
    <LeftContainer>
      <Link to='/'>
        <Avatar theme={theme} />
      </Link>
    </LeftContainer>
  );
};

const ResumeHeader = ({ data, theme }) => {
  return (
    <LeftContainer>
      <a href={data.info.linkedin}>
        <LinkedinIcon theme={theme} />
      </a>

      <Indent theme={theme} />
      <a href={data.info.github}>
        <GithubIcon theme={theme} />
      </a>
    </LeftContainer>
  );
};

export default NavBar;

const Indent = styled.div`
  height: 32px;
  width: 2px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.headingColor};
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

const Glass = styled(animated.div)`
  position: absolute;
  height: 64px;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${(props) => props.theme.glassColor};
  backdrop-filter: blur(4px);
`;

const Info = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
  margin-top: 8px;
  margin-bottom: 8px;
  height: 48px;
  z-index: 1;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  margin-left: 8px;
  align-items: center;
`;

const Dropdown = styled.div`
  display: ${(props) => (props.src ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  right: 0;
  left: 0;
  align-items: flex-end;
  margin-right: 16px;
  margin-left: 16px;
  margin-top: 64px;
`;

const LinkedinIcon = styled.div`
  height: 32px;
  width: 32px;
  margin: 8px;
  background-image: url('${(props) => props.theme.linkedin}');
  background-repeat: no-repeat;
  background-position: center;
`;

const GithubIcon = styled.div`
  height: 32px;
  width: 32px;
  margin: 8px;
  background-image: url('${(props) => props.theme.github}');
  background-repeat: no-repeat;
  background-position: center;
`;

const Burger = styled(animated.div)`
  height: 48px;
  width: 48px;
  background-image: url('${(props) => props.theme.burger}');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const Avatar = styled.div`
  height: 48px;
  width: 48px;
  margin-left: 8px;
  background-image: url('${(props) => props.theme.avatar}');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const Page = styled(animated(Link))`
  margin-right: 16px;
  color: ${(props) => props.theme.linkColor};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;

  @media (max-width: 479px) {
    margin-right: 0px;
  }
`;

const Line = styled(animated.div)`
  background-color: ${(props) => props.theme.linkColor};
`;
