import React, { useState } from 'react'
import './header.css'
import Logo from '../../../Images/logo.svg'
import { useNavigate, Link } from 'react-router-dom'
import { FirebaseContext } from '../../../store/FirebaseContext'
import { useContext } from 'react'




function Header() {

    const navigate = useNavigate()

    const {firebase}=useContext(FirebaseContext)


    return (
        <div>
            <div className="containerheader">
                <img className='logo' src={Logo} alt="" onClick={(e) => {
                    e.preventDefault()
                    navigate('/')
                }} />
                
                <div className='panelTextDiv'>
                    <a className='productsText'><span className='panelText'>Products</span></a>
                    <a className='usersText'><span className='panelText'>Users</span></a>
                    <a className='ordersText'><span className='panelText'>Orders</span></a>
                    <a className='adminText'>
                        <span className='panelText'>Admin
                            <ul className='dropdown-content' >
                                <div className='headerSignOutDiv'>
                                    <br />
                                    <button className='headerSignOutBtn' onClick={(e) => {
                                        e.preventDefault()
                                        firebase.auth().signOut()
                                        localStorage.removeItem('adminInfo')
                                        navigate('/admin')
                                    }}>Sign out</button>
                                </div>
                            </ul>
                        </span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Header
