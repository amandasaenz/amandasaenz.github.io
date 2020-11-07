import React from 'react';
import styled from '@emotion/styled';
import {
  Container,
  Heading,
  SubHeading,
  AlignLeft,
  AlignRight,
  Indent,
  Link,
} from './ReusableComponents';

const ProjectsContainer = ({ data }) => {
  const projects = data.projects.map((project, index) => (
    <Container key={index}>
      <AlignLeft>
        <SubHeading>{project.title}</SubHeading>
        <Indent>
          {project.software.map((s, i) => (
            <List key={i}>{s}</List>
          ))}
        </Indent>
      </AlignLeft>
      <AlignRight>
        <div>{project.description}</div>
        <div>{project.partners}</div>
        <div>{project.role}</div>
        <Link href={project.demo}>Demo Link</Link>
      </AlignRight>
    </Container>
  ));

  return (
    <div>
      <Heading>Projects</Heading>
      {projects}
    </div>
  );
};

export default ProjectsContainer;

const List = styled.li`
  list-style: none;
`;
