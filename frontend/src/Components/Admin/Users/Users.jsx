import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingBox from "../../Users/LoadingBox/loadingBox";
import MessageBox from "../../Users/MessageBox/messageBox";
import { JournalRichtext, Trash, XCircle } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

function Users() {
  const dispatch = useDispatch();

  const [users, setUsers] = useState(false);
  const [viewUser, setViewUser] = useState(false);
  const [userPopup, setUserPopup] = useState(false);
  const [error, setError] = useState(false);

  const users_list = async () => {
    try {
      const url = "/api/users/admin/total&users";
      const data = await axios.post(url);
      setUsers(data.data);
    } catch (error) {
      
      setError(error.message);
    }
  };

  useEffect(() => {
    users_list();
  }, []);

  const removeUser = (id) => {
    const userId = {
      id: id,
    };
    let url = "/api/users/delete";

    axios.post(url, userId).then(() => dispatch(users_list()));
  };


  const view_toggle = async(id) =>{
    const data = await axios.get(`/api/users/${id}`)
    setViewUser(data.data)
    setUserPopup(true)
  };

  const close_toggle = ()=>{
    setUserPopup(false)
  }


  return (
    <div>
      {!users ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error.message}</MessageBox>
      ) : (
        <section className="adminProductsSection">
          <div className="container">
            <div className="adminPanelOverviewTitleDiv">
              <p className="adminPanelOverviewTitle">Users</p>
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
                  Users
                </span>
              </p>
            </div>
          {userPopup && (
            <section className="addDepartmentSection">
            <div className="addDepartmentContainer">
              <form action="">
                <XCircle
                  className="addNewDepartmentTitleIcon"
                  onClick={close_toggle}
                />
                <p className="addNewAddressText addNewDepartmentTitle">
                  User Detials
                </p>
                <label htmlFor="" className="addProductInputLabel">
                  Name : {viewUser.name}
                </label>
                
                <br />
                <br />
                <label htmlFor="" className="addProductInputLabel">
                  Email : {viewUser.email}
                </label>
                <br />
                <br />
                <label htmlFor="" className="addProductInputLabel">
                  ID : {viewUser._id}
                </label>
                <br />
                <br />
                <label htmlFor="" className="addProductInputLabel">
                  Created At : {viewUser.createdAt}
                </label>
                <br />
                <br />
                <label htmlFor="" className="addProductInputLabel">
                  Updated At : {viewUser.updatedAt}
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
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">ID</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user._id}</td>
                      <td>{user.createdAt}</td>
                      <td>
                        <button
                          className="btn btn-secondary btn-product-option btn-edit product-btn"
                          onClick={() => {
                            view_toggle(user._id);
                          }}
                        >
                          View <JournalRichtext className="productIcon" />
                        </button>
                        <button
                          className="btn btn-danger btn-delete product-btn"
                          onClick={() => {
                            alert("Do you intend to delete?");
                            removeUser(user._id);
                          }}
                        >
                          Remove <Trash className="productIcon" />
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

export default Users;
