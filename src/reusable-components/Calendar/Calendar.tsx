import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import Themes, { Theme } from '../../theme/Themes';
import styled from '@emotion/styled';
import Months from './Months';
import Typography from '../../reusable-components/Typography';

const Calendar: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const theme = Themes[dark === false ? 'light' : 'dark'];
  const date = new Date();
  const month = date.getMonth() + 1;

  useEffect(() => {
    console.log(count);
  });

  return (
    <StyledMonth>
      {Months.map((index) => (
        <Typography key={index.key} variant='h6'>
          {index.month}
        </Typography>
      ))}
    </StyledMonth>
  );
};

export default Calendar;

const StyledMonth = styled.div<Theme>`
  width: 500px;
  height: 300px;
  border-radius: 5px;
  border: ${(p) => `2px solid ${p.theme.default}`};
  // display: flex;
  background-color: green;
  justify-content: center;
  align-items: center;
`;
