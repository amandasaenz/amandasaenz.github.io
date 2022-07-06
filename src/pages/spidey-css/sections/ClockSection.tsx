import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import ColorSwatch from '../../../reusable-components/ColorSwatch';
import ThemeContext from '../../../theme/ThemeContext';
import Themes, { Theme } from '../../../theme/Themes';
import { Heading } from '../../Typography';
import styled from '@emotion/styled';
import Clock from '../../../reusable-components/Clock';

const ClockSection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <Heading>Clock</Heading>

      <Container color={theme.caption}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Clock />
          <Clock variant='contained' />
          <Clock circle />
          <Clock variant='contained' circle />
        </div>
      </Container>
    </div>
  );
};

export default ClockSection;

const StyledWrapper = styled.div<Theme>`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: ${(p) => `2px solid ${p.theme.default}`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div<Theme>`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.default}};
`;
