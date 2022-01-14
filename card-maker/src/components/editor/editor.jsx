import styled from "@emotion/styled";
import React from "react";
import CardEditForm from "../cardEditForm/cardEditForm";

const Editor = ({ cards }) => {
  return (
    <Edit>
      <Title>Card Maker</Title>
      {cards.map((card) => {
        return <CardEditForm card={card} />;
      })}
    </Edit>
  );
};

const Edit = styled.section`
  flex-basis: 50%;
  background-color: wheat;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  color: #385461;
`;
export default Editor;
