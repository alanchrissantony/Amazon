import React from 'react';
import Navbar from '../../../Components/Users/Navbar/navbar'
import Departments from '../../../Components/Users/Departments/departments'
import RowPost from '../../../Components/Users/RowPosts/rowPost';
import Footer from '../../../Components/Users/Footer/footer';

function home() {
  return (
      <div>
          <Navbar/>
          <Departments/>
          <RowPost/>
          <Footer/>
      </div>
  )
}

export default home;
