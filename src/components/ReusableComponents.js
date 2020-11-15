import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding-top: 0;

  @media (max-width: 850px) {
    display: block;
  }
`;

export const Heading = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
  color: #ff6561;
  // padding-top: 8px;
`;

export const SubHeading = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #ff6561;
`;

export const Body = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #ffa6b4;
`;

export const AlignLeft = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding-top: 8px;
  // background-color: blue;
`;

export const AlignRight = styled.div`
  flex: 1 1 30%;
  justify-content: flex-start;
  padding-top: 8px;
  // background-color: red;
`;

export const VertLine = styled.div`
  background-color: #ff6561;
  width: 2px;
  height: 100%;
  border-radius: 2px;
  margin-left: 24px;
`;

export const Line = styled.div`
  height: 2px;
  background-color: #ff6561;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
`;

export const Indent = styled.div`
  white-space: nowrap;
  height: 100%;
  width: 100%;
  padding-left: 16px;
`;

export const Link = styled.a`
  color: #cde57a;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #ff6561;
  }
`;

export const Name = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: #ff6561;
  font-size: 112px;
  font-family: 'Work Sans', sans-serif;

  @media (max-width: 850px) {
    text-align: left;
    font-size: 184px;
  }

  @media (max-width: 763px) {
    font-size: 168px;
  }

  @media (max-width: 699px) {
    font-size: 152px;
  }

  @media (max-width: 635px) {
    font-size: 136px;
  }

  @media (max-width: 572px) {
    font-size: 120px;
  }

  @media (max-width: 508px) {
    font-size: 104px;
  }

  @media (max-width: 445px) {
    font-size: 88px;
  }

  @media (max-width: 382px) {
    font-size: 72px;
  }
  @media (max-width: 318px) {
    font-size: 56px;
  }
`;
