import React, { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../../Images/logo.svg";
import Location from "../../../Images/location.png";
import Cart from "../../../Images/cart.png";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../../actions/userActions";
import { Search } from "../../../../node_modules/@material-ui/icons/index";
import { List, X } from "react-bootstrap-icons";
import { Icon } from "@iconify/react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [sidebar, setSidebar] = useState(false);
  const [departments, setDepartments] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  const userSignIn = useSelector((state) => state.userSignin);
  const { userInfo } = userSignIn;

  const signOutHandler = () => {
    dispatch(signout());
  };

  const get_departments = async () => {
    let url = "/api/departments";
    const { data } = await axios.post(url);
    setDepartments(data);
  };

  const activate_sidebar = () => {
    setSidebar(true);
  };

  const deactivate_sidebar = () => {
    setSidebar(false);
  };

  useEffect(() => {
    get_departments();
  }, []);

  return (
    <div className="navcontainer">
      <div className="navbarContainer">
        <header className="userHomeHeader">
          <div className="row logoRowHomeHeader">
            <div className="amazonNavLogoDiv">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                <img className="amazonNavLogo" src={Logo} alt="" />
              </div>
            </div>
            <div className="locationRowHomeHeader">
              <div className="locationNavLogoDiv">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/shipping");
                  }}
                >
                  <img className="locationNavLogo" src={Location} alt="" />
                </a>
              </div>
              <div className="navShippingAddressDiv">
                <p
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/shipping");
                  }}
                  className="navText"
                >
                  {userInfo && shippingAddress.name
                    ? "Deliver to " + shippingAddress.name
                    : "Hello"}
                  <br />
                  <span className="navHighText">
                    {userInfo && shippingAddress.name
                      ? shippingAddress.city + " " + shippingAddress.pinCode
                      : "Select your address"}
                  </span>
                </p>
              </div>
            </div>
            <div className="navSearchBarDiv">
              <input type="text" className="navSearchBar" />
              <div className="searchIconContainer">
                <div className="searchIconDiv">
                  <Search className="searchIcon" />
                </div>
              </div>
            </div>
            <div className="navTextDivAccount">
              <a>
                {" "}
                <p className="navText">
                  Hello, {userInfo ? userInfo.name : "Sign in"} <br />
                  <span className="navHighText">Account & Lists </span>
                  <i class="fas fa-caret-down"></i>
                </p>
              </a>
              <ul className="dropdown-content">
                {userInfo ? (
                  <div className="navSignOutDiv">
                    <br />
                    <div className="navSignOutContainer">
                      <p className="navSignOutTitle">Your Account</p>
                      <p
                        className="navSignOutYourAccount"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/login&security");
                        }}
                      >
                        Your Account
                      </p>
                      <p
                        className="navSignOutWishList"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/cart/:id");
                        }}
                      >
                        Your Wish List
                      </p>
                      <p
                        className="navSignOutOrders"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/orderhistory");
                        }}
                      >
                        Your Orders
                      </p>
                      <p className="navSignOutSignOut" onClick={signOutHandler}>
                        Sign Out
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="navSignInDiv">
                    <br />
                    <button
                      className="navSignInBtn"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/login");
                      }}
                    >
                      Sign in
                    </button>
                  </div>
                )}
              </ul>
            </div>
            <div className="navTextDivOrders">
              <Link to={"/orderhistory"} style={{ textDecoration: "none" }}>
                <p className="navText">
                  Returns <br />
                  <span className="navHighText">& Orders</span>
                </p>
              </Link>
            </div>
            <div className="navTextDivCart">
              <Link to="/cart/:id" style={{ textDecoration: "none" }}>
                <img className="cartNavLogo" src={Cart} alt="" />
                <div className="navCartCountDiv">
                  <span className="navCartCountText">{cartItems.length}</span>
                </div>
                <p className="navHighText cartText">Cart</p>
              </Link>
            </div>
          </div>
          <div className="row departmentRowHomeHeader">
            <div className="departmentRowHomeHeaderContainer">
              <List className="navbarToggleIcon" onClick={activate_sidebar} />
              {sidebar && (
                <section className="sidebarSection">
                  <div className="sidebarContainer">
                    <div className="sidebarHeader">
                      <div className="sidebarHeaderContainer">
                        <p className="sidebarHeaderText">
                          <span>
                            <Icon
                              icon="carbon:user-avatar-filled"
                              style={{ color: "white", fontSize: "2rem" }}
                            />
                          </span>{" "}
                          <p className="sidebarHeaderText sidebarHeaderTextSpan">
                            Hello, {userInfo ? userInfo.name : "Sign in"}
                          </p>
                          <p className="navSidebarCloseIcon">
                            <X
                              style={{ color: "white", fontSize: "2rem" }}
                              onClick={deactivate_sidebar}
                            />
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="sidebarBody">
                      <div className="sidebarBodyContainer">
                        <div className="sidebarTrendingSection">
                          <p className="sidebarBodyTitle">Trending</p>
                          <div className="sidebarBodyTextDiv">
                            <p className="sidebarBodyText">Best Sellers</p>
                          </div>
                          <div className="sidebarBodyTextDiv">
                            <p className="sidebarBodyText">New Releases</p>
                          </div>
                          <div className="sidebarBodyTextDiv">
                            <p className="sidebarBodyText">
                              Movers and Shakers
                            </p>
                          </div>
                          <hr />
                        </div>
                        {departments && (
                          <div className="sidebarTrendingSection">
                            <p className="sidebarBodyTitle">
                              Shop By Department
                            </p>
                            {departments.map((department) => (
                              <div className="sidebarBodyTextDiv">
                                <p className="sidebarBodyText">
                                  {department.name}
                                </p>
                              </div>
                            ))}
                            <hr />
                          </div>
                        )}
                        <div className="sidebarTrendingSection">
                          <p className="sidebarBodyTitle">Help & Settings</p>
                          <div className="sidebarBodyTextDiv">
                            <p className="sidebarBodyText">Your Account</p>
                          </div>
                          <div className="sidebarBodyTextDiv">
                            <p className="sidebarBodyText">Sign Out</p>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              <div className="departmentRowHomeHeaderContentDiv">
                <p className="departmentRowHomeHeaderContentText">All</p>
              </div>
              {departments && (
                <div>
                  {departments.map((department) => (
                    <div className="departmentRowHomeHeaderContentDiv">
                      <p className="departmentRowHomeHeaderContentText">{department.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Home;
