import styled from "@emotion/styled";
import React, { memo } from "react";

const Button = memo(({ name, onClick }) => {
  return <Btn onClick={onClick}>{name}</Btn>;
});

const Btn = styled.button`
  width: 100%;
  background: linear-gradient(45deg, #9796f0, #fbc7d4);
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem;
  flex: 1 1 50%;
  font-size: 1rem;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
export default Button;
