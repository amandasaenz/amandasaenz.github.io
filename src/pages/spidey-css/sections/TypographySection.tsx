import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import ThemeContext from '../../../theme/ThemeContext';
import Themes from '../../../theme/Themes';
import Typography from '../../../reusable-components/Typography';
import { Heading } from '../../Typography';

const TypographySection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <Heading>Typography</Heading>

      <Container color={theme.caption}>
        <Typography variant='h1'>Heading 1</Typography>
        <Typography variant='h2'>Heading 2</Typography>
        <Typography variant='h3'>Heading 3</Typography>
        <Typography variant='h4'>Heading 4</Typography>
        <Typography variant='h5'>Heading 5</Typography>
        <Typography variant='h6'>Heading 6</Typography>
        <Typography variant='body'>
          body: The quick brown fox jumps over the lazy dog
        </Typography>
        <Typography variant='caption'>
          caption: The quick brown fox jumps over the lazy dog
        </Typography>
        <Typography variant='link'>link</Typography>
        <Typography variant='navlink'>navlink</Typography>
        <Typography variant='button'>button</Typography>
        <Typography variant='overline'>overline</Typography>
      </Container>
    </div>
  );
};

export default TypographySection;
