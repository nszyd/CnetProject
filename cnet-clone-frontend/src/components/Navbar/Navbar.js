import React from 'react';
import styles from './Navbar.module.css';
import SearchBar from '../SearchBar/SearchBar'; // Assuming you will create this component next.

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CNET Clone</div>
      <SearchBar />
      <button className={styles.loginButton}>Join/Login</button>
    </nav>
  );
};

export default Navbar;
