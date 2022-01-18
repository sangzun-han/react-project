import styled from "@emotion/styled";
import styles from "../card/card.module.css";
import React, { memo } from "react";

const DEFAULT_IMAGE = "/images/default.gif";

const Card = memo(({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${pickStyles(theme)}`}>
      <Avatar src="/images/gray.png" alt="cardlogo" />
      <Logo src="/images/lostark-logo.png" alt="logo" />
      <Chip />
      <Bc />
      {/* <Info>
        <Name>{name}</Name>
        <Company>{company}</Company>
        <Title>{title}</Title>
        <Email>{email}</Email>
        <Message>{message}</Message>
      </Info> */}
    </li>
  );
});

const Avatar = styled.img`
  width: 10em;
  height: 10em;
  border-radius: 50%;
`;

const Logo = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 6rem;
`;

const Bc = styled.div`
  position: absolute;
  bottom: 0.77rem;
  right: 0.77rem;
  border-radius: 48%;
  width: 32px;
  height: 32px;
  background: rgb(155, 155, 155);
`;

const Chip = styled.div`
  position: absolute;
  width: 30px;
  height: 45px;
  top: 2rem;
  right: 4.5rem;
  background: linear-gradient(135deg, #beb09a 0%, #bbaa97 44%, #c1b8a2 100%);
  border-radius: 8px;
`;

const Info = styled.div`
  width: 100%;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const Company = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  &:after {
    content: "";
    display: block;
    width: 90%;
    height: 2px;
    background-color: wheat;
    transform: translateY(0.5rem);
  }
`;
const Title = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
const Email = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;
const Message = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

function pickStyles(theme) {
  switch (theme) {
    case "gray":
      return styles.gray;
    case "dark":
      return styles.dark;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
