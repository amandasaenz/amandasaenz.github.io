import React from 'react';
import styled from '@emotion/styled';
import {
  Container,
  Heading,
  AlignLeft,
  AlignRight,
} from '../ReusableComponents';

const EducationContainer = ({ data }) => {
  return (
    <Container>
      <AlignLeft>
        <Heading>Education</Heading>
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
