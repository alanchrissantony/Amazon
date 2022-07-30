import React from 'react'
import Header from '../../../Components/Admin/Header/header'
import Products from '../../../Components/Admin/Products/Products'
import Footer from '../../../Components/Users/Footer/footer';

function products() {
  return (
    <div>
        <Header/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default products