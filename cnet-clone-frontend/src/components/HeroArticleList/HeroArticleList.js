// components/HeroArticleList/HeroArticleList.js

import React from 'react';
import HeroArticle from '../HeroArticle/HeroArticle';
import styles from './HeroArticleList.module.css';

const heroArticles = [
  {
    id: 1,
    title: 'Energy\'s New Wave',
    excerpt: 'An in-depth look at the future of clean energy and how innovation is driving a greener future.',
    imageUrl: 'https://via.placeholder.com/600x300'
  },
  {
    id: 2,
    title: 'Artificial Intelligence and You',
    excerpt: 'Exploring how AI is influencing daily lives and shaping the future.',
    imageUrl: 'https://via.placeholder.com/600x300'
  }
];

const HeroArticleList = () => {
  return (
    <div className={styles.heroArticleList}>
      {heroArticles.map((article) => (
        <HeroArticle
          key={article.id}
          title={article.title}
          excerpt={article.excerpt}
          imageUrl={article.imageUrl}
        />
      ))}
    </div>
  );
};

export default HeroArticleList;
