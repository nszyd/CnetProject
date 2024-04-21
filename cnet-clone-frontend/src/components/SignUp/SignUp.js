// components/SignUp/SignUp.js

import React from 'react';
import styles from './SignUp.module.css';

const SignUp = ({ onToggle, onAction }) => { // onAction prop added here
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Create Your Account</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className={styles.toggle} onClick={onToggle}>
          Already Have An Account? Log in
        </div>
        <button onClick={onAction}>Sign Up</button> {/* Use the onAction prop here */}
      </div>
    </div>
  );
};

export default SignUp;
