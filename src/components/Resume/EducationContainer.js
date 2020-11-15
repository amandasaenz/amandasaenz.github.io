import React, { useContext } from 'react';
import styled from '@emotion/styled';
import {
  Container,
  Heading,
  AlignLeft,
  AlignRight,
} from '../ReusableComponents';
import ThemeContext from '../ThemeContext';
import Themes from '../Themes';

const EducationContainer = ({ data }) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];
  return (
    <Container theme={currentTheme}>
      <AlignLeft>
        <Heading theme={currentTheme}>Education</Heading>
      </AlignLeft>
      <AlignRight>
        <div>{data.education.major}</div>
        <div>{data.education.school}</div>
        <div>{data.education.graduated}</div>
      </AlignRight>
    </Container>
  );
};

export default EducationContainer;
