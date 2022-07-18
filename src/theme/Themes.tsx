import React, { useContext, useMemo } from 'react';
import ThemeContext from '../theme/ThemeContext';
import title_light from '../pages/title_light1.svg';
import title_dark from '../pages/title_dark1.svg';
import spidey_light from '../pages/spidey-css/spidey_light1.svg';
import spidey_dark from '../pages/spidey-css/spidey_dark1.svg';

export interface Theme {
  theme?: ThemeMode;
}

export interface ThemeMode {
  default: string;
  primary: string;
  secondary: string;
  caption: string;
  glassColor: string;
  disabled: string;
  default_tint: string;
  primary_tint: string;
  secondary_tint: string;
  caption_tint: string;
  disabled_tint: string;
  background: string;
  background_tint: string;
  title: string;
  spidey: string;
}

interface Props {
  dark: ThemeMode;
  light: ThemeMode;
}

const Themes: Props = {
  dark: {
    default: '#FF6561',
    primary: '#61FBFF',
    secondary: '#CDE57A',
    caption: '#8383CC',
    glassColor: 'rgba(22, 20, 39, 0.9)',
    disabled: '#3a3863',
    default_tint: '#ff9f9f',
    primary_tint: '#e2fffd',
    secondary_tint: '#fafee0',
    caption_tint: '#dfdff9',
    disabled_tint: '#8785aa',
    background: '#161427',
    background_tint: '#231E3D',
    title: title_dark,
    spidey: spidey_dark,
  },
  light: {
    default: '#FF6561',
    primary: '#3E9A9E',
    secondary: '#FF6561',
    caption: '#e68985',
    glassColor: 'rgba(252, 252, 252, 0.9)',
    // glassColor: 'pink',
    disabled: '#FFD7D7',
    default_tint: '#FF8A8A',
    primary_tint: '#3E9A9E',
    secondary_tint: '#FF8A8A',
    caption_tint: '#e68985',
    disabled_tint: '#FFD7D7',
    background: '#FCFCFC',
    background_tint: '',
    title: title_light,
    spidey: spidey_light,
  },
};

export default Themes;
