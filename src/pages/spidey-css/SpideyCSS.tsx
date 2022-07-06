import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { Theme } from '../../theme/Themes';
import ColorSection from '../spidey-css/sections/ColorSection';
import TypographySection from '../spidey-css/sections/TypographySection';
import LabelSection from './sections/LabelSection';
import LabelGroupSection from './sections/LabelGroupSection';
import ButtonSection from './sections/ButtonSection';
import TitleSection from './sections/TitleSection';
import IconSection from './sections/IconSection';
import ListSection from './sections/ListSection';
import StorybookSection from './sections/StorybookSection';
import ClockSection from './sections/ClockSection';
import CalendarSection from './sections/CalendarSection';

const Spidey = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <TitleSection id='#' />
      <StyledComponents>
        <StorybookSection />
        <ColorSection />
        <TypographySection />
        <ListSection />
        <IconSection />
        <LabelSection />
        <LabelGroupSection />
        <ButtonSection />
        <ClockSection />
        <CalendarSection />
      </StyledComponents>
    </div>
  );
});

export default Spidey;

export const Container = styled.div<Theme>`
  display: grid;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  border: 2px dashed ${(p) => (p.color ? p.color : p.theme.caption)};
  overflow: auto;
  width: 100%;
  padding: 16px 16px;
  box-sizing: border-box;
`;

const StyledComponents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: 0px 7.5rem 64px 7.5rem;

  @media screen and (max-width: 1000px) {
    margin: 0px 1.5rem 64px 1.5rem;
  }
`;
