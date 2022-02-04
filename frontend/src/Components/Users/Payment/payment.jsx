import React, { useEffect } from 'react';
import './payment.css'
import paymentLogo from '../../../Images/confirm-banner.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Payment() {

    const navigate = useNavigate()


    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cart;

    const userSignIn = useSelector((state) => state.userSignin)
    const { userInfo } = userSignIn;


    const toPrice = (num) => Number(num.toFixed(2))

    const itemsPrice = toPrice(cartItems.reduce((a, c) => a + c.price * c.qty, 0))
    const deliveryCharge = Math.ceil(cartItems.reduce((a, c) => a + c.price * c.qty * 5 / 100, 0))
    const totalPrice = itemsPrice + deliveryCharge
    const promotionalApplied = (totalPrice - deliveryCharge - itemsPrice * 5 / 100)
    const promotionalPrice = toPrice(totalPrice - promotionalApplied)
    const orderTotalPrice = toPrice(totalPrice - promotionalPrice)

    useEffect(()=>{
        if(!userInfo){
            navigate('/login?redirect=shipping')
        }
        else if(cartItems.length <= 0){
            navigate('/')
        }
        else if(!shippingAddress){
            navigate('/shipping')
        }
    })
    
    const paymentContinueHandler = ()=>{
        navigate('/place-order')
    }


    return (
        <div className='paymentSection'>
            <div className="paymentContainer">
                <div className="paymentImageDiv">
                    <img src={paymentLogo} alt="" />
                </div>
                <div className="paymentTitleDiv">
                    <p className="paymentTitle">Select a payment method</p>
                </div>
                <div className="paymentContentContainer">
                <div className="paymentMethodContainerDiv">
                        <div className="paymentMethodTitleDiv">
                            <p className="paymentMethodTitle">Payment method</p>
                        </div>
                        <div className="paymentMethodContentDiv">
                            <p className="paymentMethodContent">PayPal</p>
                        </div>
                    </div>
                    <div className="paymentContentContainerDivSection">
                    {cartItems.map(product => (
                        <div key={product.product} className="paymentContentDiv">
                            <div className="paymentContentImageDiv">
                                <img src={product.image} alt="" className='paymentContentImage' />
                            </div>
                            <div className='paymentContentContainerDiv'>
                                <div className="paymentContentProductTitleDiv">
                                    <p className="paymentContentProductTitle">{product.name}</p>
                                </div>
                
                                <div className="paymentContentProductPriceDiv">
                                    <p className="paymentContentProductPrice">${product.price}</p>
                                </div>
                                <div className="paymentContentProductQtyDiv">
                                    <p className="paymentContentProductQtyTitle">Quantity: <span className='paymentContentProductQty'>{product.qty} </span> <span className='paymentContentProductQtyChange' onClick={(e)=>{
                                        e.preventDefault()
                                        navigate('/cart/:id')
                                    }}> Change</span></p>
                                </div>
                            </div>

                        </div>

                    ))}
                    </div>


                </div>
            </div>
            <div className="paymentPlaceSection">
                <div className="paymentPlaceContainer">
                <div className="paymentPlaceContinueBtnDiv">
                        <button className="paymentPlaceContinueBtn" onClick={(e)=>{
                            e.preventDefault()
                            paymentContinueHandler()}}>Place your order</button>
                    </div>
                    <div className="paymentPlaceOrderTitleDiv">
                        <p className="paymentPlaceOrderTitle">Order Summary</p>
                    </div>
                    <div className="paymentPlaceItemsTextDiv">
                        <p className="paymentPlaceItemsText">Items : </p>
                        <p className='paymentPlaceItemsPrice'>$ {itemsPrice}</p>
                    </div>
                    <div className="paymentPlaceDeliveryTextDiv">
                        <p className="paymentPlaceDeliveryText">Delivery : </p>
                        <p className='paymentPlaceDeliveryPrice'>$ {deliveryCharge}</p>
                    </div>
                    <div className="paymentPlaceTotalTextDiv">
                        <p className="paymentPlaceTotalText">Total : </p>
                        <p className='paymentPlaceTotalPrice'>$ {totalPrice}</p>
                    </div>
                    <div className="paymentPlacePromotionTextDiv">
                        <p className="paymentPlacePromotionText">Promotion Applied :</p>
                        <p className='paymentPlacePromotionPrice'>‒ $ {promotionalPrice}</p>
                    </div>
                    <hr />
                    <div className="paymentPlaceOrderTotalDiv">
                        <p className="paymentPlaceOrderTotal">Order Total :</p>
                        <p className='paymentPlaceOrderTotalPrice'>$ {orderTotalPrice}</p>
                    </div>
                    <hr />
                    <div className="paymentPlaceSavingsTextDiv">
                        <p className="paymentPlaceSavingsText">Your Savings :</p>
                        <p className='paymentPlaceSavingPrice'>$ {promotionalPrice}</p>
                        <ul className='ulSection'>
                            <li>
                                <span className='liText'>Free Delivery</span>
                            </li>
                            <li>
                                <span className='liText'>Item discount</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment;
