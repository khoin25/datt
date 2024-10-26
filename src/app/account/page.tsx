'use client';
import React, { useState } from 'react';
import OrderDetail from './component/OrderDetails';
import OrderHistory from './component/OrderHistory';
import UserProfile from './component/UserProfile';
import Addresses from './component/Addresses';
import Dashboard from './component/Dashboard';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('DASHBOARD');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const orders = [
    { id: 1, date: 'May 10, 2018', status: 'Completed', total: '$25.00', items: 1 },
    { id: 2, date: 'June 15, 2018', status: 'Processing', total: '$50.00', items: 2 },
  ];

  const downloads = [
    { id: 1, product: 'Product 1', date: 'May 10, 2018', expires: 'Expired', link: '#' },
    { id: 2, product: 'Product 2', date: 'June 15, 2018', expires: 'Never', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-white flex justify-center items-start">
      <div className="w-full md:w-4/5 bg-white rounded-lg p-4 md:p-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row md:mr-8 md:w-1/4">
            {['DASHBOARD', 'ORDERS', 'DOWNLOADS', 'ADDRESSES', 'ACCOUNT DETAILS'].map((tab) => (
              <div
                key={tab}
                className={`bg-black text-white text-sm p-2 cursor-pointer text-center ${
                  activeTab === tab ? 'bg-blue-500' : ''
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="flex-1">
            {activeTab === 'DASHBOARD' && <Dashboard />}
            {activeTab === 'ORDERS' && <OrderDetail orders={orders} />}
            {activeTab === 'DOWNLOADS' && <OrderHistory downloads={downloads} />}
            {activeTab === 'ACCOUNT DETAILS' && <UserProfile />}
            {activeTab === 'ADDRESSES' && <Addresses />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;