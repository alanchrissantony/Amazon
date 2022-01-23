import React from 'react';
import Navbar from '../../../Components/Users/Navbar/navbar'
import Products from '../../../Components/Users/Products/products';
import Footer from '../../../Components/Users/Footer/footer';

function products() {
  return (
      <div>
          <Navbar/>
          <Products/>
          <Footer/>
      </div>
  )
}

export default products;
