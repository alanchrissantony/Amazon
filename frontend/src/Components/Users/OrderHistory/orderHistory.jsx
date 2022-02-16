import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../../../actions/orderActions';
import './orderHistory.css'


function OrderHistory() {

    const orderMineList = useSelector((state) => state.orderMineList);
    const { loading, error, orders } = orderMineList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);


    return (
        <div className='orderHistorySection'>
            <div className="orderHistoryContainer">
                <div className="orderHistoryContainerSection">
                    <div className="orderHistoryAccountTextDiv">
                        <p className='orderHistoryAccountText'><span className='orderHistoryYourAccountText'>Your Account </span>{'  '} {'  ›'} <span className='orderHistoryYourOrdersText'> Your Orders</span></p>
                    </div>
                    <div className="orderHistoryTitleDiv">
                        <p className="orderHistoryTitle">Your Orders</p>
                    </div>
                    <hr />
                    <div className="orderHistoryOrderNumberDiv">
                        <p className="orderHistoryOrderNumber">{orders && orders.length} {orders && orders.length > 1 ? ' orders' : ' order'} <span className='orderHistoryOrderNumberText'>placed</span></p>
                    </div>
                    <div className="orderHistoryProductContainer">
                        <div className="orderHistoryProductHeadContainer">
                            <div className="orderHistoryProductHeadDiv">
                                <div className="orderHistoryOrderPlacedContainer">
                                    <br />
                                    <div className="orderHistoryOrderPlacedDiv">
                                        <p className="orderHistoryOrderPlacedText">ORDER PLACED</p>
                                    </div>
                                    <div className="orderHistoryOrderDateDiv">
                                        <p className="orderHistoryOrderDateText">12-23-5</p>
                                    </div>
                                    <br />
                                </div>
                                <div className="orderHistoryOrderTotalContainer">
                                    <br />
                                    <div className="orderHistoryOrderTotalDiv">
                                        <p className="orderHistoryOrderTotalText">TOTAL</p>
                                    </div>
                                    <div className="orderHistoryOrderPriceDiv">
                                        <p className="orderHistoryOrderPriceText">12-4-3</p>
                                    </div>
                                    <br />
                                </div>
                                <div className="orderHistoryOrderShipContainer">
                                    <br />
                                    <div className="orderHistoryOrderShipDiv">
                                        <p className="orderHistoryOrderShipText">SHIP TO</p>
                                    </div>
                                    <div className="orderHistoryOrderShippingAddressDiv">
                                        <p className="orderHistoryOrderShippingAddressText">2-05-13</p>
                                    </div>
                                    <br />
                                </div>
                                <div className="orderHistoryOrderIdContainer">
                                    <br />
                                    <div className="orderHistoryOrderIdDiv">
                                        <p className="orderHistoryOrderIdText">ORDER # 402-9893015-1984349</p>
                                    </div>
                                    <div className="orderHistoryOrderDetailsDiv">
                                        <p className="orderHistoryOrderDetailsText"><span className='orderHistoryOrderViewDetailsText'>View order details </span> | <span className='orderHistoryOrderInvoiceText'> Invoice</span></p>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="orderHistoryProductContentContainer">
                            <br />
                            <div className="orderHistoryProductContentDiv">
                                <div className="orderHistoryProductContentOrderDiv">
                                    <div className="orderHistoryProductOrderStatusDiv">
                                        <p className="orderHistoryProductOrderStatus">Refunded</p>
                                    </div>
                                    <div className="orderHistoryProductOrderStatusTextDiv">
                                        <p className="orderHistoryProductOrderStatusText">Your product has been shipped.</p>
                                    </div>
                                    <div className="orderHistoryProductImageDiv">
                                        <img className='orderHistoryProductImage' src="https://images-eu.ssl-images-amazon.com/images/I/41tEQogY3qL._SY90_.jpg" alt="" />
                                    </div>
                                    <div className="orderHistoryProductNameDiv">
                                        <p className="orderHistoryProductName">Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory