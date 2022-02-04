import React, { useEffect } from 'react';
import './placeOrder.css'
import placeOrderLogo from '../../../Images/complete-payment-banner.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


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

    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=shipping')
        }
        else if (cartItems.length <= 0) {
            navigate('/')
        }
        else if (!shippingAddress) {
            navigate('/shipping')
        }
    })

    const placeOrderHandler = () => {
        navigate('/')
    }

    const [giftVoucherError, setGiftVoucherError] = useState('');

    const giftVoucherHandler = ()=>{
        setGiftVoucherError(true) 
    }


    return (
        <div className='placeOrderSection'>
            <div className="placeOrderContainer">
                <div className="placeOrderImageDiv">
                    <img src={placeOrderLogo} alt="" />
                </div>
                <div className="placeOrderTitleDiv">
                    <p className="placeOrderTitle">Review your order</p>
                </div>


                <div className="placeOrderShippingSection">
                    <div className="placeOrderShippingAddressContainer">
                        <div className="placeOrderShippingAddressTitleDiv">
                            <p className="placeOrderShippingAddressTitle">Shipping address <span className='placeOrderShippingAddressTitleChange'> Change</span></p>
                        </div>
                        <div className="placeOrderShippingAddressNameDiv">
                            <p className="placeOrderShippingAddressName">{shippingAddress.name}</p>
                        </div>
                        <div className="placeOrderShippingAddressTextDiv">
                            <p className="placeOrderShippingAddressText">{shippingAddress.address}, {shippingAddress.landmark}</p>
                        </div>
                        <div className="placeOrderShippingAddressPlaceDiv">
                            <p className="placeOrderShippingAddressPlace">{shippingAddress.place}</p>
                        </div>
                        <div className="placeOrderShippingAddressCityDiv">
                            <p className="placeOrderShippingAddressCity">{shippingAddress.city}, {shippingAddress.state} {shippingAddress.pinCode}</p>
                        </div>
                        <div className="placeOrderShippingAddressCountryDiv">
                            <p className="placeOrderShippingAddressCountry">{shippingAddress.country}</p>
                        </div>
                        <div className="placeOrderShippingAddressMobileDiv">
                            <p className="placeOrderShippingAddressMobile">Phone: {shippingAddress.mobile}</p>
                        </div>
                    </div>
                    <div className="placeOrderPaymentMethodContainer">
                        <div className="placeOrderPaymentMethodTitleDiv">
                            <p className="placeOrderPaymentMethodTitle">Shipping address <span className='placeOrderPaymentMethodChange'> Change</span></p>
                        </div>
                        <div className="placeOrderPaymentMethodDiv">
                            <p className="placeOrderPaymentMethod">PayPal</p>
                        </div>
                    </div>
                    

                    <div className="placeOrderGiftVoucherContainer">
                        <div className="placeOrderGiftVoucherTitleDiv">
                            <p className="placeOrderGiftVoucherTitle">Gift cards, Voucher & Promotional<br />codes</p>
                        </div>
                        <div className="placeOrderGiftVoucherDiv">
                            <input type="text" className='placeOrderGiftVoucherInput' placeholder=' Enter Code'/>
                            <button className='placeOrderGiftVoucherBtn' onClick={(e)=>{
                                e.preventDefault()
                                giftVoucherHandler()
                            }}>Apply</button>
                            {giftVoucherError && <p className='placeOrderGiftVoucherCodeOutput'>!  The promotional code you entered is not valid.</p>}
                        </div>
                    </div>


                </div>
                


                <div className="placeOrderPlaceSection">
                    <div className="placeOrderPlaceContainer">
                        <div className="placeOrderPlaceContinueBtnDiv">
                            <button className="placeOrderPlaceContinueBtn" onClick={(e) => {
                                e.preventDefault()
                                placeOrderHandler()
                            }}>Place your order</button>
                        </div>
                        <div className="placeOrderPlaceOrderTitleDiv">
                            <p className="placeOrderPlaceOrderTitle">Order Summary</p>
                        </div>
                        <div className="placeOrderPlaceItemsTextDiv">
                            <p className="placeOrderPlaceItemsText">Items : </p>
                            <p className='placeOrderPlaceItemsPrice'>$ {itemsPrice}</p>
                        </div>
                        <div className="placeOrderPlaceDeliveryTextDiv">
                            <p className="placeOrderPlaceDeliveryText">Delivery : </p>
                            <p className='placeOrderPlaceDeliveryPrice'>$ {deliveryCharge}</p>
                        </div>
                        <div className="placeOrderPlaceTotalTextDiv">
                            <p className="placeOrderPlaceTotalText">Total : </p>
                            <p className='placeOrderPlaceTotalPrice'>$ {totalPrice}</p>
                        </div>
                        <div className="placeOrderPlacePromotionTextDiv">
                            <p className="placeOrderPlacePromotionText">Promotion Applied :</p>
                            <p className='placeOrderPlacePromotionPrice'>‒ $ {promotionalPrice}</p>
                        </div>
                        <hr />
                        <div className="placeOrderPlaceOrderTotalDiv">
                            <p className="placeOrderPlaceOrderTotal">Order Total :</p>
                            <p className='placeOrderPlaceOrderTotalPrice'>$ {orderTotalPrice}</p>
                        </div>
                        <hr />
                        <div className="placeOrderPlaceSavingsTextDiv">
                            <p className="placeOrderPlaceSavingsText">Your Savings :</p>
                            <p className='placeOrderPlaceSavingPrice'>$ {promotionalPrice}</p>
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


                <div className="placeOrderContentContainer">

                    <div className="placeOrderContentContainerDivSection">
                        {cartItems.map(product => (
                            <div key={product.product} className="placeOrderContentDiv">
                                <div className="placeOrderContentImageDiv">
                                    <img src={product.image} alt="" className='placeOrderContentImage' />
                                </div>
                                <div className='placeOrderContentContainerDiv'>
                                    <div className="placeOrderContentProductTitleDiv">
                                        <p className="placeOrderContentProductTitle">{product.name}</p>
                                    </div>

                                    <div className="placeOrderContentProductPriceDiv">
                                        <p className="placeOrderContentProductPrice">${product.price}</p>
                                    </div>
                                    <div className="placeOrderContentProductQtyDiv">
                                        <p className="placeOrderContentProductQtyTitle">Quantity: <span className='placeOrderContentProductQty'>{product.qty} </span> <span className='placeOrderContentProductQtyChange' onClick={(e) => {
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

        </div>
    )
}

export default Payment;
