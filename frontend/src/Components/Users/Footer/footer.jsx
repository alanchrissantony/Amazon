import React from 'react';
import './footer.css'
import logo from '../../../Images/logo.png'

function footer() {
  return (
      <div>
          <footer className='footerSection'>
            <div className="row footerLogoDiv">
                <img className='footerLogo' src={logo} alt="" />
            </div>
            <div className="row footerContentDiv">
                <p className='footerContentText'>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
          </footer>
      </div>
  )
}

export default footer;
