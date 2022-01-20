import styled from "@emotion/styled";
import React, { memo } from "react";

const Footer = memo(() => {
  return (
    <Foot>
      <Img src="/images/frust.png" />
    </Foot>
  );
});

const Foot = styled.footer`
  width: 100%;
  text-align: center;
  background: linear-gradient(#c9d6ff, #e2e2e2);
`;

const Img = styled.img`
  width: 100px;
  margin: 0 auto;
`;

export default Footer;
