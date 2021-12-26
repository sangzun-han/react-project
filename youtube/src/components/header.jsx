import React from "react";
import styles from "../styles/header.module.css";
import { faBell, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.navbar}>
        <li>
          <img src="images/logo.png" alt="logo" />
        </li>
        <li className={styles.searchInput}>
          <input type="text" placeholder="검색" className={styles.input} />
          <button type="submit" className={styles.searchButton}>
            <img src="images/search.png" alt="search" className={styles.logo} />
          </button>
        </li>
        <li className={styles.icon}>
          <FontAwesomeIcon icon={faSearch} size="2x" />
          <FontAwesomeIcon icon={faBell} size="2x" />
          <FontAwesomeIcon icon={faUser} size="2x" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
