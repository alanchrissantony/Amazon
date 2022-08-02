import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import LoadingBox from "../../Users/LoadingBox/loadingBox";
import MessageBox from "../../Users/MessageBox/messageBox";
import { JournalRichtext, Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState(false);
  const [error, setError] = useState(false);

  const users_list = async () => {
    try {
      const url = "/api/users/admin/total&users";
      const data = await axios.post(url);
      setUsers(data.data);
    } catch (error) {
      console.log(error.message);
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
                            navigate(`/admin/editProduct/${user._id}`);
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
