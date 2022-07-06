import React, { HTMLAttributes } from 'react';
import Typography from '../reusable-components/Typography';
import styled from '@emotion/styled';

export interface MyCustomProps {
  circle?: boolean;
  color?: string;
}
export type CombinedProps = MyCustomProps & HTMLAttributes<HTMLDivElement>;

const List: React.FC<CombinedProps> = ({ circle, children, ...props }) => {
  return (
    <StyledList {...props}>
      {circle ? <Circle {...props} /> : <Line />}
      <Typography>{children}</Typography>
    </StyledList>
  );
};

export default List;

const StyledList = styled.div`
  display: flex;
`;

const Line = styled.div`
  height: 2px;
  min-width: 1rem;
  margin-top: 12px;
  margin-right: 8px;
  background-color: #ff6561;
`;

const Circle = styled.div<CombinedProps>`
  min-width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 8px;
  background-color: ${(props) => (props.color ? props.color : '#ff6561')};
`;
