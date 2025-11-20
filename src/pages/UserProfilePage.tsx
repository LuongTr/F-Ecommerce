import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const UserProfilePage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor@example.com'
  });

  // Mock order history
  const orderHistory = [
    {
      id: '#34562',
      date: 'Oct 12, 2023',
      total: 245.50,
      status: 'Shipped',
      statusColor: 'green'
    },
    {
      id: '#34198',
      date: 'Sep 28, 2023',
      total: 112.00,
      status: 'Processing',
      statusColor: 'yellow'
    }
  ];

  // Mock saved addresses
  const savedAddresses = [
    {
      type: 'Home Address',
      lines: ['Eleanor Vance', '123 Dream Lane', 'Apt 4B', 'Faketown, FS 54321']
    },
    {
      type: 'Work Address',
      lines: ['Eleanor Vance', '456 Business Blvd', 'Suite 900', 'Metropolis, MS 12345']
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    console.log('Saving profile:', userInfo);
    setEditMode(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Center the entire content */}
      <div className="flex flex-col gap-8">
        {/* User Info Header */}
        <div className="text-center">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-20 mx-auto mb-4 bg-blue-500 flex items-center justify-center">
            <span className="material-icons text-white text-3xl">account_circle</span>
          </div>
          <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
            {userInfo.firstName} {userInfo.lastName}
            <span className="material-icons text-slate-500 text-lg">verified</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-1">
            <span className="material-icons text-sm">email</span>
            {userInfo.email}
          </p>
        </div>

        {/* Main Content Area */}
        <div className="space-y-8">
          {/* My Profile Section */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="material-icons text-3xl text-slate-700 dark:text-slate-300">person</span>
                <h2 className="text-3xl font-extrabold tracking-tight">My Profile</h2>
              </div>
              {editMode ? (
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={handleEditToggle}>
                    <span className="material-icons text-base mr-2">cancel</span>
                    <span>Cancel</span>
                  </Button>
                  <Button size="lg" onClick={handleSave}>
                    <span className="material-icons text-base mr-2">save</span>
                    <span>Save Changes</span>
                  </Button>
                </div>
              ) : (
                <Button onClick={handleEditToggle}>
                  <span className="material-icons text-base mr-2">edit</span>
                  <span>Edit Profile</span>
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span className="material-icons text-sm">person</span>
                  First Name
                </label>
                <input
                  type="text"
                  value={userInfo.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  readOnly={!editMode}
                  className={`form-input w-full rounded-lg border border-slate-200 dark:border-slate-600 ${
                    editMode ? 'bg-white dark:bg-slate-700' : 'bg-slate-50 dark:bg-slate-800'
                  } p-3 text-base placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/50 transition-colors`}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span className="material-icons text-sm">person</span>
                  Last Name
                </label>
                <input
                  type="text"
                  value={userInfo.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  readOnly={!editMode}
                  className={`form-input w-full rounded-lg border border-slate-200 dark:border-slate-600 ${
                    editMode ? 'bg-white dark:bg-slate-700' : 'bg-slate-50 dark:bg-slate-800'
                  } p-3 text-base placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/50 transition-colors`}
                />
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span className="material-icons text-sm">email</span>
                  Email Address
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  readOnly={!editMode}
                  className={`form-input w-full rounded-lg border border-slate-200 dark:border-slate-600 ${
                    editMode ? 'bg-white dark:bg-slate-700' : 'bg-slate-50 dark:bg-slate-800'
                  } p-3 text-base placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/50 transition-colors`}
                />
              </div>
            </div>
          </section>

          <hr className="border-slate-200 dark:border-slate-700" />

          {/* Order History Section */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-icons text-3xl text-slate-700 dark:text-slate-300">receipt_long</span>
              <h2 className="text-3xl font-extrabold tracking-tight">Order History</h2>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-700">
                  <tr>
                    <th className="px-6 py-3 font-semibold flex items-center gap-2">
                      <span className="material-icons text-sm">tag</span>
                      Order ID
                    </th>
                    <th className="px-6 py-3 font-semibold flex items-center gap-2">
                      <span className="material-icons text-sm">calendar_today</span>
                      Date
                    </th>
                    <th className="px-6 py-3 font-semibold flex items-center gap-2">
                      <span className="material-icons text-sm">attach_money</span>
                      Total
                    </th>
                    <th className="px-6 py-3 font-semibold flex items-center gap-2">
                      <span className="material-icons text-sm">info</span>
                      Status
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {orderHistory.map((order) => (
                    <tr key={order.id}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white">
                        {order.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-slate-600 dark:text-slate-400">
                        {order.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-slate-600 dark:text-slate-400">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          order.statusColor === 'green'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                        }`}>
                          <span className="material-icons text-xs mr-1">circle</span>
                          {order.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right">
                        <Link className="font-semibold text-blue-600 hover:underline flex items-center gap-1" to="#">
                          <span className="material-icons text-sm">visibility</span>
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-slate-200 dark:border-slate-700" />

          {/* Saved Addresses Section */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="material-icons text-3xl text-slate-700 dark:text-slate-300">home</span>
                <h2 className="text-3xl font-extrabold tracking-tight">Saved Addresses</h2>
              </div>
              <Button variant="secondary">
                <span className="material-icons text-base mr-2">add_location</span>
                <span>Add New Address</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {savedAddresses.map((address, index) => (
                <div key={index} className="rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <span className="material-icons text-lg">{address.type === 'Home Address' ? 'home' : 'business'}</span>
                      {address.type}
                    </h3>
                    <div className="flex gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                        <span className="material-icons text-lg">edit</span>
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg text-red-500 hover:bg-red-500/10">
                        <span className="material-icons text-lg">delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    {address.lines.map((line, idx) => (
                      <p key={idx} className={idx === 0 ? 'flex items-center gap-1' : ''}>
                        {idx === 0 && <span className="material-icons text-xs">person</span>}
                        {line}
                      </p>
                    ))}
                    <p className="flex items-center gap-1">
                      <span className="material-icons text-xs">location_on</span>
                      United States
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
