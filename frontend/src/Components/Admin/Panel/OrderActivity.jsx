import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrderActivity.css";


function OrderActivity() {
  const [orders, setOrders] = useState(false);
  const [products, setProducts] = useState(false);

  const orders_list = async () => {
    try {
      const url = "/api/orders/admin/total&orders";
      const data = await axios.post(url);
      setOrders(data.data);
    } catch (error) {
      
    }
  };

  const products_list = async () => {
    try {
      const url = "/api/products";
      const data = await axios.get(url);
      setProducts(data.data);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    orders_list();
    products_list();
  }, []);

  return (
    <div className="orderactivity">
      <div className="orderactivitycontainer">
        {orders && (
          <div className="adminPanelOrderActivitySection">
            <div className="adminPanelOrderActivityContainer">
              <div className="adminPanelOrderActivityDiv">
                <div className="adminPanelOrderActivityBox">
                  <div className="adminPanelOrderActivityBoxContainer">
                    <div className="adminPanelOrderActivityBoxTitleContainer">
                      <div className="adminPanelOrderActivityBoxTitleDiv">
                        <p className="adminPanelOrderActivityBoxTitle">
                          Order Activity
                        </p>
                      </div>
                    </div>
                    {orders.map((order, index) => (
                      <div key={index} className="adminPanelOrderActivityBoxContentContainer">
                        <div className="adminPanelOrderActivityBoxContentDiv">
                          <div className="adminPanelOrderActivityBoxContentUserImgContainer">
                            <div className="adminPanelOrderActivityBoxContentUserImgDiv">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                alt=""
                                className="adminPanelOrderActivityBoxContentUserImg"
                              />
                            </div>
                          </div>
                          <div className="adminPanelOrderActivityBoxContentUserContentSection">
                            <div className="adminPanelOrderActivityBoxContentUserContentContainer">
                              <div className="adminPanelOrderActivityBoxContentUserContentDiv">
                                <div className="adminPanelOrderActivityBoxContentUserNameDiv">
                                  <p className="adminPanelOrderActivityBoxContentUserName">
                                    {order.shippingAddress.name}
                                  </p>
                                </div>
                                <div className="adminPanelOrderActivityBoxContentUserOrderTimeDiv">
                                  <p className="adminPanelOrderActivityBoxContentUserOrderTime">
                                    {order.createdAt}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="adminPanelOrderActivityBoxContentOrderContentContainer">
                            <div className="adminPanelOrderActivityBoxContentOrderImgContainer">
                              <div className="adminPanelOrderActivityBoxContentOrderImgDiv">
                                <img
                                  src={order.orderItems[0].image}
                                  alt=""
                                  className="adminPanelOrderActivityBoxContentOrderImg"
                                />
                              </div>
                            </div>
                            <div className="adminPanelOrderActivityBoxContentOrderContentContainer">
                              <div className="adminPanelOrderActivityBoxContentOrderContentDiv">
                                <div className="adminPanelOrderActivityBoxContentOrderContentNameDiv">
                                  <p className="adminPanelOrderActivityBoxContentOrderContentName">
                                    {order.orderItems[0].name}
                                  </p>
                                </div>
                                <div className="adminPanelOrderActivityBoxContentOrderContentOrderCategoryDiv">
                                  <p className="adminPanelOrderActivityBoxContentOrderContentOrderCategory">
                                    USB, wireless
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {products && (
          <div className="adminPanelTopSellingProductSection">
            <div className="adminPanelTopSellingProductContainer">
              <div className="adminPanelTopSellingProductDiv">
                <div className="adminPanelTopSellingProductBox">
                  <div className="adminPanelTopSellingProductBoxContainer">
                    <div className="adminPanelTopSellingProductTitleContainer">
                      <div className="adminPanelTopSellingProductTitleDiv">
                        <p className="adminPanelTopSellingProductTitle">
                          Top Selling Products
                        </p>
                      </div>
                    </div>
                    {products.map((product, index) => (
                      <div key={index} className="adminPanelTopSellingProductContentContainer">
                        <div className="adminPanelTopSellingProductContentDiv">
                          <div className="adminPanelTopSellingProductContentImgDiv">
                            <div className="adminPanelTopSellingProductContentImgDivCon">
                              <img
                                src={product.image}
                                alt=""
                                className="adminPanelTopSellingProductContentImg"
                              />
                            </div>
                          </div>

                          <div className="adminPanelTopSellingProductContentTextContainer">
                            <div className="adminPanelTopSellingProductContentTextDiv">
                              <div className="adminPanelTopSellingProductContentTextTitleDiv">
                                <p className="adminPanelTopSellingProductContentTextTitle">
                                  {product.name}
                                </p>
                              </div>
                              <div className="adminPanelTopSellingProductContentTextCategoryDiv">
                                <p className="adminPanelTopSellingProductContentTextCategory">
                                  {product.brand}
                                </p>
                              </div>
                              <div className="adminPanelTopSellingProductContentTextDescriptionDiv">
                                <p className="adminPanelTopSellingProductContentTextDescription">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="adminPanelTopSellingProductContentPriceSection">
                            <div className="adminPanelTopSellingProductContentPriceContainer">
                              <div className="adminPanelTopSellingProductContentPriceDiv">
                                <p className="adminPanelTopSellingProductContentPrice">
                                  ${product.price}
                                </p>
                              </div>
                              <div className="adminPanelTopSellingProductContentReviewsDiv">
                                <p className="adminPanelTopSellingProductContentReviews">
                                  {product.category}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderActivity;
