import Axios from "axios";
import { ADMIN_TOTAL_USERS_LIST_FAIL, ADMIN_TOTAL_USERS_LIST_REQUEST, ADMIN_TOTAL_USERS_LIST_SUCCESS, ORDER_TOTAL_ADMIN_LIST_FAIL, ORDER_TOTAL_ADMIN_LIST_REQUEST, ORDER_TOTAL_ADMIN_LIST_SUCCESS } from "../constants/adminConstants";

export const adminTotalListOrder = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_TOTAL_ADMIN_LIST_REQUEST });
    try {
      const { data } = await Axios.get('/api/orders/admin/total&orders');
      dispatch({ type: ORDER_TOTAL_ADMIN_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_TOTAL_ADMIN_LIST_FAIL, payload: message });
    }
  };

  export const adminTotalListUsers = () => async (dispatch, getState) => {
    dispatch({ type: ADMIN_TOTAL_USERS_LIST_REQUEST });
    try {
      const { data } = await Axios.get('/api/users/admin/total&users');
      dispatch({ type: ADMIN_TOTAL_USERS_LIST_SUCCESS, payload: data });
      localStorage.setItem("userList", JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ADMIN_TOTAL_USERS_LIST_FAIL, payload: message });
    }
  };