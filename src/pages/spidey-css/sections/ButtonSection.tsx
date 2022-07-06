import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import Typography from '../../../reusable-components/Typography';
import Button from '../../../reusable-components/Button';
import ThemeContext from '../../../theme/ThemeContext';
import Themes from '../../../theme/Themes';
import { Heading, Subheading } from '../../Typography';

const ButtonSection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <Heading>Button</Heading>

      <Container color={theme.caption}>
        <div style={{ display: 'grid', gap: '48px' }}>
          <div
            style={{
              display: 'grid',
              gridGap: '16px',
              gridTemplateColumns: `repeat(5, 48px)`,
            }}
          >
            <Button icon='edit' />
            <Button icon='bookmark' color='primary' />
            <Button icon='location' color='secondary' />
            <Button icon='email' color='caption' />
            <Button icon='phone' disabled />

            <Button icon='edit' variant='outlined' />
            <Button icon='bookmark' color='primary' variant='outlined' />
            <Button icon='location' color='secondary' variant='outlined' />
            <Button icon='email' color='caption' variant='outlined' />
            <Button icon='phone' disabled variant='outlined' />

            <Button icon='edit' variant='contained' />
            <Button icon='bookmark' color='primary' variant='contained' />
            <Button icon='location' color='secondary' variant='contained' />
            <Button icon='email' color='caption' variant='contained' />
            <Button icon='phone' disabled variant='contained' />
          </div>

          <div
            style={{
              display: 'grid',
              gridGap: '16px',
              gridTemplateColumns: `repeat(5, auto)`,
            }}
          >
            <Button>default</Button>
            <Button color='primary'>primary</Button>
            <Button color='secondary'>secondary</Button>
            <Button color='caption'>caption</Button>
            <Button disabled>disabled</Button>

            <Button variant='outlined'>default</Button>
            <Button variant='outlined' color='primary'>
              primary
            </Button>
            <Button variant='outlined' color='secondary'>
              secondary
            </Button>
            <Button variant='outlined' color='caption'>
              caption
            </Button>
            <Button variant='outlined' disabled>
              disabled
            </Button>

            <Button variant='contained'>default</Button>
            <Button variant='contained' color='primary'>
              primary
            </Button>
            <Button variant='contained' color='secondary'>
              secondary
            </Button>
            <Button variant='contained' color='caption'>
              caption
            </Button>
            <Button variant='contained' disabled>
              disabled
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ButtonSection;
