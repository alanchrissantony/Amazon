import React from 'react'
import Order from '../../../Components/Users/Order/order'
import Navbar from '../../../Components/Users/Navbar/navbar'
import Footer from '../../../Components/Users/Footer/footer'

function order() {
    return (
        <div>
            <Navbar />
            <Order />
            <Footer />
        </div>
    )
}

export default order