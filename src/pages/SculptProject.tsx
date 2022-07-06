import React, { useEffect, useState, useContext } from 'react';
import styled from '@emotion/styled';
import spidey from '../images/spidey.svg';
import Icon from '../reusable-components/Icon';
import Typography from '../reusable-components/Typography';
import { Subheading } from './Typography';
import List from '../reusable-components/List';
import data, { DataProps } from './data';
import Themes, { Theme } from '../theme/Themes';
import ThemeContext from '../theme/ThemeContext';

interface IProj extends Theme {
  src?: string[number];
}

interface Props {
  data: DataProps;
}

const SculptProjects: React.FC<Props> = ({ data }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  const [imgArray] = useState(data.images);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count', count);
    console.log('image length', imgArray.length);
  }, [count]);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <StyledComponents>
        <div style={{ display: 'grid', gap: '16px' }}>
          <Subheading>{data.title}</Subheading>
          <Project src={imgArray[count]} theme={theme} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => {
                count < 1 ? setCount(imgArray.length - 1) : setCount(count - 1);
              }}
            >
              <Icon left size='small' />
            </Button>
            <Typography variant='h6'>
              <div style={{ whiteSpace: 'nowrap' }}>
                {count + 1} / {imgArray.length}
              </div>
            </Typography>
            <Button
              onClick={() => {
                count === imgArray.length - 1
                  ? setCount(0)
                  : setCount(count + 1);
              }}
            >
              <Icon right size='small' />
            </Button>
          </div>
          <Typography>{data.description}</Typography>
        </div>

        <div style={{ display: 'grid', gap: '8px' }}>
          <Typography variant='h6' lowercase>
            Software Used
          </Typography>
          {data.software.map((index) => (
            <React.Fragment key={index}>
              <List>{index}</List>
            </React.Fragment>
          ))}
        </div>
      </StyledComponents>
    </div>
  );
};

export default SculptProjects;

const StyledComponents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: 128px 7.5rem 64px 7.5rem;
  //   margin: 128px auto 64px auto;
  max-width: 800px;
  //   justify-content: center;
  @media screen and (max-width: 1000px) {
    // margin: 128px 1.5rem 64px 1.5rem;
    margin: 128px 1.5rem 64px 1.5rem;
  }
`;

const Project = styled.div<IProj>`
  //   background-color: ${(p) => p.theme.background_tint};
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;
  background-image: url('${(p) => p.src}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
