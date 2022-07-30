import React from "react";
import { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
import random from "../../../../node_modules/random/dist/cjs/index";

function AddProduct() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const data = {
    product: [
      {
        name: title,
        image: image,
        brand: brand,
        category: category,
        department: department,
        description: description,
        price: price,
        countInStock: stock,
        rating: rating,
        numReviews: review,
      },
    ],
  };

  const add_product = () => {
    const url = "/api/products/add";
    axios
      .post(url, data)
      .then(navigate('/admin/products'))
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <section>
        <div className="AddProductContainer">
          <div className="adminPanelOverviewTitleDiv">
            <p className="adminPanelOverviewTitle">Add Products</p>
          </div>
          <div className="adminPanelOverviewSubTitleDiv addProductSubTitle">
            <p className="adminPanelOverviewSubTitleText">
              <span className="adminPanelOverviewSubDashboardTitle">
                Dashboard
              </span>
              {">"}
              <span className="adminPanelOverviewSubAmazonDashboardTitle">
                Amazon Dashboard
              </span>
              {">"}
              <span className="adminPanelOverviewSubAmazonDashboardTitle">
                Products
              </span>
              {">"}
              <span className="adminPanelOverviewSubAmazonDashboardTitle">
                Add Products
              </span>
            </p>
          </div>
          <hr />
          <div className="addProductInputContainer">
            <form action="">
              <p className="addNewAddressText">Add a new product</p>
              <div className="addProductFormLeft">
                <label htmlFor="" className="addProductInputLabel">
                  Product
                </label>
                <br />
                <input
                  type="text"
                  className="inputSpace"
                  placeholder="Product title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Price
                </label>
                <br />
                <input
                  type="number"
                  className="inputSpace"
                  placeholder="Price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                    setRating(random.int((0, 10) / 2));
                    setReview(random.int(0, 1000));
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Category
                </label>
                <br />
                <input
                  type="text"
                  className="inputSpace"
                  placeholder="Category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Brand
                </label>
                <br />
                <input
                  type="text"
                  className="inputSpace"
                  placeholder="Brand"
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Department
                </label>
                <br />
                <select
                  name="department"
                  id="department"
                  className="selectDepartment"
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  <option value="smartphones">Smartphones</option>
                  <option value="laptops">Laptops</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothings">Clothings</option>
                  <option value="footwares">Footwares</option>
                  <option value="others">Others</option>
                </select>
                <br />
              </div>
              <div className="addProductFormRight">
                <label htmlFor="" className="addProductInputLabel">
                  Description
                </label>
                <br />
                <textarea
                  type="text"
                  className="inputSpaceDescription"
                  placeholder="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Stock
                </label>
                <br />
                <input
                  type="number"
                  className="inputSpace"
                  placeholder="Stock"
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Image
                </label>
                <br />
                <input
                  type="text"
                  className="inputSpace"
                  placeholder="Image url"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
                <br />
                <br />
                <button
                  className="btn btn-warning btn-addProduct"
                  onClick={(e) => {
                    add_product(data);
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddProduct;
