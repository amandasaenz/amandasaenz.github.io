import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from './Resume/ReusableComponents';
import Carousel from './Carousel';

{
  /* <Folder data={data.projects.UX} />
      <Folder data={data.projects.ReactP} />
      <Folder data={data.projects.IllustP} />
      <Folder data={data.projects.PlushP} /> */
}

const Projects = ({ data }) => {
  return (
    <Binder>
      <Folder data={data.projects.threeD} />
    </Binder>
  );
};

const Folder = ({ data }) => {
  const Project = data.map((p, i) => (
    <ProjectContainer key={i} id={p.id}>
      <SubHeading>{p.title}</SubHeading>

      <Indent>
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            backgroundColor: '#191324',
            width: '16px',
            height: '100%',
            borderRight: '1px solid #e74946',
          }}
        ></div>
        <div>
          <Carousel data={p.images} />
          <Software>
            {p.software.map((s, i) => (
              <List key={i}>{s}</List>
            ))}
          </Software>
        </div>
      </Indent>

      <AlignRight>
        <div>{p.description}</div>
        <div>{p.partners}</div>
        <div>{p.role}</div>
        <Link href={p.demo}>Demo Link</Link>
      </AlignRight>
    </ProjectContainer>
  ));

  return <div>{Project}</div>;
};

export default Projects;

const Software = styled.div`
  padding-top: 8px;
  padding-right: 32px;
  padding-left: 32px;
`;

const Indent = styled.div`
  display: inline;
  height: auto;
  position: relative;
`;

const List = styled.li`
  list-style: none;
`;

const Binder = styled.div`
  padding-left: 32px;
  color: #7fd8d9;

  font-family: 'Varela Round', sans-serif;
`;

const ProjectContainer = styled.div`
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SubHeading = styled.div`
  font-family: 'Varela Round', sans-serif;
  padding-top: 8px;
  color: #e74946;
  font-size: 24px;
`;

const AlignRight = styled.div`
  flex: 1 1 0%;
  justify-content: flex-start;
  padding-top: 8px;
  padding-right: 32px;
`;
