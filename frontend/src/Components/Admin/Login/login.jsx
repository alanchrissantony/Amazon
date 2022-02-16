import React from 'react'
import './login.css'
import logo from '../../../Images/AmazonLogo.png'

function adminLogin() {
    return (
        <div>
            <section className='adminLoginContainer'>
                <img src={logo} alt="" className='imgLogo'/>
                <div className="logincontainer">
                    <div className="signinContainer">
                        <p className='AdminText'>Admin Panel</p>
                        <p className='signInText'>Sign In</p>
                    </div>
                    <i class="fas fa-user"></i>
                    <input type="email" placeholder='Username' className='usernameInput'/>
                    <br />
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder='Password' className='passwordInput'/>
                    <br />
                    <p className='adminLoginReturn'>Return to home page</p>
                    <button className='btn btn-success'>Login</button>
                </div>
            </section>
        </div>
    )
}

export default adminLogin
