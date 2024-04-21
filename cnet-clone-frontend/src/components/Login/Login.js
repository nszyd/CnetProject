// components/Login/Login.js

import React from 'react';
import styles from './Login.module.css';

const Login = ({ onToggle, onAction }) => { // onAction prop added here
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Log In To Your Account</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div className={styles.toggle} onClick={onToggle}>
          Don't have an account? Sign up
        </div>
        <button onClick={onAction}>Login</button> {/* Use the onAction prop here */}
      </div>
    </div>
  );
};

export default Login;
