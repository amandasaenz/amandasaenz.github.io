import React from 'react';
import styled from '@emotion/styled';

const InfoContainer = ({ data }) => {
  return (
    <Container>
      <Icon src={data.info.icon} />
      <Name>{data.info.name}</Name>

      <Info>
        <div>{data.info.email}</div> <Stripe />
        <div>{data.info.location}</div> <Stripe />
        <div>{data.info.phone}</div>
      </Info>
    </Container>
  );
};

export default InfoContainer;

const Container = styled.div`
  font-family: 'Varela Round', sans-serif;
  font-size: 20px;
`;

const Icon = styled.div`
  height: 80px;
  width: 80px;
  margin: auto;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
`;

const Name = styled.div`
  text-align: center;
  color: #e74946;
  font-size: 48px;

  // font-family: 'Montserrat';
  // font-family: 'Mitr', sans-serif;
  // font-family: 'Corben', cursive;
  font-family: 'Comfortaa', cursive;

  margin-top: 16px;
  margin-bottom: 8px;
  @media (max-width: 411px) {
    font-size: 40px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 687px) {
    display: block;
    text-align: center;
  }
`;

const Stripe = styled.div`
  height: 16px;
  width: 2px;
  background-color: #e74946;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 2px;

  @media (max-width: 687px) {
    display: none;
  }
`;
