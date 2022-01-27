import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './cart.css'
import LoadingBox from '../LoadingBox/loadingBox';
import MessageBox from '../MessageBox/messageBox';


function Cart() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [cartQty, setCartQty] = useState(1);


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




    return (
        <div className='cartSection'>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <div className="cartContainer">
                    <div className="cartBoxContainer">
                        <p className='shoppingCartText'>Shopping Cart</p>
                        <p className='CartBoxPriceTitleText'>price</p>
                        <hr className='cartTitleHr' />
                        {products.map(product=>(
                            <div key={product._id} className="cartBox">
                            <div className="cartImageDiv">
                                <img className='cartImage' src={product.image} alt="" />
                            </div>
                            <div className="cartContentBox">
                                <div className="cartProductTitleDiv">
                                    <p className="cartProductTitle">{product.title}</p>
                                </div>
                                <div className="cartStockDiv">
                                    {product.stock ? <p className="cartStockText">In Stock</p> : <p className="productScreenUnavailableText">Out of Stock</p>}
                                </div>
                                {product.stock ? <div className="cartQtyBtnDiv">
                                    <button className='cartBtnQty'>
                                        <span className='cartBtnText'>Qty: </span>
                                        <select className='cartSelectBtnQty' value={2} onClick={(e)=>setCartQty(e.target.value)} >

                                        {[...Array(product.stock)].map((x, i)=>
                                        <option key={i+1}>{i+1}</option>
                                        
                                    )}


                                        </select>
                                    </button>
                                </div> : ''}
                                <div className="cartDeleteDiv">

                                    <p className="cartDeleteTextTag"><span className='cartDeleteTextMark'>|</span><span className='cartDeleteText'>Delete</span></p>
                                </div>

                            </div>
                            <div className="cartProductPriceDiv">
                                <p className="cartProductPrice">${product.price}.{product.decimal}</p>
                            </div>
                            <hr className='cartBottomHr' />
                        </div>
                        ))}

                        
                        <div className="subTotalCartDiv">
                            <p className="subTotalCartText"><span className='cartSubTotalText'>Subtotal (1 item) : </span><span className='cartSubTotalPrice'> $1356.99</span></p>
                        </div>
                    </div>
                    <div className="checkoutBox">
                        <p className="subTotalText"><span className='checkOutSubTotalText'>Subtotal (1 item) : </span><span className='checkOutSubTotalPrice'> $1356.99</span></p>
                        <button className='checkOutBtn'>Proceed to checkout</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Cart;
