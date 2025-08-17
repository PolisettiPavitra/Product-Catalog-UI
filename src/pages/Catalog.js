import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';
import { products, categories } from '../data/mockData';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Get category from URL params on component mount
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'All Products';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            {getCategoryName(selectedCategory)}
          </h1>
          <p className="text-text-secondary">
            {selectedCategory 
              ? `Browse our selection of ${getCategoryName(selectedCategory).toLowerCase()}`
              : 'Discover our complete range of custom printing products'
            }
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <CategorySidebar
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📦</div>
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  No products found
                </h3>
                <p className="text-text-secondary">
                  Try selecting a different category or check back later for new products.
                </p>
              </div>
                         ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredProducts.map((product) => (
                   <ProductCard 
                     key={product.id} 
                     product={product} 
                     showRating={true}
                     showBadge={true}
                   />
                 ))}
               </div>
             )}
          </div>
        </div>

                 {/* Featured Sections */}
         {!selectedCategory && (
           <div className="mt-16">
             <h2 className="text-2xl font-bold text-text-primary mb-8">Popular Products</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {products.slice(0, 4).map((product) => (
                 <ProductCard 
                   key={product.id} 
                   product={product} 
                   showRating={true}
                   showBadge={true}
                 />
               ))}
             </div>
           </div>
         )}
      </div>
    </div>
  );
};

export default Catalog;


