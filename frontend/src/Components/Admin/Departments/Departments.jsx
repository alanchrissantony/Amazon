import React, { useEffect, useState } from "react";
import "./Departments.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoadingBox from "../../Users/LoadingBox/loadingBox";
import MessageBox from "../../Users/MessageBox/messageBox";
import { Plus, Trash, XCircle, PencilSquare } from "react-bootstrap-icons";
import axios from "axios";

function Departments() {
  const dispatch = useDispatch();

  const [departments, setDepartments] = useState(false);
  const [error, setError] = useState(false);
  const [addPopup, setAddPopup] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editImage, setEditImage] = useState("");

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
      
      setError(error.message);
    }
  };

  useEffect(() => {
    department_list();
  }, []);

  const add_department = (data) => {
    const url = "/api/departments/add";
    axios.post(url, data)
    close_add_toggle()
      dispatch(department_list());
  };

  const removeDepartment = async(id) => {
    const departmentId = {
      id: id,
    };
    let url = "/api/departments/delete";

    await axios.post(url, departmentId);
    dispatch(department_list())
  };

  const add_toggle = () => {
    setAddPopup(true);
  };

  const close_add_toggle = () => {
    setAddPopup(false);
  };

  const view_toggle = async (id) => {
    const data = await axios.post(`/api/departments/${id}`);
    setEdit(data.data);
    setEditPopup(true);
  };



  const close_toggle = () => {
    setEditPopup(false);
  };

  const save_edit = async(data) =>{
    let url = "/api/departments/edit"
    await axios.post(url, data)
    close_toggle()
    dispatch(department_list())
  }

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
              <p className="adminPanelOverviewTitle">Departments</p>
            </div>
            <div className="adminPanelOverviewSubTitleDiv">
              <p className="adminPanelOverviewSubTitleText">
                <Link to="/admin" style={{ textDecoration: "none" }}>
                  <span className="adminPanelOverviewSubDashboardTitle">
                    Dashboard
                  </span>
                </Link>
                {">"}
                <Link to="/admin/products" style={{ textDecoration: "none" }}>
                  <span className="adminPanelOverviewSubAmazonDashboardTitle">
                    Products
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
                        e.preventDefault()
                        add_department(data);
                      }}
                    >
                      Add
                    </button>
                  </form>
                </div>
              </section>
            )}
            {editPopup && (
              <section className="addDepartmentSection">
                <div className="addDepartmentContainer">
                  <form action="">
                    <XCircle
                      className="addNewDepartmentTitleIcon"
                      onClick={close_toggle}
                    />
                    <p className="addNewAddressText addNewDepartmentTitle">
                      Edit department
                    </p>
                    <label htmlFor="" className="addProductInputLabel">
                      Title
                    </label>
                    <br />
                    <input
                      type="text"
                      className="inputSpace"
                      placeholder="Department title"
                      defaultValue={edit.name}
                      onChange={(e) => {
                        setEditTitle(e.target.value);
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
                      defaultValue={edit.image}
                      onChange={(e) => {
                        setEditImage(e.target.value);
                      }}
                    />
                    <br />
                    <br />
                    <button
                      className="btn btn-warning btn-addNewDepartment"
                      onClick={(e) => {
                        e.preventDefault()
                        const editedData = {
                          
                              _id: edit._id,
                              name: editTitle,
                              image: editImage,

                        };
                        save_edit(editedData);
                      }}
                    >
                      Save
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
                          className="btn btn-secondary btn-product-option btn-edit product-btn"
                          onClick={() => {
                            view_toggle(department._id)
                          }}
                        >
                          Edit <PencilSquare className="productIcon" />
                        </button>
                        <button
                          className="btn btn-danger btn-delete"
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
