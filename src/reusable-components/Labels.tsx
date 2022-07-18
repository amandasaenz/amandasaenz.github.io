import React, { useContext, Fragment } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ThemeContext from '../theme/ThemeContext';
import Themes from '../theme/Themes';
import Line from './Line';

export interface IVertical {
  children: React.ReactNode;
  vertical?: boolean;
  horizontal?: never;
}

export interface IHorizontal {
  children: React.ReactNode;
  vertical?: never;
  horizontal?: boolean;
}

export type ILabels = IVertical | IHorizontal;

const Lables: React.FC<ILabels> = ({ ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  const children = React.Children.toArray(props.children);
  const length = children.length;

  return (
    <LabelsStyle {...props} theme={theme}>
      {children.map((children, index) => (
        <Fragment key={index}>
          {children}
          {index < length - 1 && !props.vertical && <Line vertical padding />}
        </Fragment>
      ))}
    </LabelsStyle>
  );
};

export default Lables;

const HorizontalStyle = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const VerticalStyle = css`
  display: block;
`;

const CenterStyle = css`
  justify-content: center;
`;

const LabelsStyle = styled.div<ILabels>`
  ${HorizontalStyle};
  //*************** default ***************
  ${(p) => p.vertical && VerticalStyle};
`;
// ${({ vertical }) => VerticalStyle};
// ${({ center }) => center && CenterStyle};
