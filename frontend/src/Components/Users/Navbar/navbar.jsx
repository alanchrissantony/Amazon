import React from 'react';
import './navbar.css'
import Logo from '../../../Images/logo.png'
import Cart from '../../../Images/cart.png'

function home() {
  return(
      <div className='navcontainer'>
          <div className='navbarContainer'>
              <header className="userHomeHeader">
                <div className="row logoRowHomeHeader">
                  <div className='amazonNavLogoDiv'>
                    <a href=""><img className='amazonNavLogo' src={Logo} alt="" /></a>
                  </div>
                  <div className='navTextDivAccount'>
                   <a href=""> <p className='navText'>Hello, Sign in <br /><span className='navHighText'>Account & Lists</span></p></a>
                  </div>
                  <div className='navTextDivOrders'>
                    <a href=""><p className='navText'>Returns <br /><span className='navHighText'>& Orders</span></p></a>
                  </div>
                  <div className='navTextDivCart'>
                    <a href=""><img className='cartNavLogo' src={Cart} alt="" /><p className='navHighText cartText'>Cart</p></a>
                  </div>
                </div>
                <div className="row departmentRowHomeHeader">

                </div>
              </header>
          </div>
      </div>
  )
}

export default home;
