import React from 'react';
import styled from '@emotion/styled';
import { Container, Heading, AlignLeft } from './ReusableComponents';

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

export const AlignRight = styled.div`
  padding-top: 8px;
  flex: 1 1 0%;
  justify-content: flex-start;
`;
