import React, { useEffect, useState, useRef } from 'react';
import Resume from './Resume/Resume';

import Home from './Home';
import Projects from './Projects';
import ResumeData from './ResumeData';
import ProjectData from './ProjectData';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import lodash from 'lodash'

document.body.style = 'margin: 0';
document.body.style.backgroundColor = '#191324';

// document.body.style.overflowX = 'hidden';
// document.body.style.position = 'relative';

const initState = (data) => {
  const projects = data.projects;
  return lodash.reduce(projects, (result, current, key) => {
        const ids = current.map((proj) => {
          return proj
        })
        return [...result, ...ids]
    }, [])
}

const App = () => {
  const [width, setWidth] = useState(0);
  const [projArray, setProjArray] = useState(initState(ProjectData));
  const ref = useRef(0);

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
    <div ref={ref}>
      
      <NavBar data={ResumeData} width={width} />
      
      <Switch>
        <Route exact path='/' render={() => <Home data={ProjectData} />} />
        <Route
          exact ='/resume'
          render={() => <Resume data={ResumeData} />}
        />
  
        {projArray.map((s, i) => (
            <Route key={i}  path={`/${s.id}`} render={() => <Projects data={s} />}/>
        ))}
        
      </Switch>
      
    </div>
  );
};

export default App;
