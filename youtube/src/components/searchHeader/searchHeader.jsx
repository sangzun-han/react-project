import React from "react";
import styles from "./searchHeader.module.css";
const searchHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} type="search" placeholder="검색" />
      <button className={styles.button} type="submit">
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default searchHeader;
