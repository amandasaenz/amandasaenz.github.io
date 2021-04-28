import React, { useEffect, useState, useRef, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Resume from './Resume/Resume';
import Home from './Home';
import Projects from './Projects';
import ResumeData from './ResumeData';
import ProjectData from './ProjectData';
import NavBar from './Navbar';
import ThemeContext from './ThemeContext';
import lodash from 'lodash';

document.body.style.margin = 0;

const initState = (data) => {
  const projects = data.projects;
  return lodash.reduce(
    projects,
    (result, current, key) => {
      const ids = current.map((proj) => {
        return proj;
      });
      return [...result, ...ids];
    },
    []
  );
};

const App = () => {
  const theme = useState('dark');

  const [width, setWidth] = useState(0);
  const [projArray, setProjArray] = useState(initState(ProjectData));
  const ref = useRef(0);

  useEffect(() => {
    theme[0] === 'light'
      ? (document.body.style.backgroundColor = '#FCFFFF')
      : (document.body.style.backgroundColor = '#161427');
  }, [theme]);

  // initialize screen-width
  useEffect(() => {
    setWidth(ref.current.getBoundingClientRect().width);
  });

  // update screen-width
  useEffect(() => {
    const resizeListener = () => {
      setWidth(ref.current.getBoundingClientRect().width);
    };
    window.addEventListener('resize', resizeListener);
  }, [ref.current]);

  return (
    <ThemeContext.Provider value={theme}>
      <div ref={ref}>
        <NavBar data={ResumeData} width={width} />

        <div>
          <Switch>
            <Route exact path='/' render={() => <Home data={ProjectData} />} />
            <Route
              exact
              path='/resume'
              render={() => <Resume data={ResumeData} />}
            />

            {projArray.map((s, i) => (
              <Route
                key={i}
                path={`/${s.id}`}
                render={() => <Projects data={s} />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
