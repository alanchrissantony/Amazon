import React from 'react';
import Navbar from '../../../Components/Users/Navbar/navbar'
import Cart from '../../../Components/Users/Cart/cart';
import Footer from '../../../Components/Users/Footer/footer';

function cart() {
  return (
      <div>
          <Navbar/>
          <Cart/>
          <Footer/>
      </div>
  )
}

export default cart;
