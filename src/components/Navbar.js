import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-navy-500 shadow-lg border-b border-navy-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-white">PrintPro</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/catalog" 
              className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link 
              to="/catalog?category=business-cards" 
              className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Business Cards
            </Link>
            <Link 
              to="/catalog?category=flyers" 
              className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Flyers
            </Link>
            <Link 
              to="/catalog?category=banners" 
              className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Banners
            </Link>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative p-2 text-white hover:text-primary-200 transition-colors">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" 
              />
            </svg>
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


