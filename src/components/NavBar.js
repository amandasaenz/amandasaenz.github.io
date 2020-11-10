import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
// import burgerImg from './images/Burger.svg';
import burgerImg from '../images/Burger.svg';

// render Navbar on Mobile or Web, while passing in URL as a prop.
const NavBar = ({ data, width }) => {
  const location = useLocation();
  return width < 480 ? (
    <Mobile data={data} loc={location.pathname} />
  ) : (
    <Web data={data} loc={location.pathname} />
  );
};

// render if screen-width is for Mobile
const Mobile = ({ data, loc }) => {
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
    height: isOpened ? '224px' : '56px',
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
      <Glass style={stretch} />
      <Info>
        {loc === '/resume' ? (
          <ResumeHeader data={data} />
        ) : (
          <LogoHeader data={data} />
        )}
        <RightContainer>
          <Burger
            src={burgerImg}
            onClick={() => {
              setOpened(!isOpened);
            }}
            style={rotate}
          />
        </RightContainer>
      </Info>
      <Dropdown src={isOpened ? 1 : 0}>
        <Page
          style={ease}
          to='/'
          onClick={() => {
            setOpened(!isOpened);
          }}
        >
          {data.navbarLinks.projects}
        </Page>
        <Line style={grow} />
        <Page
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
const Web = ({ data, loc }) => {
  return (
    <Container>
      <Glass />
      <Info>
        {loc === '/resume' ? (
          <ResumeHeader data={data} />
        ) : (
          <LogoHeader data={data} />
        )}
        <RightContainer>
          <Page to='/'>{data.navbarLinks.projects}</Page>
          <Page to='/resume'>{data.navbarLinks.resume}</Page>
        </RightContainer>
      </Info>
    </Container>
  );
};

const LogoHeader = ({ data }) => {
  return (
    <LeftContainer>
      <Link to='/'>
        <Avatar src={data.info.avatar} />
      </Link>
    </LeftContainer>
  );
};

const ResumeHeader = ({ data }) => {
  return (
    <LeftContainer>
      <a href={data.info.linkedin}>
        <Icon src={data.info.linkedinLogo} src2={data.info.linkedinHover} />
      </a>

      <Indent />
      <a href={data.info.github}>
        <Icon src={data.info.githubLogo} src2={data.info.githubHover} />
      </a>
    </LeftContainer>
  );
};

export default NavBar;

const Indent = styled.div`
  height: 32px;
  width: 2px;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 2px;
  background-color: #e74946;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

const Glass = styled(animated.div)`
  position: absolute;
  height: 60px;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(25, 19, 36, 0.7);
  backdrop-filter: blur(4px);
`;

const Info = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 8px;
  margin-bottom: 8px;
  height: 44px;
  z-index: 1;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  display: ${(props) => (props.src ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  right: 0;
  left: 0;
  align-items: flex-end;
  margin-right: 32px;
  margin-left: 32px;
  margin-top: 56px;
`;

const Icon = styled.div`
  height: 32px;
  width: 32px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-image: url('${(props) => props.src2}');
  }
`;
const Burger = styled(animated.div)`
  height: 32px;
  width: 32px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-position: center;
`;

const Avatar = styled.div`
  height: 44px;
  width: 44px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-position: center;
`;

const Page = styled(animated(Link))`
  margin-left: 16px;
  color: #cbe763;
  font-size: 20px;
  font-family: 'Varela Round';
  text-decoration: none;
  &:hover {
    color: #a172c6;
  }
`;

const Line = styled(animated.div)`
  background-color: #cbe763;
`;
