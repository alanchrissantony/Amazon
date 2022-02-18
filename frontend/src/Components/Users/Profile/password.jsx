import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { detailsUser } from '../../../actions/userActions'
import './password.css'
import LoadingBox from '../LoadingBox/loadingBox'
import MessageBox from '../MessageBox/messageBox'

function Password() {

    const navigate = useNavigate()

    const [currentPassword, setCurrentPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [conformPassword, setConformPassword] = useState(null)

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
    }, [dispatch, userInfo, navigate, userInfo._id]);


    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        navigate('/login&security')
    };

    return (
        <div className='passwordChangeSection'>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <div className="passwordChangeContainer">
                    <div className="passwordChangeAccountTextDiv">
                        <p className='passwordChangeAccountText'><span className='passwordChangeYourAccountText' onClick={(e) => {
                            e.preventDefault()
                            navigate('/')
                        }} >Your Account </span>{'  '} {'  ›'} <span className='passwordChangeLogInSecurityText' onClick={(e) => {
                            e.preventDefault()
                            navigate('/login&security')
                        }} > Login & Security</span>{'  '} {'  ›'} <span className='passwordChangePasswordChangeText'> Change Password</span></p>
                    </div>
                    <div className="passwordChangeTitleDiv">
                        <p className="passwordChangeTitle">Change Password</p>
                    </div>
                    <div className="passwordChangeBoxSection">
                        <div className="passwordChangeBoxContainer">
                            <div className="passwordChangeBoxParaTextDiv">
                                <p className="passwordChangeBoxParaText">Use the form below to change the password for your Amazon account</p>
                            </div>
                            <div className="passwordChangeBoxCurrentPasswordInputDiv">
                                <label htmlFor="currentPassword" className="passwordChangeBoxCurrentPasswordLabel">Current password:</label>
                                <br />
                                <input type="password" name='currentPassword' className="passwordChangeBoxCurrentPasswordInput" onChange={(e) => { setCurrentPassword(e.target.value) }} />
                            </div>
                            <div className="passwordChangeBoxNewPasswordInputDiv">
                                <label htmlFor="newPassword" className="passwordChangeBoxNewPasswordLabel">New password:</label>
                                <br />
                                <input type="password" name='newPassword' className="passwordChangeBoxNewPasswordInput" onChange={(e) => { setNewPassword(e.target.value) }} />
                            </div>
                            <div className="passwordChangeBoxConformPasswordInputDiv">
                                <label htmlFor="conformPassword" className="passwordChangeBoxConformPasswordLabel">Reenter new password:</label>
                                <br />
                                <input type="password" name='conformPassword' className="passwordChangeBoxConformPasswordInput" onChange={(e) => { setConformPassword(e.target.value) }} />
                            </div>
                            <div className="passwordChangeSaveChangeBtnDiv">
                                <button className="passwordChangeSaveChangeBtn" onClick={submitHandler}>Save changes</button>
                            </div>
                        </div>
                    </div>
                    <div />
                </div>
            )}
        </div>
    )
}

export default Password