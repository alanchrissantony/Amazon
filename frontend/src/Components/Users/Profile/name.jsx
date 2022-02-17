import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './name.css'

function Name() {

    const navigate = useNavigate()

    const userSignIn = useSelector((state) => state.userSignin)

    const { userInfo } = userSignIn;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
    })


    return (
        <div className='nameChangeSection'>
            <div className="nameChangeContainer">
                <div className="nameChangeAccountTextDiv">
                    <p className='nameChangeAccountText'><span className='nameChangeYourAccountText' onClick={(e)=>{
                        e.preventDefault()
                        navigate('/')
                    }} >Your Account </span>{'  '} {'  ›'} <span className='nameChangeLogInSecurityText' onClick={(e)=>{
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
                            <input type="text" name='name' className='nameChangeBoxInput' defaultValue={userInfo.name} />
                        </div>
                        <div className="nameChangeSaveBtnDiv">
                            <button className='nameChangeSaveBtn'>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Name