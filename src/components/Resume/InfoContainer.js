import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Name } from '../ReusableComponents';
import ThemeContext from '../ThemeContext';
import Themes from '../Themes';

const InfoContainer = ({ data }) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = Themes[theme];
  return (
    <Container theme={currentTheme}>
      <Name theme={currentTheme}>{data.info.name}</Name>

      <Info>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <EmailLogo theme={currentTheme} />
          {data.info.email}
        </div>
        <Stripe theme={currentTheme} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PhoneLogo theme={currentTheme} />
          {data.info.phone}
        </div>
        <Stripe theme={currentTheme} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <LocationLogo theme={currentTheme} />
          {data.info.location}
        </div>
      </Info>
    </Container>
  );
};

export default InfoContainer;

const EmailLogo = styled.div`
  height: 48px;
  width: 48px;
  background-image: url('${(props) => props.theme.email}');
  background-repeat: no-repeat;
  background-position: center;
`;

const PhoneLogo = styled.div`
  height: 48px;
  width: 48px;
  background-image: url('${(props) => props.theme.phone}');
  background-repeat: no-repeat;
  background-position: center;
`;

const LocationLogo = styled.div`
  height: 48px;
  width: 48px;
  background-image: url('${(props) => props.theme.location}');
  background-repeat: no-repeat;
  background-position: center;
`;

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.bodyText};
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    display: block;
    text-align: center;
  }
`;

const Stripe = styled.div`
  height: 16px;
  width: 2px;
  background-color: ${(props) => props.theme.headingColor};
  margin-left: 16px;
  border-radius: 2px;

  @media (max-width: 850px) {
    display: none;
  }
`;
