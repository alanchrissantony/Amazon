import React, { useContext, useState } from 'react'
import logo from '../../../Images/AmazonLogo.png'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {

    const navigate = useNavigate()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    const handleLogin = (e) => {
        e.preventDefault()
        
    }


    return (
        <div>
            <section>
                <div className="container-login">
                    <div className="logo-container">
                        <img src={logo} className="logo-login" onClick={(e) => {
                            e.preventDefault()
                            navigate('/')
                        }} alt="" />
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="login-box">
                            <p className='signin-text'>Sign-In</p>
                            <label for="email" className='email-label'>Email address</label>
                            <br />
                            <input type="email" name="email" placeholder="Enter Email Address" className='email-input'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <label for="password" className='password-label'>Password</label>
                            <br />
                            <input type="password" name="password" className='password-input'
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            <button id="login-btn">Continue</button>
                            <br />
                            <p className='privacy-text'>By continuing, you agree to Amazon's Conditions of Use <br />and Privacy Notice.</p>
                            <br />
                            <hr />
                            <p className='new-to-amazon-text'>New to Amazon?</p>
                            <button id="create-btn" onClick={(e) => {
                                e.preventDefault()
                                navigate('/signup')
                            }}>Create your Amazon account</button>

                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login;
