import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Adjust if using Next.js or another routing library

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details by ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 mt-8">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        ←  Previous
      </button>

      {/* Product Images */}
      <div className="flex gap-4">
        {product.images?.map((image, index) => (
          <img key={index} src={image} alt={product.title} className="w-1/3 object-cover" />
        ))}
      </div>

      {/* Product Basic Info */}
      <h1 className="text-3xl font-bold mt-4">{product.title || 'No Title'}</h1>
      <p className="text-gray-600 mt-2">{product.description || 'No description available'}</p>
      <div className="flex items-center mt-4">
        <span className="text-green-600 font-semibold text-xl">${product.price.toFixed(2) || 'N/A'}</span>
        {product.discountPercentage && (
          <span className="text-red-500 ml-4">Discount: {product.discountPercentage}%</span>
        )}
      </div>
      <p className="text-gray-600 mt-2"><strong>Rating:</strong> {product.rating.toFixed(1) || 'N/A'} ⭐</p>

      {/* Additional Product Details */}
      {product.category && <p className="mt-4"><strong>Category:</strong> {product.category}</p>}
      {product.brand && <p><strong>Brand:</strong> {product.brand}</p>}
      {product.sku && <p><strong>SKU:</strong> {product.sku}</p>}
      {product.stock !== undefined && <p><strong>Stock:</strong> {product.stock}</p>}
      {product.availabilityStatus && <p><strong>Availability:</strong> {product.availabilityStatus}</p>}
      {product.shippingInformation && <p><strong>Shipping:</strong> {product.shippingInformation}</p>}
      {product.returnPolicy && <p><strong>Return Policy:</strong> {product.returnPolicy}</p>}
      {product.warrantyInformation && <p><strong>Warranty:</strong> {product.warrantyInformation}</p>}
      {product.minimumOrderQuantity && <p><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>}

      {/* Product Dimensions */}
      {product.dimensions && (
        <div className="mt-4">
          <p><strong>Dimensions:</strong></p>
          <p>Width: {product.dimensions.width} cm</p>
          <p>Height: {product.dimensions.height} cm</p>
          <p>Depth: {product.dimensions.depth} cm</p>
        </div>
      )}

      {/* Product Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Customer Reviews</h2>
          {product.reviews.map((review, index) => (
            <div key={index} className="border-t border-gray-300 pt-2 mt-2">
              <p><strong>{review.reviewerName}</strong> ({review.date})</p>
              <p className="text-yellow-500">Rating: {review.rating} ⭐</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}

      {/* Product Meta Information */}
      {product.meta && (
        <div className="mt-4">
          <p><strong>Barcode:</strong> {product.meta.barcode}</p>
          {product.meta.qrCode && (
            <div className="mt-2">
              <img src={product.meta.qrCode} alt="QR Code" className="w-20 h-20" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
