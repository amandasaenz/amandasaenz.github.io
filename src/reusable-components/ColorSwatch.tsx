import React, { useContext, useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';
import Typography from '../reusable-components/Typography';

interface IColorSwatch extends Theme {
  color: string;
  label?: string;
}

interface ISwatch extends Theme {
  color: string;
  height?: number;
}

const ColorSwatch: React.FC<IColorSwatch> = ({ ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  //find the height of the container
  useEffect(() => {
    if (!ref.current) return;
    setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  return (
    <StyledContainer ref={ref}>
      <StyledSwatch height={height} {...props} theme={theme} />
      <StyledLabel color={props.color}>
        <Typography color={props.color} variant='h6'>
          {props.label}
        </Typography>
        <Typography color={props.color} variant='h5'>
          {props.color}
        </Typography>
      </StyledLabel>
    </StyledContainer>
  );
};

export default ColorSwatch;

const StyledContainer = styled.div`
  display: flex;
`;

const StyledSwatch = styled.div<ISwatch>`
  min-width: ${(p) => p.height}px;
  height: ${(p) => p.height}px;
  margin-right: 8px;
  background-color: ${(p) => p.color};
`;

const StyledLabel = styled.div<IColorSwatch>`
  color: ${(p) => p.color};
  white-space: nowrap;
`;
