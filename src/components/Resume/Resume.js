import React, { useContext } from 'react';
import styled from '@emotion/styled';
import InfoContainer from './InfoContainer';
import EducationContainer from './EducationContainer';
import SkillsContainer from './SkillsContainer';
import ProjectsContainer from './ProjectsContainer';
import ExperienceContainer from './ExperienceContainer';
import ScrollToTop from '../ScrollToTop';
import { Line } from '../ReusableComponents';
import ThemeContext from '../ThemeContext';
import Themes from '../Themes';

const Resume = ({ data }) => {
  console.log(window.location.href);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];
  return (
    <Container>
      <ScrollToTop />
      <InfoContainer data={data} />
      <Line theme={currentTheme} />
      <EducationContainer data={data} />
      <Line theme={currentTheme} />
      <SkillsContainer data={data} />
      <Line theme={currentTheme} />
      <ProjectsContainer data={data} />
      <Line theme={currentTheme} />
      <ExperienceContainer data={data} />
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  color: #7fd8d9;
  padding-top: 64px;
  padding-bottom: 32px;
  margin: 0 auto;
  @media (min-width: 881px) {
    width: 848px;
  }
`;
