import React, { useContext } from 'react';
import {
  Container,
  Heading,
  SubHeading,
  AlignLeft,
  AlignRight,
  Indent,
  VertLine,
} from '../ReusableComponents';
import ThemeContext from '../ThemeContext';
import Themes from '../Themes';

const ExperienceContainer = ({ data }) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];
  const experience = data.experience.map((exp, index) => (
    <Container theme={currentTheme} key={index}>
      <AlignLeft>
        <SubHeading theme={currentTheme}>
          {exp.work} {exp.duration}
        </SubHeading>
        <VertLine theme={currentTheme}>
          <Indent>{exp.role}</Indent>
        </VertLine>
      </AlignLeft>
      <AlignRight>{exp.description}</AlignRight>
    </Container>
  ));
  return (
    <div>
      <Heading theme={currentTheme}>Work Experience</Heading>
      {experience}
    </div>
  );
};

export default ExperienceContainer;
