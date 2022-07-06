import React, { useContext, Fragment } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ThemeContext from '../theme/ThemeContext';
import Themes from '../theme/Themes';
import Line from './Line';

interface ILabels {
  children: React.ReactNode;
  center?: boolean;
}

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
          {index < length - 1 && <Line vertical padding />}
        </Fragment>
      ))}
    </LabelsStyle>
  );
};

export default Lables;

const DefaultStyle = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const CenterStyle = css`
  justify-content: center;
`;

const LabelsStyle = styled.div<ILabels>`
  //*************** default ***************
  ${({ center }) => center && CenterStyle};
  ${DefaultStyle};
`;
