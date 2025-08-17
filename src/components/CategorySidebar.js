import React from 'react';
import { categories } from '../data/mockData';

const CategorySidebar = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Categories</h3>
      
      <div className="space-y-2">
        <button
          onClick={() => onCategorySelect(null)}
          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
            selectedCategory === null
              ? 'bg-primary-100 text-primary-500 font-medium'
              : 'text-text-secondary hover:bg-gray-50'
          }`}
        >
          All Products
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center space-x-2 ${
              selectedCategory === category.id
                ? 'bg-primary-100 text-primary-500 font-medium'
                : 'text-text-secondary hover:bg-gray-50'
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;


