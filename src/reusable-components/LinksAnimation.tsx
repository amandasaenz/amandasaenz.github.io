import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { a, SpringValue, useSpring, useTrail } from 'react-spring';
import styled from '@emotion/styled';
import Themes, { Theme } from '../theme/Themes';
import ThemeContext from '../theme/ThemeContext';

interface ITrail extends Theme {
  children: React.ReactNode;
  opened: boolean;
}

const Trail: React.FC<ITrail> = ({ children, ...props }) => {
  const items = React.Children.toArray(children);
  const { dark } = useContext(ThemeContext);

  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 250, friction: 20 },
    x: props.opened ? 0 : -150,
  });

  const collapse = useSpring<SpringValue>({
    display: props.opened ? 'grid' : 'none',
  });

  return (
    <LinksContainer style={collapse}>
      {trail.map((style, index) => (
        <a.div style={style} key={index}>
          {items[index]}
        </a.div>
        //   {/* {index != items.length - 1 && <Line style={grow} theme={theme} />} */}
      ))}
    </LinksContainer>
  );
};

const MobileLinks: React.FC<ITrail> = ({ children, ...props }) => {
  const items = React.Children.toArray(children);

  return <Trail {...props}>{items}</Trail>;
};

export default MobileLinks;

const LinksContainer = styled(a.div)`
  gap: 48px;
  padding: 24px 1rem 24px 1rem;
`;

const Line = styled(a.div)<Theme>`
  background-color: ${(props) => props.theme.secondary};
  height: 2px;
  border-radius: 2px;
  float: left;
`;
