import React, { useState } from 'react';
import styled from '@emotion/styled';
import Icon, { IIcon } from '../reusable-components/Icon';
import Typography from '../reusable-components/Typography';

interface ILabelProps extends IIcon {
  children: React.ReactNode;
}

export const Label: React.FC<ILabelProps> = ({ children, ...props }) => {
  return (
    <StyledLabel {...props}>
      <Typography>{children}</Typography>
    </StyledLabel>
  );
};

// size isnt working
export const IconLabel: React.FC<ILabelProps> = ({ children, ...props }) => {
  return (
    <StyledLabel {...props}>
      <StyledIcon {...props} />
      <Typography>{children}</Typography>
    </StyledLabel>
  );
};

export default IconLabel;

const StyledLabel = styled.div<ILabelProps>`
  display: flex;
`;

const StyledIcon = styled(Icon)`
  margin-right: 8px;
  margin-top: 4px;
  flex-shrink: 0;
`;
