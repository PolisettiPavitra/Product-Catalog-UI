import React from 'react';
import { Link } from 'react-router-dom';
import { USD_TO_INR_RATE } from '../data/mockData';

const ProductCard = ({ product, showRating = true, showBadge = false, badgeType = null }) => {
  const priceInINR = Math.round(product.basePrice * USD_TO_INR_RATE);
  
  // Use product data if available, otherwise generate random data for demo
  const rating = product.rating || Math.floor(Math.random() * 2) + 4; // 4-5 stars
  const reviewCount = product.reviewCount || Math.floor(Math.random() * 200) + 50; // 50-250 reviews
  
  // Use product badge if available, otherwise generate random badge
  const randomBadge = badgeType || product.badge || (Math.random() > 0.7 ? (Math.random() > 0.5 ? 'bestseller' : 'new') : null);
  
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'bestseller':
        return 'bg-orange-500 text-white';
      case 'new':
        return 'bg-green-500 text-white';
      default:
        return 'bg-secondary-500 text-white';
    }
  };

  const getBadgeText = (type) => {
    switch (type) {
      case 'bestseller':
        return 'Bestseller';
      case 'new':
        return 'New Arrival';
      default:
        return 'Featured';
    }
  };

  return (
    <div className="card group hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        
        {/* Badge */}
        {showBadge && randomBadge && (
          <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getBadgeStyle(randomBadge)} shadow-md`}>
            {getBadgeText(randomBadge)}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-secondary-500 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        {/* Ratings & Reviews */}
        {showRating && (
          <div className="flex items-center mb-3">
            <div className="flex items-center mr-2">
              {renderStars(rating)}
            </div>
            <span className="text-xs text-text-secondary">
              ({reviewCount} reviews)
            </span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-secondary-500">
            ₹{priceInINR}
          </span>
          
          <Link
            to={`/customize/${product.id}`}
            className="btn-primary text-sm"
          >
            Customize
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
