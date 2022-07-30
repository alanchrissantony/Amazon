import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { detailsUser, updateUserProfile } from '../../../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userconstants';
import LoadingBox from '../LoadingBox/loadingBox';
import MessageBox from '../MessageBox/messageBox';
import './name.css'

function Name() {

    const navigate = useNavigate()

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();

    const [name, setName] = useState('')

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdateProfile;



    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else if (!user) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
        }
    }, [dispatch, userInfo, navigate, userInfo._id, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        dispatch(updateUserProfile({ userId: user._id, name }));
    };


    return (
        <div className='nameChangeSection'>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : loadingUpdate ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox></MessageBox>
            ) : (
                <div className="nameChangeContainer">
                    <div className="nameChangeAccountTextDiv">
                        <p className='nameChangeAccountText'><span className='nameChangeYourAccountText' onClick={(e) => {
                            e.preventDefault()
                            navigate('/')
                        }} >Your Account </span>{'  '} {'  ›'} <span className='nameChangeLogInSecurityText' onClick={(e) => {
                            e.preventDefault()
                            navigate('/login&security')
                        }} > Login & Security</span>{'  '} {'  ›'} <span className='nameChangeNameChangeText'> Change Your Name</span></p>
                    </div>
                    <div className="nameChangeTitleDiv">
                        <p className="nameChangeTitle">Change Your Name</p>
                    </div>
                    <div className="nameChangeContainerDiv">
                        <div className="nameChangeDiv">
                            {errorUpdate && (
                                <div className='nameChangeErrorDiv'><p className='nameChangeErrorContent'>{errorUpdate} !</p></div>
                            )}
                            {successUpdate && (
                                <div className='nameChangeSuccessDiv'><p className='nameChangeSuccessContent'>{'Profile Updated Successfully'}</p></div>
                            )}
                            <div className="nameChangeBoxTextDiv">
                                <p className="nameChangeBoxText">If you want to change the name associated with your Amazon customer account, you may do so below. Be sure to click the <b>Save Changes</b> button when you are done.</p>
                            </div>
                            <div className="nameChangeBoxInputDiv">
                                <label htmlFor="name" className='nameChangeBoxLabel'>New name</label>
                                <br />
                                <input type="text" name='name' className='nameChangeBoxInput' defaultValue={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="nameChangeSaveBtnDiv">
                                <button className='nameChangeSaveBtn' onClick={submitHandler}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Name