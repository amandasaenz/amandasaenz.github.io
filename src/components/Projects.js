import React, { useContext } from 'react';
import styled from '@emotion/styled';
import ScrollToTop from './ScrollToTop';
import { Link, SubHeading, AlignRight } from './ReusableComponents';

import ThemeContext from './ThemeContext';
import Themes from './Themes';

const Projects = ({ data }) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];
  return (
    <Binder theme={currentTheme}>
      <ScrollToTop />
      <Folder data={data} theme={currentTheme} />
    </Binder>
  );
};

const Folder = ({ data, theme }) => {
  return (
    <ProjectContainer>
      <SubHeading theme={theme}>{data.title}</SubHeading>
      <div style={{ display: 'flex', position: 'relative', marginTop: '8px' }}>
        <VertLine theme={theme} />

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
              <ZoomImage theme={theme} />
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
          theme={theme}
          href={data.demo}
          style={{
            display: `${data.demo}` === 'undefined' ? 'none' : 'inline',
          }}
        >
          Demo Link
        </Link>
      </AlignRight>
      <div
        style={{
          display: `${data.example}` === 'undefined' ? 'none' : 'block',
          margin: '0 auto',
        }}
      >
        {data.example}
      </div>
    </ProjectContainer>
  );
};

export default Projects;

const VertLine = styled.div`
  width: 2px;
  height: 100%;
  border-radius: 2px;
  position: absolute;
  margin-left: 24px;
  background-color: ${(props) => props.theme.headingColor};
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
  color: ${(props) => props.theme.bodyText};
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
`;

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
  background-image: url('${(props) => props.theme.zoom}');
  position: absolute;
  right: 0;
  width: 48px;
  height: 48px;
  z-index: 2;
`;
