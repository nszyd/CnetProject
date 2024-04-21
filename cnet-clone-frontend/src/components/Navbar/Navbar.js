// components/Navbar/Navbar.js

import React from 'react';
import styles from './Navbar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ onLoginClick, onLogoClick }) => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo} onClick={onLogoClick}>CNET Clone</div>
        <SearchBar />
        <button className={styles.loginButton} onClick={onLoginClick}>
          Join/Login
        </button>
      </nav>
    );
  };

export default Navbar;
