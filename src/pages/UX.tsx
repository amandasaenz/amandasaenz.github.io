import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import spidey from '../images/spidey.svg';
import mint from '../images/mint.png';
import { ImageLink, LinkWHref, LinkWRouter } from '../reusable-components/Link';
import { Heading } from './Typography';

const UX = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <StyledContainer {...props} ref={ref}>
      <LinkWRouter to='spidey-css'>
        <UXProject1 />
      </LinkWRouter>

      <ImageLink href='http://www.mintcushions.com/'>
        <UXProject2 />
      </ImageLink>
    </StyledContainer>
  );
});

export default UX;

const StyledContainer = styled.div`
  // padding-top: 64px;
  display: grid;
  grid-gap: 16px;

  @media screen and (max-width: 900px) {
    gap: 8px;
  }
`;

const UXProject1 = styled.div`
  background-color: #1a182f;
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;
  background-image: url('${spidey}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const UXProject2 = styled.div`
  background-color: purple;
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;
  background-image: url('${mint}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
