import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch products
        const productsResponse = await fetch('http://localhost:8000/products');
        if (productsResponse.ok) {
          const productsData = await productsResponse.json();
          const processedProducts = productsData.data.products.map((product: any) => {
            // Parse images JSON string to array (similar to ProductDetailPage)
            let images = [];
            if (product.images) {
              try {
                images = typeof product.images === 'string' ? JSON.parse(product.images) : product.images;
              } catch (e) {
                console.warn('Failed to parse product images:', product.images);
              }
            }

            return {
              id: product.id,
              image: images?.[0] || 'https://images.unsplash.com/photo-1571910258025-e3a1b0d6a30c?w=400&h=300&fit=crop',
              title: product.name,
              description: product.description || `Premium ${product.name} for your style`,
              price: parseFloat(product.price),
            };
          });
          setProducts(processedProducts);
        }

        // Fetch categories for filter dropdown
        const categoriesResponse = await fetch('http://localhost:8000/categories');
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData.data || []);
        }

      } catch (err) {
        console.error('Error loading products:', err);
        setError('Failed to load products');
        // Fallback to mock data if API fails
        setProducts([
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
          {
            id: 5,
            image: 'https://images.unsplash.com/photo-1544638748-267ef3d7d5a?w=400&h=300&fit=crop',
            title: 'Slim Fit Jeans',
            description: 'Premium denim with modern comfort.',
            price: 89.99,
          },
          {
            id: 6,
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
            title: 'Running Shoes',
            description: 'Engineered for performance and comfort.',
            price: 129.99,
          },
        ]);
        setCategories([
          { name: 'Shoes', slug: 'shoes' },
          { name: 'Shirts', slug: 'shirts' },
          { name: 'Pants', slug: 'pants' },
          { name: 'Caps', slug: 'caps' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (productId: number) => {
    console.log('Add to cart:', productId);
    // TODO: Implement cart functionality
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Products</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Discover our complete collection of fashion items.
        </p>
      </div>

      {/* Filter/Sort Controls - Placeholder */}
      <div className="mb-8 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="w-full p-2 border rounded-md">
              <option>All Categories</option>
              <option>Shoes</option>
              <option>Shirts</option>
              <option>Pants</option>
              <option>Caps</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price Range</label>
            <select className="w-full p-2 border rounded-md">
              <option>All Prices</option>
              <option>$0 - $50</option>
              <option>$50 - $100</option>
              <option>$100+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Sort By</label>
            <select className="w-full p-2 border rounded-md">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Popularity</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
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
    </div>
  );
};

export default ProductsPage;
