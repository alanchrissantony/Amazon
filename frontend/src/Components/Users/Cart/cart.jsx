import React, { useEffect } from 'react';
import './cart.css'
import { addToCart, removeFromCart } from '../../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function Cart(props) {


    const proId = window.location.pathname.split('/')

    const productId = proId[2]

    const quantity = window.location.search.split('=')

    const qty = Number ? quantity[1] : 1

    const dispatch = useDispatch();

    const navigate = useNavigate()

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userSignIn = useSelector((state) => state.userSignin)
    const { userInfo } = userSignIn;

    const removeFromCartHandler = (id) => {
        // delete action
        dispatch(removeFromCart(id));
    };


    const checkoutHandler = () => {
        if (userInfo) {
            navigate('/shipping')
        }
        else {
            navigate('/login?redirect=shipping')
        }
    }

    const toPrice = (num) => Number(num.toFixed(2))



    return (
        <div className='cartSection'>
            {cartItems.length <= 0 ? (
                <div className='emptyCartDiv'>
                    <div className="emptyCart">
                        <p className='emptyCartContentText'>Your Amazon Cart is empty.</p>
                        <Link to='/' className='goShoppingLink'>
                            <p className='emptyCartShoppingLink'>Go shopping {'›'}</p>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="cartContainer">
                    <div className="cartBoxContainer">
                        <p className='shoppingCartText'>Shopping Cart</p>
                        <p className='CartBoxPriceTitleText'>price</p>
                        <hr className='cartTitleHr' />
                        {cartItems.map(product => (
                            <div key={product.product} className="cartBox">
                                <div className="cartImageDiv">
                                    <img className='cartImage' src={product.image} alt="" />
                                </div>
                                <div className="cartContentBox">
                                    <div className="cartProductTitleDiv">
                                        <p className="cartProductTitle">{product.name}</p>
                                    </div>
                                    <div className="cartStockDiv">
                                        {product.countInStock ? <p className="cartStockText">In Stock</p> : <p className="productScreenUnavailableText">Out of Stock</p>}
                                    </div>
                                    {product.countInStock ? <div className="cartQtyBtnDiv">
                                        <button className='cartBtnQty'>
                                            <span className='cartBtnText'>Qty: </span>
                                            <select className='cartSelectBtnQty' defaultValue={product.qty} onChange={(e) =>
                                                dispatch(
                                                    addToCart(product.product, Number(e.target.value))
                                                )
                                            }>

                                                {[...Array(product.countInStock)].map((x, i) =>
                                                    <option key={i + 1}>{i + 1}</option>

                                                )}


                                            </select>
                                        </button>
                                    </div> : ''}
                                    <div className="cartDeleteDiv">

                                        <p className="cartDeleteTextTag"><span className='cartDeleteTextMark'>|</span><span onClick={() => { removeFromCartHandler(product.product) }} className='cartDeleteText'>Delete</span></p>
                                    </div>

                                </div>
                                <div className="cartProductPriceDiv">
                                    <p className="cartProductPrice">${toPrice(product.price)}</p>
                                </div>
                                <hr className='cartBottomHr' />

                            </div>
                        ))}


                        <div className="subTotalCartDiv">
                            <p className="subTotalCartText"><span className='cartSubTotalText'>Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} {cartItems.length <= 1 ? "item" : "items"}) : </span><span className='cartSubTotalPrice'> ${toPrice(cartItems.reduce((a, c) => a + c.price * c.qty, 0))}</span></p>
                        </div>
                    </div>
                    <div className="checkoutBox">
                        <p className="subTotalText"><span className='checkOutSubTotalText'>Subtotal ({cartItems.reduce((a, c) => (a + c.qty), 0)} {cartItems.length <= 1 ? "item" : "items"}) : </span><span className='checkOutSubTotalPrice'> ${toPrice(cartItems.reduce((a, c) => a + c.price * c.qty, 0))}</span></p>
                        <button type='button' className='checkOutBtn' disabled={cartItems.length === 0} onClick={(e) => {
                            e.preventDefault()
                            checkoutHandler()
                        }}>Proceed to checkout</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Cart;
