import React, { useEffect } from 'react';
import './placeOrder.css'
import placeOrderLogo from '../../../Images/complete-payment-banner.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';




function PlaceOrder() {

    const navigate = useNavigate()


    const orderId = window.location.pathname.split('/')[2]



    const userSignIn = useSelector((state) => state.userSignin)
    const { userInfo } = userSignIn;




    const data = async (orderId) => {
        const { data } = await Axios.get(`/api/orders/${orderId}`)
        localStorage.setItem('orderDetails', JSON.stringify(data));
    }

    data(orderId)

    const orderDetails = localStorage.getItem('orderDetails')
    const order = JSON.parse(orderDetails)
    const { orderItems, shippingAddress,itemsPrice, discountPrice, shippingPrice, totalPrice, paymentMethod } = order;



    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=shipping')
        }
    })

    const placeOrderHandler = () => {
        navigate('/')
    }

    const [giftVoucherError, setGiftVoucherError] = useState('');

    const giftVoucherHandler = () => {
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
                            <p className="placeOrderShippingAddressCity">{shippingAddress.city}, {shippingAddress.state}, {shippingAddress.pinCode}</p>
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
                            <p className="placeOrderPaymentMethodTitle">Payment method <span className='placeOrderPaymentMethodChange'> Change</span></p>
                        </div>
                        <div className="placeOrderPaymentMethodDiv">
                            <p className="placeOrderPaymentMethod">{paymentMethod}</p>
                        </div>
                    </div>


                    <div className="placeOrderGiftVoucherContainer">
                        <div className="placeOrderGiftVoucherTitleDiv">
                            <p className="placeOrderGiftVoucherTitle">Gift cards, Voucher & Promotional<br />codes</p>
                        </div>
                        <div className="placeOrderGiftVoucherDiv">
                            <input type="text" className='placeOrderGiftVoucherInput' placeholder=' Enter Code' />
                            <button className='placeOrderGiftVoucherBtn' onClick={(e) => {
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
                            <p className='placeOrderPlaceDeliveryPrice'>$ {shippingPrice}</p>
                        </div>
                        <div className="placeOrderPlaceTotalTextDiv">
                            <p className="placeOrderPlaceTotalText">Total : </p>
                            <p className='placeOrderPlaceTotalPrice'>$ {totalPrice + shippingPrice}</p>
                        </div>
                        <div className="placeOrderPlacePromotionTextDiv">
                            <p className="placeOrderPlacePromotionText">Promotion Applied :</p>
                            <p className='placeOrderPlacePromotionPrice'>‒ $ {discountPrice}</p>
                        </div>
                        <hr />
                        <div className="placeOrderPlaceOrderTotalDiv">
                            <p className="placeOrderPlaceOrderTotal">Order Total :</p>
                            <p className='placeOrderPlaceOrderTotalPrice'>$ {totalPrice}</p>
                        </div>
                        <hr />
                        <div className="placeOrderPlaceSavingsTextDiv">
                            <p className="placeOrderPlaceSavingsText">Your Savings :</p>
                            <p className='placeOrderPlaceSavingPrice'>$ {discountPrice}</p>
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
                        {orderItems.map(product => (
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

export default PlaceOrder;
