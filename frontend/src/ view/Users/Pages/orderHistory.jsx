import React from 'react';
import OrderHistory from '../../../Components/Users/OrderHistory/orderHistory';
import Navbar from '../../../Components/Users/Navbar/navbar'
import Footer from '../../../Components/Users/Footer/footer'


function orderHistory() {
  return (
  <div>
      <Navbar/>
      <OrderHistory/>
      <Footer/>
  </div>
  );
}

export default orderHistory;
