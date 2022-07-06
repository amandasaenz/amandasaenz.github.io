import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import Typography from '../../../reusable-components/Typography';
import Label from '../../../reusable-components/Label';
import styled from '@emotion/styled';
import ThemeContext from '../../../theme/ThemeContext';
import Themes from '../../../theme/Themes';
import story from '../../../images/storybook.jpeg';
import { LinkWHref } from '../../../reusable-components/Link';
import { Heading } from '../../Typography';
import Button from '../../../reusable-components/Button';

const StorybookSection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div
      style={{
        display: 'grid',
        gap: '24px',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant='caption'>
        Made with <br /> Typescript and Storybook
      </Typography>
      <a
        style={{ textDecoration: 'none', margin: '0 auto' }}
        href='https://github.com/amandasaenz/Spidey-CSS'
      >
        <Button variant='outlined'>Go to Code!</Button>
      </a>
    </div>
  );
};

export default StorybookSection;
