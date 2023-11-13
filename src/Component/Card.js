import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 270px;
  height: 440px;
  border: 1px solid #e4e4e4;
  margin: 16px;
  border-radius: 8px;
  background-color: #edefee;
  cursor:pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardTitleAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 10px;
  font-weight: bold;
`;

const CardSpan = styled.span`
  color: #ee9972;
`;

const CardBody = styled.div`
  margin-bottom: 12px;
  padding: 0 12px;
  width: 100%;
  height: 120px;
  color: #495e57;
  font-size: 16px;
  font-weight: regular;
  //   background-color: tomato;
`;

const OrderLink = styled.a`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #495e57;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    color: #495e53;
    text-decoration: underline;
  }
`;

const Card = ({ image, title, price, description, link }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt="Card Image" />
      <CardTitleAndPrice>
        <div>{title}</div>
        <CardSpan>{price}</CardSpan>
      </CardTitleAndPrice>
      <CardBody>{description}</CardBody>
      <OrderLink href={link}>Order for Delivery </OrderLink>
    </CardContainer>
  );
};

export default Card;
