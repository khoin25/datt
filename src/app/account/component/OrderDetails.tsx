// app/account/components/OrderDetail.tsx
import React from 'react';

const OrderDetail = ({ orders }) => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Orders</h2>
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left text-black">Order</th>
            <th className="py-2 px-4 text-left text-black">Date</th>
            <th className="py-2 px-4 text-left text-black">Status</th>
            <th className="py-2 px-4 text-left text-black">Total</th>
            <th className="py-2 px-4 text-left text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4 text-black">{order.id}</td>
              <td className="py-2 px-4 text-black">{order.date}</td>
              <td className="py-2 px-4 text-black">{order.status}</td>
              <td className="py-2 px-4 text-black">{order.total}</td>
              <td className="py-2 px-4 text-black">
                <a href={`/orders/${order.id}`} className="text-blue-500 hover:text-blue-700">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetail;