



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

import { ADMIN_TOTAL_USERS_LIST_FAIL, ADMIN_TOTAL_USERS_LIST_REQUEST, ADMIN_TOTAL_USERS_LIST_SUCCESS, ORDER_TOTAL_ADMIN_LIST_FAIL, ORDER_TOTAL_ADMIN_LIST_REQUEST, ORDER_TOTAL_ADMIN_LIST_SUCCESS } from "../constants/adminConstants";


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

export const adminTotalListUserReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_TOTAL_USERS_LIST_REQUEST:
            return { loading: true };
        case ADMIN_TOTAL_USERS_LIST_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case ADMIN_TOTAL_USERS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
