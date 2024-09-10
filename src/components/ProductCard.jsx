// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Adjust if using Next.js or another routing library

const ProductCard = ({ product }) => {
  // Ensure product object is defined and has required properties
  if (!product) {
    return <div className="text-red-500">Product data is unavailable.</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 transition-transform transform hover:scale-105">
      {/* Display product thumbnail if available */}
      {product.thumbnail ? (
        <img
          src={product.thumbnail}
          alt={product.title || 'Product Image'}
          className="h-56 w-full object-cover"
        />
      ) : (
        <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{product.title || 'No Title'}</h2>
        <div className="flex items-center justify-between mt-4">
          <span className="text-green-600 font-semibold">${product.price || 'N/A'}</span>
          <span className="text-yellow-500">⭐ {product.rating ? product.rating.toFixed(1) : '0.0'}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
