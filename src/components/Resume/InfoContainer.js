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
  font-size: 16px;
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

  font-family: 'Montserrat';

  @media (max-width: 411px) {
    font-size: 40px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 574px) {
    display: block;
    text-align: center;
  }
`;

const Stripe = styled.div`
  ::before {
    content: '|';
    color: #e74946;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (max-width: 574px) {
    ::before {
      content: none;
    }
  }
`;
