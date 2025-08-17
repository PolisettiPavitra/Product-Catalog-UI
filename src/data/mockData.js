export const categories = [
  {
    id: 'apparel',
    name: 'Apparel',
    icon: '👕',
    description: 'Custom t-shirts, hoodies, and more'
  },
  {
    id: 'banners',
    name: 'Banners',
    icon: '🎯',
    description: 'Vinyl banners and signs'
  },
  {
    id: 'boxes',
    name: 'Boxes',
    icon: '📦',
    description: 'Custom packaging and boxes'
  },
  {
    id: 'business-cards',
    name: 'Business Cards',
    icon: '💼',
    description: 'Professional business cards'
  },
  {
    id: 'flyers',
    name: 'Flyers',
    icon: '📄',
    description: 'Marketing flyers and brochures'
  },
  {
    id: 'labels',
    name: 'Labels',
    icon: '🏷️',
    description: 'Custom labels and stickers'
  },
  {
    id: 'posters',
    name: 'Posters',
    icon: '🖼️',
    description: 'Large format posters'
  },
  {
    id: 'brochures',
    name: 'Brochures',
    icon: '📋',
    description: 'Professional brochures'
  }
];

export const products = [
  // Apparel
     {
     id: 'tshirt-basic',
     name: 'Basic T-Shirt',
     category: 'apparel',
     description: 'High-quality cotton t-shirt with custom printing',
     basePrice: 12.99,
     image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
     rating: 4.8,
     reviewCount: 156,
     badge: 'bestseller',
     specifications: {
       sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
       colors: ['White', 'Black', 'Navy', 'Gray', 'Red'],
       materials: ['100% Cotton', 'Cotton Blend'],
       printingOptions: ['Screen Print', 'Digital Print', 'Embroidery']
     }
   },
     {
     id: 'hoodie-premium',
     name: 'Premium Hoodie',
     category: 'apparel',
     description: 'Comfortable hoodie perfect for custom designs',
     basePrice: 29.99,
     image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
     rating: 4.9,
     reviewCount: 89,
     badge: 'new',
     specifications: {
       sizes: ['S', 'M', 'L', 'XL', 'XXL'],
       colors: ['Black', 'Gray', 'Navy', 'Burgundy'],
       materials: ['Cotton Blend', 'Fleece'],
       printingOptions: ['Screen Print', 'Digital Print', 'Embroidery']
     }
   },

  // Banners
  {
    id: 'banner-vinyl',
    name: 'Vinyl Banner',
    category: 'banners',
    description: 'Durable vinyl banner for outdoor use',
    basePrice: 45.99,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    specifications: {
      sizes: ['3x6 ft', '4x8 ft', '6x10 ft', '8x12 ft'],
      materials: ['13 oz Vinyl', '18 oz Vinyl'],
      finishes: ['Matte', 'Glossy'],
      grommets: ['Yes', 'No']
    }
  },
  {
    id: 'banner-mesh',
    name: 'Mesh Banner',
    category: 'banners',
    description: 'Wind-resistant mesh banner',
    basePrice: 52.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    specifications: {
      sizes: ['3x6 ft', '4x8 ft', '6x10 ft', '8x12 ft'],
      materials: ['Mesh Vinyl'],
      finishes: ['Matte'],
      grommets: ['Yes', 'No']
    }
  },

  // Business Cards
     {
     id: 'business-card-standard',
     name: 'Standard Business Cards',
     category: 'business-cards',
     description: 'Professional business cards with custom design',
     basePrice: 24.99,
     image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
     rating: 4.7,
     reviewCount: 234,
     badge: 'bestseller',
     specifications: {
       sizes: ['Standard (3.5" x 2")', 'Square (2.5" x 2.5")'],
       paperTypes: ['14pt Gloss', '16pt Matte', '16pt Gloss', '32pt Matte'],
       finishes: ['Standard', 'UV Coating', 'Foil Stamping'],
       quantities: [100, 250, 500, 1000, 2500]
     }
   },
  {
    id: 'business-card-premium',
    name: 'Premium Business Cards',
    category: 'business-cards',
    description: 'Luxury business cards with premium finishes',
    basePrice: 49.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    specifications: {
      sizes: ['Standard (3.5" x 2")', 'Square (2.5" x 2.5")'],
      paperTypes: ['32pt Matte', '32pt Gloss', '100lb Uncoated'],
      finishes: ['UV Coating', 'Foil Stamping', 'Embossing', 'Spot UV'],
      quantities: [100, 250, 500, 1000]
    }
  },

  // Flyers
  {
    id: 'flyer-standard',
    name: 'Standard Flyers',
    category: 'flyers',
    description: 'High-quality flyers for marketing campaigns',
    basePrice: 19.99,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
    specifications: {
      sizes: ['4.25" x 5.5"', '5.5" x 8.5"', '8.5" x 11"'],
      paperTypes: ['100lb Gloss', '100lb Matte', '80lb Gloss'],
      finishes: ['Standard', 'UV Coating'],
      quantities: [100, 250, 500, 1000, 2500]
    }
  },
  {
    id: 'flyer-premium',
    name: 'Premium Flyers',
    category: 'flyers',
    description: 'Premium flyers with special finishes',
    basePrice: 34.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    specifications: {
      sizes: ['4.25" x 5.5"', '5.5" x 8.5"', '8.5" x 11"'],
      paperTypes: ['130lb Gloss', '130lb Matte', '100lb Uncoated'],
      finishes: ['UV Coating', 'Foil Stamping', 'Spot UV'],
      quantities: [100, 250, 500, 1000]
    }
  },

  // Labels
  {
    id: 'label-vinyl',
    name: 'Vinyl Labels',
    category: 'labels',
    description: 'Durable vinyl labels for various applications',
    basePrice: 15.99,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
    specifications: {
      sizes: ['2" x 2"', '3" x 3"', '4" x 4"', 'Custom'],
      materials: ['White Vinyl', 'Clear Vinyl', 'Metallic Vinyl'],
      finishes: ['Matte', 'Glossy'],
      quantities: [100, 250, 500, 1000, 2500]
    }
  },
  {
    id: 'label-paper',
    name: 'Paper Labels',
    category: 'labels',
    description: 'Affordable paper labels for packaging',
    basePrice: 9.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    specifications: {
      sizes: ['1" x 2"', '2" x 3"', '3" x 4"', 'Custom'],
      paperTypes: ['White Paper', 'Kraft Paper', 'Metallic Paper'],
      finishes: ['Standard', 'UV Coating'],
      quantities: [100, 250, 500, 1000, 2500]
    }
  },

  // Posters
  {
    id: 'poster-standard',
    name: 'Standard Posters',
    category: 'posters',
    description: 'High-quality posters for events and marketing',
    basePrice: 12.99,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
    specifications: {
      sizes: ['11" x 17"', '18" x 24"', '24" x 36"'],
      paperTypes: ['100lb Gloss', '100lb Matte'],
      finishes: ['Standard'],
      quantities: [1, 5, 10, 25, 50]
    }
  },
  {
    id: 'poster-premium',
    name: 'Premium Posters',
    category: 'posters',
    description: 'Premium posters with enhanced quality',
    basePrice: 19.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    specifications: {
      sizes: ['11" x 17"', '18" x 24"', '24" x 36"'],
      paperTypes: ['130lb Gloss', '130lb Matte'],
      finishes: ['UV Coating'],
      quantities: [1, 5, 10, 25]
    }
  }
];

// Currency conversion rate (1 USD = 83 INR)
export const USD_TO_INR_RATE = 83;

// Pricing multipliers for different options
export const pricingMultipliers = {
  sizes: {
    'XS': 0.9,
    'S': 1.0,
    'M': 1.0,
    'L': 1.0,
    'XL': 1.1,
    'XXL': 1.2,
    '3x6 ft': 1.0,
    '4x8 ft': 1.5,
    '6x10 ft': 2.2,
    '8x12 ft': 3.0,
    'Standard (3.5" x 2")': 1.0,
    'Square (2.5" x 2.5")': 1.2,
    '4.25" x 5.5"': 0.8,
    '5.5" x 8.5"': 1.2,
    '8.5" x 11"': 1.8,
    '2" x 2"': 1.0,
    '3" x 3"': 1.5,
    '4" x 4"': 2.0,
    'Custom': 2.5,
    '1" x 2"': 0.5,
    '2" x 3"': 1.0,
    '3" x 4"': 1.5,
    '11" x 17"': 1.0,
    '18" x 24"': 1.8,
    '24" x 36"': 2.5
  },
  materials: {
    '100% Cotton': 1.0,
    'Cotton Blend': 1.1,
    'Fleece': 1.2,
    '13 oz Vinyl': 1.0,
    '18 oz Vinyl': 1.3,
    'Mesh Vinyl': 1.4,
    'White Vinyl': 1.0,
    'Clear Vinyl': 1.2,
    'Metallic Vinyl': 1.5,
    'White Paper': 1.0,
    'Kraft Paper': 1.1,
    'Metallic Paper': 1.3
  },
  paperTypes: {
    '14pt Gloss': 1.0,
    '16pt Matte': 1.1,
    '16pt Gloss': 1.2,
    '32pt Matte': 1.4,
    '100lb Uncoated': 1.3,
    '100lb Gloss': 1.0,
    '100lb Matte': 1.1,
    '80lb Gloss': 0.9,
    '130lb Gloss': 1.3,
    '130lb Matte': 1.4
  },
  finishes: {
    'Standard': 1.0,
    'UV Coating': 1.3,
    'Foil Stamping': 1.5,
    'Embossing': 1.4,
    'Spot UV': 1.6,
    'Matte': 1.0,
    'Glossy': 1.1,
    'Screen Print': 1.0,
    'Digital Print': 1.1,
    'Embroidery': 1.8
  },
  quantities: {
    1: 1.0,
    5: 0.9,
    10: 0.85,
    25: 0.8,
    50: 0.75,
    100: 0.7,
    250: 0.6,
    500: 0.5,
    1000: 0.4,
    2500: 0.35
  }
};


