import React, { useContext } from 'react';
import styled from '@emotion/styled';
import {
  Container,
  Heading,
  SubHeading,
  AlignLeft,
  AlignRight,
  Indent,
  Link,
  VertLine,
} from '../ReusableComponents';
import ThemeContext from '../ThemeContext';
import Themes from '../Themes';

const ProjectsContainer = ({ data }) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];
  // console.log('current theme project = ', currentTheme);
  const projects = data.projects.map((project, index) => (
    <Container theme={currentTheme} key={index}>
      <AlignLeft>
        <SubHeading theme={currentTheme}>{project.title}</SubHeading>
        <VertLine theme={currentTheme}>
          <Indent>
            {project.software.map((s, i) => (
              <List key={i}>{s}</List>
            ))}
          </Indent>
        </VertLine>
      </AlignLeft>
      <AlignRight>
        <div
          style={{
            display:
              `${project.description}` === 'undefined' ? 'none' : 'block',
          }}
        >
          <span>{project.description}</span>
        </div>

        <Link theme={currentTheme} href={project.demo}>
          Demo Link
        </Link>
      </AlignRight>
    </Container>
  ));

  return (
    <div>
      <Heading theme={currentTheme}>Projects</Heading>
      {projects}
    </div>
  );
};

export default ProjectsContainer;

const List = styled.li`
  list-style: none;
`;
