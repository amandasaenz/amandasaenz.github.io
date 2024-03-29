import React, {
  MutableRefObject,
  useContext,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import styled from '@emotion/styled';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';
import { a, config, SpringValue, useSpring } from 'react-spring';
import Icon from '../reusable-components/Icons';

interface ITitle extends Theme {
  ref?: MutableRefObject<HTMLDivElement>;
}

const Title = forwardRef<HTMLDivElement>((props, ref) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  const showArrow = useSpring<SpringValue>({
    display: window.scrollY != 0 && 'none',
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
    <div {...props} ref={ref}>
      <StyledTitle {...props} theme={theme} />
      <Footer>
        <StyledIcon style={{ ...down, ...showArrow }}>
          <Icon icon='down' size='medium' />
        </StyledIcon>
      </Footer>
    </div>
  );
});

export default Title;

const StyledTitle = styled.div<ITitle>`
  display: flex;
  background-position: center;
  background-image: url(${(p) => p.theme.title});
  background-repeat: no-repeat;
  margin-top: 64px;
  height: calc(100vh - 128px);
  background-size: 50% 50%;

  @media screen and (max-width: 1100px) {
    height: 0;
    padding-bottom: calc(70% - 64px);
    background-size: 60% 60%;
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
