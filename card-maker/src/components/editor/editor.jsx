import styled from "@emotion/styled";
import React from "react";
import CardAddForm from "../cardAddForm/cardAddForm";
import CardEditForm from "../cardEditForm/cardEditForm";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <Edit>
      <Title>Card Maker</Title>
      {Object.keys(cards).map((key) => {
        return (
          <CardEditForm
            key={key}
            FileInput={FileInput}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        );
      })}
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </Edit>
  );
};

const Edit = styled.section`
  flex-basis: 50%;
  border-right: 1px solid #e2e2e2;
  padding: 0.5rem 2rem;
  overflow-y: auto;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  color: #385461;
`;
export default Editor;
