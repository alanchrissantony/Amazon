import React, { useEffect } from 'react'
import './email.css'
import Logo from '../../../Images/AmazonLogo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { detailsUser } from '../../../actions/userActions'
import LoadingBox from '../LoadingBox/loadingBox'
import MessageBox from '../MessageBox/messageBox'

function Email() {

  const navigate = useNavigate()

  const [newEmail, setNewEmail] = useState(null)

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

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    navigate('/login&security')
};

  return (
    <div className='emailChangeSection'>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
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
                <input type="email" name='email' className="emailChangeBoxInput" onChange={(e) => { setNewEmail(e.target.value) }} />
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