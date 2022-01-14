import styled from "@emotion/styled";
import React from "react";

const Button = ({ name, onClick }) => {
  return <Btn onClick={onClick}>{name}</Btn>;
};

const Btn = styled.button`
  background-color: #e2e2e2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem;
  flex: 1 1 50%;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;
export default Button;
