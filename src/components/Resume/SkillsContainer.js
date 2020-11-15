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
    <List src={data.technical.level[index]} key={list.toString()}>
      {list}
    </List>
  ));

  return (
    <Container theme={currentTheme}>
      <AlignLeft>
        <Heading theme={currentTheme}>Technical Skills</Heading>
        <VertLine theme={currentTheme}>
          <Indent>
            <Level src='#cbe763'>novice</Level>
            <Level src='#a172c6'>intermediate</Level>
            <Level src='#d11f6c'>advanced</Level>
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
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: space-around;
`;

const List = styled.li`
  list-style: none;
  padding-left: 8px;
  padding-right: 8px;
  ::before {
    content: '•  ';
    color: ${(props) =>
      props.src === 'novice'
        ? '#cbe763'
        : props.src === 'advanced'
        ? '#d11f6c'
        : '#a172c6'};
  }
`;

const Level = styled.li`
  list-style: none;
  ::before {
    content: '•  ';
    color: ${(props) => props.src};
  }
`;
