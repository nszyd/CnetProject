// components/CategoriesBar/CategoriesBar.js

import React from 'react';
import styles from './CategoriesBar.module.css';

const CategoriesBar = () => {
  const tags = ['Trending', 'AI', 'Tech', 'Money', 'Home', 'Wellness', 'Home Internet', 'Deals'];

  const scrollToSection = (section) => {
    if (section === 'Trending' || section === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    } else {
      const sectionElement = document.getElementById(section);
      if(sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className={styles.categoriesBar}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={styles.tag}
          onClick={() => scrollToSection(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
