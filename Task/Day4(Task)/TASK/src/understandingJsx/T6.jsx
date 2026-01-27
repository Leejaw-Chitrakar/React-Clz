// 6. Write JSX for a self-closing <input /> with placeholder and type.

import React from 'react';

const SearchInput = () => {
  return (
    <div className="search-container">
      <input 
        type="search" 
        placeholder="Search..." 
        className="search-field" 
      />
    </div>
  );
};

export default SearchInput;
