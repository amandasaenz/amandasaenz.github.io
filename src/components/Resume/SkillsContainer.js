import React from 'react';
import styled from '@emotion/styled';
import {
  Container,
  Heading,
  Indent,
  AlignLeft,
  VertLine,
  AlignRight,
} from '../ReusableComponents';

const SkillsContainer = ({ data }) => {
  const SkillsList = data.technical.skillList.map((list, index) => (
    <List src={data.technical.level[index]} key={list.toString()}>
      {list}
    </List>
  ));

  return (
    <Container>
      <AlignLeft>
        <Heading>Technical Skills</Heading>
        <VertLine>
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
