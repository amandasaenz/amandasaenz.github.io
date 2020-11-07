import React from 'react';
import styled from '@emotion/styled';
import { Heading } from './Resume/ReusableComponents';
import ScrollToTop from './ScrollToTop';

const Home = ({ data }) => {
  return (
    <Container>
      <ScrollToTop />
      <Project images={data.projects.threeD} name={'3D Projects'} />
      <Project images={data.projects.UX} name={'UI / UX Projects'} />
      <Project images={data.projects.ReactP} name={'React Projects'} />
      <Project images={data.projects.IllustP} name={'Illustration Projects'} />
      <Project images={data.projects.PlushP} name={'Plush Projects'} />
    </Container>
  );
};

const Project = ({ images, name }) => {
  const List = images.map((image, index) => (
    <Link href={`#${image.id}`} key={index}>
      <Image src={image.thumbnail} />
    </Link>
  ));

  return (
    <AlignLeft>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Heading>{name}</Heading>
      </div>

      <div style={{ position: 'relative' }}>
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
        <Content>{List}</Content>
      </div>
    </AlignLeft>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 88px;
`;

const Content = styled.div`
  height: 100%;
  margin-top: 8px;
  margin-left: 32px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: auto auto auto;

  @media (max-width: 625px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 1000px) {
    grid-template-columns: auto auto auto auto;
  }

  @media (min-width: 1400px) {
    grid-template-columns: auto auto auto auto auto;
  }
`;

const Image = styled.div`
  background-image: url('${(props) => props.src}');
  height: 192px;
  background-position: center;
  background-size: cover;
`;

const Link = styled.a`
  // margin-left: 16px;
  // margin-top: 16px;
  flex-basis: 30%;
  flex-grow: 1;

  border-radius: 4px;
  box-sizing: border-box;
`;

export const AlignLeft = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  margin-bottom: 32px;
`;
