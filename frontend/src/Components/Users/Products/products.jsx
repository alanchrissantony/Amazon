import React from 'react';
import './products.css'
import data from '../Data/data';

function products() {



    return (
        <div className='productsSectionContainer'>
            <div className="productsContainer">
                {data.electronics.map(electronics=>(
                    <div key={electronics._id} className="productBox">
                    <div className="productsImageDiv">
                        <a className='productsImageLink'><img className='productsImage' src={electronics.image} alt="" /></a>
                    </div>
                    <div className='productsTitleDiv'>
                        <a className='productsTitleLink'><p className='productsTitle'>{electronics.title}</p></a>
                    </div>
                    
                    <div className="productsRatingDiv">
                        <span> <i className={electronics.rating >=1? "fa fa-star": electronics.rating >=0.5? "fa fa-star-half": "fa fa-star-o"}></i> </span>
                        <span> <i className={electronics.rating >=2? "fa fa-star": electronics.rating >=1.5? "fa fa-star-half": "fa fa-star-o"}></i> </span>
                        <span> <i className={electronics.rating >=3? "fa fa-star": electronics.rating >=2.5? "fa fa-star-half": "fa fa-star-o"}></i> </span>
                        <span> <i className={electronics.rating >=4? "fa fa-star": electronics.rating >=3.5? "fa fa-star-half": "fa fa-star-o"}></i> </span>
                        <span> <i className={electronics.rating >=5? "fa fa-star": electronics.rating >=4.5? "fa fa-star-half": "fa fa-star-o"}></i> </span>
                    </div>
                    <div className='productsReviewDiv'><span className='productsReviewText'>{electronics.review}</span></div>
                    <br />
                    <div className='productsPriceDiv'>
                        <p className='productsPrice'><span className='productsPriceDollar'>$</span><span className='productsPriceText'>{electronics.price}</span><span className='productsPriceDecimal'>{electronics.decimal}</span></p>
                    </div>
                    <hr />
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default products;
