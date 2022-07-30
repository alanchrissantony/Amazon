import React from 'react'
import AdminPanel from '../../../Components/Admin/Panel/panel'
import Footer from '../../../Components/Users/Footer/footer';
import Header from '../../../Components/Admin/Header/header'
import Dash from '../../../Components/Admin/Panel/Dash';
import OrderActivity from '../../../Components/Admin/Panel/OrderActivity';
import Progress from '../../../Components/Admin/Panel/Progress';

function panel() {
  return (
    <div>
        <Header/>
        <AdminPanel/>
        <Dash/>
        <Progress/>
        <OrderActivity/>
        <Footer/>
    </div>
  )
}

export default panel