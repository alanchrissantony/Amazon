import React from 'react';
import PlaceOrder from '../../../Components/Users/PlaceOrder/placeOrder';
import Navbar from '../../../Components/Users/Navbar/navbar'
import Footer from '../../../Components/Users/Footer/footer'


function placeOrder() {
  return (
  <div>
      <Navbar/>
      <PlaceOrder/>
      <Footer/>
  </div>
  );
}

export default placeOrder;
