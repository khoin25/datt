// app/account/components/Dashboard.tsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard text-black">
      <h4 style={{fontWeight: 'bold'}}>Dashboard</h4>
      <p>
        From your account dashboard. you can easily check & view your
        <a href="#" style={{color: '#3B82F6'}}> recent orders</a>,
        manage your
        <a href="#" style={{color: '#3B82F6'}}> shipping and billing addresses </a>
        and
        <a href="#" style={{color: '#3B82F6'}}> Edit your password and account details.</a>
      </p>
    </div>
  );
};
export default Dashboard;