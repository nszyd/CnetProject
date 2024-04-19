import React from 'react';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import styles from './CategorySection.module.css';

// Example placeholder data for a category
const trendingArticles = [
  {
    id: 1,
    title: 'Meet 4 Women Powering America\'s Clean Energy Transition',
    excerpt: 'They\'re all under 30 and have a clear vision for the future.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  // ... other articles
];

const CategorySection = ({ categoryTitle }) => {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>{categoryTitle}</h2>
      {trendingArticles.map((article) => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          excerpt={article.excerpt}
          imageUrl={article.imageUrl}
        />
      ))}
    </section>
  );
};

export default CategorySection;
