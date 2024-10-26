// app/account/components/OrderHistory.tsx
import React from 'react';

const OrderHistory = ({ downloads }) => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Downloads</h2>
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left text-black">Product</th>
            <th className="py-2 px-4 text-left text-black">Downloads</th>
            <th className="py-2 px-4 text-left text-black">Expires</th>
            <th className="py-2 px-4 text-left text-black">Download</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((download) => (
            <tr key={download.id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4 text-black">{download.product}</td>
              <td className="py-2 px-4 text-black">{download.date}</td>
              <td className="py-2 px-4 text-black">{download.expires}</td>
              <td className="py-2 px-4 text-black">
                <a href={download.link} className="text-blue-500 hover:text-blue-700">
                  Click Here To Download Your File
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;