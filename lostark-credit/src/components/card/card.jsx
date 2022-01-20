import React, { memo } from "react";
import styled from "@emotion/styled";
import styles from "../card/card.module.css";

const Card = memo(({ card }) => {
  const QRCode = require("qrcode.react");

  const {
    number1,
    number2,
    number3,
    number4,
    holder,
    year,
    month,
    theme,
    cvc,
  } = card;

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${pickStyles(theme)} ${styles.front}`}>
        <LostArk src="/images/gray.png" alt="logo" />
        <Logo src="/images/lostark-logo.png" alt="card-logo" />
        <Chip />
        <Bc />
      </div>
      <div className={`${styles.card} ${pickStyles(theme)} ${styles.back}`}>
        <Auth></Auth>
        <ul>
          <Font>
            {number1} {number2}
          </Font>
          <Font>
            {number3} {number4}
          </Font>
          <Font className={styles.flex}>
            <div>
              <p>VALID</p>
              <p>THRU</p>
            </div>
            <span className={`${styles.white} ${styles.mr}`}>
              {year}/{month}
            </span>
            <div className={`${styles.flex} ${styles.cvc}`}>
              <p>CVC</p>
              <span className={styles.white}>{cvc}</span>
            </div>
          </Font>
          <Font className={styles.white}>
            <span>{holder}</span>
          </Font>
          <QRCode
            value={
              "https://github.com/sangzun-han/react-project/tree/main/lostark-credit"
            }
            size={48}
            renderAs={"svg"}
          />
        </ul>
      </div>
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

const Auth = styled.li`
  width: 20px;
  height: 100%;
  background-color: #b6b7bc;
`;

const Font = styled.li`
  width: 150px;
  font-family: fantasy;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0;
  margin-bottom: 0.3rem;
  color: papayawhip;
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
