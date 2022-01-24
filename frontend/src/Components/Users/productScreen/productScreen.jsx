import React from 'react';
import './productScreen.css'

function productScreen() {
    return (
        <div className='productScreenSection'>
            <div className="productScreenImageDiv">
                <img className='productScreenImage' src="https://www.gizmochina.com/wp-content/uploads/2021/07/noname-500x500.jpg" alt="" />
            </div>
            <div className="productScreenContentDiv">
                <div className="productScreenContentTextDiv">
                    <div className="productScreenTitleDiv">
                        <p className='productScreenTitle'>Acer Aspire 5 A515-56-36UT Slim Laptop | 15.6" Full HD Display | 11th Gen Intel Core i3-1115G4 Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Amazon Alexa | Windows 10 Home (S mode)</p>
                    </div>
                    <div className="productScreenRatingDiv">
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                    </div>
                    <div className='productScreenReviewDiv'><span className='productScreenReviewText'>1364 ratings</span></div>
                    <br />
                    <div className='productScreenPriceDiv'>
                        <p className='productScreenPrice'><span className='productScreenPriceTitle'>Price: </span><span className='productScreenPriceValue'>$ 3826.98</span></p>
                    </div>
                    <div className="productScreenInStockDiv">
                        <p className="productScreenInStockText">In Stock</p>
                    </div>
                    <div className="productScreenQtyBtnDiv">
                        <button className='btnQty'>
                            <span className='btnText'>Qty: </span>
                            <select name="" id="" className='selectBtnQty'>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </button>
                    </div>
                    <div className="CartBuyButtonsDiv">
                        <button className='ProductCartBtn'><span className='ProductCartBtnText'>Add to Cart</span></button>
                        <button className='ProductBuyBtn'><span className='ProductBuyBtnText'>Buy Now</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productScreen;
