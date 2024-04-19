/* SearchBar.js */

import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement the search functionality here
    console.log(`Search for: ${searchTerm}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} // Replaced onKeyPress with onKeyDown
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
