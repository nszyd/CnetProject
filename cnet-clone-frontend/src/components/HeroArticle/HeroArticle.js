import React from 'react';
import styles from './HeroArticle.module.css';

const HeroArticle = ({ title, excerpt, imageUrl }) => {
  return (
    <div className={styles.heroArticle}>
      <img src={imageUrl} alt={title} className={styles.heroImage} />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.excerpt}>{excerpt}</p>
        {/* You can add more content here, such as the author's name and publication date */}
      </div>
    </div>
  );
};

export default HeroArticle;
