import React from 'react'
import { useNavigate } from 'react-router-dom'
import './password.css'

function Password() {

    const navigate = useNavigate()


    return (
        <div className='passwordChangeSection'>
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
                            <input type="password" name='currentPassword' className="passwordChangeBoxCurrentPasswordInput" />
                        </div>
                        <div className="passwordChangeBoxNewPasswordInputDiv">
                            <label htmlFor="newPassword" className="passwordChangeBoxNewPasswordLabel">New password:</label>
                            <br />
                            <input type="password" name='newPassword' className="passwordChangeBoxNewPasswordInput" />
                        </div>
                        <div className="passwordChangeBoxConformPasswordInputDiv">
                            <label htmlFor="conformPassword" className="passwordChangeBoxConformPasswordLabel">Reenter new password:</label>
                            <br />
                            <input type="password" name='conformPassword' className="passwordChangeBoxConformPasswordInput" />
                        </div>
                        <div className="passwordChangeSaveChangeBtnDiv">
                            <button className="passwordChangeSaveChangeBtn">Save changes</button>
                        </div>
                    </div>
                </div>
                <div />
            </div>
        </div>
    )
}

export default Password