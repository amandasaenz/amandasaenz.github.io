import React from 'react';
import styled from '@emotion/styled';
import ScrollToTop from './ScrollToTop';
import { Link, SubHeading, AlignRight } from './ReusableComponents';
import zoom from './images/zoom.svg';

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
            marginLeft: '40px',
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
        <div
          style={{
            display: `${data.description}` === 'undefined' ? 'none' : 'block',
          }}
        >
          {data.description}
        </div>

        <Link
          href={data.demo}
          style={{
            display: `${data.demo}` === 'undefined' ? 'none' : 'inline',
          }}
        >
          Demo Link
        </Link>
      </AlignRight>
    </ProjectContainer>
  );
};

export default Projects;

const VertLine = styled.div`
  background-color: #ff6561;
  width: 2px;
  height: 100%;
  border-radius: 2px;
  position: absolute;
  margin-left: 24px;
`;

const Software = styled.div`
  width: 100%;
`;

const List = styled.li`
  list-style: none;
`;

const Binder = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  color: #7fd8d9;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

const ProjectContainer = styled.div`
  margin: auto;
  max-width: 600px;
  padding-top: 64px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// const SubHeading = styled.div`
//   font-family: 'Mitr', sans-serif;
//   color: #e74946;
//   font-size: 28px;
// `;

// const AlignRight = styled.div`
//   flex: 1 1 0%;
//   justify-content: flex-start;
//   padding-top: 16px;
// `;

const Image = styled.img`
  background-image: url('${(props) => props.src}');
  width: 100%;
  display: block;
  transition: transform 0.2s;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
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
  z-index: 2;
`;
