import React, { useEffect, useState } from "react";
import "./Departments.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoadingBox from "../../Users/LoadingBox/loadingBox";
import MessageBox from "../../Users/MessageBox/messageBox";
import { Plus, Trash, XCircle } from "react-bootstrap-icons";
import axios from "axios";

function Departments() {
  const dispatch = useDispatch();


  const [departments, setDepartments] = useState(false);
  const [error, setError] = useState(false);
  const [addPopup, setAddPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const data = {
    department: [
      {
        name: title,
        image: image,
      },
    ],
  };

  const department_list = async () => {
    try {
      const url = "/api/departments";
      const { data } = await axios.post(url);
      setDepartments(data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    department_list();
  }, []);

  const add_department = (data) => {
    const url = "/api/departments/add";
    axios
      .post(url, data)
      .then(() => dispatch(add_toggle()))
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeDepartment = (id) => {
    const departmentId = {
      id: id,
    };
    let url = "/api/departments/delete";

    axios.post(url, departmentId).then(() => dispatch(department_list()));
  };

  const add_toggle = () => {
    setAddPopup(!addPopup);
  };

  

  return (
    <div>
      {!departments ? (
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
                  Departments
                </span>
              </p>
            </div>
            <div className="productAddBtnDiv">
              <button
                className="btn btn-success product-btn"
                onClick={add_toggle}
              >
                Add Department <Plus className="productIcon" />
              </button>
            </div>
            {addPopup && (
              <section className="addDepartmentSection">
                <div className="addDepartmentContainer">
                  <form action="">
                    <XCircle
                      className="addNewDepartmentTitleIcon"
                      onClick={add_toggle}
                    />
                    <p className="addNewAddressText addNewDepartmentTitle">
                      Add a new department{" "}
                    </p>
                    <label htmlFor="" className="addProductInputLabel">
                      Title
                    </label>
                    <br />
                    <input
                      type="text"
                      className="inputSpace"
                      placeholder="Department title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <br />
                    <br />
                    <label htmlFor="" className="addProductInputLabel">
                      Image
                    </label>
                    <img
                      src={image}
                      style={{
                        height: "8.5rem",
                        width: "auto",
                        marginLeft: "1rem",
                      }}
                      alt=""
                    />
                    <br />
                    <input
                      type="text"
                      className="inputSpace"
                      placeholder="Image URL"
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                    />
                    <br />
                    <br />
                    <button
                      className="btn btn-primary btn-addNewDepartment"
                      onClick={(e) => {
                        add_department(data);
                      }}
                    >
                      Add
                    </button>
                  </form>
                </div>
              </section>
            )}
            
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">NO</th>
                  <th scope="col">Products</th>
                  <th scope="col">Image</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{department.name}</td>
                      <td>
                        <img
                          src={department.image}
                          style={{ height: "5rem", width: "auto" }}
                          alt=""
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            alert("Do you intend to delete?");
                            removeDepartment(department._id);
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

export default Departments;
