import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './logInSecurity.css'

function LogInSecurity() {

    const navigate = useNavigate()

    const userSignIn = useSelector((state) => state.userSignin)
    const { userInfo } = userSignIn;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
    })

    return (
        <div className='logInSecuritySection'>
            <div className="logInSecurityContainer">
                <div className="logInSecurityAccountTextDiv">
                    <p className='logInSecurityAccountText'><span className='logInSecurityYourAccountText'  onClick={(e)=>{
                        e.preventDefault()
                        navigate('/')
                    }} >Your Account </span>{'  '} {'  ›'} <span className='logInSecurityLogInSecurityText'> Login & Security</span></p>
                </div>
                <div className="logInSecurityTitleDiv">
                    <p className="logInSecurityTitle">Login & Security</p>
                </div>
                <div className="logInSecurityContainerDiv">
                    <div className="logInSecurityNameDiv">
                        <div className="logInSecurityNameTextDiv">
                            <p className="logInSecurityNameTitle">Name:</p>
                            <p className="logInSecurityName">{userInfo.name}</p>
                        </div>
                        <div className="logInSecurityNameBtnDiv">
                            <button className="logInSecurityNameBtn" onClick={(e)=>{
                                e.preventDefault()
                                navigate('/changeName')
                            }}>Edit</button>
                        </div>
                    </div>

                    <div className="logInSecurityEmailDiv">
                        <div className="logInSecurityEmailTextDiv">
                            <p className="logInSecurityEmailTitle">E-mail:</p>
                            <p className="logInSecurityEmail">{userInfo.email}</p>
                        </div>
                        <div className="logInSecurityEmailBtnDiv">
                            <button className="logInSecurityEmailBtn" onClick={(e)=>{
                                e.preventDefault()
                                navigate('/changeEmail')
                            }}>Edit</button>
                        </div>
                    </div>

                    <div className="logInSecurityPasswordDiv">
                        <div className="logInSecurityPasswordTextDiv">
                            <p className="logInSecurityPasswordTitle">Password:</p>
                            <p className="logInSecurityPassword">{'***********'}</p>
                        </div>
                        <div className="logInSecurityPasswordBtnDiv">
                            <button className="logInSecurityPasswordBtn"  onClick={(e)=>{
                                e.preventDefault()
                                navigate('/changePassword')
                            }}>Edit</button>
                        </div>
                    </div>
                </div>
                <div className="logInSecurityDoneBtnDiv">
                    <button className='logInSecurityDoneBtn'>Done</button>
                </div>
            </div>
        </div>
    )
}

export default LogInSecurity