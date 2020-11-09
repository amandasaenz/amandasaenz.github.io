import React from 'react';
import styled from '@emotion/styled';
import ScrollToTop from './ScrollToTop';
import { Link, Indent } from './Resume/ReusableComponents';
import zoom from '../images/SVG/zoom.SVG';

const Projects = ({ data }) => {
  return (
    <Binder>
      <ScrollToTop />
      <Folder data={data} />
    </Binder>
  );
};

const Folder = ({ data }) => {
  return (
    <ProjectContainer>
      <SubHeading>{data.title}</SubHeading>
      <div style={{ display: 'flex', position: 'relative', marginTop: '8px' }}>
        <VertLine />

        <div
          style={{
            marginLeft: '36px',
            display: 'grid',
            gridRowGap: '16px',
          }}
        >
          {data.images.map((s, i) => (
            <ImageContainer
              key={i}
              onClick={() => {
                window.open(`${s}`, '_self');
              }}
            >
              <ZoomImage src={zoom} />
              <Image src={s} key={s.id} />
            </ImageContainer>
          ))}
          <Software>
            {data.software.map((s, i) => (
              <List key={i}>{s}</List>
            ))}
          </Software>
        </div>
      </div>
      <AlignRight>
        <div>
          <span style={{ color: '#d11f6c' }}>Description: </span>
          <span>{data.description}</span>
        </div>
        <div>
          <span style={{ color: '#d11f6c' }}>Partners: </span>
          <span>{data.partners}</span>
        </div>
        <div>
          <span style={{ color: '#d11f6c' }}>Role: </span>
          <span>{data.role}</span>
        </div>

        <Link href={data.demo}>Demo Link</Link>
      </AlignRight>
    </ProjectContainer>
  );
};

export default Projects;

const VertLine = styled.div`
  background-color: #e74946;
  width: 2px;
  height: 100%;
  border-radius: 2px;
  position: absolute;
  margin-left: 20px;
`;

const Software = styled.div`
  // margin-top: 16px;
  width: 100%;
`;

// const Indent = styled.div`
//   position: relative;
//   height: 100%;
// `;

const List = styled.li`
  list-style: none;
`;

const Binder = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  color: #7fd8d9;
  font-family: 'Varela Round', sans-serif;
  font-size: 20px;
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
  // font-family: 'Varela Round', sans-serif;
  font-family: 'Mitr', sans-serif;
  color: #e74946;
  font-size: 28px;
`;

const AlignRight = styled.div`
  flex: 1 1 0%;
  justify-content: flex-start;
  padding-top: 16px;
`;

const Image = styled.img`
  background-image: url('${(props) => props.src}');
  width: 100%;
  display: block;
  transition: transform 0.2s;
`;

const ImageContainer = styled.div`
  // position: relative;

  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  // margin-top: 8px;
  cursor: pointer;

  & ${ZoomImage}:hover + ${Image} {
    transform: scale(1.5);
  }
`;

const ZoomImage = styled.div`
  background-image: url('${(props) => props.src}');
  position: absolute;
  right: 0;
  width: 48px;
  height: 48px;
  margin: 8px;
  // background-color: red;
  z-index: 2;
  @media (max-width: 479px) {
    width: 32px;
    height: 32px;
  }
`;
