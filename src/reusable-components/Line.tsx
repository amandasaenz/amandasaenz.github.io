import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';

/* LINE COMPONENT

How to consume: 
<Line />

Parameters:
vertical, padding, break

ex: <Line vertical padding break={500}/>
*/
interface ILine extends Theme {
  //   brake: number;
  padding: boolean;
  vertical: boolean;
}
const Line: React.FC<ILine> = ({ ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <LineStyle
      vertical={props.vertical}
      padding={props.padding}
      //   brake={props.brake}
      theme={theme}
    />
  );
};

export default Line;

const DefaultStyle = (props: ILine) => css`
  background-color: ${props.theme?.default};
  height: 2px;
  width: 100%;
  align-items: center;
`;

const VerticalStyle = css`
  width: 2px;
  min-width: 2px;
  height: 16px;
`;

const PaddingStyle = css`
  margin: 0px 8px;
`;

const LineStyle = styled.div`
  //*************** default ***************
  ${DefaultStyle};
  //************** vertical ***************
  ${({ vertical }) => vertical && VerticalStyle};
  //*************** padding ***************
  ${({ padding }) => padding && PaddingStyle};
`;
