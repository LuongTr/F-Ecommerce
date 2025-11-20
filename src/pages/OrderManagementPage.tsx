import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderManagementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock orders data
  const orders = [
    {
      id: 'ORD-00124',
      customer: 'John Doe',
      date: '2023-10-26',
      total: 150.00,
      status: 'Pending',
      statusColor: 'yellow'
    },
    {
      id: 'ORD-00123',
      customer: 'Jane Smith',
      date: '2023-10-25',
      total: 79.99,
      status: 'Shipped',
      statusColor: 'blue'
    },
    {
      id: 'ORD-00122',
      customer: 'Sam Wilson',
      date: '2023-10-24',
      total: 250.50,
      status: 'Delivered',
      statusColor: 'green'
    },
    {
      id: 'ORD-00121',
      customer: 'Emily Brown',
      date: '2023-10-23',
      total: 45.00,
      status: 'Cancelled',
      statusColor: 'gray'
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const getStatusClass = (statusColor: string) => {
    switch (statusColor) {
      case 'yellow':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'blue':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'green':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'gray':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    console.log(`Changing order ${orderId} status to ${newStatus}`);
    // TODO: Implement status update
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
            className="flex items-center px-6 py-3 bg-blue-500 text-white transition-colors"
            to="/admin/orders"
          >
            <span className="material-icons mr-3">shopping_cart</span>
            Orders
          </Link>
          <Link
            className="flex items-center px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
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
            <span className="material-icons mr-3">analytics</span>
            Analytics
          </Link>
          <Link
            className="flex items-center px-6 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            to="#"
          >
            <span className="material-icons mr-3">settings</span>
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <Link
            className="flex items-center px-4 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            to="#"
          >
            <span className="material-icons mr-3">logout</span>
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Manage Orders</h2>
          </div>

          {/* Orders Table */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-50 dark:bg-slate-700">
                  <tr>
                    <th className="px-6 py-3" scope="col">Order ID</th>
                    <th className="px-6 py-3" scope="col">Customer</th>
                    <th className="px-6 py-3" scope="col">Date</th>
                    <th className="px-6 py-3" scope="col">Total</th>
                    <th className="px-6 py-3" scope="col">Status</th>
                    <th className="px-6 py-3" scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600/50">
                      <td className="px-6 py-4 font-medium whitespace-nowrap text-slate-900 dark:text-white">
                        {order.id}
                      </td>
                      <td className="px-6 py-4">{order.customer}</td>
                      <td className="px-6 py-4">{order.date}</td>
                      <td className="px-6 py-4">${order.total.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={getStatusClass(order.statusColor)}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <nav aria-label="Table navigation" className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-slate-700">
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                Showing <span className="font-semibold text-slate-900 dark:text-white">1-4</span> of <span className="font-semibold text-slate-900 dark:text-white">4</span>
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

export default OrderManagementPage;
