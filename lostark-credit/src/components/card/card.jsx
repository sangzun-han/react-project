import styled from "@emotion/styled";
import styles from "../card/card.module.css";
import React, { memo } from "react";

const Card = memo(({ card }) => {
  const { theme } = card;

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${pickStyles(theme)} ${styles.front}`}>
        <LostArk src="/images/gray.png" alt="logo" />
        <Logo src="/images/lostark-logo.png" alt="card-logo" />
        <Chip />
        <Bc />
      </div>
      <div
        className={`${styles.card} ${pickStyles(theme)} ${styles.back}`}
      ></div>
    </div>
  );
});

const LostArk = styled.img`
  width: 10rem;
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

function pickStyles(theme) {
  switch (theme) {
    case "gray":
      return styles.gray;
    case "dark":
      return styles.dark;
    case "긁자에요":
      return styles.swipe;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
