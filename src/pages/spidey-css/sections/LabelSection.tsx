import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import Typography from '../../../reusable-components/Typography';
import Label from '../../../reusable-components/Label';
import ThemeContext from '../../../theme/ThemeContext';
import Themes from '../../../theme/Themes';
import { Heading, Subheading } from '../../Typography';

const LabelSection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <Heading>Label</Heading>

      <Container color={theme.caption}>
        <Label>Label</Label>
        <Label icon='edit'>Label</Label>
      </Container>
    </div>
  );
};

export default LabelSection;
