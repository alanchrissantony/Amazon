import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './productScreen.css'
import MessageBox from '../MessageBox/messageBox';
import LoadingBox from '../LoadingBox/loadingBox';


function ProductScreen(props) {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {

            try {
                setLoading(true)
                const { data } = await axios.get('/api/products')
                setLoading(false)
                setProducts(data)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        };
        fetchData();
    }, [])


    const product= products.find(element => element._id === '2')
  

    

    return (
        <div>
            {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : product ? (
            <div className='productScreenSection'>
                <div className="productScreenImageDiv">
                    <img className='productScreenImage' src={product.image} alt="" />
                </div>
                <div className="productScreenContentDiv">
                    <div className="productScreenContentTextDiv">
                        <div className="productScreenTitleDiv">
                            <p className='productScreenTitle'>{product.title}</p>
                        </div>
                        <div className="productScreenRatingDiv">
                                <span> <i className={product.rating >= 1 ? "fa fa-star" : product.rating >= 0.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 2 ? "fa fa-star" : product.rating >= 1.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 3 ? "fa fa-star" : product.rating >= 2.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 4 ? "fa fa-star" : product.rating >= 3.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 5 ? "fa fa-star" : product.rating >= 4.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                        </div>
                        <div className='productScreenReviewDiv'><span className='productScreenReviewText'>{product.review} ratings</span></div>
                        <br />
                        <div className='productScreenPriceDiv'>
                            <p className='productScreenPrice'><span className='productScreenPriceTitle'>Price: </span><span className='productScreenPriceValue'>$</span><span className='productScreenPriceValue'>{product.price}</span><span className='productScreenPriceValue'>{product.decimal}</span></p>
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
          ) : (
              <LoadingBox></LoadingBox>
          )}
            
        </div>
    )
}

export default ProductScreen;
