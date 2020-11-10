import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Varela Round', sans-serif;
  font-size: 20px;
  padding-top: 0;

  @media (max-width: 1010px) {
    display: block;
  }
`;

export const Heading = styled.div`
  font-family: 'Mitr', sans-serif;
  font-size: 28px;
  color: #e74946;
`;

export const SubHeading = styled.div`
  font-family: 'Varela Round', sans-serif;
  padding-top: 8px;
  color: #e74946;
  font-size: 20px;
`;

export const AlignLeft = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

export const AlignRight = styled.div`
  flex: 1 1 30%;
  justify-content: flex-start;
  padding-top: 8px;
`;

export const VertLine = styled.div`
  background-color: #e74946;
  width: 2px;
  height: 100%;
  border-radius: 2px;
  margin-left: 20px;
`;

export const Indent = styled.div`
  white-space: nowrap;
  height: 100%;
  width: 100%;
  padding-left: 16px;
`;

export const Link = styled.a`
  color: #cbe763;
  text-decoration: none;

  &:hover {
    color: #a172c6;
  }
`;
