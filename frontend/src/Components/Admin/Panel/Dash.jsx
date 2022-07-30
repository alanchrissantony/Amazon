import React from "react";
import "./Dash.css";
import basket from "../../../Images/shopping-basket.png";
import dollar from "../../../Images/dollar-symbol.png";
import packageImg from "../../../Images/package.png";
import userImg from "../../../Images/user.png";
import { useSelector } from "react-redux";

function Dash() {
  const adminOrderList = useSelector((state) => state.adminOrderList);
  const {
    loading: orderLoading,
    error: orderError,
    adminInfo,
  } = adminOrderList;

  const productList = useSelector((state) => state.productList);
  const {
    loading: productLoading,
    error: productError,
    products,
  } = productList;

  const adminUserList = useSelector((state) => state.adminUserList);
  const {
    loading: userLoading,
    error: userError,
    adminInfo: userList,
  } = adminUserList;

  return (
    <div>
      <div className="adminPanelDashOrdersBoxContainerSection">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="adminPanelDashOrdersBoxContainer">
              <div className="adminPanelDashOrdersBoxDiv">
                <div className="adminPanelDashOrdersTextBoxDiv">
                  <div className="adminPanelDashOrdersBoxTitleDiv">
                    <p className="adminPanelDashOrdersBoxTitle">TOTAL ORDERS</p>
                  </div>
                  <div className="adminPanelDashOrdersBoxValueDiv">
                    <p className="adminPanelDashOrdersBoxValue">
                      {adminInfo ? adminInfo.length : 0}
                    </p>
                  </div>
                  <div className="adminPanelDashOrdersBoxIncreaseTextDiv">
                    <p className="adminPanelDashOrdersBoxIncreaseText">
                      2.00% (30 days)
                    </p>
                  </div>
                </div>
                <div className="adminPanelDashOrdersImgBoxDiv">
                  <img
                    src={basket}
                    alt=""
                    className="adminPanelDashOrdersBoxImg"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="adminPanelDashTotalIncomeBoxContainer">
              <div className="adminPanelDashTotalIncomeBoxDiv">
                <div className="adminPanelDashTotalIncomeTextBoxDiv">
                  <div className="adminPanelDashTotalIncomeBoxTitleDiv">
                    <p className="adminPanelDashTotalIncomeBoxTitle">
                      TOTAL SALES
                    </p>
                  </div>
                  <div className="adminPanelDashTotalIncomeBoxValueDiv">
                    <p className="adminPanelDashTotalIncomeBoxValue">$100</p>
                  </div>
                  <div className="adminPanelDashTotalIncomeBoxIncreaseTextDiv">
                    <p className="adminPanelDashTotalIncomeBoxIncreaseText">
                      Increased by 7.35%
                    </p>
                  </div>
                </div>
                <div className="adminPanelDashTotalIncomeImgBoxDiv">
                  <img
                    src={dollar}
                    alt=""
                    className="adminPanelDashTotalIncomeBoxImg"
                  />
                </div>
                <div className="adminPanelDashTotalIncomeCanvasConatner">
                  <div className="adminPanelDashTotalIncomeCanvasDiv">
                    <canvas className="adminPanelDashTotalIncomeCanvas" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="adminPanelDashProductsBoxContainer">
              <div className="adminPanelDashProductsBoxDiv">
                <div className="adminPanelDashProductsTextBoxDiv">
                  <div className="adminPanelDashProductsBoxTitleDiv">
                    <p className="adminPanelDashProductsBoxTitle">Products</p>
                  </div>
                  <div className="adminPanelDashProductsBoxValueDiv">
                    <p className="adminPanelDashProductsBoxValue">
                      {products ? products.length : 0}
                    </p>
                  </div>
                  <div className="adminPanelDashProductsBoxIncreaseTextDiv">
                    <p className="adminPanelDashProductsBoxIncreaseText">
                      Increased by 7.35%
                    </p>
                  </div>
                </div>
                <div className="adminPanelDashProductsImgBoxDiv">
                  <img
                    src={packageImg}
                    alt=""
                    className="adminPanelDashProductsBoxImg"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="adminPanelDashUsersBoxContainer">
              <div className="adminPanelDashUsersBoxDiv">
                <div className="adminPanelDashUsersTextBoxDiv">
                  <div className="adminPanelDashUsersBoxTitleDiv">
                    <p className="adminPanelDashUsersBoxTitle">Users</p>
                  </div>
                  <div className="adminPanelDashUsersBoxValueDiv">
                    <p className="adminPanelDashUsersBoxValue">
                      {userList ? userList.length : 0}
                    </p>
                  </div>
                  <div className="adminPanelDashUsersBoxIncreaseTextDiv">
                    <p className="adminPanelDashUsersBoxIncreaseText">
                      Increased by 7.35%
                    </p>
                  </div>
                </div>
                <div className="adminPanelDashUsersImgBoxDiv">
                  <img
                    src={userImg}
                    alt=""
                    className="adminPanelDashUsersBoxImg"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
