import React from 'react'
import AdminPanel from '../../../Components/Admin/Panel/panel'
import Footer from '../../../Components/Users/Footer/footer';
import Header from '../../../Components/Admin/Header/header'

function panel() {
  return (
    <div>
        <Header/>
        <AdminPanel/>
        <Footer/>
    </div>
  )
}

export default panel