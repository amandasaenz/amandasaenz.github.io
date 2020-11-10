import React from 'react';
import {
  Container,
  Heading,
  SubHeading,
  AlignLeft,
  AlignRight,
  Indent,
  VertLine,
} from './ReusableComponents';

const ExperienceContainer = ({ data }) => {
  const experience = data.experience.map((exp, index) => (
    <Container key={index}>
      <AlignLeft>
        <SubHeading>
          {exp.work} {exp.duration}
        </SubHeading>
        <VertLine>
          <Indent>{exp.role}</Indent>
        </VertLine>
      </AlignLeft>
      <AlignRight>{exp.description}</AlignRight>
    </Container>
  ));
  return (
    <div>
      <Heading>Work Experience</Heading>
      {experience}
    </div>
  );
};

export default ExperienceContainer;
