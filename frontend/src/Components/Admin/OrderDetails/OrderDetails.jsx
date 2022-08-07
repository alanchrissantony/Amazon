import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingBox from "../../Users/LoadingBox/loadingBox";
import MessageBox from "../../Users/MessageBox/messageBox";
import { XCircle } from "react-bootstrap-icons";
import './Orderdetails.css'

function OrderDetails() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(false);
  const [userPopup, setUserPopup] = useState(false);

  const orders_list = async () => {
    try {
      const url = "/api/orders/admin/total&orders";
      const data = await axios.post(url);
      setOrders(data.data);
    } catch (error) {
      
      setError(error.message);
    }
  };

  const view_toggle = async(id) =>{
    const data = await axios.get(`/api/users/${id}`)
    setUser(data.data)
    setUserPopup(true)
  };

  const close_toggle = ()=>{
    setUserPopup(false)
  }

  useEffect(() => {
    orders_list();
  }, []);

  return (
    <div>
      <section className="adminOrderDetailsSection">
        <div className="orderHistorySection">
          {!orders ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox>{error.message}</MessageBox>
          ) : (
            <div className="orderHistoryContainer">
              <div className="orderHistoryContainerSection">
                <div className="orderHistoryAccountTextDiv">
                  <p className="orderHistoryAccountText">
                    <span
                      className="orderHistoryYourAccountText"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/admin");
                      }}
                    >
                      Dashboard{" "}
                    </span>
                    {"  "} {"  ›"}{" "}
                    <span className="orderHistoryYourOrdersText">
                      {" "}
                      Order Activities
                    </span>
                  </p>
                </div>
                <div className="orderHistoryTitleDiv">
                  <p className="orderHistoryTitle">Orders Activities</p>
                </div>
                <hr />
                <div className="orderHistoryOrderNumberDiv">
                  <p className="orderHistoryOrderNumber">
                    {" "}
                    {orders && orders.length}{" "}
                    {orders && orders.length > 1 ? " orders" : " order"}{" "}
                    <span className="orderHistoryOrderNumberText">placed</span>
                  </p>
                </div>

                {userPopup && (
            <section className="addDepartmentSection">
            <div className="addDepartmentContainer">
              <form action="">
                <XCircle
                  className="addNewDepartmentTitleIcon"
                  onClick={close_toggle}
                />
                <p className="addNewAddressText addNewDepartmentTitle">
                  User Detials
                </p>
                <label htmlFor="" className="addProductInputLabel">
                  Name : {user.name}
                </label>
                
                <br />
                <br />
                <label htmlFor="" className="addProductInputLabel">
                  Email : {user.email}
                </label>
                <br />
                <br />
                <label htmlFor="" className="addProductInputLabel">
                  ID : {user._id}
                </label>
                <br />
                <br />
                <label htmlFor="" className="addProductInputLabel">
                  Created At : {user.createdAt}
                </label>
                <br />
                <br />
                <label htmlFor="" className="addProductInputLabel">
                  Updated At : {user.updatedAt}
                </label>
                <br />
                <br />
              </form>
            </div>
          </section>
          )}

                {orders.map((order) => (
                  <div className="orderHistoryProductContainer" key={order._id}>
                    <div className="orderHistoryProductHeadContainer">
                      <div className="orderHistoryProductHeadDiv">
                        <div className="orderHistoryOrderPlacedContainer">
                          <br />
                          <div className="orderHistoryOrderPlacedDiv">
                            <p className="orderHistoryOrderPlacedText">
                              ORDER PLACED
                            </p>
                          </div>
                          <div className="orderHistoryOrderDateDiv">
                            <p className="orderHistoryOrderDateText">
                              {order.updatedAt}
                            </p>
                          </div>
                          <br />
                        </div>
                        <div className="orderHistoryOrderTotalContainer">
                          <br />
                          <div className="orderHistoryOrderTotalDiv">
                            <p className="orderHistoryOrderTotalText">TOTAL</p>
                          </div>
                          <div className="orderHistoryOrderPriceDiv">
                            <p className="orderHistoryOrderPriceText">
                              ${order.totalPrice}
                            </p>
                          </div>
                          <br />
                        </div>
                        <div className="orderHistoryOrderShipContainer">
                          <br />
                          <div className="orderHistoryOrderShipDiv">
                            <p className="orderHistoryOrderShipText">SHIP TO</p>
                          </div>
                          <div className="orderHistoryOrderShippingAddressDiv">
                            <p className="orderHistoryOrderShippingAddressText">
                              {order.shippingAddress.name}{" "}
                              <i class="fas fa-angle-down"></i>
                              <ul className="dropdown-content">
                                <div className="orderShippingDropDownSection">
                                  <div className="orderShippingDropDownDiv">
                                    <p className="orderShippingDropDownAddressName">
                                      {order.shippingAddress.name}
                                    </p>
                                    <p className="orderShippingDropDownAddressAddress">
                                      {order.shippingAddress.address}
                                    </p>
                                    <p className="orderShippingDropDownAddressPlace">
                                      {order.shippingAddress.place}
                                    </p>
                                    <p className="orderShippingDropDownAddress">
                                      <span className="orderShippingDropDownAddressCity">
                                        {order.shippingAddress.city},{" "}
                                      </span>
                                      <span className="orderShippingDropDownAddressState">
                                        {order.shippingAddress.state}{" "}
                                      </span>
                                      <span className="orderShippingDropDownAddressPinCode">
                                        {order.shippingAddress.pinCode}
                                      </span>
                                    </p>
                                    <p className="orderShippingDropDownAddressCountry">
                                      {order.shippingAddress.country}
                                    </p>
                                    <p className="orderShippingDropDownPhone">
                                      Phone: {order.shippingAddress.mobile}
                                    </p>
                                  </div>
                                </div>
                              </ul>
                            </p>
                          </div>
                          <br />
                        </div>
                        <div className="orderHistoryOrderIdContainer">
                          <br />
                          <div className="orderHistoryOrderIdDiv">
                            <p className="orderHistoryOrderIdText">
                              ORDER # {order._id}
                            </p>
                          </div>
                          <div className="orderHistoryOrderDetailsDiv">
                            <p className="orderHistoryOrderDetailsText">
                              <span
                                className="orderHistoryOrderViewDetailsText"
                                onClick={(e) => {
                                  e.preventDefault();
                                  view_toggle(order.user);
                                }}
                              >
                                View user details{" "}
                              </span>{" "}
                              |{" "}
                              <span className="orderHistoryOrderInvoiceText">
                                {" "}
                                Invoice
                              </span>
                            </p>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>

                    <div className="orderHistoryProductContentContainer">
                      <br />
                      <div className="orderHistoryProductContentDiv">
                        <div className="orderHistoryProductContentOrderDiv orderDetailsProductContentOrderDiv">
                          <div className="orderHistoryProductOrderStatusDiv">
                            <p className="orderHistoryProductOrderStatus">
                              {order.isPaid
                                ? "Shipped"
                                : "Complete your payment"}
                            </p>
                          </div>
                          <div className="orderHistoryProductOrderStatusTextDiv">
                            <p className="orderHistoryProductOrderStatusText">
                              {order.isPaid
                                ? "Product has been shipped."
                                : "The transaction is not yet finished"}
                            </p>
                          </div>
                          {order.orderItems.map((product) => (
                            <div key={product._id}>
                              <div className="orderHistoryProductImageDiv">
                                <img
                                  className="orderHistoryProductImage"
                                  src={product.image}
                                  alt=""
                                />
                              </div>
                              <div className="orderHistoryProductNameDiv">
                                <p className="orderHistoryProductName">
                                  {product.name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="orderDetailsUserDiv">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default OrderDetails;
