import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as Heart } from './icons/heart.svg';
import { ReactComponent as Email } from './icons/email.svg';
import { ReactComponent as Location } from './icons/location.svg';
import { ReactComponent as Phone } from './icons/phone.svg';
import { ReactComponent as Burger } from './icons/burger.svg';
import { ReactComponent as Account } from './icons/account.svg';
import { ReactComponent as AddUser } from './icons/adduser.svg';
import { ReactComponent as Back } from './icons/back.svg';
import { ReactComponent as Bookmark } from './icons/bookmark.svg';
import { ReactComponent as Bubble } from './icons/bubble.svg';
import { ReactComponent as Charge } from './icons/charge.svg';
import { ReactComponent as Charging } from './icons/charging.svg';
import { ReactComponent as Edit } from './icons/edit.svg';
import { ReactComponent as Error } from './icons/error.svg';
import { ReactComponent as Exit } from './icons/exit.svg';
import { ReactComponent as Forward } from './icons/forward.svg';
import { ReactComponent as Left } from './icons/left.svg';
import { ReactComponent as Message } from './icons/message.svg';
import { ReactComponent as Notification } from './icons/notification.svg';
import { ReactComponent as Read } from './icons/read.svg';
import { ReactComponent as Refresh } from './icons/refresh.svg';
import { ReactComponent as Replay } from './icons/replay.svg';
import { ReactComponent as Right } from './icons/right.svg';
import { ReactComponent as Search } from './icons/search.svg';
import { ReactComponent as Shuffle } from './icons/shuffle.svg';
import { ReactComponent as Trash } from './icons/trash.svg';
import { ReactComponent as Typing } from './icons/typing.svg';
import { ReactComponent as Zoom } from './icons/zoom.svg';
import { ReactComponent as Up } from './icons/up.svg';
import { ReactComponent as Down } from './icons/down.svg';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';

export interface IconProps extends Theme {
  icon?:
    | 'heart'
    | 'email'
    | 'location'
    | 'phone'
    | 'burger'
    | 'account'
    | 'adduser'
    | 'back'
    | 'bookmark'
    | 'bubble'
    | 'charge'
    | 'charging'
    | 'edit'
    | 'error'
    | 'exit'
    | 'forward'
    | 'left'
    | 'message'
    | 'notification'
    | 'read'
    | 'refresh'
    | 'replay'
    | 'right'
    | 'search'
    | 'shuffle'
    | 'trash'
    | 'typing'
    | 'zoom'
    | 'up'
    | 'down'
    | React.ReactNode;
  color?: string | 'primary' | 'secondary' | 'caption';
}

const Icon: React.FC<IconProps> = ({ ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  const i = calculateIcon({ icon: props.icon });

  return (
    <StyledIcon theme={theme} {...props}>
      {i}
    </StyledIcon>
  );
};

export default Icon;

const StyledIcon = styled.svg<IconProps>`
  height: 1rem;
  width: 1rem;
  min-width: 1rem;
  fill: ${(p) => (p.color == 'primary' ? p.theme.primary : p.color)};
  fill: ${(p) => (p.color == 'secondary' ? p.theme.secondary : p.color)};
  fill: ${(p) => (p.color == 'caption' ? p.theme.caption : p.color)};
  fill: ${(p) => (p.color == null ? p.theme.default : p.color)};
`;

const calculateIcon = (p: IconProps): JSX.Element => {
  if (React.isValidElement(p.icon)) {
    return p.icon;
  }

  if (p.icon == null) {
    return <Heart />;
  }

  switch (p.icon) {
    case 'heart':
      return <Heart />;
    case 'email':
      return <Email />;
    case 'location':
      return <Location />;
    case 'phone':
      return <Phone />;
    case 'burger':
      return <Burger />;
    case 'account':
      return <Account />;
    case 'adduser':
      return <AddUser />;
    case 'back':
      return <Back />;
    case 'bookmark':
      return <Bookmark />;
    case 'bubble':
      return <Bubble />;
    case 'charge':
      return <Charge />;
    case 'charging':
      return <Charging />;
    case 'edit':
      return <Edit />;
    case 'error':
      return <Error />;
    case 'exit':
      return <Exit />;
    case 'forward':
      return <Forward />;
    case 'left':
      return <Left />;
    case 'message':
      return <Message />;
    case 'notification':
      return <Notification />;
    case 'read':
      return <Read />;
    case 'refresh':
      return <Refresh />;
    case 'replay':
      return <Replay />;
    case 'right':
      return <Right />;
    case 'search':
      return <Search />;
    case 'shuffle':
      return <Shuffle />;
    case 'trash':
      return <Trash />;
    case 'typing':
      return <Typing />;
    case 'zoom':
      return <Zoom />;
    case 'up':
      return <Up />;
    case 'down':
      return <Down />;
    default:
      return <Heart />;
  }
};
