import React, { useContext } from 'react';
import styled from '@emotion/styled';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';
import { css } from '@emotion/react';
import { Link as RouterLink, To, LinkProps } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

interface LinkWithRouter extends Theme, LinkProps {
  children: React.ReactNode;
  to: To;
  href?: never;
  variant?: 'nav';
  color?: string;
}

interface LinkWithHref extends Theme {
  children: React.ReactNode;
  href: string;
  to?: never;
  variant?: 'nav';
  color?: string;
}

export const LinkWRouter: React.FC<LinkWithRouter> = ({
  children,
  ...props
}) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  return (
    <StyledLinkRouter {...props} theme={theme}>
      {children}
    </StyledLinkRouter>
  );
};

export const LinkWHash: React.FC<LinkWithRouter> = ({ children, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  return (
    <StyledLinkHash {...props} theme={theme}>
      {children}
    </StyledLinkHash>
  );
};

export const LinkWHref: React.FC<LinkWithHref> = ({ children, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  return (
    <div>
      <StyledLink {...props} theme={theme}>
        {children}
      </StyledLink>
    </div>
  );
};

export const ImageLink: React.FC<LinkWithHref> = ({ children, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  return (
    <StyledLink {...props} theme={theme}>
      {children}
    </StyledLink>
  );
};

const DefaultStyle = css({
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: 500,
  textDecoration: 'none',
  letterSpacing: '0.05em',
  fontSize: '1rem',
  cursor: 'pointer',
  display: 'inline-block',
});

const NavlinkStyle = css({
  fontFamily: `'Montserrat', sans-serif`,
  padding: '8px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

const StyledLink = styled.a<LinkWithHref>`
  ${DefaultStyle};
  ${(props) => props.variant == 'nav' && NavlinkStyle};
  color: ${(p) => (p.color ? p.color : p.theme.secondary)};
`;

const StyledLinkRouter = styled(RouterLink)<LinkWithRouter>`
  ${DefaultStyle};
  ${(props) => props.variant == 'nav' && NavlinkStyle};
  color: ${(p) => (p.color ? p.color : p.theme.secondary)};
`;

const StyledLinkHash = styled(HashLink)<LinkWithRouter>`
  ${DefaultStyle};
  ${(props) => props.variant == 'nav' && NavlinkStyle};
  color: ${(p) => (p.color ? p.color : p.theme.secondary)};
`;
