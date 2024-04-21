// ArticleLayout.js

import React from 'react';
import HeroArticle from '../HeroArticle/HeroArticle';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import styles from './ArticleLayout.module.css'; // You will create this CSS module file

const ArticleLayout = ({ heroArticles, otherArticles }) => {
  return (
    <div className={styles.articleLayout}>
      <div className={styles.heroArticles}>
        {heroArticles.map(article => (
          <HeroArticle key={article.id} {...article} />
        ))}
      </div>
      <div className={styles.otherArticles}>
        {otherArticles.map(article => (
          <ArticlePreview key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleLayout;
