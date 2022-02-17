import React from 'react';
import './footer.css'
import logo from '../../../Images/logo.png'



function footer() {

  var day = new Date(),
    date = day.getFullYear();

  return (
    <div>
      <section className="footerBtnSec">
        <button className="footerBtn" onClick={(e) => {
          e.preventDefault()
          window.scrollTo(0, 0)
        }}>Back to top</button>
      </section>
      <footer className='footerSection'>
        <div className="row footerLogoDiv">
          <img className='footerLogo' src={logo} alt="" />
        </div>
        <div className="row footerContentDiv">
          <p className='footerContentText'>© 1996-{date}, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>
    </div>
  )
}

export default footer;
