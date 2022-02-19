import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { detailsUser } from '../../../../actions/userActions';
import LoadingBox from '../../LoadingBox/loadingBox';
import MessageBox from '../../MessageBox/messageBox';
import './logInSecurity.css'

function LogInSecurity() {

    const navigate = useNavigate()

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();


    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo, navigate]);

    return (
        <div className='logInSecuritySection'>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <div className="logInSecurityContainer">
                    <div className="logInSecurityAccountTextDiv">
                        <p className='logInSecurityAccountText'><span className='logInSecurityYourAccountText' onClick={(e) => {
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
                                <p className="logInSecurityName">{user.name}</p>
                            </div>
                            <div className="logInSecurityNameBtnDiv">
                                <button className="logInSecurityNameBtn" onClick={(e) => {
                                    e.preventDefault()
                                    navigate('/changeName')
                                }}>Edit</button>
                            </div>
                        </div>

                        <div className="logInSecurityEmailDiv">
                            <div className="logInSecurityEmailTextDiv">
                                <p className="logInSecurityEmailTitle">E-mail:</p>
                                <p className="logInSecurityEmail">{user.email}</p>
                            </div>
                            <div className="logInSecurityEmailBtnDiv">
                                <button className="logInSecurityEmailBtn" onClick={(e) => {
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
                                <button className="logInSecurityPasswordBtn" onClick={(e) => {
                                    e.preventDefault()
                                    navigate('/changePassword')
                                }}>Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="logInSecurityDoneBtnDiv">
                        <button className='logInSecurityDoneBtn' onClick={(e)=>{
                            e.preventDefault()
                            navigate('/')
                        }}>Done</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LogInSecurity