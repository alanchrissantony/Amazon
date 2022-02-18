import React, { useEffect } from 'react'
import './email.css'
import Logo from '../../../Images/AmazonLogo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { detailsUser, updateUserProfile } from '../../../actions/userActions'
import LoadingBox from '../LoadingBox/loadingBox'
import MessageBox from '../MessageBox/messageBox'
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userconstants'

function Email() {

  const navigate = useNavigate()

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
    } else if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setEmail(user.email);
    }
  }, [dispatch, userInfo, navigate, userInfo._id, user, user.email]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    dispatch(updateUserProfile({ userId: user._id, email }));
  };

  return (
    <div className='emailChangeSection'>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : loadingUpdate ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox></MessageBox>
      ) : (
        <div className="emailChangeContainer">
          <div className="emailChangeLogoDiv">
            <img src={Logo} alt="" className='emailChangeLogo' onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }} />
          </div>
          <div className="emailChangeBoxContainer">
            <div className="emailChangeBoxDiv">
              {errorUpdate && (
                <div className='emailChangeErrorDiv'><p className='emailChangeErrorContent'>{errorUpdate} !</p></div>
              )}
              {successUpdate && (
                <div className='emailChangeSuccessDiv'><p className='emailChangeSuccessContent'>{'Profile Updated Successfully'}</p></div>
              )}
              <div className="emailChangeBoxTitleDiv">
                <p className="emailChangeBoxTitle">Change your email address</p>
              </div>
              <div className="emailChangeBoxEmailTextDiv">
                <p className="emailChangeBoxEmailText">Current email address: {user.email}</p>
              </div>
              <div className="emailChangeBoxParaTextDiv">
                <p className="emailChangeBoxParaText">Enter the new email address you would like to associate with your account below.</p>
              </div>
              <div className="emailChangeBoxInputDiv">
                <label htmlFor="email" className="emailChangeBoxLabel">New email address</label>
                <br />
                <input type="email" name='email' className="emailChangeBoxInput" onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className="emailChangeBoxBtnDiv">
                <button className="emailChangeBoxBtn" onClick={submitHandler}>Continue</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Email