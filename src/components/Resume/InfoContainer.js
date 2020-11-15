import React from 'react';
import styled from '@emotion/styled';
import { Name } from '../ReusableComponents';
import email from '../images/Email.svg';
import phone from '../images/Phone.svg';
import location from '../images/Location.svg';

const InfoContainer = ({ data }) => {
  return (
    <Container>
      <Name>{data.info.name}</Name>

      <Info>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo src={email} />
          {data.info.email}
        </div>
        <Stripe />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo src={phone} />
          {data.info.phone}
        </div>
        <Stripe />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo src={location} />
          {data.info.location}
        </div>
      </Info>
    </Container>
  );
};

export default InfoContainer;

const Logo = styled.div`
  height: 48px;
  width: 48px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-position: center;
  // background-color: green;
`;

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

const Icon = styled.div`
  height: 80px;
  width: 80px;
  margin: auto;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  // background-color: pink;
  @media (max-width: 850px) {
    display: block;
    text-align: center;
  }
`;

const Stripe = styled.div`
  height: 16px;
  width: 2px;
  background-color: #ff8277;
  margin-left: 16px;
  // margin-right: 8px;
  border-radius: 2px;

  @media (max-width: 850px) {
    display: none;
  }
`;
