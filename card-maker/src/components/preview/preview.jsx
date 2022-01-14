import styled from "@emotion/styled";
import React from "react";
import Card from "../card/card";

const Preview = ({ cards }) => {
  return (
    <Previewer>
      <Title>Card Preview</Title>
      <Cards>
        {cards.map((card) => {
          return <Card card={card} />;
        })}
      </Cards>
    </Previewer>
  );
};

const Previewer = styled.section`
  flex-basis: 50%;
  background-color: pink;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  color: #385461;
`;

const Cards = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Preview;
