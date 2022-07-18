import React, { HTMLAttributes, ReactNode, useContext } from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import Typography from './Typography';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme, ThemeMode } from '../theme/Themes';
import Icon, { IconProps } from './Icons';

interface IButton extends Theme, IconProps {
  children?: ReactNode;
  variant?: 'outlined' | 'contained';
  // color?: string | 'primary' | 'secondary' | 'caption';
  disabled?: boolean;
}

export type IProps = IButton & HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IProps> = ({ children, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  return (
    <StyledButton {...props} theme={theme}>
      {props.icon !== undefined && (
        <Icon
          icon={props.icon}
          color={
            props.variant == 'contained'
              ? theme.background
              : props.disabled
              ? theme.disabled
              : props.color
          }
        />
      )}
      {children !== undefined && (
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
      )}
    </StyledButton>
  );
};

export default Button;

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
    cursor: ${p?.disabled ? 'arrow' : 'pointer'};
    border: ${p?.variant === 'outlined' ? `2px solid ${color}` : 'none'};
    background-color: ${p?.variant === 'contained'
      ? `${color}`
      : 'transparent'};
  `;
};

const StyledButton = styled.button<IProps>`
  ${(props) => calculateStyle(props)};
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
