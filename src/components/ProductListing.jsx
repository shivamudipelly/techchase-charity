import React from 'react';
import { useProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const ListingPage = () => {
  const {
    filteredProducts,
    categories,
    setSelectedCategory,
    setSearchQuery,
  } = useProductContext();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Category Filter */}
        <select
          onChange={handleCategoryChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Categories</option>
          {Array.isArray(categories) && categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Search Filter */}
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition transform duration-200"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <Link
                to={`/products/${product.id}`}
                className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 transition duration-200"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default ListingPage;
