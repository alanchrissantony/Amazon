import React, { useEffect } from 'react';
import './placeOrder.css'
import placeOrderLogo from '../../../Images/complete-payment-banner.png'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { detailsOrder, payOrder } from '../../../actions/orderActions';
import LoadingBox from '../LoadingBox/loadingBox';
import MessageBox from '../MessageBox/messageBox';
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2'
import { ORDER_PAY_RESET } from '../../../constants/orderConstants';





function PlaceOrder() {

    const navigate = useNavigate()
    const dispatch = useDispatch();


    const orderId = window.location.pathname.split('/')[2]

    const [sdkReady, setSdkReady] = useState(false)

    const userSignIn = useSelector((state) => state.userSignin)
    const { userInfo } = userSignIn;

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    const orderPay = useSelector((state) => state.orderPay);
    const { error: errorPay, success: successPay, loading: loadingPay } = orderPay



    useEffect(() => {
        const addPayPalScript = async () => {
            const { data } = await Axios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = "text/javascript"
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }
        if (successPay) {
            dispatch({ type: ORDER_PAY_RESET });
            navigate('/orders')
        }
        if (!order || (order && order._id !== orderId)) {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch(detailsOrder(orderId));
        } else {
            if (!order.isPaid) {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, order, orderId, sdkReady, successPay, navigate]);







    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=shipping')
        }
    })


    const [giftVoucherError, setGiftVoucherError] = useState('');

    const giftVoucherHandler = () => {
        setGiftVoucherError(true)
    }

    const successPaymentHandler = (paymentResult) => {
        // TODO: dispatch pay order
        dispatch(payOrder(order, paymentResult));
    };






    return (
        <div className='placeOrderSection'>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <div className="placeOrderContainer">
                    <div className="placeOrderImageDiv">
                        <img src={placeOrderLogo} alt="" />
                    </div>
                    <div className="placeOrderTitleDiv">
                        <p className="placeOrderTitle">Review your order</p>
                    </div>
                    <div className="placeOrderIdTitleDiv">
                        <p className="placeOrderIdTitle">Order {order._id}</p>
                    </div>

                    <div className="placeOrderShippingSection">
                        <div className="placeOrderShippingAddressContainer">
                            <div className="placeOrderShippingAddressTitleDiv">
                                <p className="placeOrderShippingAddressTitle">Shipping address {!order.isPaid && <span className='placeOrderShippingAddressTitleChange'> Change</span>}</p>
                            </div>
                            <div className="placeOrderShippingAddressNameDiv">
                                <p className="placeOrderShippingAddressName">{order.shippingAddress.name}</p>
                            </div>
                            <div className="placeOrderShippingAddressTextDiv">
                                <p className="placeOrderShippingAddressText">{order.shippingAddress.address}, {order.shippingAddress.landmark}</p>
                            </div>
                            <div className="placeOrderShippingAddressPlaceDiv">
                                <p className="placeOrderShippingAddressPlace">{order.shippingAddress.place}</p>
                            </div>
                            <div className="placeOrderShippingAddressCityDiv">
                                <p className="placeOrderShippingAddressCity">{order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.pinCode}</p>
                            </div>
                            <div className="placeOrderShippingAddressCountryDiv">
                                <p className="placeOrderShippingAddressCountry">{order.shippingAddress.country}</p>
                            </div>
                            <div className="placeOrderShippingAddressMobileDiv">
                                <p className="placeOrderShippingAddressMobile">Phone: {order.shippingAddress.mobile}</p>
                            </div>
                        </div>
                        <div className="placeOrderPaymentMethodContainer">
                            <div className="placeOrderPaymentMethodTitleDiv">
                                <p className="placeOrderPaymentMethodTitle">Payment method {!order.isPaid && <span className='placeOrderPaymentMethodChange'> Change</span>}</p>
                            </div>
                            <div className="placeOrderPaymentMethodDiv">
                                <p className="placeOrderPaymentMethod">{order.paymentMethod}</p>
                            </div>
                        </div>

                        {!order.isPaid &&
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
                        }


                    </div>






                    <div className="placeOrderContentContainer">

                        <div className="placeOrderContentContainerDivSection">
                            {order.orderItems.map(product => (
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
                                            <p className="placeOrderContentProductQtyTitle">Quantity: <span className='placeOrderContentProductQty'>{product.qty} </span> {!order.isPaid && <span className='placeOrderContentProductQtyChange' onClick={(e) => {
                                                e.preventDefault()
                                                navigate('/cart/:id')
                                            }}> Change</span>}</p>
                                        </div>

                                    </div>

                                </div>

                            ))}
                        </div>


                    </div>


                    <div className="placeOrderPlaceSection">
                        <div className="placeOrderPlaceContainer">

                            <div className="placeOrderPlaceOrderTitleDiv">
                                <p className="placeOrderPlaceOrderTitle">Order Summary</p>
                            </div>
                            <div className="placeOrderPlaceItemsTextDiv">
                                <p className="placeOrderPlaceItemsText">Items : </p>
                                <p className='placeOrderPlaceItemsPrice'>$ {order.itemsPrice}</p>
                            </div>
                            <div className="placeOrderPlaceDeliveryTextDiv">
                                <p className="placeOrderPlaceDeliveryText">Delivery : </p>
                                <p className='placeOrderPlaceDeliveryPrice'>$ {order.shippingPrice}</p>
                            </div>
                            <div className="placeOrderPlaceTotalTextDiv">
                                <p className="placeOrderPlaceTotalText">Total : </p>
                                <p className='placeOrderPlaceTotalPrice'>$ {order.totalPrice + order.shippingPrice}</p>
                            </div>
                            <div className="placeOrderPlacePromotionTextDiv">
                                <p className="placeOrderPlacePromotionText">Promotion Applied :</p>
                                <p className='placeOrderPlacePromotionPrice'>‒ $ {order.discountPrice}</p>
                            </div>
                            <hr />
                            <div className="placeOrderPlaceOrderTotalDiv">
                                <p className="placeOrderPlaceOrderTotal">Order Total :</p>
                                <p className='placeOrderPlaceOrderTotalPrice'>$ {order.totalPrice}</p>
                            </div>
                            <hr />
                            <div className="placeOrderPlaceSavingsTextDiv">
                                <p className="placeOrderPlaceSavingsText">Your Savings :</p>
                                <p className='placeOrderPlaceSavingPrice'>$ {order.discountPrice}</p>
                                <ul className='ulSection'>
                                    <li>
                                        <span className='liText'>Free Delivery</span>
                                    </li>
                                    <li>
                                        <span className='liText'>Item discount</span>
                                    </li>
                                </ul>
                            </div>

                            {!order.isPaid && (

                                !sdkReady ? (
                                    <LoadingBox></LoadingBox>
                                ) : (
                                    <>
                                        {errorPay && (
                                            <div className='paymentErrorDiv'><p className='paymentErrorContent'>{errorPay} !</p></div>
                                        )}
                                        {loadingPay && <LoadingBox></LoadingBox>}

                                         <PayPalButton
                                            amount={order.totalPrice}
                                            onSuccess={successPaymentHandler}
                                        ></PayPalButton>
                                    </>
                                )

                            )}
                        </div>
                    </div>



                </div>
            )}


        </div>
    )
}

export default PlaceOrder;
