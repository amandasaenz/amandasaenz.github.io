import React from 'react';
import styled from '@emotion/styled';
import ScrollToTop from './ScrollToTop';
import { Link } from './Resume/ReusableComponents';

const Projects = ({ data }) => {
  const loc = window.location.href;
  console.log('location', loc);
  return (
    <Binder>
      <ScrollToTop />
      <Folder data={data} />
    </Binder>
  );
};

const Folder = ({ data }) => {
 return(
    <ProjectContainer>
      <SubHeading>{data.title}</SubHeading>

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
        {data.images.map((s, i) => (
              <Image src={s} key={i}/>
            ))}
          <Software>
            {data.software.map((s, i) => (
              <List key={i}>{s}</List>
            ))}
          </Software>
        </div>
      </Indent>

      <AlignRight>
        <div>{data.description}</div>
        <div>{data.partners}</div>
        <div>{data.role}</div>
        <Link href={data.demo}>Demo Link</Link>
      </AlignRight>
    </ProjectContainer>
 );
};


export default Projects;

const Software = styled.div`
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
  padding-right: 32px;
  color: #7fd8d9;
  font-family: 'Varela Round', sans-serif;
`;

const ProjectContainer = styled.div`
  margin: auto;
  max-width: 600px;
  padding-top: 56px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SubHeading = styled.div`
  font-family: 'Varela Round', sans-serif;
  
  color: #e74946;
  font-size: 24px;
`;

const AlignRight = styled.div`
  flex: 1 1 0%;
  justify-content: flex-start;
  padding-top: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding-left: 32px;
  padding-bottom: 8px;
  padding-top: 8px;
`;
