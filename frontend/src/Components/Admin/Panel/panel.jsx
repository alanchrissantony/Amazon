import React from "react";
import "./panel.css";
import dashOrderImg from "../../../Images/Box.png";
import dashUserImg from "../../../Images/users.png";
import dashProductImg from "../../../Images/products.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";


function AdminPanel() {

  

  return (
    <div className="adminPanelSectionContainer">
      
      <section className="adminPanelOverviewSection">
        <div className="adminPanelOverviewContainer">
          <div className="adminPanelOverviewTitleDiv">
            <p className="adminPanelOverviewTitle">Amazon Dashboard</p>
          </div>
          <div className="adminPanelOverviewSubTitleDiv">
            <p className="adminPanelOverviewSubTitleText">
              <span className="adminPanelOverviewSubDashboardTitle">
                Dashboard
              </span>
              {">"}
              <span className="adminPanelOverviewSubAmazonDashboardTitle">
                Amazon Dashboard
              </span>
            </p>
          </div>
          <div className="adminPanelDashSection">
            <div className="adminPanelDashContainer">
              <Container>
                <div className="adminPanelOverviewBoxContainer">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                      <Link to="/admin/orders">
                        <div className="adminPanelOverviewOrdersBoxContainerDiv">
                          <div className="adminPanelOverviewOrdersBoxDiv">
                            <div className="adminPanelOverviewOrdersImgDivContainer">
                              <img
                                className="adminPanelOverviewOrdersImg"
                                src={dashOrderImg}
                                alt=""
                              />
                            </div>
                            <div className="adminPanelOverviewOrdersTextDivContainer">
                              <div className="adminPanelOverviewOrdersTextDiv">
                                <p className="adminPanelOverviewOrdersText">
                                  Orders
                                </p>
                              </div>
                              <div className="adminPanelOverviewOrdersSubTextDiv">
                                <p className="adminPanelOverviewOrdersSubText">
                                  Track, return, or manage orders
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                      <Link to="/admin/users">
                        <div className="adminPanelOverviewUsersBoxContainerDiv">
                          <div className="adminPanelOverviewUsersBoxDiv">
                            <div className="adminPanelOverviewUsersImgDivContainer">
                              <img
                                className="adminPanelOverviewUsersImg"
                                src={dashUserImg}
                                alt=""
                              />
                            </div>
                            <div className="adminPanelOverviewUsersTextDivContainer">
                              <div className="adminPanelOverviewUsersTextDiv">
                                <p className="adminPanelOverviewUsersText">
                                  Users
                                </p>
                              </div>
                              <div className="adminPanelOverviewUsersSubTextDiv">
                                <p className="adminPanelOverviewUsersSubText">
                                  View all users, or manage users
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                      <Link to="/admin/products">
                        <div className="adminPanelOverviewProductsBoxContainerDiv">
                          <div className="adminPanelOverviewProductsBoxDiv">
                            <div className="adminPanelOverviewProductsImgDivContainer">
                              <img
                                className="adminPanelOverviewProductsImg"
                                src={dashProductImg}
                                alt=""
                              />
                            </div>
                            <div className="adminPanelOverviewProductsTextDivContainer">
                              <div className="adminPanelOverviewProductsTextDiv">
                                <p className="adminPanelOverviewProductsText">
                                  Products
                                </p>
                              </div>
                              <div className="adminPanelOverviewProductsSubTextDiv">
                                <p className="adminPanelOverviewProductsSubText">
                                  Add, edit, or manage products
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AdminPanel;
