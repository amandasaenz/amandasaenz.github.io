import React, { forwardRef, useState } from 'react';
import styled from '@emotion/styled';
import demona from '../images/demona.png';
import overdrive from '../images/overdrive.jpg';
import crash from '../images/crash.jpg';
import bb from '../images/bb.jpg';
import kaiju from '../images/kaiju.jpg';
import { Link } from 'react-router-dom';

const Sculpt = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <StyledGrid ref={ref} {...props}>
      <Project1 to='/crash-mario' />
      <Project2 to='/overdrive-madness' />
      <Project3 to='/demona' />
      <Project4 to='/bowlhead-banks' />
      <Project5 to='/hellokitty-kaiju' />
    </StyledGrid>
  );
});

export default Sculpt;

const StyledGrid = styled.div`
  display: grid;
  grid-template-areas:
    'proj1 proj2'
    'proj3 proj2'
    'proj4 proj5';
  gap: 16px;

  @media screen and (max-width: 900px) {
    gap: 8px;
  }
`;

const Project1 = styled(Link)`
  height: 0;
  width: 100%;
  padding-bottom: 80%;
  background-image: url('${crash}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-area: proj1;
`;

const Project2 = styled(Link)`
  height: 0;
  width: 100%;
  padding-bottom: calc(160% + 16px);
  background-image: url('${overdrive}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-area: proj2;

  @media screen and (max-width: 900px) {
    padding-bottom: calc(160% + 8px);
  }
`;
const Project3 = styled(Link)`
  height: 0;
  width: 100%;
  padding-bottom: 80%;
  background-image: url('${demona}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-area: proj3;
`;
const Project4 = styled(Link)`
  height: 0;
  width: 100%;
  padding-bottom: 80%;
  background-image: url('${bb}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-area: proj4;
`;
const Project5 = styled(Link)`
  height: 0;
  width: 100%;
  padding-bottom: 80%;
  background-image: url('${kaiju}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-area: proj5;
`;
