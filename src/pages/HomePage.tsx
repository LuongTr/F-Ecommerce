import React from 'react';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  const categories = [
    {
      name: 'Shoes',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
    },
    {
      name: 'Shirts',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    },
    {
      name: 'Pants',
      image: 'https://images.unsplash.com/photo-1544638748-267ef3d7d5a?w=400&h=300&fit=crop',
    },
    {
      name: 'Caps',
      image: 'https://images.unsplash.com/photo-1575428652377-a2d80e666850?w=400&h=300&fit=crop',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1571910258025-e3a1b0d6a30c?w=400&h=300&fit=crop',
      title: 'Classic Fedora',
      description: 'A timeless accessory for any look.',
      price: 99.99,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
      title: 'Canvas Sneakers',
      description: 'Comfortable and stylish for everyday wear.',
      price: 79.99,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
      title: 'Graphic T-Shirt',
      description: 'Make a statement with this unique tee.',
      price: 39.99,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop',
      title: 'Denim Baseball Cap',
      description: 'A casual staple for any wardrobe.',
      price: 29.99,
    },
  ];

  const handleAddToCart = (productId: number) => {
    console.log('Add to cart:', productId);
    // TODO: Implement cart functionality
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Your Signature Style
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-200">
              Explore the latest trends and timeless classics in our diverse clothing collection. Quality, comfort, and fashion in every stitch.
            </p>
            <Button size="lg">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  src={category.image}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
