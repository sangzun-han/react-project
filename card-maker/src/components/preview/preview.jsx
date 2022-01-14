import styled from "@emotion/styled";
import React from "react";

const Preview = (props) => {
  return (
    <Previewer>
      <Title>Card Preview</Title>
    </Previewer>
  );
};

const Previewer = styled.section`
  flex-basis: 50%;
  background-color: red;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  color: #385461;
`;
export default Preview;
