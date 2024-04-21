// components/ArticlePreview/ArticlePreview.js

import React from 'react';
import styles from './ArticlePreview.module.css';
import {Link} from 'react-router-dom';

const ArticlePreview = ({ id, title, excerpt, imageUrl }) => {
  return (

    <Link to={`/article/${id}`} className={styles.articlePreview}>
      <img src={imageUrl} alt={title} className={styles.articleImage} />
      <div className={styles.articleContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </Link>
  );
};

export default ArticlePreview;
