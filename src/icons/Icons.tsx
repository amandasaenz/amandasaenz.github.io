import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ReactComponent as Heart } from '../icons/heart.svg';
import { ReactComponent as Email } from '../icons/email.svg';
import { ReactComponent as Location } from '../icons/location.svg';
import { ReactComponent as Phone } from '../icons/phone.svg';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';

interface IconProps extends Theme {
  size?: string;
  color?: string | 'default' | 'primary' | 'secondary';
}

export const HeartIcon: React.FC<IconProps> = ({ color, ...props }) => {
  return (
    <Icon {...props}>
      <Heart fill={Color(color)} />
    </Icon>
  );
};

export const EmailIcon: React.FC<IconProps> = ({ color, ...props }) => {
  return (
    <Icon {...props}>
      <Email fill={Color(color)} />
    </Icon>
  );
};

export const LocationIcon: React.FC<IconProps> = ({ color, ...props }) => {
  return (
    <Icon {...props}>
      <Location fill={Color(color)} />
    </Icon>
  );
};

export const PhoneIcon: React.FC<IconProps> = ({ color, ...props }) => {
  return (
    <Icon {...props}>
      <Phone fill={Color(color)} />
    </Icon>
  );
};

const Icon = styled.div<IconProps>`
  ${(p) => calculateSize(p?.size)};
`;

const small = css`
  height: 1rem;
  width: 1rem;
`;
const medium = css`
  height: 2rem;
  width: 2rem;
`;
const large = css`
  height: 3rem;
  width: 3rem;
`;

const calculateSize = (size?: string) => {
  if (size == null || undefined) {
    return small;
  }

  switch (size) {
    case 'small':
      return small;
    case 'medium':
      return medium;
    case 'large':
      return large;
    default:
      return large;
  }
};

const Color = (color?: string) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  if (color == null || undefined) {
    return theme.secondary;
  }

  switch (color) {
    case 'default':
      return theme.default;
    case 'primary':
      return theme.primary;
    case 'secondary':
      return theme.secondary;
    case color:
      return color;
    default:
      return theme.secondary;
  }
};
