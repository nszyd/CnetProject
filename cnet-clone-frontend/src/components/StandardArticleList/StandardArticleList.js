// components/StandardArticleList/StandardArticleList.js

import React from 'react';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import styles from './StandardArticleList.module.css';

// Example placeholder data for smaller articles
const articles = [
    {
      id: 1,
      title: 'Sony Goes Big on Bravia Brand',
      excerpt: 'New TV and Home Audio Products unveiled, featuring cutting-edge technology.',
      imageUrl: 'https://via.placeholder.com/120x90'
    },
    {
      id: 2,
      title: 'Taylor Swift’s The Tortured Poets Department',
      excerpt: 'A Streaming Guide for Fans, dissecting the latest hits.',
      imageUrl: 'https://via.placeholder.com/120x90'
    },
    {
      id: 3,
      title: 'What to Know About "Sexual Enhancement" Pills',
      excerpt: 'Boosting Testosterone Levels and the associated risks.',
      imageUrl: 'https://via.placeholder.com/120x90'
    },
    {
        id: 4,
        title: 'Test Article',
        excerpt: 'This is a test article',
        imageUrl: 'https://via.placeholder.com/120x90'
    }
    // Add more articles as needed
  ];

const StandardArticleList = () => {
  return (
    <div className={styles.standardArticleList}>
      {articles.map((article) => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          excerpt={article.excerpt}
          imageUrl={article.imageUrl}
        />
      ))}
    </div>
  );
};

export default StandardArticleList;
