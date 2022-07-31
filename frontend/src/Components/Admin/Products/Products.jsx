import React from "react";
import "./Products.css";
import { PencilSquare, Plus, Trash } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { listProducts } from "../../../actions/productActions";
import LoadingBox from "../../Users/LoadingBox/loadingBox";
import MessageBox from "../../Users/MessageBox/messageBox";
import axios from "axios";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                <span className="adminPanelOverviewSubDashboardTitle">
                  Dashboard
                </span>
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
                {products.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.brand}</td>
                      <td>{product.price}</td>
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
                          className="btn btn-secondary btn-product-option btn-edit product-btn"
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
