import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <nav className={styles.nav_container}>
        <Link to="/">
          <img src={logo} />
        </Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
