import React from 'react';
import { useProductContext } from '../context/ProductContext';

const FilterSelect = () => {
  const { categoryFilter, setCategoryFilter, categoryList } = useProductContext();

  return (
    <select
      value={categoryFilter}
      onChange={(e) => setCategoryFilter(e.target.value)}
      className="border p-2 rounded-lg"
    >
      {categoryList.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
