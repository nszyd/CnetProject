import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ArticleView.module.css'; // CSS module for styling

const ArticleView = ({ articles }) => {
  let { id } = useParams();
  const article = articles.find(article => article.id.toString() === id);

  if (!article) {
    // Article not found
    return <p>Article not found</p>;
  }

  return (
    <div className={styles.articleViewContainer}>
      <img src={article.imageUrl} alt={article.title} className={styles.articleImage} />
      <h1 className={styles.title}>{article.title}</h1>
      <p className={styles.excerpt}>{article.excerpt}</p>
      {/* You will replace this with the actual article content fetched from the backend */}
      <p className={styles.content}>This is where the article's content will be displayed.</p>
    </div>
  );
};

export default ArticleView;
