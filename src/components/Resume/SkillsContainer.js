import React, { useContext } from 'react';
import styled from '@emotion/styled';
import {
  Container,
  Heading,
  Indent,
  AlignLeft,
  VertLine,
  AlignRight,
} from '../ReusableComponents';
import ThemeContext from '../ThemeContext';
import Themes from '../Themes';

const SkillsContainer = ({ data }) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];

  const SkillsList = data.technical.skillList.map((list, index) => (
    <div style={{ display: 'flex', lineHeight: '16px' }}>
      <Element src={data.technical.level[index]} key={list.toString()} />
      <List>{list}</List>
    </div>
  ));

  return (
    <Container theme={currentTheme}>
      <AlignLeft>
        <Heading theme={currentTheme}>Technical Skills</Heading>
        <VertLine theme={currentTheme}>
          <Indent>
            <div style={{ display: 'flex', lineHeight: '16px' }}>
              <ElementLevel src='#cbe763' />
              <Level>novice</Level>
            </div>
            <div style={{ display: 'flex', lineHeight: '16px' }}>
              <ElementLevel src='#a172c6' />
              <Level>intermediate</Level>
            </div>
            <div style={{ display: 'flex', lineHeight: '16px' }}>
              <ElementLevel src='#d11f6c' />
              <Level>advanced</Level>
            </div>
          </Indent>
        </VertLine>
      </AlignLeft>
      <AlignRight>
        <Skills>{SkillsList}</Skills>
      </AlignRight>
    </Container>
  );
};

export default SkillsContainer;

const Skills = styled.div`
  text-align: center;
  align-items: center;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: space-around;
`;

const List = styled.li`
  list-style: none;
  margin-left: 8px;
  margin-right: 8px;
  align-items: center;
`;
const Element = styled.div`
  ::before {
    content: '•  ';
    font-size: 32px;
    color: ${(props) =>
      props.src === 'novice'
        ? '#CDE57A'
        : props.src === 'advanced'
        ? '#d11f6c'
        : '#a172c6'};
  }
`;

const ElementLevel = styled.div`
  ::before {
    content: '•  ';
    margin-right: 8px;
    font-size: 32px;
    color: ${(props) => props.src};
  }
`;

const Level = styled.li`
  list-style: none;
`;
