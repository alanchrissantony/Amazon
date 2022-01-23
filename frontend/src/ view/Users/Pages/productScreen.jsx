import React from 'react';
import Navbar from '../../../Components/Users/Navbar/navbar'
import Footer from '../../../Components/Users/Footer/footer';
import ProductScreen from '../../../Components/Users/productScreen/productScreen';


function productScreen() {
  return (
      <div>
          <Navbar/>
          <ProductScreen/>
          <Footer/>
      </div>
  )
}

export default productScreen;
