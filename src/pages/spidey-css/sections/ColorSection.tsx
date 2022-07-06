import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import ColorSwatch from '../../../reusable-components/ColorSwatch';
import ThemeContext from '../../../theme/ThemeContext';
import Themes from '../../../theme/Themes';
import { Heading } from '../../Typography';

const ColorSection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <Heading>Colors</Heading>

      <Container color={theme.caption}>
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <ColorSwatch color={theme.default} label='default' />
            <ColorSwatch color={theme.primary} label='primary' />
            <ColorSwatch color={theme.secondary} label='secondary' />
            <ColorSwatch color={theme.caption} label='caption' />
            <ColorSwatch color={theme.disabled} label='disabled' />
          </div>
          <div style={{ display: 'grid', gap: '16px' }}>
            <ColorSwatch color={theme.default_tint} label='default tint' />
            <ColorSwatch color={theme.primary_tint} label='primary tint' />
            <ColorSwatch color={theme.secondary_tint} label='secondary tint' />
            <ColorSwatch color={theme.caption_tint} label='caption tint' />
            <ColorSwatch color={theme.disabled_tint} label='disabled tint' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ColorSection;
