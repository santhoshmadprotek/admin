import React from 'react';
import Card from './card1'; // Assuming you have created the Card component

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Card title="Total Orders" count={100} icon="order-icon.png" />
        </div>
        <div className="col-md-3">
          <Card title="Revenue" count="$10K" icon="revenue-icon.png" />
        </div>
        <div className="col-md-3">
          <Card title="Users" count={500} icon="users-icon.png" />
        </div>
        <div className="col-md-3">
          <Card title="Products" count={50} icon="products-icon.png" />
        </div>
      </div>
    </div>
  );
};

export default App;
