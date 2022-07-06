import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import Typography from '../../../reusable-components/Typography';
import { Button } from '../../../reusable-components/Button';
import ThemeContext from '../../../theme/ThemeContext';
import Themes from '../../../theme/Themes';
import Icon from '../../../reusable-components/Icon';
import { Heading, Subheading } from '../../Typography';

const IconSection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <Heading>Icon</Heading>
      <Container color={theme.caption}>
        <div style={{ display: 'grid', gap: '48px' }}>
          <div
            style={{
              display: 'grid',
              gridGap: '16px',
              gridTemplateColumns: `repeat(6, 16px)`,
            }}
          >
            <Icon phone />
            <Icon email />
            <Icon location />
            <Icon burger />
            <Icon account />
            <Icon adduser />
            <Icon back />
            <Icon bookmark />
            <Icon bubble />
            <Icon charge />
            <Icon charging />
            <Icon edit />
            <Icon error />
            <Icon exit />
            <Icon forward />
            <Icon left />
            <Icon message />
            <Icon notification />
            <Icon read />
            <Icon refresh />
            <Icon replay />
            <Icon right />
            <Icon search />
            <Icon shuffle />
            <Icon trash />
            <Icon typing />
            <Icon zoom />
            <Icon heart />
            <Icon up />
            <Icon down />
          </div>

          <div
            style={{
              display: 'grid',
              gridGap: '16px',
              gridTemplateColumns: `repeat(6, 32px)`,
            }}
          >
            <Icon phone size='medium' />
            <Icon email size='medium' />
            <Icon location size='medium' />
            <Icon burger size='medium' />
            <Icon account size='medium' />
            <Icon adduser size='medium' />
            <Icon back size='medium' />
            <Icon bookmark size='medium' />
            <Icon bubble size='medium' />
            <Icon charge size='medium' />
            <Icon charging size='medium' />
            <Icon edit size='medium' />
            <Icon error size='medium' />
            <Icon exit size='medium' />
            <Icon forward size='medium' />
            <Icon left size='medium' />
            <Icon message size='medium' />
            <Icon notification size='medium' />
            <Icon read size='medium' />
            <Icon refresh size='medium' />
            <Icon replay size='medium' />
            <Icon right size='medium' />
            <Icon search size='medium' />
            <Icon shuffle size='medium' />
            <Icon trash size='medium' />
            <Icon typing size='medium' />
            <Icon zoom size='medium' />
            <Icon heart size='medium' />
            <Icon up size='medium' />
            <Icon down size='medium' />
          </div>

          <div
            style={{
              display: 'grid',
              gridGap: '16px',
              gridTemplateColumns: `repeat(6, 48px)`,
            }}
          >
            <Icon phone size='large' />
            <Icon email size='large' />
            <Icon location size='large' />
            <Icon burger size='large' />
            <Icon account size='large' />
            <Icon adduser size='large' />
            <Icon back size='large' />
            <Icon bookmark size='large' />
            <Icon bubble size='large' />
            <Icon charge size='large' />
            <Icon charging size='large' />
            <Icon edit size='large' />
            <Icon error size='large' />
            <Icon exit size='large' />
            <Icon forward size='large' />
            <Icon left size='large' />
            <Icon message size='large' />
            <Icon notification size='large' />
            <Icon read size='large' />
            <Icon refresh size='large' />
            <Icon replay size='large' />
            <Icon right size='large' />
            <Icon search size='large' />
            <Icon shuffle size='large' />
            <Icon trash size='large' />
            <Icon typing size='large' />
            <Icon zoom size='large' />
            <Icon heart size='large' />
            <Icon up size='large' />
            <Icon down size='large' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IconSection;
