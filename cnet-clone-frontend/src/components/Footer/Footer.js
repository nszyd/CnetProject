import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksSection}>
        <div className={styles.linkColumn}>
          <h4 className={styles.linkHeader}>CNET</h4>
          {/* You can map over an array of links instead of hardcoding them */}
          <a href="/" className={styles.linkItem}>About</a>
          <a href="/" className={styles.linkItem}>Careers</a>
          <a href="/" className={styles.linkItem}>Privacy Policy</a>
          {/* More links */}
        </div>
        {/* Repeat for each column of links */}
      </div>
      <div className={styles.socialSection}>
        {/* Icons or links to social media */}
        <a href="/" className={styles.socialLink}>Facebook</a>
        <a href="/" className={styles.socialLink}>Twitter</a>
        <a href="/" className={styles.socialLink}>Instagram</a>
        {/* More social links */}
      </div>
      <div className={styles.copyRightSection}>
        <p>© 2024 CNET Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
