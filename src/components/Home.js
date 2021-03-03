import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Heading, Indent, VertLine } from './ReusableComponents';
import ThemeContext from './ThemeContext';
import Themes from './Themes';
import { Link } from 'react-router-dom';

const Home = ({ data }) => {
  //MAYBE ADD SCROLL TO TOP IF BACK BUTTON ISNT CLICKED
  console.log(window.location.href);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];
  return (
    <Container>
      <Project
        theme={currentTheme}
        images={data.projects.threeD}
        name={'3D Projects'}
      />
      <Project
        theme={currentTheme}
        images={data.projects.IllustP}
        name={'Illustration Projects'}
      />
      <Project
        theme={currentTheme}
        images={data.projects.UX}
        name={'UI / UX Projects'}
      />
      <Project
        theme={currentTheme}
        images={data.projects.ReactP}
        name={'React Projects'}
      />
      <Project
        theme={currentTheme}
        images={data.projects.PlushP}
        name={'Plush Projects'}
      />
    </Container>
  );
};

const Project = ({ images, name, theme }) => {
  const List = images.map((image, index) => (
    <ProjLink to={`${image.id}`} key={index}>
      <Image src={image.thumbnail} />
    </ProjLink>
  ));

  return (
    <AlignLeft>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Heading theme={theme}>{name}</Heading>
      </div>

      <div style={{ position: 'relative', marginTop: '8px' }}>
        <VertLine theme={theme} style={{ position: 'absolute' }}>
          <Indent />
        </VertLine>
        <Content>{List}</Content>
      </div>
    </AlignLeft>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 80px;
`;

const Content = styled.div`
  margin-left: 40px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 625px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Image = styled.div`
  background-image: url('${(props) => props.src}');
  padding-top: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`;

const ProjLink = styled(Link)`
  overflow: hidden;
  flex-basis: 30%;
  flex-grow: 1;
  border-radius: 4px;
  box-sizing: border-box;
`;

const AlignLeft = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  margin-bottom: 32px;
`;
