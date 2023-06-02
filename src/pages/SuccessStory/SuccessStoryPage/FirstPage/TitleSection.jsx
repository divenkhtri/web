import React from 'react';
import styled from 'styled-components';

const TitlePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

const TitlePage = () => {
  return (
    <TitlePageContainer>
      <Title>Welcome to Our IT Services</Title>
      <Subtitle>Transforming Businesses with Cutting-Edge Solutions</Subtitle>
    </TitlePageContainer>
  );
};

export default TitlePage;
