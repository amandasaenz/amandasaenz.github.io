import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../theme/ThemeContext';
import Themes, { Theme } from '../theme/Themes';
import styled from '@emotion/styled';
import { a, SpringValue, useSpring } from 'react-spring';

interface IClock extends Theme {
  variant?: 'contained';
  color?: string | 'primary' | 'secondary' | 'caption';
  circle?: boolean;
}

const Clock: React.FC<IClock> = ({ ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());

  useEffect(() => {
    // console.log('hours', hours);
    // console.log('minutes', minutes);
    // console.log('seconds', seconds);

    let interval = setInterval(() => {
      if (seconds == 60) {
        setSeconds(1);
        setMinutes((minutes) => minutes + 1);
      } else setSeconds((seconds) => seconds + 1);

      if (minutes == 60) {
        setMinutes(1);
        setHours((hours) => hours + 1);
      }

      if (hours > 12) {
        setHours(1);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  const secondsAnim = useSpring<SpringValue>({
    transformOrigin: 'center',
    transform: `rotate(${(seconds * 360) / 60}deg)`,
  });

  const minutesAnim = useSpring<SpringValue>({
    transformOrigin: 'center',
    transform: `rotate(${(minutes * 360) / 60}deg)`,
  });

  const hoursAnim = useSpring<SpringValue>({
    transformOrigin: 'center',
    transform: `rotate(${(hours * 360) / 60}deg)`,
  });

  return (
    <StyledWrapper {...props} theme={theme}>
      <svg
        id='Layer_2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 102 102'
      >
        <g id='Layer_1-2'>
          <g>
            <g>
              <a.line
                style={secondsAnim}
                stroke={
                  props.variant == 'contained'
                    ? theme.background
                    : theme.default
                }
                strokeWidth='1'
                x1='51'
                y1='51'
                x2='51'
                y2='11'
              />
              <a.line
                style={minutesAnim}
                stroke={
                  props.variant == 'contained'
                    ? theme.background
                    : theme.default
                }
                strokeWidth='2'
                x1='51'
                y1='50.95'
                x2='51'
                y2='15'
              />
              <a.line style={hoursAnim} x1='51' y1='51.71' x2='51' y2='29' />
              <circle
                fill={
                  props.variant == 'contained'
                    ? theme.background
                    : theme.default
                }
                cx='51'
                cy='51'
                r='2'
              />
            </g>
            <g>
              <line
                stroke={
                  props.variant == 'contained'
                    ? theme.background
                    : theme.default
                }
                strokeWidth='2'
                x1='51'
                y1='7.13'
                x2='51'
                y2='15.13'
              />
              <line
                stroke={
                  props.variant == 'contained'
                    ? theme.background
                    : theme.default
                }
                strokeWidth='2'
                x1='51'
                y1='86.87'
                x2='51'
                y2='94.87'
              />
              <line
                stroke={
                  props.variant == 'contained'
                    ? theme.background
                    : theme.default
                }
                strokeWidth='2'
                x1='94.87'
                y1='51'
                x2='86.87'
                y2='51'
              />
              <line
                stroke={
                  props.variant == 'contained'
                    ? theme.background
                    : theme.default
                }
                strokeWidth='2'
                x1='15.13'
                y1='51'
                x2='7.13'
                y2='51'
              />
              <circle
                fill={
                  props.variant == 'contained'
                    ? theme.background
                    : theme.default
                }
                cx='72.2'
                cy='16.45'
                r='2'
              />
              <circle
                fill={
                  props.variant == 'contained'
                    ? theme.background
                    : theme.default
                }
                cx='86.03'
                cy='30.84'
                r='2'
              />
              <g>
                <circle
                  fill={
                    props.variant == 'contained'
                      ? theme.background
                      : theme.default
                  }
                  cx='85.55'
                  cy='72.2'
                  r='2'
                />
                <circle
                  fill={
                    props.variant == 'contained'
                      ? theme.background
                      : theme.default
                  }
                  cx='71.16'
                  cy='86.03'
                  r='2'
                />
              </g>
              <g>
                <circle
                  fill={
                    props.variant == 'contained'
                      ? theme.background
                      : theme.default
                  }
                  cx='29.8'
                  cy='85.55'
                  r='2'
                />
                <circle
                  fill={
                    props.variant == 'contained'
                      ? theme.background
                      : theme.default
                  }
                  cx='15.97'
                  cy='71.16'
                  r='2'
                />
              </g>
              <g>
                <circle
                  fill={
                    props.variant == 'contained'
                      ? theme.background
                      : theme.default
                  }
                  cx='16.45'
                  cy='29.8'
                  r='2'
                />
                <circle
                  fill={
                    props.variant == 'contained'
                      ? theme.background
                      : theme.default
                  }
                  cx='30.84'
                  cy='15.97'
                  r='2'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </StyledWrapper>
  );
};

export default Clock;

const StyledWrapper = styled.div<IClock>`
  width: 100px;
  height: 100px;
  border-radius: ${(p) => (p.circle ? '100px' : '5px')};
  background-color: ${(p) => p.variant == 'contained' && p.theme.default};
  border: ${(p) => `2px solid ${p.theme.default}`};
  display: flex;
  justify-content: center;
  align-items: center;
`;
