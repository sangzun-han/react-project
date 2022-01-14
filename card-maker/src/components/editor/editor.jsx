import styled from "@emotion/styled";
import React from "react";

const Editor = (props) => {
  return (
    <Edit>
      <Title>Card Maker</Title>
    </Edit>
  );
};

const Edit = styled.section`
  flex-basis: 50%;
  background-color: blue;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  color: #385461;
`;
export default Editor;
