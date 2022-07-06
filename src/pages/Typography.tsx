import React from 'react';
import Typography, { IType } from '../reusable-components/Typography';
import styled from '@emotion/styled';

export const Title: React.FC<IType> = ({ children }) => {
  return <StyledTitle variant='h2'>{children}</StyledTitle>;
};

export const Heading: React.FC<IType> = ({ children }) => {
  return <StyledHeading variant='h4'>{children}</StyledHeading>;
};

export const Subheading: React.FC<IType> = ({ children }) => {
  return (
    <StyledSubHeading variant='h5' lowercase>
      {children}
    </StyledSubHeading>
  );
};

const StyledTitle = styled(Typography)<IType>`
  @media screen and (max-width: 630px) {
    font-size: 3rem;
`;

const StyledHeading = styled(Typography)<IType>`
  @media screen and (max-width: 630px) {
    font-size: 1.5rem;
    font-weight: 500;
`;

const StyledSubHeading = styled(Typography)<IType>`
  @media screen and (max-width: 630px) {
    font-size: 1rem;
  }
`;
