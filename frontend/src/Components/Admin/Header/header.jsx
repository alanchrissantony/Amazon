import React from "react";
import "./header.css";
import Logo from "../../../Images/logo.svg";
import { useNavigate, Link } from "react-router-dom";
import { FirebaseContext } from "../../../store/FirebaseContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Search } from "../../../../node_modules/@material-ui/icons/index";

function Header() {
  const navigate = useNavigate();

  const { firebase } = useContext(FirebaseContext);

  const [products, setProducts] = useState(false);
  const [search, setSearch] = useState(false);

  const get_products = async () => {
    let url = "/api/products";
    const { data } = await axios.get(url);
    setProducts(data);
  };

  useEffect(() => {
    get_products();
  }, []);

  return (
    <div>
      <div className="containerheader">
        <img
          className="logo"
          src={Logo}
          alt=""
          onClick={(e) => {
            e.preventDefault();
            navigate("/admin");
          }}
        />

        <div className="adminSearchBarDiv">
          <input type="text" className="adminSearchBar" onChange={(e)=>{setSearch(e.target.value)}} />
          <div className="searchIconContainer">
            <div className="searchIconDiv">
              <Search className="searchIcon" />
            </div>
          </div>
        </div>
        {products && (
              <div className="headerSearchList">
                {products
                  .filter((product) => {
                    if (search == "") {
                      return false;
                    }else if(product.name.toLowerCase().includes(search.toLowerCase())){
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
        <div className="panelTextDiv">
          <Link
            to="/admin/products"
            className="productsText"
            style={{ textDecoration: "none" }}
          >
            <span className="panelText">Products</span>
          </Link>
          <Link
            to="/admin/users"
            className="usersText"
            style={{ textDecoration: "none" }}
          >
            <span className="panelText">Users</span>
          </Link>
          <Link
            to="/admin/orders"
            style={{ textDecoration: "none" }}
            className="ordersText"
          >
            <span className="panelText">Orders</span>
          </Link>
          <a className="adminText">
            <span className="panelText">
              Admin
              <ul className="dropdown-content">
                <div className="headerSignOutDiv">
                  <br />
                  <button
                    className="headerSignOutBtn"
                    onClick={(e) => {
                      e.preventDefault();
                      firebase.auth().signOut();
                      localStorage.removeItem("adminInfo");
                      navigate("/admin/login");
                    }}
                  >
                    Sign out
                  </button>
                </div>
              </ul>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
