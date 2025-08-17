import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { USD_TO_INR_RATE } from '../data/mockData';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const convertToINR = (usdPrice) => {
    return Math.round(usdPrice * USD_TO_INR_RATE);
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(index, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                       <div className="text-center">
               <div className="text-gray-400 text-6xl mb-4">🛒</div>
               <h1 className="text-3xl font-bold text-text-primary mb-4">Your cart is empty</h1>
               <p className="text-text-secondary mb-8">
                 Looks like you haven't added any products to your cart yet.
               </p>
            <Link to="/catalog" className="btn-primary text-lg px-8 py-3">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
                             <div className="px-6 py-4 border-b border-border">
                 <h1 className="text-2xl font-bold text-text-primary">Shopping Cart</h1>
                 <p className="text-text-secondary mt-1">{items.length} item(s)</p>
               </div>

                             <div className="divide-y divide-border">
                {items.map((item, index) => (
                  <div key={index} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                                                 <h3 className="text-lg font-medium text-text-primary mb-1">
                           {item.name}
                         </h3>
                         
                         {/* Specifications */}
                         <div className="text-sm text-text-secondary space-y-1">
                          {Object.entries(item.specifications).map(([key, value]) => (
                            <div key={key} className="flex">
                              <span className="font-medium capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span className="ml-2">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                                                 <button
                           onClick={() => handleQuantityChange(index, item.quantity - 1)}
                           className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-gray-50"
                         >
                           -
                         </button>
                         <span className="w-12 text-center font-medium">
                           {item.quantity}
                         </span>
                         <button
                           onClick={() => handleQuantityChange(index, item.quantity + 1)}
                           className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-gray-50"
                         >
                           +
                         </button>
                      </div>

                                                                                           {/* Price */}
                        <div className="text-right">
                          <div className="text-lg font-bold text-secondary-500">
                            ₹{convertToINR(item.totalPrice)}
                          </div>
                          <div className="text-sm text-text-secondary">
                            ₹{convertToINR(item.totalPrice / item.quantity)} each
                          </div>
                        </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

                             {/* Clear Cart Button */}
               <div className="px-6 py-4 border-t border-border">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                             <h2 className="text-xl font-bold text-text-primary mb-6">Order Summary</h2>
               
                              <div className="space-y-4">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal ({items.length} items)</span>
                    <span>₹{convertToINR(getTotalPrice())}</span>
                  </div>
                  
                  <div className="flex justify-between text-text-secondary">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  
                  <div className="flex justify-between text-text-secondary">
                    <span>Tax</span>
                    <span>₹{convertToINR(getTotalPrice() * 0.08)}</span>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold text-text-primary">
                      <span>Total</span>
                      <span>₹{convertToINR(getTotalPrice() * 1.08)}</span>
                    </div>
                  </div>
                </div>

              <div className="mt-6 space-y-3">
                <button className="w-full btn-primary text-lg py-3">
                  Proceed to Checkout
                </button>
                
                <Link
                  to="/catalog"
                  className="w-full btn-secondary text-lg py-3 block text-center"
                >
                  Continue Shopping
                </Link>
              </div>

                             {/* Additional Info */}
               <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                 <h3 className="font-medium text-text-primary mb-2">What's included:</h3>
                 <ul className="text-sm text-text-secondary space-y-1">
                   <li>• Free shipping on orders over ₹4,150</li>
                   <li>• 3-5 business day turnaround</li>
                   <li>• Quality guarantee</li>
                   <li>• Free design proof</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


