import React, { useEffect, useState } from 'react';
import './productScreen.css'
import MessageBox from '../MessageBox/messageBox';
import LoadingBox from '../LoadingBox/loadingBox';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../../../actions/productActions';


function ProductScreen(props) {


    const [qty,setQty]=useState(1)
    const [cart, setCart]=useState([])

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const proId = window.location.pathname.split('/')


    const productId= proId[2]

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const data = async () => {
        localStorage.removeItem('orderDetails');
    }

    data()

    useEffect(() => {
        dispatch(detailsProduct(productId));
      }, [dispatch, productId]);


    const handleAddCart=(e)=>{
        setCart([
            {
                id: product._id,
                title: product.name,
                brand: product.brand,
                category: product.category,
                image: product.image,
                price: product.price,
                quantity: qty
            }
        ])
        navigate(`/cart/${productId}?qty=${qty}`)
    }

    const handleBuyNow=(e)=>{
        setCart([
            {
                id: product._id,
                title: product.name,
                brand: product.brand,
                category: product.category,
                image: product.image,
                price: product.price,
                quantity: qty
            }
        ])
        navigate('/shipping')
    }

    useEffect(()=>{
        localStorage.setItem('Cart', JSON.stringify(cart))
    }, [cart])
    
    if(! product){
        return(
            <MessageBox>{error}</MessageBox>
        )
    }

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
                            <p className='productScreenTitle'>{product.name}</p>
                        </div>
                        <div className="productScreenBrandDiv">
                            <p className='productScreenBrand'>{product.brand}</p>
                        </div>
                        <div className="productScreenRatingDiv">
                                <span> <i className={product.rating >= 1 ? "fa fa-star" : product.rating >= 0.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 2 ? "fa fa-star" : product.rating >= 1.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 3 ? "fa fa-star" : product.rating >= 2.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 4 ? "fa fa-star" : product.rating >= 3.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 5 ? "fa fa-star" : product.rating >= 4.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                        </div>
                        <div className='productScreenReviewDiv'><span className='productScreenReviewText'>{product.numReviews} ratings</span></div>
                        <br />
                        <div className="productScreenDescriptionDiv">
                            <p className='productScreenDescription'>{product.description}</p>
                        </div>
                        <div className='productScreenPriceDiv'>
                            <p className='productScreenPrice'><span className='productScreenPriceTitle'>Price: </span><span className='productScreenPriceValue'>$</span><span className='productScreenPriceValue'>{product.price}</span></p>
                        </div>
                        <div className="productScreenInStockDiv">
                           {product.countInStock ? <p className="productScreenInStockText">In Stock</p> : <p className="productScreenUnavailableText">Out of Stock</p>}
                        </div>
                        {product.countInStock ? <div className="productScreenQtyBtnDiv">
                            <button className='btnQty'>
                                <span className='btnText'>Qty: </span>
                                <select name="" id="" value={qty} className='selectBtnQty' onChange={(e)=>setQty(e.target.value)}>
                                    {[...Array(product.countInStock)].map((x, i)=>
                                        <option key={i+1}>{i+1}</option>
                                        
                                    )}
                                </select>
                            </button>
                        </div> : ''}
                        
                        {product.countInStock ? <div className="CartBuyButtonsDiv">
                            <button onClick={()=>handleAddCart()} className='ProductCartBtn'><span className='ProductCartBtnText'>Add to Cart</span></button>
                            <button onClick={()=>handleBuyNow()} className='ProductBuyBtn'><span className='ProductBuyBtnText'>Buy Now</span></button>
                        </div> : ''}
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
