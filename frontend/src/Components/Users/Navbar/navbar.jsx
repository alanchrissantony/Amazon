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
import { Scrollbars } from "react-custom-scrollbars";

function Home() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [sidebar, setSidebar] = useState(false);
  const [departments, setDepartments] = useState(false);
  const [products, setProducts] = useState(false);
  const [search, setSearch] = useState(false);

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

  const get_products = async () => {
    let url = "/api/products";
    const { data } = await axios.get(url);
    setProducts(data);
  };

  const activate_sidebar = () => {
    setSidebar(true);
  };

  const deactivate_sidebar = () => {
    setSidebar(false);
  };

  useEffect(() => {
    get_departments();
    get_products();
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
              <input
                type="text"
                className="navSearchBar"
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase());
                }}
              />
              <div className="searchIconContainer">
                <div className="searchIconDiv">
                  <Search className="searchIcon" />
                </div>
              </div>
            </div>
            {products && (
              <div className="navSearchList">
                {products
                  .filter((product) => {
                    if (search === "") {
                      return false;
                    }else if(product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search) || product.brand.toLowerCase().includes(search)){
                      return product
                    }
                  })
                  .map((product, key) => {
                    return (
                      <div key={key}>
                        <p onClick={(e)=>{
                          e.preventDefault()
                          navigate(`/product/${product.department}`)
                        }}>{product.name}</p>
                      </div>
                    );
                  })}
              </div>
            )}
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
                      <Scrollbars style={{ width: "365px", height: "600px" }}>
                        <div className="sidebarBodyContainer">
                          <div className="sidebarTrendingSection">
                            <p className="sidebarBodyTitle">Trending</p>
                            <div
                              className="sidebarBodyTextDiv"
                              onClick={(e) => {
                                e.preventDefault();
                                deactivate_sidebar();
                              }}
                            >
                              <p
                                className="sidebarBodyText"
                                onClick={(e) => {
                                  e.preventDefault();
                                  deactivate_sidebar();
                                }}
                              >
                                Best Sellers
                              </p>
                            </div>
                            <div
                              className="sidebarBodyTextDiv"
                              onClick={(e) => {
                                e.preventDefault();
                                deactivate_sidebar();
                              }}
                            >
                              <p
                                className="sidebarBodyText"
                                onClick={(e) => {
                                  e.preventDefault();
                                  deactivate_sidebar();
                                }}
                              >
                                New Releases
                              </p>
                            </div>
                            <div
                              className="sidebarBodyTextDiv"
                              onClick={(e) => {
                                e.preventDefault();
                                deactivate_sidebar();
                              }}
                            >
                              <p
                                className="sidebarBodyText"
                                onClick={(e) => {
                                  e.preventDefault();
                                  deactivate_sidebar();
                                }}
                              >
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
                                <div
                                  key={department._id}
                                  className="sidebarBodyTextDiv"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigate(`/product/${department._id}`);
                                    deactivate_sidebar();
                                  }}
                                >
                                  <p
                                    className="sidebarBodyText"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navigate(`/product/${department._id}`);
                                      deactivate_sidebar();
                                    }}
                                  >
                                    {department.name}
                                  </p>
                                </div>
                              ))}
                              <hr />
                            </div>
                          )}
                          <div className="sidebarTrendingSection">
                            <p className="sidebarBodyTitle">Help & Settings</p>
                            <div
                              className="sidebarBodyTextDiv"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/login&security");
                              }}
                            >
                              <p
                                className="sidebarBodyText"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate("/login&security");
                                }}
                              >
                                Your Account
                              </p>
                            </div>
                            <div className="sidebarBodyTextDiv">
                              {userInfo ? (
                                <p
                                  className="sidebarBodyText"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    signOutHandler();
                                    deactivate_sidebar();
                                  }}
                                >
                                  Sign Out
                                </p>
                              ) : (
                                <p
                                  className="sidebarBodyText"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/login");
                                  }}
                                >
                                  Sign In
                                </p>
                              )}
                            </div>
                            <hr />
                          </div>
                        </div>
                      </Scrollbars>
                    </div>
                  </div>
                </section>
              )}
              <div className="departmentRowHomeHeaderContentDiv">
                <Link to="/products">
                  <p className="departmentRowHomeHeaderContentText">All</p>
                </Link>
              </div>
              {departments && (
                <div>
                  {departments.map((department) => (
                    <div key={department._id} className="departmentRowHomeHeaderContentDiv">
                      <p
                        className="departmentRowHomeHeaderContentText"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/product/${department._id}`);
                        }}
                      >
                        {department.name}
                      </p>
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
