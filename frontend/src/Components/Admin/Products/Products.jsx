import React, { useState, useEffect } from "react";
import "./Products.css";
import {
  PencilSquare,
  Plus,
  Trash,
  JournalRichtext,
  XCircle,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../actions/productActions";
import LoadingBox from "../../Users/LoadingBox/loadingBox";
import MessageBox from "../../Users/MessageBox/messageBox";
import axios from "axios";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [viewProduct, setViewProduct] = useState(false);
  const [popup, setPopup] = useState(false);
  const [search, setSearch] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  const deleteProduct = (id) => {
    const proId = {
      id: id,
    };
    let url = "/api/products/delete";

    axios.post(url, proId).then(() => dispatch(listProducts()));
  };

  const view_toggle = async (id) => {
    const data = await axios.get(`/api/products/${id}`);
    setViewProduct(data.data);
    setPopup(true);
  };

  const close_toggle = () => {
    setPopup(false);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <section className="adminProductsSection">
          <div className="container">
            <div className="adminPanelOverviewTitleDiv">
              <p className="adminPanelOverviewTitle">Products</p>
            </div>
            <div className="adminPanelOverviewSubTitleDiv">
              <p className="adminPanelOverviewSubTitleText">
                <Link to="/admin" style={{ textDecoration: "none" }}>
                  <span className="adminPanelOverviewSubDashboardTitle">
                    Dashboard
                  </span>
                </Link>
                {">"}

                <span className="adminPanelOverviewSubAmazonDashboardTitle">
                  Products
                </span>
              </p>
            </div>
            <div className="productAddBtnDiv">
              <Link to="/admin/addProducts">
                <button className="btn btn-success product-btn">
                  Add Product <Plus className="productIcon" />
                </button>
              </Link>
            </div>
            <div className="productAddBtnDiv departmentAddBtnDiv">
              <Link to="/admin/departments">
                <button className="btn btn-warning product-btn">
                  Departments
                </button>
              </Link>
            </div>
            <div className="adminProductSearchBar">
              <input
                type="text"
                className="adminInputSpace"
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            {popup && (
              <section className="addDepartmentSection">
                <div className="addDepartmentContainer">
                  <form action="">
                    <XCircle
                      className="addNewDepartmentTitleIcon"
                      onClick={close_toggle}
                    />
                    <p className="addNewAddressText addNewDepartmentTitle">
                      Product Detials
                    </p>
                    <label htmlFor="" className="addProductInputLabel">
                      Name : {viewProduct.name}
                    </label>

                    <br />
                    <br />
                    <label htmlFor="" className="addProductInputLabel">
                      Brand : {viewProduct.brand}
                    </label>
                    <br />
                    <br />
                    <label htmlFor="" className="addProductInputLabel">
                      Price : ${viewProduct.price}
                    </label>
                    <br />
                    <br />
                    <label htmlFor="" className="addProductInputLabel">
                      Category : {viewProduct.category}
                    </label>
                    <br />
                    <br />
                    <label htmlFor="" className="addProductInputLabel">
                      Department : {viewProduct.department}
                    </label>
                    <br />
                    <br />
                    <label htmlFor="" className="addProductInputLabel">
                      Description : {viewProduct.description}
                    </label>

                    <br />
                    <br />
                  </form>
                </div>
              </section>
            )}

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">NO</th>
                  <th scope="col">Products</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  <th scope="col">Image</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {products.filter((product)=>{
                  if(search === ''){
                    return product
                  }else if(product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase())){
                    return product
                  }
                }).map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>{product.category}</td>
                      <td>
                        <img
                          src={product.image}
                          style={{ height: "5rem", width: "auto" }}
                          alt=""
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-info btn-product-option btn-edit product-btn"
                          onClick={() => {
                            view_toggle(product._id);
                          }}
                        >
                          View <JournalRichtext className="productIcon" />
                        </button>
                        <button
                          className="btn btn-secondary btn-product-option btn-edit product-btn btn-delete"
                          onClick={() => {
                            navigate(`/admin/editProduct/${product._id}`);
                          }}
                        >
                          Edit <PencilSquare className="productIcon" />
                        </button>
                        <button
                          className="btn btn-danger btn-delete product-btn"
                          onClick={() => {
                            alert("Do you intend to delete?");
                            deleteProduct(product._id);
                          }}
                        >
                          Delete <Trash className="productIcon" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

export default Products;
