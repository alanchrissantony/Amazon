import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { detailsUser, updateUserProfile } from '../../../actions/userActions'
import './password.css'
import LoadingBox from '../LoadingBox/loadingBox'
import MessageBox from '../MessageBox/messageBox'
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userconstants'

function Password() {

    const navigate = useNavigate()

    const [currentPassword, setCurrentPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [matchPassword, setMatchPassword] = useState(null)
    const [email, setEmail] = useState('')

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdateProfile;




    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        else if (!user) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo._id));
        } else {
            setEmail(user.email);
          }
    }, [dispatch, userInfo, navigate, userInfo._id, user]);




    const submitHandler = (e) => {
        e.preventDefault();
       
        // dispatch update profile
        
        if (password !== confirmPassword) {
            setMatchPassword('Password and confirm password are not matched');
        } else if (password.length < 8) {
            setMatchPassword('Passwords must have at least 8 characters');
        } else {
            setMatchPassword(null)
            dispatch(updateUserProfile({ userId: user._id, password }));
        }
    };

    return (
        <div className='passwordChangeSection'>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : loadingUpdate ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox></MessageBox>
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
                            {errorUpdate && (
                                <div className='passwordChangeErrorDiv'><p className='passwordChangeErrorContent'>{errorUpdate} !</p></div>
                            )}
                            
                            {matchPassword && (
                                <div className='passwordChangeErrorDiv'><p className='passwordChangeErrorContent'>{matchPassword} !</p></div>
                            )}
                            {successUpdate && (
                                <div className='passwordChangeSuccessDiv'><p className='passwordChangeSuccessContent'>{'Profile Updated Successfully'}</p></div>
                            )}
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
                                <input type="password" name='password' className="passwordChangeBoxNewPasswordInput" onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <div className="passwordChangeBoxConformPasswordInputDiv">
                                <label htmlFor="conformPassword" className="passwordChangeBoxConformPasswordLabel">Reenter new password:</label>
                                <br />
                                <input type="password" name='conformPassword' className="passwordChangeBoxConformPasswordInput" onChange={(e) => { setConfirmPassword(e.target.value) }} />
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