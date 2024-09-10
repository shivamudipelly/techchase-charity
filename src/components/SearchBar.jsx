import React from 'react';
import { useProductContext } from '../context/ProductContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useProductContext();

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search products..."
      className="border p-2 rounded-lg"
    />
  );
};

export default SearchBar;
