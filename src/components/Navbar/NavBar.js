import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, useLocation, withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import burgerImage from './images/Burger.svg';

const NavBar = ({ data, width }) => {
  const location = useLocation();
  return width < 480 ? (
    <Mobile data={data} loc={location.pathname} />
  ) : (
    <Web data={data} loc={location.pathname} />
  );
};

export default NavBar;

// render if screen-width is for Mobile
const Mobile = ({ data, loc }) => {
  const [isOpened, setOpened] = useState(false);
  const wrapperRef = useRef(null);

  // if user clicks outside of Navbar, it will close
  useEffect(() => {
    console.log('opened = ', isOpened);
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        isOpened === true ? setOpened(!isOpened) : isOpened;
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, isOpened]);

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
    <Container ref={wrapperRef}>
      <Glass style={stretch} />
      <Info>
        {loc === '/resume' ? (
          <ResumeHeader data={data} />
        ) : (
          <LogoHeader data={data} />
        )}
        <RightContainer>
          <IconBurg
            src={burgerImage}
            onClick={() => {
              setOpened(!isOpened);
            }}
            style={rotate}
          />
        </RightContainer>
      </Info>
      <RightContainer
        style={{
          display: isOpened ? 'flex' : 'none',
          flexDirection: 'column',
          position: 'absolute',
          right: 0,
          left: 0,
          alignItems: 'flex-end',
          marginRight: '32px',
          marginLeft: '32px',
          marginTop: '56px',
        }}
      >
        <Page
          style={ease}
          to='/'
          onClick={() => {
            setOpened(!isOpened);
          }}
        >
          {data.navbarLinks.link1}
        </Page>
        <Line style={grow} />
        <Page
          style={ease}
          to='/resume'
          onClick={() => {
            setOpened(!isOpened);
          }}
        >
          {data.navbarLinks.link2}
        </Page>
      </RightContainer>
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
          <Page to='/'>{data.navbarLinks.link1}</Page>
          <Page to='/resume'>{data.navbarLinks.link2}</Page>
        </RightContainer>
      </Info>
    </Container>
  );
};

const LogoHeader = ({ data }) => {
  return (
    <LeftContainer>
      <Link to='/'>
        <IconMain src={data.info.navicon} />
      </Link>
    </LeftContainer>
  );
};

const ResumeHeader = ({ data }) => {
  return (
    <LeftContainer>
      <a href={data.info.website2}>
        <Icon src={data.info.websiteLogo2} src2={data.info.websiteLogo3} />
      </a>

      <Indent />
      <a href={data.info.website3}>
        <Icon2 src={data.info.websiteLogo4} src2={data.info.websiteLogo5} />
      </a>
    </LeftContainer>
  );
};

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
  // background-color: blue;
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

const Icon = styled(animated.div)`
  height: 32px;
  width: 32px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-image: url('${(props) => props.src2}');
  }
`;
const IconBurg = styled(animated.div)`
  height: 32px;
  width: 32px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-position: center;
`;

const Icon2 = styled(animated.div)`
  height: 32px;
  width: 32px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-image: url('${(props) => props.src2}');
  }
`;

const IconMain = styled(animated.div)`
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
