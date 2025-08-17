import React, { createContext, useContext, useReducer } from 'react';
import { pricingMultipliers, USD_TO_INR_RATE } from '../data/mockData';
const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => item.id === action.payload.id && 
        JSON.stringify(item.specifications) === JSON.stringify(action.payload.specifications)
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && 
            JSON.stringify(item.specifications) === JSON.stringify(action.payload.specifications)
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload.index
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product, specifications, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        image: product.image,
        basePrice: product.basePrice,
        specifications,
        quantity,
        totalPrice: calculatePrice(product, specifications) * quantity
      }
    });
  };

  const removeFromCart = (index) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: index
    });
  };

  const updateQuantity = (index, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { index, quantity }
    });
  };

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };

  const calculatePrice = (product, specifications) => {
    let price = product.basePrice;
    
    // Apply multipliers based on specifications
    Object.keys(specifications).forEach(key => {
      const value = specifications[key];
      if (pricingMultipliers[key] && pricingMultipliers[key][value]) {
        price *= pricingMultipliers[key][value];
      }
    });
    
    return Math.round(price * 100) / 100;
  };

  const convertToINR = (usdPrice) => {
    return Math.round(usdPrice * USD_TO_INR_RATE);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.totalPrice, 0);
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    calculatePrice,
    convertToINR
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Import pricing multipliers



