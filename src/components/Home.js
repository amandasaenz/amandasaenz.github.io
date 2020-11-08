import React from 'react';
import styled from '@emotion/styled';
import { Heading } from './Resume/ReusableComponents';

const Home = ({ data }) => {
  return (
    <Container>
      <Project images={data.projects.threeD} name={'3D Projects'} />
      <Project images={data.projects.UX} name={'UI / UX Projects'} />
      <Project images={data.projects.ReactP} name={'React Projects'} />
      <Project images={data.projects.PlushP} name={'Plush Projects'} />
      <Project images={data.projects.IllustP} name={'Illustration Projects'} />
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
  
  margin-top: 8px;
  margin-left: 32px;
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
  transition: transform .2s;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`;

const Link = styled.a`
overflow: hidden;
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
