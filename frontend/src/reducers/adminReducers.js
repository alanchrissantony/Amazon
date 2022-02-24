
import { ORDER_TOTAL_ADMIN_LIST_FAIL, ORDER_TOTAL_ADMIN_LIST_REQUEST, ORDER_TOTAL_ADMIN_LIST_SUCCESS } from "../constants/orderConstants";


// export const adminSigninReducer = (state = {}, action) => {
//     switch (action.type) {
//         case ADMIN_SIGNIN_REQUEST:
//             return { loading: true };
//         case ADMIN_SIGNIN_SUCCESS:
//             return { loading: false, adminInfo: action.payload };
//         case ADMIN_SIGNIN_FAIL:
//             return { loading: false, error: action.payload };
//         case ADMIN_SIGNOUT:
//             return {};
//         default:
//             return state;
//     }
// };


export const adminTotalListOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_TOTAL_ADMIN_LIST_REQUEST:
            return { loading: true };
        case ORDER_TOTAL_ADMIN_LIST_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case ORDER_TOTAL_ADMIN_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};