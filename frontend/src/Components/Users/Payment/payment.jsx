import React, { useEffect } from "react";
import "./payment.css";
import paymentLogo from "../../../Images/confirm-banner.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../actions/orderActions";
import { ORDER_CREATE_RESET } from "../../../constants/orderConstants";
import LoadingBox from "../LoadingBox/loadingBox";
import axios from "axios";

function Payment() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  const userSignIn = useSelector((state) => state.userSignin);
  const { userInfo } = userSignIn;

  const toPrice = (num) => Number(num.toFixed(2));

  const itemsPrice = toPrice(
    cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  );
  const shippingPrice = Math.ceil(
    cartItems.reduce((a, c) => a + (c.price * c.qty * 5) / 100, 0)
  );
  const totalOrderPrice = itemsPrice + shippingPrice;
  const promotionalApplied =
    totalOrderPrice - shippingPrice - (itemsPrice * 5) / 100;
  const discountPrice = toPrice(totalOrderPrice - promotionalApplied);
  const totalPrice = toPrice(totalOrderPrice - discountPrice);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  cart.itemsPrice = itemsPrice;
  cart.shippingPrice = shippingPrice;
  cart.discountPrice = discountPrice;
  cart.totalPrice = totalPrice;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login?redirect=shipping");
    } else if (cartItems.length <= 0) {
      navigate("/");
    } else if (!shippingAddress) {
      navigate("/shipping");
    }
  });

  const update_stock = async (data) => {
    let url = "/api/products/edit";
    await axios.post(url, data);
  };

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    

    for (let i = 0; i < cart.cartItems.length; i++) {
      let countInStock = cart.cartItems[i].countInStock - cart.cartItems[i].qty;
      let proId = cart.cartItems[i].product;
      const data = {
        _id: proId,
        countInStock: countInStock+'',
      };
      update_stock(data)
    }
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, success, navigate]);

  return (
    <div className="paymentSection">
      {error && (
        <div className="ErrorDiv">
          <p className="ErrorContent">{error} !</p>
        </div>
      )}
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
            {cartItems.map((product) => (
              <div key={product.product} className="paymentContentDiv">
                <div className="paymentContentImageDiv">
                  <img
                    src={product.image}
                    alt=""
                    className="paymentContentImage"
                  />
                </div>
                <div className="paymentContentContainerDiv">
                  <div className="paymentContentProductTitleDiv">
                    <p className="paymentContentProductTitle">{product.name}</p>
                  </div>

                  <div className="paymentContentProductPriceDiv">
                    <p className="paymentContentProductPrice">
                      ${product.price}
                    </p>
                  </div>
                  <div className="paymentContentProductQtyDiv">
                    <p className="paymentContentProductQtyTitle">
                      Quantity:{" "}
                      <span className="paymentContentProductQty">
                        {product.qty}{" "}
                      </span>{" "}
                      <span
                        className="paymentContentProductQtyChange"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/cart/:id");
                        }}
                      >
                        {" "}
                        Change
                      </span>
                    </p>
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
            <button
              className="paymentPlaceContinueBtn"
              onClick={(e) => {
                e.preventDefault();
                placeOrderHandler();
              }}
            >
              Place your order
            </button>
          </div>
          <div className="paymentPlaceOrderTitleDiv">
            <p className="paymentPlaceOrderTitle">Order Summary</p>
          </div>
          <div className="paymentPlaceItemsTextDiv">
            <p className="paymentPlaceItemsText">Items : </p>
            <p className="paymentPlaceItemsPrice">$ {itemsPrice}</p>
          </div>
          <div className="paymentPlaceDeliveryTextDiv">
            <p className="paymentPlaceDeliveryText">Delivery : </p>
            <p className="paymentPlaceDeliveryPrice">$ {shippingPrice}</p>
          </div>
          <div className="paymentPlaceTotalTextDiv">
            <p className="paymentPlaceTotalText">Total : </p>
            <p className="paymentPlaceTotalPrice">$ {totalOrderPrice}</p>
          </div>
          <div className="paymentPlacePromotionTextDiv">
            <p className="paymentPlacePromotionText">Promotion Applied :</p>
            <p className="paymentPlacePromotionPrice">‒ $ {discountPrice}</p>
          </div>
          <hr />
          <div className="paymentPlaceOrderTotalDiv">
            <p className="paymentPlaceOrderTotal">Order Total :</p>
            <p className="paymentPlaceOrderTotalPrice">$ {totalPrice}</p>
          </div>
          <hr />
          <div className="paymentPlaceSavingsTextDiv">
            <p className="paymentPlaceSavingsText">Your Savings :</p>
            <p className="paymentPlaceSavingPrice">$ {discountPrice}</p>
            <ul className="ulSection">
              <li>
                <span className="liText">Free Delivery</span>
              </li>
              <li>
                <span className="liText">Item discount</span>
              </li>
            </ul>
          </div>
          {loading && <LoadingBox></LoadingBox>}
        </div>
      </div>
    </div>
  );
}

export default Payment;
