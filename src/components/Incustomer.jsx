import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Invoice from "./invoice";
import Title from './dashboardcomponents/Title';
import Button from '@mui/material/Button';

function Customerdetails() {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  const handleCopyLocation = () => {
    navigator.clipboard.writeText(orderDetails.location);
    alert('Location copied to clipboard!');
  };

  useEffect(() => {
    // Simulate fetching order details based on orderId from backend
    // Dummy data for testing
    const dummyOrderData = {
      orderId: orderId,
      customerID: '542154',
      // Add other order details as needed
      customerName: 'santhosh',
      customer_mobile_number: '8412145796',
      shifting_type: 'House shifting',
      shiftingfrom: 'Hosur ',
      shiftingto: 'Bangalore',
      progress:'completed',
      shifting_date:'2024-04-21 T-17:45:34',
      totalPrice: 100,
      location:'',
      // Add more dummy data fields as needed
    };

    // Simulate delay for fetching data
    const delay = setTimeout(() => {
      setOrderDetails(dummyOrderData);
    }, 1000); // Simulate 1 second delay

    return () => clearTimeout(delay); // Cleanup timeout on component unmount
  }, [orderId]);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Three columns with equal width
    gap: '8px', // Gap between grid items
    alignItems: 'center',
    marginLeft: '150px',
    marginBottom:'60px'
  };

  // Inline styles for the child elements
  const childStyles = {
    marginBottom: '5px', 
    fontWeight:'bold'// Add margin between elements
  };

  // Render order details
  return (
    <div style={{marginLeft:'30px',marginRight:'30px'}}>
      <h1 style={{  fontWeight: "900",marginBottom: '60px' ,textAlign:'center' }}>Order Details</h1>
      <div style={containerStyles}>
        <Title> Order ID: {orderDetails.orderId}</Title>
       <p> <p style={childStyles}>CustomerID: </p>{orderDetails.customerID}</p>
       <p> <p style={childStyles}>Shifting from: </p>{orderDetails.shiftingfrom}</p>
        
        <p><p style={childStyles}>Customer mobile number:</p>{orderDetails.customer_mobile_number}</p>
        <p> <p style={childStyles}>Service: </p>{orderDetails.shifting_type}</p>
        <p> <p style={childStyles}>Shifting to: </p>{orderDetails.shiftingto}</p>
        <p><p style={childStyles}>Customer name: </p>{orderDetails.customerName}</p>
        
        <p> <p style={childStyles}>Status: </p>{orderDetails.progress}</p>
        <p> <p style={childStyles}>Total Price: ₹ </p>{orderDetails.totalPrice}</p>
        <p><p style={childStyles}>Shifting date: </p>{orderDetails.shifting_date}</p>
        <p><p style={childStyles}>Location link: </p><a target="_blank" rel="noopener noreferrer" href="https://www.google.co.in/maps/dir/Hosur,+Tamil+Nadu/Bangalore,+Karnataka/@12.8788979,77.5253162,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3bae70c883f728a3:0xd71a6bc0275ac9be!2m2!1d77.8252923!2d12.7409127!1m5!1m1!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2m2!1d77.5945627!2d12.9715987?entry=ttu">click here (or)</a><Button variant="contained" style={{fontSize: '0.6rem', padding: '3px 4px'}} onClick={handleCopyLocation}>Copy</Button> </p>
        
        {/* Render other order details */}
      </div>
    
      {/* Render other order details */}
      <div>
      <Invoice/>
      </div>
    </div>
  );
}

export default Customerdetails;
