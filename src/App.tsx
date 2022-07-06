import React, {
  useContext,
  useRef,
  useEffect,
  MutableRefObject,
  useState,
} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from './reusable-components/Navbar';
import { LinkWRouter as Link } from './reusable-components/Link';
import ThemeContext from './theme/ThemeContext';
import Theme from './theme/Themes';
import Spidey from './pages/spidey-css/SpideyCSS';
import Sculpt from './pages/Sculpt';
import UX from './pages/UX';
import Resume from './pages/Resume';
import Title from './pages/Title';
import SculptProjects from './pages/SculptProject';
import data from './pages/data';
import { useNavigate } from 'react-router-dom';

/*TO DO LIST
2. finish storybook and link to spidey page
5.add code display to library
*/

const App: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const currentTheme = Theme[dark === false ? 'light' : 'dark'];

  document.body.style.backgroundColor = currentTheme.background;
  const location = useLocation();

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const titleRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const sculptRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const frontendRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const resumeRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const spideyRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [width, setWidth] = useState(0);
  // const [title, setTitle] = useState(titleRef.current.offsetTop - 64);
  // const [sculpt, setSculpt] = useState(sculptRef.current.offsetTop - 64);
  // const [frontend, setFrontEnd] = useState(frontendRef.current.offsetTop - 64);
  // const [resume, setResume] = useState(resumeRef.current.offsetTop - 64);

  // console.log('title', title);
  // console.log('sculpt', sculpt);
  // console.log('front end', frontend);
  // console.log('resume', resume);

  // initialize screen-width
  useEffect(() => {
    setWidth(ref.current.getBoundingClientRect().width);
    // setTitle(titleRef.current.offsetTop - 64);
    // setSculpt(sculptRef.current.offsetTop - 64);
    // setFrontEnd(frontendRef.current.offsetTop - 64);
    // setResume(resumeRef.current.offsetTop - 64);
    // console.log('title', title);
    // console.log('sculpt', sculpt);
    // console.log('front end', frontend);
    // console.log('resume', resume);
  }, []);

  // update screen-width
  useEffect(() => {
    const resizeListener = () => {
      setWidth(ref.current.getBoundingClientRect().width);
      // setTitle(titleRef.current.offsetTop - 64);
      // setSculpt(sculptRef.current.offsetTop - 64);
      // setFrontEnd(frontendRef.current.offsetTop - 64);
      // setResume(resumeRef.current.offsetTop - 64);
      // console.log('title', title);
      // console.log('sculpt', sculpt);
      // console.log('front end', frontend);
      // console.log('resume', resume);
    };
    window.addEventListener('resize', resizeListener);
  }); //<- [ref.current]

  // listen to scroll
  useEffect(() => {
    const scrollListener = () => {
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', scrollListener);
  }, [window.scrollY]);

  // function scroll(p: React.MutableRefObject<HTMLDivElement>) {
  //   p.current.scrollIntoView({ behavior: 'smooth' });
  // }

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

  return (
    <div ref={ref}>
      <Navbar width={width} />

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
