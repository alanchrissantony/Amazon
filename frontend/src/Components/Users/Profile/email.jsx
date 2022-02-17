import React, { useEffect } from 'react'
import './email.css'
import Logo from '../../../Images/AmazonLogo.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Email() {

  const navigate = useNavigate()

    const userSignIn = useSelector((state) => state.userSignin)

    const { userInfo } = userSignIn;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
    })

  return (
    <div className='emailChangeSection'>
        <div className="emailChangeContainer">
            <div className="emailChangeLogoDiv">
                <img src={Logo} alt="" className='emailChangeLogo' onClick={(e)=>{
                  e.preventDefault()
                  navigate('/')
                }}/>
            </div>
            <div className="emailChangeBoxContainer">
              <div className="emailChangeBoxDiv">
                <div className="emailChangeBoxTitleDiv">
                  <p className="emailChangeBoxTitle">Change your email address</p>
                </div>
                <div className="emailChangeBoxEmailTextDiv">
                  <p className="emailChangeBoxEmailText">Current email address: {userInfo.email}</p>
                </div>
                <div className="emailChangeBoxParaTextDiv">
                  <p className="emailChangeBoxParaText">Enter the new email address you would like to associate with your account below.</p>
                </div>
                <div className="emailChangeBoxInputDiv">
                  <label htmlFor="email" className="emailChangeBoxLabel">New email address</label>
                  <br />
                  <input type="text" name='email' className="emailChangeBoxInput" />
                </div>
                <div className="emailChangeBoxBtnDiv">
                  <button className="emailChangeBoxBtn">Continue</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Email