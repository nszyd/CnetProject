// components/TagSection/TagSection.js

import React from 'react';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import styles from './TagSection.module.css';

const TagSection = ({ tag, articles }) => {
  return (
    <section id={tag} className={styles.tagSection}>
      <h2 className={styles.tagTitle}>{tag.toUpperCase()}</h2>
      <div className={styles.articleGrid}>
        {articles.map((article) => (
          <ArticlePreview
            key={article.id}
            title={article.title}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default TagSection;
