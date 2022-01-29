import React,{useState} from 'react'
import './signup.css'
import logo from '../../../Images/AmazonLogo.png'
import {useNavigate} from 'react-router-dom'


function Signup() {

    const navigate=useNavigate()


    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [repassword,setRepassword]=useState('')






    const handleSubmit=(e)=>{
        e.preventDefault()
       
        
    }

    return (
        <div>
            <section>
        <div className="container-signup">
            <div className="logo-container">
                <img src={logo} className="logo-signup" onClick={(e)=>{
                    e.preventDefault()
                    navigate('/')
                }} alt=""/>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="signup-box">
                <p className='create-account-text'>Create account</p>
                <label for="name" className='name-label'>Your name</label>
                <br/>
                <input type="text" name="name" className='input' value={name} onChange={(e)=>setName(e.target.value)}/>
                <label for="email" className='email-label' >Email address</label>
                <br/>
                <input type="email" name="email" className='input' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br/>
                <label for="password" className='password-label' >Password</label>
                <br/>
                <input type="password" name="password" className='input' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <label for="password" className='password-label'>Re-enter password</label>
                <br/>
                <input type="password" name="Re-enter-password " className='input' value={repassword} onChange={(e)=>setRepassword(e.target.value)}/>
                <br/>
                <button id="signup-btn" >Continue</button>
                <br/>
                <p className='privacy-text'>By continuing, you agree to Amazon's Conditions of Use <br/>and Privacy Notice.</p>
                
                <br />
                <br />

                <a className='signin' onClick={(e)=>{
                    e.preventDefault()
                    navigate('/login')
                }}><span className='signinText'>Already have an account? </span>Sign In</a>
            </div>
            </form>
        </div>
    </section>
        </div>
    )
}

export default Signup