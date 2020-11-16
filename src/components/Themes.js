import sun_dark from './images/sun_dark.svg';
import moon_dark from './images/moon_dark.svg';
import sun_light from './images/sun_light.svg';
import moon_light from './images/moon_light.svg';
import linkedin_dark from './images/linkedin_dark.svg';
import github_dark from './images/github_dark.svg';
import linkedin_light from './images/linkedin_light.svg';
import github_light from './images/github_light.svg';
import burger_light from './images/burger_light.svg';
import burger_dark from './images/burger_dark.svg';
import email_dark from './images/email_dark.svg';
import location_dark from './images/location_dark.svg';
import phone_dark from './images/phone_dark.svg';
import email_light from './images/email_light.svg';
import location_light from './images/location_light.svg';
import phone_light from './images/phone_light.svg';
import avatar_light from './images/avatar_light.svg';
import avatar_dark from './images/avatar_dark.svg';
import zoom_light from './images/zoom_light.svg';
import zoom_dark from './images/zoom_dark.svg';

const themes = {
  dark: {
    bodyText: '#7FD8D9',
    linkColor: '#CDE57A',
    headingColor: '#FF6561',
    glassColor: 'rgba(22, 20, 39, 0.7)',
    // sun: sun_dark,
    // moon: moon_dark,
    linkedin: linkedin_dark,
    github: github_dark,
    burger: burger_dark,
    email: email_dark,
    location: location_dark,
    phone: phone_dark,
    avatar: avatar_light,
    zoom: zoom_dark,
    themeMode: moon_dark,
  },
  light: {
    bodyText: '#80A09D',
    linkColor: '#FF6663',
    headingColor: '#20A39E',
    glassColor: 'rgba(255, 255, 255, 0.7)',
    // sun: sun_light,
    // moon: moon_light,
    linkedin: linkedin_light,
    github: github_light,
    burger: burger_light,
    email: email_light,
    location: location_light,
    phone: phone_light,
    avatar: avatar_light,
    zoom: zoom_light,
    themeMode: sun_light,
  },
};

export default themes;
