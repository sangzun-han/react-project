import styled from "@emotion/styled";
import styles from "../card/card.module.css";
import React, { memo } from "react";

const DEFAULT_IMAGE = "/images/default.gif";

const Card = memo(({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${pickStyles(theme)}`}>
      <Avatar src={url} alt="profile image" />
      <Info>
        <Name>{name}</Name>
        <Company>{company}</Company>
        <Title>{title}</Title>
        <Email>{email}</Email>
        <Message>{message}</Message>
      </Info>
    </li>
  );
});

const Avatar = styled.img`
  width: 10em;
  height: 10em;
  padding: 1rem;
  margin-left: 0.5rem;
  margin-right: 1em;
  border-radius: 50%;
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
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
