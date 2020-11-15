import React from 'react';
import styled from '@emotion/styled';
import InfoContainer from './InfoContainer';
import EducationContainer from './EducationContainer';
import SkillsContainer from './SkillsContainer';
import ProjectsContainer from './ProjectsContainer';
import ExperienceContainer from './ExperienceContainer';
import ScrollToTop from '../ScrollToTop';
import { Line } from '../ReusableComponents';

const Resume = ({ data }) => {
  return (
    <Container>
      <ScrollToTop />
      <InfoContainer data={data} />
      <Line />
      <EducationContainer data={data} />
      <Line />
      <SkillsContainer data={data} />
      <Line />
      <ProjectsContainer data={data} />
      <Line />
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
