import React from "react";
import "./OrderActivity.css";
import dashProductImg from "../../../Images/products.png";

function OrderActivity() {
  return (
    <div className="orderactivity">
      <div  className="orderactivitycontainer">
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
                  <div className="adminPanelOrderActivityBoxContentContainer">
                    <div className="adminPanelOrderActivityBoxContentDiv">
                      <div className="adminPanelOrderActivityBoxContentUserImgContainer">
                        <div className="adminPanelOrderActivityBoxContentUserImgDiv">
                          <img
                            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                                Lottie Arnold
                              </p>
                            </div>
                            <div className="adminPanelOrderActivityBoxContentUserOrderTimeDiv">
                              <p className="adminPanelOrderActivityBoxContentUserOrderTime">
                                25 mins ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="adminPanelOrderActivityBoxContentOrderContentContainer">
                        <div className="adminPanelOrderActivityBoxContentOrderImgContainer">
                          <div className="adminPanelOrderActivityBoxContentOrderImgDiv">
                            <img
                              src={dashProductImg}
                              alt=""
                              className="adminPanelOrderActivityBoxContentOrderImg"
                            />
                          </div>
                        </div>
                        <div className="adminPanelOrderActivityBoxContentOrderContentContainer">
                          <div className="adminPanelOrderActivityBoxContentOrderContentDiv">
                            <div className="adminPanelOrderActivityBoxContentOrderContentNameDiv">
                              <p className="adminPanelOrderActivityBoxContentOrderContentName">
                                Iphone X Mobile
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
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <div className="adminPanelTopSellingProductContentContainer">
                    <div className="adminPanelTopSellingProductContentDiv">
                      <div className="adminPanelTopSellingProductContentImgDiv">
                        <div className="adminPanelTopSellingProductContentImgDivCon">
                          <img
                            src={dashProductImg}
                            alt=""
                            className="adminPanelTopSellingProductContentImg"
                          />
                        </div>
                      </div>

                      <div className="adminPanelTopSellingProductContentTextContainer">
                        <div className="adminPanelTopSellingProductContentTextDiv">
                          <div className="adminPanelTopSellingProductContentTextTitleDiv">
                            <p className="adminPanelTopSellingProductContentTextTitle">
                              Homepod
                            </p>
                          </div>
                          <div className="adminPanelTopSellingProductContentTextCategoryDiv">
                            <p className="adminPanelTopSellingProductContentTextCategory">
                              USB, wireless
                            </p>
                          </div>
                          <div className="adminPanelTopSellingProductContentTextDescriptionDiv">
                            <p className="adminPanelTopSellingProductContentTextDescription">
                              White • Slate fabric • Hands-free
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="adminPanelTopSellingProductContentPriceSection">
                        <div className="adminPanelTopSellingProductContentPriceContainer">
                          <div className="adminPanelTopSellingProductContentPriceDiv">
                            <p className="adminPanelTopSellingProductContentPrice">
                              $129.76
                            </p>
                          </div>
                          <div className="adminPanelTopSellingProductContentReviewsDiv">
                            <p className="adminPanelTopSellingProductContentReviews">
                              Sales
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="adminPanelTopSellingProductContentContainer">
                    <div className="adminPanelTopSellingProductContentDiv">
                      <div className="adminPanelTopSellingProductContentImgDiv">
                        <div className="adminPanelTopSellingProductContentImgDivCon">
                          <img
                            src={dashProductImg}
                            alt=""
                            className="adminPanelTopSellingProductContentImg"
                          />
                        </div>
                      </div>
                      <div className="adminPanelTopSellingProductContentTextContainer">
                        <div className="adminPanelTopSellingProductContentTextDiv">
                          <div className="adminPanelTopSellingProductContentTextTitleDiv">
                            <p className="adminPanelTopSellingProductContentTextTitle">
                              Homepod
                            </p>
                          </div>
                          <div className="adminPanelTopSellingProductContentTextCategoryDiv">
                            <p className="adminPanelTopSellingProductContentTextCategory">
                              USB, wireless
                            </p>
                          </div>
                          <div className="adminPanelTopSellingProductContentTextDescriptionDiv">
                            <p className="adminPanelTopSellingProductContentTextDescription">
                              White • Slate fabric • Hands-free
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="adminPanelTopSellingProductContentPriceSection">
                        <div className="adminPanelTopSellingProductContentPriceContainer">
                          <div className="adminPanelTopSellingProductContentPriceDiv">
                            <p className="adminPanelTopSellingProductContentPrice">
                              $129.76
                            </p>
                          </div>
                          <div className="adminPanelTopSellingProductContentReviewsDiv">
                            <p className="adminPanelTopSellingProductContentReviews">
                              Sales
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderActivity;
