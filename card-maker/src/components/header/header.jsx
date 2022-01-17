import styled from "@emotion/styled";
import React, { memo } from "react";

const Header = memo(({ onLogout }) => {
  console.log("Heaer");
  return (
    <Head>
      <Logout onClick={onLogout}>Logout</Logout>
      <Logo src="/images/logo.png" alt="logo" />
      <Title>Card Maker</Title>
    </Head>
  );
});

const Head = styled.header`
  width: 100%;
  text-align: center;
  padding: 1rem;
  background: linear-gradient(#c9d6ff, #e2e2e2);
  position: relative;
`;

const Logout = styled.button`
  position: absolute;
  right: 1em;
  top: 1em;
  padding: 0.5rem;
  border-radius: 20%;
  color: white;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d9a7c7;
`;

const Logo = styled.img`
  width: 5rem;
`;

const Title = styled.h1`
  margin: 0;
  color: black;
`;
export default Header;
