import React from 'react';
import styles from './ArticlePreview.module.css';

const ArticlePreview = ({ title, excerpt, imageUrl }) => {
  return (
    <div className={styles.articlePreview}>
      <img src={imageUrl} alt={title} className={styles.articleImage} />
      <div className={styles.articleContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </div>
  );
};

export default ArticlePreview;
