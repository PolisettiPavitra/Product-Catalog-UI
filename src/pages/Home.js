import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories, USD_TO_INR_RATE } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 6);
  const popularCategories = categories.slice(0, 4);

  const convertToINR = (usdPrice) => {
    return Math.round(usdPrice * USD_TO_INR_RATE);
  };

  return (
    <div className="min-h-screen bg-gray-50">
             {/* Hero Section */}
       <div className="bg-gradient-to-r from-navy-500 to-navy-700 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
           <div className="text-center">
             <h1 className="text-4xl md:text-6xl font-bold mb-6">
               Professional Printing
               <span className="block text-primary-200">Made Simple</span>
             </h1>
             <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">
               High-quality custom printing for businesses and individuals. 
               Fast turnaround, competitive pricing, and exceptional service.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link
                 to="/catalog"
                 className="bg-primary-400 hover:bg-primary-500 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
               >
                 Start Your Order
               </Link>
               <Link
                 to="/catalog?category=business-cards"
                 className="border-2 border-white text-white hover:bg-white hover:text-navy-500 font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
               >
                 View Business Cards
               </Link>
             </div>
           </div>
         </div>
       </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-text-primary mb-4">
               Why Choose PrintPro?
             </h2>
             <p className="text-lg text-text-secondary max-w-2xl mx-auto">
               We deliver exceptional quality printing with fast turnaround times and competitive pricing.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="text-center">
               <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-text-primary mb-2">Fast Turnaround</h3>
               <p className="text-text-secondary">3-5 business day turnaround on most orders</p>
             </div>

             <div className="text-center">
               <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-text-primary mb-2">Quality Guarantee</h3>
               <p className="text-text-secondary">100% satisfaction guarantee on all orders</p>
             </div>

             <div className="text-center">
               <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-text-primary mb-2">Competitive Pricing</h3>
               <p className="text-text-secondary">Best prices guaranteed with bulk discounts</p>
             </div>
           </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-text-primary mb-4">
               Popular Categories
             </h2>
             <p className="text-lg text-text-secondary">
               Explore our most requested printing services
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCategories.map((category) => (
              <Link
                key={category.id}
                to={`/catalog?category=${category.id}`}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                                 <h3 className="text-lg font-semibold text-text-primary mb-2">
                   {category.name}
                 </h3>
                 <p className="text-text-secondary text-sm">
                   {category.description}
                 </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-text-primary mb-4">
               Featured Products
             </h2>
             <p className="text-lg text-text-secondary">
               Our most popular printing products
             </p>
           </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {featuredProducts.map((product) => (
               <ProductCard 
                 key={product.id} 
                 product={product} 
                 showRating={true}
                 showBadge={true}
               />
             ))}
           </div>

          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="btn-secondary text-lg px-8 py-3"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>

             {/* CTA Section */}
       <div className="bg-navy-500 text-white py-16">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold mb-4">
             Ready to Start Your Project?
           </h2>
           <p className="text-xl text-navy-100 mb-8">
             Get started with your custom printing order today. 
             Fast, reliable, and professional service guaranteed.
           </p>
           <Link
             to="/catalog"
             className="bg-primary-400 hover:bg-primary-500 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
           >
             Start Your Order
           </Link>
         </div>
       </div>
    </div>
  );
};

export default Home;


