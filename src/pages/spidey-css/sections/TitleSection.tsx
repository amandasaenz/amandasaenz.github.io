import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import ThemeContext from '../../../theme/ThemeContext';
import Themes, { Theme } from '../../../theme/Themes';
import Icon from '../../../reusable-components/Icon';
import { a, config, SpringValue, useSpring, useTransition } from 'react-spring';

interface ITitle extends Theme {
  id: string;
}

const TitleSection: React.FC<ITitle> = ({ id, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  const [show, setShow] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.scrollY == 0) {
      setShow(true);
    } else setShow(false);
  }, [window.scrollY]);

  const showArrow = useSpring<SpringValue>({
    display: show == false && 'none',
  });
  const [flip, set] = useState(false);
  const down = useSpring<SpringValue>({
    to: { translateY: 0 },
    from: { translateY: -16 },
    reset: true,
    reverse: flip,
    config: config.default,
    onRest: () => set(!flip),
  });

  return (
    <>
      <StyledTitle {...props} theme={theme} id={id} />
      <Footer>
        <StyledIcon style={{ ...down, ...showArrow }} ref={ref}>
          <Icon down size='medium' />
        </StyledIcon>
      </Footer>
    </>
  );
};

export default TitleSection;

const StyledTitle = styled.div<ITitle>`
  display: flex;
  background-position: center;
  background-image: url(${(p) => p.theme.spidey});
  background-repeat: no-repeat;
  margin-top: 64px;
  height: calc(100vh - 128px);
  background-size: 50% 50%;

  @media screen and (max-width: 1100px) {
    height: 0;
    padding-bottom: calc(70% - 64px);
    background-size: 60%;
  }
`;

const StyledIcon = styled(a.div)`
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Footer = styled(a.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
`;
