import React, { useContext, useMemo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ReactComponent as Heart } from '../icons/heart.svg';
import { ReactComponent as Email } from '../icons/email.svg';
import { ReactComponent as Location } from '../icons/location.svg';
import { ReactComponent as Phone } from '../icons/phone.svg';
import { ReactComponent as Burger } from '../icons/burger.svg';
import { ReactComponent as Account } from '../icons/account.svg';
import { ReactComponent as AddUser } from '../icons/adduser.svg';
import { ReactComponent as Back } from '../icons/back.svg';
import { ReactComponent as Bookmark } from '../icons/bookmark.svg';
import { ReactComponent as Bubble } from '../icons/bubble.svg';
import { ReactComponent as Charge } from '../icons/charge.svg';
import { ReactComponent as Charging } from '../icons/charging.svg';
import { ReactComponent as Edit } from '../icons/edit.svg';
import { ReactComponent as Error } from '../icons/error.svg';
import { ReactComponent as Exit } from '../icons/exit.svg';
import { ReactComponent as Forward } from '../icons/forward.svg';
import { ReactComponent as Left } from '../icons/left.svg';
import { ReactComponent as Message } from '../icons/message.svg';
import { ReactComponent as Notification } from '../icons/notification.svg';
import { ReactComponent as Read } from '../icons/read.svg';
import { ReactComponent as Refresh } from '../icons/refresh.svg';
import { ReactComponent as Replay } from '../icons/replay.svg';
import { ReactComponent as Right } from '../icons/right.svg';
import { ReactComponent as Search } from '../icons/search.svg';
import { ReactComponent as Shuffle } from '../icons/shuffle.svg';
import { ReactComponent as Trash } from '../icons/trash.svg';
import { ReactComponent as Typing } from '../icons/typing.svg';
import { ReactComponent as Zoom } from '../icons/zoom.svg';
import { ReactComponent as Up } from '../icons/up.svg';
import { ReactComponent as Down } from '../icons/down.svg';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';

//make a prop for custom svg

export interface IIcon {
  color?: string | 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  heart?: boolean;
  email?: boolean;
  phone?: boolean;
  location?: boolean;
  burger?: boolean;
  account?: boolean;
  adduser?: boolean;
  back?: boolean;
  bookmark?: boolean;
  bubble?: boolean;
  charge?: boolean;
  charging?: boolean;
  edit?: boolean;
  error?: boolean;
  exit?: boolean;
  forward?: boolean;
  left?: boolean;
  message?: boolean;
  notification?: boolean;
  read?: boolean;
  refresh?: boolean;
  replay?: boolean;
  right?: boolean;
  search?: boolean;
  shuffle?: boolean;
  trash?: boolean;
  typing?: boolean;
  zoom?: boolean;
  up?: boolean;
  down?: boolean;
}

const Icon: React.FC<IIcon> = ({ color, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  const c = useColor(color);
  // const c = theme.secondary;
  const icons = {
    up: <Up fill={c} />,
    down: <Down fill={c} />,
    bubble: <Bubble fill={c} />,
    charge: <Charge fill={c} />,
    charging: <Charging fill={c} />,
    edit: <Edit fill={c} />,
    error: <Error fill={c} />,
    exit: <Exit fill={c} />,
    forward: <Forward fill={c} />,
    left: <Left fill={c} />,
    message: <Message fill={c} />,
    notification: <Notification fill={c} />,
    read: <Read fill={c} />,
    refresh: <Refresh fill={c} />,
    replay: <Replay fill={c} />,
    right: <Right fill={c} />,
    search: <Search fill={c} />,
    shuffle: <Shuffle fill={c} />,
    trash: <Trash fill={c} />,
    typing: <Typing fill={c} />,
    zoom: <Zoom fill={c} />,
    adduser: <AddUser fill={c} />,
    back: <Back fill={c} />,
    bookmark: <Bookmark fill={c} />,
    account: <Account fill={c} />,
    burger: <Burger fill={c} />,
    email: <Email fill={c} />,
    phone: <Phone fill={c} />,
    location: <Location fill={c} />,
    heart: <Heart fill={c} />,
  }[Object.keys(props)[0]];

  return (
    <StyledIcon {...props}>{icons}</StyledIcon> || (
      <StyledIcon {...props}>
        <Heart fill={c} />
      </StyledIcon>
    )
  );
};

export default Icon;

const StyledIcon = styled.div<IIcon>`
  ${(p) => calculateSize(p?.size)};
`;

// CALCULATE SIZE: small | medium | large
const calculateSize = (size?: string) => {
  if (size == null) {
    return css`
      height: 1rem;
      width: 1rem;
    `;
  }

  return {
    small: css`
      height: 1rem;
      width: 1rem;
      min-width: 1rem;
    `,
    medium: css`
      height: 2rem;
      width: 2rem;
      min-width: 2rem;
    `,
    large: css`
      height: 3rem;
      width: 3rem;
      min-width: 3rem;
    `,
  }[size];
};

/*

    useColor(color);
    returns -> color | default | primary | secondary

*/

type Color = { [key: string]: string };

export const useColor = (color?: string) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  const colorTheme = useMemo<Color>(() => {
    // complex cpu intensive operators = useMemo
    return {
      primary: theme.primary,
      secondary: theme.secondary,
      caption: theme.caption,
      default: theme.default,
    };
  }, []);

  if (color == null) {
    // if (dark) {
    //   return theme.secondary;
    // } else
    return theme.default;
  }

  return colorTheme[color] ?? color;
};
