import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 270px;
  height: 286px;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  background-color: #fff;
  cursor:pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100px;
  border-radius:50%
`;

const CardTitleAndRating = styled.div`
  display: flex;
  flex-direction: column;
  height:60%;
  align-items: center;
  margin:20px 20px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 12px;
  `;
  const CardHead = styled.div`
  display: flex;
  // justify-content: space-between;
  margin: 40px 10px;
  font-weight: bold;
  height: 40%;
  `;
  const Title = styled.h3`
  color: #333;
  font-weight: bold;
  font-size: 20px;

  `;
  const Cardrating = styled.img`
  width: 90px;
  height: 20px;
  `;

  const CardBody = styled.div`
  margin-bottom: 12px;
  padding: 0 12px;
  width: 100%;
  height: 120px;
  color: #6E6F6E;
  font-size: 16px;
`;


const TestCard = ({ image, title, rating, description }) => {
  return (
    <CardContainer>
      <CardHead>
      <CardImage src={image} alt="Card Image" />
      <CardTitleAndRating>
        <Title>{title}</Title>
        <Cardrating  src={rating} alt="Card Image" />
      </CardTitleAndRating>
      </CardHead>
      <CardBody>{description}</CardBody>
    </CardContainer>
  );
};

export default TestCard;
