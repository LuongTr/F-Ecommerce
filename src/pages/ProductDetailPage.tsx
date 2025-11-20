import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock product data - in real app this would come from an API
  const product = {
    id: parseInt(id || '1'),
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop',
    title: 'Canvas Sneakers',
    description: 'Comfortable and stylish for everyday wear. Made with premium canvas material and durable rubber soles.',
    price: 79.99,
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['White', 'Black', 'Blue'],
  };

  const handleAddToCart = () => {
    console.log('Add to cart:', product.id);
    // TODO: Implement cart functionality
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <img
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg"
            src={product.image}
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {product.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {product.description}
            </p>
          </div>

          <div>
            <span className="text-3xl font-bold text-blue-500">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md hover:border-blue-500 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md hover:border-blue-500 transition-colors"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="pt-4">
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
