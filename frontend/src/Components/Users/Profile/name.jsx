import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { detailsUser } from '../../../actions/userActions';
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

    const [newName, setNewName] = useState(null)

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        navigate('/login&security')
    };


    return (
        <div className='nameChangeSection'>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
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
                            <div className="nameChangeBoxTextDiv">
                                <p className="nameChangeBoxText">If you want to change the name associated with your Amazon customer account, you may do so below. Be sure to click the <b>Save Changes</b> button when you are done.</p>
                            </div>
                            <div className="nameChangeBoxInputDiv">
                                <label htmlFor="name" className='nameChangeBoxLabel'>New name</label>
                                <br />
                                <input type="text" name='name' className='nameChangeBoxInput' defaultValue={user.name} onChange={(e) => { setNewName(e.target.value) }} />
                            </div>
                            <div className="nameChangeSaveBtnDiv">
                                <button className='nameChangeSaveBtn' onClick={submitHandler}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Name