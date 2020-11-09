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
  vertLine,
  VertLine,
} from './ReusableComponents';

const ProjectsContainer = ({ data }) => {
  const projects = data.projects.map((project, index) => (
    <Container key={index}>
      <AlignLeft>
        <SubHeading>{project.title}</SubHeading>
        <VertLine>
          <Indent>
            {project.software.map((s, i) => (
              <List key={i}>{s}</List>
            ))}
          </Indent>
        </VertLine>
      </AlignLeft>
      <AlignRight>
        <div>
          <span style={{ color: '#d11f6c' }}>Description: </span>
          <span>{project.description}</span>
        </div>

        <div>
          <span style={{ color: '#d11f6c' }}>Partners: </span>
          <span>{project.partners}</span>
        </div>

        <div>
          <span style={{ color: '#d11f6c' }}>Role: </span>
          <span>{project.role}</span>
        </div>

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

const SubHeader = styled.p`
  font-family: 'Varela Round', sans-serif;
  color: #e74946;
  font-size: 20px;
`;

const Text = styled.p`
  font-family: 'Varela Round', sans-serif;
  color: #7fd8d9;
  font-size: 20px;
`;
