import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';

interface IHeading extends Theme {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  lowercase: boolean;
  color?: string | 'primary' | 'secondary';
}

interface ITypography extends Theme {
  children: React.ReactNode;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'link'
    | 'navlink'
    | 'caption'
    | 'overline'
    | 'button';
  color?: string | 'primary' | 'secondary' | 'caption';
  lowercase?: never;
}

export type IType = ITypography | IHeading;

const Typography: React.FC<IType> = ({ children, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <StyledTypography theme={theme} {...props}>
      {children}
    </StyledTypography>
  );
};

export default Typography;

const calculateStyle = (p?: IType) => {
  if (p?.variant == null) {
    return DefaultStyle;
  }

  switch (p?.variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return HeadingStyle;
    case 'caption':
      return CaptionStyle;
    case 'link':
      return LinkStyle;
    case 'navlink':
      return NavlinkStyle;
    case 'button':
      return ButtonStyle;
    case 'overline':
      return OverlineStyle;
    case 'body':
      return DefaultStyle;
    default:
      return DefaultStyle;
  }
};

const calculateHeadingSize = (p?: IType) => {
  if (p?.variant == null) {
    return '6rem';
  }

  switch (p?.variant) {
    case 'h1':
      return '6rem';
    case 'h2':
      return '4.5rem';
    case 'h3':
      return '3rem';
    case 'h4':
      return '2rem';
    case 'h5':
      return '1.5rem';
    case 'h6':
      return '1rem';
    default:
      return '6rem';
  }
};

const calculateFontWeight = (p?: IType) => {
  if (p?.variant == null) {
    return 400;
  }

  switch (p?.variant) {
    case 'h1':
    case 'h2':
    case 'h3':
      return 400;
    case 'h4':
    case 'h5':
    case 'h6':
      return 500;
    default:
      return 400;
  }
};

const DefaultStyle = (prop?: IType): SerializedStyles => {
  return css`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: ${prop?.color ? prop?.color : prop?.theme?.primary};
    color: ${prop?.color == 'default' && prop.theme?.default};
    color: ${prop?.color == 'secondary' && prop.theme?.secondary};
    color: ${prop?.color == 'caption' && prop.theme?.caption};
    color: ${prop?.color == 'disabled' && prop.theme?.disabled};
  `;
};

export const HeadingStyle = (prop?: IType) => {
  return css`
    font-family: 'Montserrat', sans-serif;
    font-weight: ${calculateFontWeight(prop)};
    font-size: ${calculateHeadingSize(prop)};
    text-transform: ${prop?.lowercase ? 'none' : 'uppercase'};
    letter-spacing: 0.05em;
    color: ${prop?.color ? prop?.color : prop?.theme?.default};
    color: ${prop?.color == 'primary' && prop.theme?.primary};
    color: ${prop?.color == 'secondary' && prop.theme?.secondary};
    color: ${prop?.color == 'caption' && prop.theme?.caption};
    color: ${prop?.color == 'disabled' && prop.theme?.disabled};
  `;
};

const CaptionStyle = (prop?: IType): SerializedStyles => {
  return css`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 150%;
    letter-spacing: 0.1em;
    font-style: italic;
    color: ${prop?.color ? prop?.color : prop?.theme?.caption};
    color: ${prop?.color == 'primary' && prop.theme?.primary};
    color: ${prop?.color == 'default' && prop.theme?.default};
    color: ${prop?.color == 'secondary' && prop?.theme?.secondary};
    color: ${prop?.color == 'disabled' && prop.theme?.disabled};
  `;
};

const LinkStyle = (prop?: IType): SerializedStyles => {
  return css`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 0.05em;
    text-decoration: none;
    cursor: pointer;
    color: ${prop?.color ? prop?.color : prop?.theme?.secondary};
    color: ${prop?.color == 'primary' && prop.theme?.primary};
    color: ${prop?.color == 'default' && prop.theme?.default};
    color: ${prop?.color == 'caption' && prop.theme?.caption};
    color: ${prop?.color == 'disabled' && prop.theme?.disabled};
  `;
};

const NavlinkStyle = (prop?: IType): SerializedStyles => {
  return css`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 150%;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    cursor: pointer;
    color: ${prop?.color ? prop?.color : prop?.theme?.secondary};
    color: ${prop?.color == 'primary' && prop.theme?.primary};
    color: ${prop?.color == 'default' && prop.theme?.default};
    color: ${prop?.color == 'caption' && prop.theme?.caption};
    color: ${prop?.color == 'disabled' && prop.theme?.disabled};
  `;
};

const ButtonStyle = (prop?: IType): SerializedStyles => {
  return css`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    color: ${prop?.color ? prop?.color : prop?.theme?.default};
    color: ${prop?.color == 'primary' && prop.theme?.primary};
    color: ${prop?.color == 'secondary' && prop.theme?.secondary};
    color: ${prop?.color == 'caption' && prop.theme?.caption};
    color: ${prop?.color == 'disabled' && prop.theme?.disabled};
  `;
};

const OverlineStyle = (prop?: IType): SerializedStyles => {
  return css`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    font-variant: small-caps;
    letter-spacing: 0.32em;
    color: ${prop?.color ? prop?.color : prop?.theme?.primary};
    color: ${prop?.color == 'default' && prop.theme?.default};
    color: ${prop?.color == 'secondary' && prop.theme?.secondary};
    color: ${prop?.color == 'caption' && prop.theme?.caption};
    color: ${prop?.color == 'disabled' && prop.theme?.disabled};
  `;
};

const StyledTypography = styled.div<IType>`
  ${(p) => calculateStyle(p)};
`;
