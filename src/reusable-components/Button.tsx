import React, { HTMLAttributes, ReactNode, useContext, useMemo } from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import Typography from '../reusable-components/Typography';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme, ThemeMode } from '../theme/Themes';
import Icon, { IIcon, useColor } from './Icon';

interface IButton extends Theme, IIcon {
  children: ReactNode;
  variant?: 'outlined' | 'contained';
  color?: string | 'primary' | 'secondary' | 'caption';
  disabled?: boolean;
}

interface IButtonIcon extends Theme {
  variant?: 'outlined' | 'contained';
  color?: string | 'primary' | 'secondary' | 'caption';
  disabled?: boolean;
}

export type IProps = IButton & HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IProps> = ({ children, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  return (
    <StyledButton {...props} theme={theme}>
      <Typography
        variant='button'
        color={
          props.variant == 'contained'
            ? theme.background
            : props.disabled
            ? theme.disabled
            : props.color
        }
      >
        {children}
      </Typography>
    </StyledButton>
  );
};

export const ButtonIcon: React.FC<IButtonIcon> = ({ ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  return (
    <StyledButton {...props} theme={theme}>
      <Icon
        email
        color={
          props.variant == 'contained'
            ? theme.background
            : props.disabled
            ? theme.disabled
            : props.color
        }
      />
    </StyledButton>
  );
};

const calculateColor = (
  color?: string,
  theme?: ThemeMode,
  disabled?: boolean
) => {
  if (!color && disabled) {
    return theme?.disabled;
  }

  if (color == null) {
    return theme?.default;
  }

  switch (color) {
    case 'primary':
      return theme?.primary;
    case 'secondary':
      return theme?.secondary;
    case 'caption':
      return theme?.caption;
    case color:
      return color;
    default:
      return theme?.default;
  }
};

const calculateStyle = (p?: IProps): SerializedStyles => {
  const color = calculateColor(p?.color, p?.theme, p?.disabled);
  return css`
    padding: ${p?.variant === 'outlined' ? '14px' : '16px'};
    border-radius: 4px;
    cursor: pointer;
    border: ${p?.variant === 'outlined' ? `2px solid ${color}` : 'none'};
    background-color: ${p?.variant === 'contained'
      ? `${color}`
      : 'transparent'};
  `;
};

const StyledButton = styled.button<IProps>`
  ${(props) => calculateStyle(props)};
`;
