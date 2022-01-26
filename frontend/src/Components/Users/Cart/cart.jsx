import React from 'react';
import './cart.css'


function cart() {
  return (
      <div className='cartSection'>
          <div className="cartContainer">
              <div className="cartBoxContainer">
                  <p className='shoppingCartText'>Shopping Cart</p>
                  <p className='CartBoxPriceTitleText'>price</p>
                  <hr className='cartTitleHr' />
                <div className="cartBox">
                    <div className="cartImageDiv">
                        <img className='cartImage' src="https://www.gizmochina.com/wp-content/uploads/2021/07/noname-500x500.jpg" alt="" />
                    </div>
                    <div className="cartContentBox">
                        <div className="cartProductTitleDiv">
                            <p className="cartProductTitle">Acer Aspire 5 A515-56-36UT Slim Laptop | 15.6" Full HD Display | 11th Gen Intel Core i3-1115G4 Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Amazon Alexa |</p>
                        </div>
                        <div className="cartStockDiv">
                            <p className='cartStockDiv'>In Stock</p>
                        </div>
                        <div className="cartQtyBtnDiv">
                            <button className='cartBtnQty'>
                                <span className='cartBtnText'>Qty: </span>
                                <select className='cartSelectBtnQty' >
                                    
                                        <option >1</option>
                                        
                                    
                                </select>
                            </button>
                        </div>
                        <div className="cartDeleteDiv">
                            
                            <p className="cartDeleteTextTag"><span className='cartDeleteTextMark'>|</span><span className='cartDeleteText'>Delete</span></p>
                        </div>
            
                    </div>
                    <div className="cartProductPriceDiv">
                        <p className="cartProductPrice">$1345.99</p>
                    </div>
                </div>
              </div>
              <div className="checkoutBox">
                  
              </div>
          </div>
      </div>
  )
}

export default cart;
