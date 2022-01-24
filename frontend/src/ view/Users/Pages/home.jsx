import React from 'react';
import Navbar from '../../../Components/Users/Navbar/navbar'
import Home from '../public/home';
import Footer from '../../../Components/Users/Footer/footer';

function home() {
  return (
      <div>
          <Navbar/>
          <Home/>
          <Footer/>
      </div>
  )
}

export default home;
