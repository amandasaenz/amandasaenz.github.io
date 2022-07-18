import React from 'react';
import styled from '@emotion/styled';
import Typography from './Typography';
import Icon, { IconProps } from './Icons';

export interface IProps extends IconProps {
  children: React.ReactNode;
  tcolor?: string;
  icolor?: string;
}

type LabelProps = Omit<IProps, 'color' | 'theme'>;

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <StyledLabel {...props}>
      {props.icon ? (
        <div style={{ margin: '4px 4px 0 0 ' }}>
          <Icon color={props.icolor} icon={props.icon} />
        </div>
      ) : (
        <></>
      )}

      <Typography color={props.tcolor}>{children}</Typography>
    </StyledLabel>
  );
};

export default Label;

const StyledLabel = styled.div<LabelProps>`
  display: flex;
`;
