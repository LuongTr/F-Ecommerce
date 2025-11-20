import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductManagementPage: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  // Mock products data
  const products = [
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeIe8kmDJYDdxHQNZQYZ7KRF1cLerDkSQ2KKjS-840fFvMIj5YvqaQaeaVw6tQtGsSxdc1nh-aOBv20s-T4MwYqSugmeHdK44lX8PCmvfCpUzCAfc4u2Z85z_6lN1CEG2bz7w2WI4qllNdG201v9uRT5Y1d-lkvSLuynQ3UcGfAgfxIBkAylcd3qEi6fZKSn2PyDoQhl78t_L2CjUDnwLoLsl0rtn9YVHU8BuJ8-M9NEy4TerdlbegaRGDCXjsgOUktAHyrdL02ikD',
      name: 'Black High-Tops',
      category: 'Shoes',
      price: 69.99,
      quantity: 120,
      status: 'In Stock'
    },
    {
      id: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIbCzzzsduMACucxIsnAsDCVxI_CvZ0xgJvNzLnqW5didkV2fT4rfjl1BJ8bICu4AiOd5A9ExaxrVklEBc-nYx_kCmKEg6Y6WZq3c4VYPiowoDb5pThx836oEy9W4FjvzDFPdO1oYv4FhqaXiLOo9C85JHGEa_p28osQ0JX-RQ32XFogqRZgwYVg5i8tuDOHNJlvSVDQzbLc5WYWwP8d8dgltaly3l9jYOPhwa0dIHOyvEJQxAqJyD7a7hfaW4Gl6jKNCDiu8sxeI1',
      name: 'Classic White Tee',
      category: 'Shirts',
      price: 25.00,
      quantity: 350,
      status: 'In Stock'
    },
    {
      id: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0PWBsso3dWbx_Vgr-Di_UjzT1UAxpXbYRhqlq824hWCUR9DopukqpE1989mloQjrYkRJX5JuZLuRbQ85t4St9ywvIsiojemWgvd6JY6f1Fn3PjrYiB6g6N3qEXOOUQSP9PaifBIuiWAsoJkQVepzZk9oYkc3LUkoHzIRKOy2itt_lVOxVI3lc-CwsTU6pFrm4wYw6wchG2cMgDr4Q19xOtKfslgcRingS2D4Dk17RZy7UgY4aursYgxrp23-fvac2x3bdP6y2ezKa',
      name: 'Slim Fit Pants',
      category: 'Pants',
      price: 89.50,
      quantity: 75,
      status: 'Low Stock'
    },
    {
      id: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsfrR43V-LhpGyKHZZGjew1R_yGWlPp9vSq1SB7NoCMpPc23nyPBFJBFcllxV3jMpjURvXlnenJBy7yTDmXmZp1lADKwPHpieMFq5rRIwIgLtVP6JOMKpCY4gej1H8iSpPXO5DieVaZwKhiTOIHhwJK4TqbMPrf7IMB9eoV0r8tiQr6X_wQspQ9kP6nFUv6AegV6vqEn1pddo471H4CYR76M1snTQ30AWtsfflXXsuyqMdWoCZURU39853FP1SqnddT5owVWYXs9Ag',
      name: 'Beige Baseball Cap',
      category: 'Caps',
      price: 19.99,
      quantity: 0,
      status: 'Out of Stock'
    },
    {
      id: 5,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC08fFVv9xJJvKrKQZ4J5y3nCorY4DWvmfnjlGqwI9aIc8IzQNcSuM3PaqJoCsUUHfBRa2wn37qE8pVwU-CnV0x5FuZTMJFwrynAtfJnv4lo4kukdvGl3BEBh5leaZ3V9v0WW_A_tMGoVI5gnt_N6xSg6Q3dB1cEyujqXGd4aYhs1-UnoKyC9L5r3Icwz0DfiDTiZ6pGvkpj6HIvobRnw5r7tNEmqfp4SS5EWA3wmE6PhaPQ3O-bVvLgc1t5uj0f7t7nZbmyIyR-LMC',
      name: 'Summer Fedora',
      category: 'Hats',
      price: 45.00,
      quantity: 25,
      status: 'Low Stock'
    }
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(products.map(p => p.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId: number) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Low Stock':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Out of Stock':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleEdit = (productId: number) => {
    console.log('Edit product:', productId);
    // TODO: Implement edit modal
  };

  const handleDelete = (productId: number) => {
    console.log('Delete product:', productId);
    // TODO: Implement delete confirmation
  };

  const handleAddProduct = () => {
    console.log('Add new product');
    // TODO: Implement add product modal
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-center h-16 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Admin Panel</h1>
        </div>

        <nav className="mt-5">
          <Link
            className="flex items-center px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            to="#"
          >
            <span className="material-icons mr-3">dashboard</span>
            Dashboard
          </Link>
          <Link
            className="flex items-center px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            to="/admin/orders"
          >
            <span className="material-icons mr-3">shopping_cart</span>
            Orders
          </Link>
          <Link
            className="flex items-center px-6 py-3 bg-blue-500 text-white transition-colors"
            to="/admin/products"
          >
            <span className="material-icons mr-3">inventory_2</span>
            Products
          </Link>
          <Link
            className="flex items-center px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            to="#"
          >
            <span className="material-icons mr-3">group</span>
            Customers
          </Link>
          <Link
            className="flex items-center px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            to="#"
          >
            <span className="material-icons mr-3">settings</span>
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Manage Products</h2>
            <button
              onClick={handleAddProduct}
              className="flex items-center bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            >
              <span className="material-icons mr-2">add</span>
              Add New Product
            </button>
          </div>

          {/* Products Table */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-50 dark:bg-slate-700">
                  <tr>
                    <th className="p-4" scope="col">
                      <input
                        type="checkbox"
                        checked={selectedProducts.length === products.length}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        className="rounded border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:focus:ring-blue-600"
                      />
                    </th>
                    <th className="px-6 py-3" scope="col">Product Name</th>
                    <th className="px-6 py-3" scope="col">Category</th>
                    <th className="px-6 py-3" scope="col">Price</th>
                    <th className="px-6 py-3" scope="col">Quantity</th>
                    <th className="px-6 py-3" scope="col">Status</th>
                    <th className="px-6 py-3" scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600/50">
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => handleSelectProduct(product.id)}
                          className="rounded border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:focus:ring-blue-600"
                        />
                      </td>
                      <th className="px-6 py-4 font-medium whitespace-nowrap text-slate-900 dark:text-white flex items-center" scope="row">
                        <img
                          alt={product.name}
                          className="w-10 h-10 rounded-md mr-4 object-cover"
                          src={product.image}
                        />
                        {product.name}
                      </th>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4">{product.quantity}</td>
                      <td className="px-6 py-4">
                        <span className={getStatusClass(product.status)}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleEdit(product.id)}
                          className="text-blue-500 hover:text-blue-700 mr-2"
                          title="Edit"
                        >
                          <span className="material-icons text-base align-middle">edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Delete"
                        >
                          <span className="material-icons text-base align-middle">delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <nav aria-label="Table navigation" className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-slate-700">
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                Showing <span className="font-semibold text-slate-900 dark:text-white">1-5</span> of <span className="font-semibold text-slate-900 dark:text-white">25</span>
              </span>
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <button className="px-3 py-2 ml-0 leading-tight text-slate-500 bg-white border border-slate-300 rounded-l-lg hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                    Previous
                  </button>
                </li>
                <li>
                  <button aria-current="page" className="z-10 px-3 py-2 leading-tight text-white border border-blue-300 bg-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-slate-700 dark:bg-blue-500 dark:text-white">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-2 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-2 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                    3
                  </button>
                </li>
                <li>
                  <button className="px-3 py-2 leading-tight text-slate-500 bg-white border border-slate-300 rounded-r-lg hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductManagementPage;
