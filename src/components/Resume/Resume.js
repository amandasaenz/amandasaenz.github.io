import React from 'react';
import styled from '@emotion/styled';
import InfoContainer from './InfoContainer';
import EducationContainer from './EducationContainer';
import SkillsContainer from './SkillsContainer';
import ProjectsContainer from './ProjectsContainer';
import ExperienceContainer from './ExperienceContainer';
import ScrollToTop from '../ScrollToTop';

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
  padding-right: 32px;
  padding-left: 32px;
  color: #7fd8d9;
  padding-top: 56px;
  padding-bottom: 32px;
  // @media (max-width: 574px) {
  //   padding-left: 24px;
  //   padding-right: 24px;
  // }
`;

const Line = styled.div`
  height: 1px;
  background-color: #e74946;
  margin-top: 8px;
  margin-bottom: 8px;
`;
