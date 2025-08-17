import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products, USD_TO_INR_RATE } from '../data/mockData';

const Customize = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, calculatePrice } = useCart();
  
  const [product, setProduct] = useState(null);
  const [specifications, setSpecifications] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);

  const convertToINR = (usdPrice) => {
    return Math.round(usdPrice * USD_TO_INR_RATE);
  };

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      // Initialize specifications with first option for each spec
      const initialSpecs = {};
      Object.keys(foundProduct.specifications).forEach(key => {
        initialSpecs[key] = foundProduct.specifications[key][0];
      });
      setSpecifications(initialSpecs);
      setCurrentPrice(foundProduct.basePrice);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      const price = calculatePrice(product, specifications);
      setCurrentPrice(price);
    }
  }, [specifications, product, calculatePrice]);

  const handleSpecificationChange = (key, value) => {
    setSpecifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, specifications, quantity);
      navigate('/cart');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Product not found
          </h3>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image and Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            
                         <div className="mt-6 bg-white rounded-lg shadow-md p-6">
               <h1 className="text-2xl font-bold text-text-primary mb-2">
                 {product.name}
               </h1>
               <p className="text-text-secondary mb-4">
                 {product.description}
               </p>
               
                              <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-secondary-500">
                      ₹{convertToINR(currentPrice)}
                    </span>
                    <span className="text-text-secondary ml-2">per item</span>
                  </div>
                </div>
              </div>
          </div>

          {/* Customization Options */}
          <div className="space-y-6">
                         <div className="bg-white rounded-lg shadow-md p-6">
               <h2 className="text-xl font-semibold text-text-primary mb-6">
                 Customize Your Order
               </h2>

              {/* Specifications */}
              {Object.keys(product.specifications).map((specKey) => (
                                 <div key={specKey} className="mb-6">
                   <label className="block text-sm font-medium text-text-primary mb-2 capitalize">
                     {specKey.replace(/([A-Z])/g, ' $1').trim()}
                   </label>
                  <select
                    value={specifications[specKey] || ''}
                    onChange={(e) => handleSpecificationChange(specKey, e.target.value)}
                    className="input-field"
                  >
                    {product.specifications[specKey].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

                             {/* Quantity */}
               <div className="mb-6">
                 <label className="block text-sm font-medium text-text-primary mb-2">
                   Quantity
                 </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center input-field"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

                             {/* File Upload */}
               <div className="mb-6">
                 <label className="block text-sm font-medium text-text-primary mb-2">
                   Upload Your Design
                 </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf,.ai,.eps"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                                     <label htmlFor="file-upload" className="cursor-pointer">
                     <div className="text-gray-400 text-4xl mb-2">📁</div>
                     <p className="text-text-secondary">
                       {uploadedFile ? uploadedFile.name : 'Click to upload your design file'}
                     </p>
                     <p className="text-sm text-text-secondary mt-1">
                       JPG, PNG, PDF, AI, EPS files accepted
                     </p>
                   </label>
                </div>
              </div>

                                                           {/* Total Price */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium text-text-primary">Total Price:</span>
                    <span className="text-2xl font-bold text-secondary-500">
                      ₹{convertToINR(currentPrice * quantity)}
                    </span>
                  </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full btn-primary text-lg py-3"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;


