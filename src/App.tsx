import React, { useContext, useRef, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from './reusable-components/Navbar';
import { LinkWRouter as Link } from './reusable-components/Link';
import ThemeContext from './theme/ThemeContext';
import Themes, { Theme } from './theme/Themes';
import Spidey from './pages/spidey-css/SpideyCSS';
import Sculpt from './pages/Sculpt';
import UX from './pages/UX';
import Resume from './pages/Resume';
import Title from './pages/Title';
import SculptProjects from './pages/SculptProject';
import data from './pages/data';
import Icon from './reusable-components/Icons';
import { Button } from './reusable-components/Navbar';

/*TO DO LIST
1. fix scrolling
*/

const App: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const currentTheme = Themes[dark === false ? 'light' : 'dark'];
  document.body.style.backgroundColor = currentTheme.background;
  const location = useLocation();
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const titleRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const sculptRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const frontendRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const resumeRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const spideyRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // ************************** SCROLL **************************
  // initialize scroll
  const [scroll, setScroll] = useState<number>(
    document.documentElement.scrollTop
  );

  // scroll listener
  useEffect(() => {
    const onScroll = () => {
      setScroll(document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  // update path hash
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (location.pathname == '/') {
  //     switch (ref.current.getBoundingClientRect().y != null) {
  //       case scroll < sculptRef.current.offsetTop - 64:
  //         return navigate('#');
  //       case scroll >= resumeRef.current.offsetTop - 64:
  //         return navigate('#resume');
  //       case scroll >= frontendRef.current.offsetTop - 64:
  //         return navigate('#front-end');
  //       case scroll >= sculptRef.current.offsetTop - 64:
  //         return navigate('#3d-art');
  //       default:
  //         return navigate('#');
  //     }
  //   }
  // }, [scroll]);

  useEffect(() => {
    switch (location.hash) {
      case '':
        return window.scrollTo(0, 0);
      case '#3d-art':
        return window.scroll(0, sculptRef.current.offsetTop - 64);
      case '#front-end':
        return window.scroll(0, frontendRef.current.offsetTop - 64);
      case '#resume':
        return window.scroll(0, resumeRef.current.offsetTop - 64);
      default:
        return window.scrollTo(0, 0);
    }
  });

  useEffect(() => {
    console.log('scroll:', scroll);
  }, [scroll]);

  // ************************** RESIZE *************************
  // initialize width
  const [width, setWidth] = useState(
    document.documentElement.getBoundingClientRect().width
  );

  // add / remove resize listener
  useEffect(() => {
    const resize = () => {
      setWidth(document.documentElement.getBoundingClientRect().width);
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  // function scroll(p: React.MutableRefObject<HTMLDivElement>) {
  //   p.current.scrollIntoView({ behavior: 'smooth' });
  // }

  return (
    <div ref={ref}>
      <Navbar width={width}>
        <Link
          id='button'
          to='/'
          variant='nav'
          // onClick={() => {
          //   window.scroll(0, 0);
          // }}
        >
          Home
        </Link>
        <Link
          id='button'
          to='/#3d-art'
          variant='nav'
          // onClick={() => {
          //   const offset = sculptRef.current.offsetTop - 64;
          //   window.scroll(0, offset);
          // }}
        >
          3D Art
        </Link>
        <Link
          id='button'
          to='/#front-end'
          variant='nav'
          // onClick={() => {
          //   window.scroll(0, frontendRef.current.offsetTop - 64);
          // }}
        >
          UI/UX
        </Link>
        <Link
          id='button'
          to='/#resume'
          variant='nav'
          // onClick={() => {
          //   window.scroll(0, resumeRef.current.offsetTop - 64);
          // }}
        >
          Resumé
        </Link>
        <Link
          id='button'
          to='/spidey-css'
          variant='nav'
          // onClick={() => {
          //   window.scroll(0, 0);
          // }}
        >
          Spidey CSS
        </Link>
        {width <= 700 ? (
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <a
              style={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '8px',
              }}
              href='https://github.com/amandasaenz'
            >
              <Icon icon='github' size='medium' color='secondary' />
            </a>

            <Line theme={currentTheme} />
            <a
              style={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '8px',
              }}
              href='https://www.linkedin.com/in/amandasnoww/'
            >
              <Icon icon='linkedin' size='medium' color='secondary' />
            </a>
          </div>
        ) : (
          <>
            <a
              style={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '8px',
              }}
              href='https://github.com/amandasaenz'
            >
              <Icon icon='github' size='medium' color='secondary' />
            </a>
            <a
              style={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '8px',
              }}
              href='https://www.linkedin.com/in/amandasnoww/'
            >
              <Icon icon='linkedin' size='medium' color='secondary' />
            </a>
          </>
        )}
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Title ref={titleRef} />
              <StyledComponenets>
                <StyledGrid>
                  <Sculpt ref={sculptRef} />
                  <UX ref={frontendRef} />
                  <Resume ref={resumeRef} />
                </StyledGrid>
              </StyledComponenets>
            </>
          }
        />
        <Route path='/spidey-css' element={<Spidey ref={spideyRef} />} />
        <Route
          path='/crash-mario'
          element={<SculptProjects data={data[0]} />}
        />
        <Route
          path='/overdrive-madness'
          element={<SculptProjects data={data[1]} />}
        />
        <Route path='/demona' element={<SculptProjects data={data[2]} />} />
        <Route
          path='/bowlhead-banks'
          element={<SculptProjects data={data[3]} />}
        />
        <Route
          path='/hellokitty-kaiju'
          element={<SculptProjects data={data[4]} />}
        />
      </Routes>
    </div>
  );
};

export default App;

const StyledComponenets = styled.div`
  margin: 0rem 7.5rem;
  margin-bottom: 7.5rem;

  @media screen and (max-width: 1000px) {
    margin: 0 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  gap: 16px;

  @media screen and (max-width: 900px) {
    gap: 8px;
  }
`;

const Line = styled.div<Theme>`
  width: 2px;
  min-width: 2px;
  height: 24px;
  background-color: ${(p) => p.theme.secondary};
`;
