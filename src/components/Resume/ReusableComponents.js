import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Varela Round', sans-serif;
  font-size: 16px;
  padding-top: 0;
  @media (max-width: 617px) {
    display: block;
  }
`;

export const Heading = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #e74946;
`;

export const SubHeading = styled.div`
  font-family: 'Varela Round', sans-serif;
  padding-top: 8px;
  color: #e74946;
`;

export const AlignLeft = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

export const AlignRight = styled.div`
  flex: 1 1 0%;
  justify-content: flex-start;
  padding-top: 8px;
`;

export const Indent = styled.div`
  height: 100%;
  border-left: 1px solid #e74946;
  padding-top: 8px;
  padding-left: 16px;
  margin-left: 8px;
`;

export const Link = styled.a`
  color: #cbe763;
  text-decoration: none;
`;
