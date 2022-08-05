import React from 'react';
import Navbar from '../../../Components/Users/Navbar/navbar'
import Product from '../../../Components/Users/Products/product';
import Footer from '../../../Components/Users/Footer/footer';

function products() {
  return (
      <div>
          <Navbar/>
          <Product/>
          <Footer/>
      </div>
  )
}

export default products;
