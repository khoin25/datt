// app/account/components/Addresses.tsx
import React from 'react';

const Addresses = () => {
  return (
    <div className="tab-pane active show text-black" id="address" role="tabpanel">
      <p style={{color: '#3A3A3A' }}>
        The following addresses will be used on the checkout page by default.
      </p>
      <h5 className="billing-address" style={{ fontWeight:'bold'}}>Billing address</h5>
      <a href="#" className="view" style={{ color: 'blue' }}>Edit</a>
      <p className="mb-2">
        <strong>Michael M Hoskins</strong>
      </p>
      <address>
        <span className="mb-1 d-inline-block text-gray" >
          <strong>City:</strong> Seattle
        </span>
        <br />
        <span className="mb-1 d-inline-block text-gray">
          <strong>State:</strong> Washington(WA),
        </span>
        <br />
        <span className="mb-1 d-inline-block text-gray">
          <strong>ZIP:</strong> 98101,
        </span>
        <br />
        <span className="mb-1 d-inline-block text-gray">
          <strong>Country:</strong> USA
        </span>
      </address>
    </div>
  );
};

export default Addresses;