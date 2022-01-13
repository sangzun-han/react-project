import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
  return (
    <Foot>
      <Title>FOOTER</Title>
    </Foot>
  );
};

const Foot = styled.footer`
  width: 100%;
  text-align: center;
  background: linear-gradient(#c9d6ff, #e2e2e2);
`;

const Title = styled.p`
  color: black;
`;

export default Footer;
