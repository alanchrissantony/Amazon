import React from 'react'
import AdminPanel from '../../../Components/Admin/Panel/panel'
import Footer from '../../../Components/Users/Footer/footer';
import Header from '../../../Components/Admin/Header/header'
import Dash from '../../../Components/Admin/Panel/Dash';
import OrderActivity from '../../../Components/Admin/Panel/OrderActivity';

function panel() {
  return (
    <div>
        <Header/>
        <AdminPanel/>
        <Dash/>
        <OrderActivity/>
        <Footer/>
    </div>
  )
}

export default panel